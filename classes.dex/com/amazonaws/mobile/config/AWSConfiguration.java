package com.amazonaws.mobile.config;

import android.content.Context;
import com.bonree.sdk.agent.engine.external.JSONObjectInstrumentation;
import java.util.Scanner;
import org.json.JSONException;
import org.json.JSONObject;

public class AWSConfiguration {
    private static final String DEFAULT = "Default";
    private static final String DEFAULT_IDENTIFIER = "awsconfiguration";
    private String configName;
    private JSONObject mJSONObject;

    public AWSConfiguration(JSONObject jSONObject) {
        this(jSONObject, DEFAULT);
    }

    public AWSConfiguration(JSONObject jSONObject, String str) {
        if (jSONObject != null) {
            this.configName = str;
            this.mJSONObject = jSONObject;
            return;
        }
        throw new IllegalArgumentException("JSONObject cannot be null.");
    }

    public AWSConfiguration(Context context) {
        this(context, getConfigResourceId(context));
    }

    private static int getConfigResourceId(Context context) {
        try {
            return context.getResources().getIdentifier(DEFAULT_IDENTIFIER, "raw", context.getPackageName());
        } catch (Exception e) {
            throw new RuntimeException("Failed to read awsconfiguration.json please check that it is correctly formed.", e);
        }
    }

    public AWSConfiguration(Context context, int i) {
        this(context, i, DEFAULT);
    }

    public AWSConfiguration(Context context, int i, String str) {
        this.configName = str;
        readInputJson(context, i);
    }

    private void readInputJson(Context context, int i) {
        try {
            Scanner scanner = new Scanner(context.getResources().openRawResource(i));
            StringBuilder sb = new StringBuilder();
            while (scanner.hasNextLine()) {
                sb.append(scanner.nextLine());
            }
            scanner.close();
            this.mJSONObject = new JSONObject(sb.toString());
        } catch (Exception e) {
            throw new RuntimeException("Failed to read awsconfiguration.json please check that it is correctly formed.", e);
        }
    }

    public JSONObject optJsonObject(String str) {
        try {
            JSONObject jSONObject = this.mJSONObject.getJSONObject(str);
            if (jSONObject.has(this.configName)) {
                jSONObject = jSONObject.getJSONObject(this.configName);
            }
            return new JSONObject(!(jSONObject instanceof JSONObject) ? jSONObject.toString() : JSONObjectInstrumentation.toString(jSONObject));
        } catch (JSONException unused) {
            return null;
        }
    }

    public String getUserAgent() {
        try {
            return this.mJSONObject.getString("UserAgent");
        } catch (JSONException unused) {
            return "";
        }
    }

    public String getUserAgentOverride() {
        try {
            return this.mJSONObject.getString("UserAgentOverride");
        } catch (JSONException unused) {
            return null;
        }
    }

    public void setConfiguration(String str) {
        this.configName = str;
    }

    public String getConfiguration() {
        return this.configName;
    }

    public String toString() {
        JSONObject jSONObject = this.mJSONObject;
        return !(jSONObject instanceof JSONObject) ? jSONObject.toString() : JSONObjectInstrumentation.toString(jSONObject);
    }
}