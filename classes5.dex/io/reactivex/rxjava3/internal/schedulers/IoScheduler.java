package io.reactivex.rxjava3.internal.schedulers;

import io.reactivex.rxjava3.core.Scheduler;
import io.reactivex.rxjava3.disposables.CompositeDisposable;
import io.reactivex.rxjava3.disposables.Disposable;
import io.reactivex.rxjava3.internal.disposables.EmptyDisposable;
import java.util.Iterator;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicReference;

public final class IoScheduler extends Scheduler {
    static final RxThreadFactory EVICTOR_THREAD_FACTORY;
    private static final String EVICTOR_THREAD_NAME_PREFIX = "RxCachedWorkerPoolEvictor";
    private static final long KEEP_ALIVE_TIME = Long.getLong(KEY_KEEP_ALIVE_TIME, 60).longValue();
    public static final long KEEP_ALIVE_TIME_DEFAULT = 60;
    private static final TimeUnit KEEP_ALIVE_UNIT = TimeUnit.SECONDS;
    private static final String KEY_IO_PRIORITY = "rx3.io-priority";
    private static final String KEY_KEEP_ALIVE_TIME = "rx3.io-keep-alive-time";
    static final CachedWorkerPool NONE;
    static final ThreadWorker SHUTDOWN_THREAD_WORKER;
    static final RxThreadFactory WORKER_THREAD_FACTORY;
    private static final String WORKER_THREAD_NAME_PREFIX = "RxCachedThreadScheduler";
    final AtomicReference<CachedWorkerPool> pool;
    final ThreadFactory threadFactory;

    static {
        ThreadWorker threadWorker = new ThreadWorker(new RxThreadFactory("RxCachedThreadSchedulerShutdown"));
        SHUTDOWN_THREAD_WORKER = threadWorker;
        threadWorker.dispose();
        int max = Math.max(1, Math.min(10, Integer.getInteger(KEY_IO_PRIORITY, 5).intValue()));
        RxThreadFactory rxThreadFactory = new RxThreadFactory(WORKER_THREAD_NAME_PREFIX, max);
        WORKER_THREAD_FACTORY = rxThreadFactory;
        EVICTOR_THREAD_FACTORY = new RxThreadFactory(EVICTOR_THREAD_NAME_PREFIX, max);
        CachedWorkerPool cachedWorkerPool = new CachedWorkerPool(0, (TimeUnit) null, rxThreadFactory);
        NONE = cachedWorkerPool;
        cachedWorkerPool.shutdown();
    }

    static final class CachedWorkerPool implements Runnable {
        final CompositeDisposable allWorkers;
        private final ScheduledExecutorService evictorService;
        private final Future<?> evictorTask;
        private final ConcurrentLinkedQueue<ThreadWorker> expiringWorkerQueue;
        private final long keepAliveTime;
        private final ThreadFactory threadFactory;

        CachedWorkerPool(long j, TimeUnit timeUnit, ThreadFactory threadFactory2) {
            ScheduledFuture<?> scheduledFuture;
            long nanos = timeUnit != null ? timeUnit.toNanos(j) : 0;
            this.keepAliveTime = nanos;
            this.expiringWorkerQueue = new ConcurrentLinkedQueue<>();
            this.allWorkers = new CompositeDisposable();
            this.threadFactory = threadFactory2;
            ScheduledExecutorService scheduledExecutorService = null;
            if (timeUnit != null) {
                scheduledExecutorService = Executors.newScheduledThreadPool(1, IoScheduler.EVICTOR_THREAD_FACTORY);
                scheduledFuture = scheduledExecutorService.scheduleWithFixedDelay(this, nanos, nanos, TimeUnit.NANOSECONDS);
            } else {
                scheduledFuture = null;
            }
            this.evictorService = scheduledExecutorService;
            this.evictorTask = scheduledFuture;
        }

        public void run() {
            evictExpiredWorkers(this.expiringWorkerQueue, this.allWorkers);
        }

