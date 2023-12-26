package com.wushuangtech.bean;

public enum LogEvent {
    CHANNEL_TOKEN_AUTH,
    CHANNEL_TOKEN_EXPIRED,
    CHANNEL_RENEW_TOKEN,
    CHANNEL_MEDIA_RELAY2,
    CHANNEL_MEDIA_RELAY_STATE2,
    AUDIO_LOCAL_START_SEND,
    AUDIO_LOCAL_STOP_SEND,
    AUDIO_REMOTE_FIRST_FRAME_DECODED,
    VIDEO_LOCAL_ENC_PARAMS,
    VIDEO_LOCAL_UPSTREAM_STUCK,
    VIDEO_LOCAL_DOWNSTREAM_STUCK,
    VIDEO_REMOTE_FIRST_FRAME_DECODED,
    VIDEO_REMOTE_FIRST_FRAME_DRAN,
    MEDIA_RELAY_JOIN
}
