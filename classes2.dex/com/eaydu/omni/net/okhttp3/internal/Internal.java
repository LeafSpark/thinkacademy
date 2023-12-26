package com.eaydu.omni.net.okhttp3.internal;

import com.eaydu.omni.net.okhttp3.Address;
import com.eaydu.omni.net.okhttp3.Call;
import com.eaydu.omni.net.okhttp3.ConnectionPool;
import com.eaydu.omni.net.okhttp3.ConnectionSpec;
import com.eaydu.omni.net.okhttp3.Headers;
import com.eaydu.omni.net.okhttp3.OkHttpClient;
import com.eaydu.omni.net.okhttp3.Request;
import com.eaydu.omni.net.okhttp3.Response;
import com.eaydu.omni.net.okhttp3.Route;
import com.eaydu.omni.net.okhttp3.internal.cache.InternalCache;
import com.eaydu.omni.net.okhttp3.internal.connection.RealConnection;
import com.eaydu.omni.net.okhttp3.internal.connection.RouteDatabase;
import com.eaydu.omni.net.okhttp3.internal.connection.StreamAllocation;
import java.net.Socket;
import javax.net.ssl.SSLSocket;

public abstract class Internal {
    public static Internal instance;

    public abstract void addLenient(Headers.Builder builder, String str);

    public abstract void addLenient(Headers.Builder builder, String str, String str2);

    public abstract void apply(ConnectionSpec connectionSpec, SSLSocket sSLSocket, boolean z);

    public abstract int code(Response.Builder builder);

    public abstract boolean connectionBecameIdle(ConnectionPool connectionPool, RealConnection realConnection);

    public abstract Socket deduplicate(ConnectionPool connectionPool, Address address, StreamAllocation streamAllocation);

    public abstract boolean equalsNonHost(Address address, Address address2);

    public abstract RealConnection get(ConnectionPool connectionPool, Address address, StreamAllocation streamAllocation, Route route);

    public abstract boolean isInvalidHttpUrlHost(IllegalArgumentException illegalArgumentException);

    public abstract Call newWebSocketCall(OkHttpClient okHttpClient, Request request);

    public abstract void put(ConnectionPool connectionPool, RealConnection realConnection);

    public abstract RouteDatabase routeDatabase(ConnectionPool connectionPool);

    public abstract void setCache(OkHttpClient.Builder builder, InternalCache internalCache);

    public abstract StreamAllocation streamAllocation(Call call);

    public static void initializeInstanceForTests() {
        new OkHttpClient();
    }
}