        /* access modifiers changed from: package-private */
        public ThreadWorker get() {
            if (this.allWorkers.isDisposed()) {
                return IoScheduler.SHUTDOWN_THREAD_WORKER;
            }
            while (!this.expiringWorkerQueue.isEmpty()) {
                ThreadWorker poll = this.expiringWorkerQueue.poll();
                if (poll != null) {
                    return poll;
                }
            }
            ThreadWorker threadWorker = new ThreadWorker(this.threadFactory);
            this.allWorkers.add(threadWorker);
            return threadWorker;
        }

        /* access modifiers changed from: package-private */
        public void release(ThreadWorker threadWorker) {
            threadWorker.setExpirationTime(now() + this.keepAliveTime);
            this.expiringWorkerQueue.offer(threadWorker);
        }

        static void evictExpiredWorkers(ConcurrentLinkedQueue<ThreadWorker> concurrentLinkedQueue, CompositeDisposable compositeDisposable) {
            if (!concurrentLinkedQueue.isEmpty()) {
                long now = now();
                Iterator<ThreadWorker> it = concurrentLinkedQueue.iterator();
                while (it.hasNext()) {
                    ThreadWorker next = it.next();
                    if (next.getExpirationTime() > now) {
                        return;
                    }
                    if (concurrentLinkedQueue.remove(next)) {
                        compositeDisposable.remove(next);
                    }
                }
            }
        }

        static long now() {
            return System.nanoTime();
        }

        /* access modifiers changed from: package-private */
        public void shutdown() {
            this.allWorkers.dispose();
            Future<?> future = this.evictorTask;
            if (future != null) {
                future.cancel(true);
            }
            ScheduledExecutorService scheduledExecutorService = this.evictorService;
            if (scheduledExecutorService != null) {
                scheduledExecutorService.shutdownNow();
            }
        }
    }

    public IoScheduler() {
        this(WORKER_THREAD_FACTORY);
    }

    public IoScheduler(ThreadFactory threadFactory2) {
        this.threadFactory = threadFactory2;
        this.pool = new AtomicReference<>(NONE);
        start();
    }

    public void start() {
        CachedWorkerPool cachedWorkerPool = new CachedWorkerPool(KEEP_ALIVE_TIME, KEEP_ALIVE_UNIT, this.threadFactory);
        if (!this.pool.compareAndSet(NONE, cachedWorkerPool)) {
            cachedWorkerPool.shutdown();
        }
    }

    public void shutdown() {
        AtomicReference<CachedWorkerPool> atomicReference = this.pool;
        CachedWorkerPool cachedWorkerPool = NONE;
        CachedWorkerPool andSet = atomicReference.getAndSet(cachedWorkerPool);
        if (andSet != cachedWorkerPool) {
            andSet.shutdown();
        }
    }

    public Scheduler.Worker createWorker() {
        return new EventLoopWorker(this.pool.get());
    }

    public int size() {
        return this.pool.get().allWorkers.size();
    }

    static final class EventLoopWorker extends Scheduler.Worker {
        final AtomicBoolean once = new AtomicBoolean();
        private final CachedWorkerPool pool;
        private final CompositeDisposable tasks;
        private final ThreadWorker threadWorker;

        EventLoopWorker(CachedWorkerPool cachedWorkerPool) {
            this.pool = cachedWorkerPool;
            this.tasks = new CompositeDisposable();
            this.threadWorker = cachedWorkerPool.get();
        }

        public void dispose() {
            if (this.once.compareAndSet(false, true)) {
                this.tasks.dispose();
                this.pool.release(this.threadWorker);
            }
        }

        public boolean isDisposed() {
            return this.once.get();
        }

        public Disposable schedule(Runnable runnable, long j, TimeUnit timeUnit) {
            if (this.tasks.isDisposed()) {
                return EmptyDisposable.INSTANCE;
            }
            return this.threadWorker.scheduleActual(runnable, j, timeUnit, this.tasks);
        }
    }

    static final class ThreadWorker extends NewThreadWorker {
        long expirationTime = 0;

        ThreadWorker(ThreadFactory threadFactory) {
            super(threadFactory);
        }

        public long getExpirationTime() {
            return this.expirationTime;
        }

        public void setExpirationTime(long j) {
            this.expirationTime = j;
        }
    }
}