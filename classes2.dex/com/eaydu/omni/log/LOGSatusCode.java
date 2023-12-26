package com.eaydu.omni.log;

public enum LOGSatusCode {
    LOG_SCHEDULER(0),
    LOG_TERMINAL(320),
    LOG_JOIN_ROOM(320),
    LOG_LEAVE_ROOM(321),
    LOG_START_PUSH_MEDIA(322),
    LOG_END_PUSH_MEDIA(323),
    LOG_START_REMOTE_MEDIA(324),
    LOG_END_REMOTE_MEDIA(325),
    LOG_REPORT(344),
    LOG_REPORT_LOCAL(350),
    LOG_REPORT_REMOTE(351),
    LOG_NETWORK_LOST(361),
    LOG_NETWORK_RECONNECT(362),
    LOG_JITTER_LOCAL_REPORT(340),
    LOG_JITTER_REMOTE_REPORT(341),
    LOG_JITTER_RENDER_REPORT(342),
    LOG_JITTER_RENDER_START_REPORT(345),
    LOG_JITTER_RENDER_END_REPORT(346),
    LOG_AUDIO_JITTER_RENDER_START_REPORT(347),
    LOG_AUDIO_JITTER_RENDER_END_REPORT(348),
    LOG_RTMP_STATE(370),
    LOG_COMMON_ERROR(371),
    LOG_DEVICE_INFO(372),
    LOG_IMPORTANT_EVENTS(373),
    LOG_FAIL_REPORT(920),
    LOG_APP_STATE(390);
    
    public final int value;

    private LOGSatusCode(int i) {
        this.value = i;
    }
}