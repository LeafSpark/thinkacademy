package com.eaydu.omni.logger;

import android.os.HandlerThread;
import com.eaydu.omni.logger.DiskLogStrategy;
import com.eaydu.omni.utils.FilePathUtils;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

public class CsvFormatStrategy implements FormatStrategy {
    private static final String NEW_LINE = System.getProperty("line.separator");
    private static final String NEW_LINE_REPLACEMENT = " <br> ";
    private static final String SEPARATOR = ",";
    private final Date date;
    private final SimpleDateFormat dateFormat;
    private final LogStrategy logStrategy;
    private final String tag;

    private CsvFormatStrategy(Builder builder) {
        Utils.checkNotNull(builder);
        this.date = builder.date;
        this.dateFormat = builder.dateFormat;
        this.logStrategy = builder.logStrategy;
        this.tag = builder.tag;
    }

    public static Builder newBuilder() {
        return new Builder();
    }

    public void log(int i, String str, String str2) {
        Utils.checkNotNull(str2);
        String formatTag = formatTag(str);
        this.date.setTime(System.currentTimeMillis());
        StringBuilder sb = new StringBuilder();
        sb.append(Long.toString(this.date.getTime()));
        sb.append(SEPARATOR);
        sb.append(this.dateFormat.format(this.date));
        sb.append(SEPARATOR);
        sb.append(Utils.logLevel(i));
        sb.append(SEPARATOR);
        sb.append(formatTag);
        String str3 = NEW_LINE;
        if (str2.contains(str3)) {
            str2 = str2.replaceAll(str3, NEW_LINE_REPLACEMENT);
        }
        sb.append(SEPARATOR);
        sb.append(str2);
        sb.append(str3);
        this.logStrategy.log(i, formatTag, sb.toString());
    }

    private String formatTag(String str) {
        if (Utils.isEmpty(str) || Utils.equals(this.tag, str)) {
            return this.tag;
        }
        return this.tag + "-" + str;
    }

    public static final class Builder {
        private static final int LOG_MAX_BYTES = 5242880;
        private static final int LOG_MAX_COUNT = 6;
        Date date;
        SimpleDateFormat dateFormat;
        LogStrategy logStrategy;
        String tag;

        private Builder() {
            this.tag = "RTC_LOGGER";
        }

        public Builder date(Date date2) {
            this.date = date2;
            return this;
        }

        public Builder dateFormat(SimpleDateFormat simpleDateFormat) {
            this.dateFormat = simpleDateFormat;
            return this;
        }

        public Builder logStrategy(LogStrategy logStrategy2) {
            this.logStrategy = logStrategy2;
            return this;
        }

        public Builder tag(String str) {
            this.tag = str;
            return this;
        }

        public CsvFormatStrategy build() {
            if (this.date == null) {
                this.date = new Date();
            }
            if (this.dateFormat == null) {
                this.dateFormat = new SimpleDateFormat("yyyy.MM.dd HH:mm:ss.SSS", Locale.UK);
            }
            if (this.logStrategy == null) {
                HandlerThread handlerThread = new HandlerThread("AndroidRTCLogger.");
                handlerThread.start();
                this.logStrategy = new DiskLogStrategy(new DiskLogStrategy.WriteHandler(handlerThread.getLooper(), FilePathUtils.getFileFolderPath(), LOG_MAX_BYTES, 6));
            }
            return new CsvFormatStrategy(this);
        }
    }
}
