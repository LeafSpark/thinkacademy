package com.tal.app.thinkacademy.lib.util;

import android.util.Log;
import com.bonree.sdk.agent.engine.external.JSONArrayInstrumentation;
import com.bonree.sdk.agent.engine.external.JSONObjectInstrumentation;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public final class JsonUtils {
    private static final byte TYPE_BOOLEAN = 0;
    private static final byte TYPE_DOUBLE = 3;
    private static final byte TYPE_INT = 1;
    private static final byte TYPE_JSON_ARRAY = 6;
    private static final byte TYPE_JSON_OBJECT = 5;
    private static final byte TYPE_LONG = 2;
    private static final byte TYPE_STRING = 4;

    private JsonUtils() {
        throw new UnsupportedOperationException("u can't instantiate me...");
    }

    public static boolean getBoolean(JSONObject jSONObject, String str) {
        return getBoolean(jSONObject, str, false);
    }

    public static boolean getBoolean(JSONObject jSONObject, String str, boolean z) {
        return ((Boolean) getValueByType(jSONObject, str, Boolean.valueOf(z), (byte) TYPE_BOOLEAN)).booleanValue();
    }

    public static boolean getBoolean(String str, String str2) {
        return getBoolean(str, str2, false);
    }

    public static boolean getBoolean(String str, String str2, boolean z) {
        return ((Boolean) getValueByType(str, str2, Boolean.valueOf(z), (byte) TYPE_BOOLEAN)).booleanValue();
    }

    public static int getInt(JSONObject jSONObject, String str) {
        return getInt(jSONObject, str, -1);
    }

    public static int getInt(JSONObject jSONObject, String str, int i) {
        return ((Integer) getValueByType(jSONObject, str, Integer.valueOf(i), (byte) TYPE_INT)).intValue();
    }

    public static int getInt(String str, String str2) {
        return getInt(str, str2, -1);
    }

    public static int getInt(String str, String str2, int i) {
        return ((Integer) getValueByType(str, str2, Integer.valueOf(i), (byte) TYPE_INT)).intValue();
    }

    public static long getLong(JSONObject jSONObject, String str) {
        return getLong(jSONObject, str, -1);
    }

    public static long getLong(JSONObject jSONObject, String str, long j) {
        return ((Long) getValueByType(jSONObject, str, Long.valueOf(j), (byte) TYPE_LONG)).longValue();
    }

    public static long getLong(String str, String str2) {
        return getLong(str, str2, -1);
    }

    public static long getLong(String str, String str2, long j) {
        return ((Long) getValueByType(str, str2, Long.valueOf(j), (byte) TYPE_LONG)).longValue();
    }

    public static double getDouble(JSONObject jSONObject, String str) {
        return getDouble(jSONObject, str, -1.0d);
    }

    public static double getDouble(JSONObject jSONObject, String str, double d) {
        return ((Double) getValueByType(jSONObject, str, Double.valueOf(d), (byte) TYPE_DOUBLE)).doubleValue();
    }

    public static double getDouble(String str, String str2) {
        return getDouble(str, str2, -1.0d);
    }

    public static double getDouble(String str, String str2, double d) {
        return ((Double) getValueByType(str, str2, Double.valueOf(d), (byte) TYPE_DOUBLE)).doubleValue();
    }

    public static String getString(JSONObject jSONObject, String str) {
        return getString(jSONObject, str, "");
    }

    public static String getString(JSONObject jSONObject, String str, String str2) {
        return (String) getValueByType(jSONObject, str, str2, (byte) TYPE_STRING);
    }

    public static String getString(String str, String str2) {
        return getString(str, str2, "");
    }

    public static String getString(String str, String str2, String str3) {
        return (String) getValueByType(str, str2, str3, (byte) TYPE_STRING);
    }

    public static JSONObject getJSONObject(JSONObject jSONObject, String str, JSONObject jSONObject2) {
        return (JSONObject) getValueByType(jSONObject, str, jSONObject2, (byte) TYPE_JSON_OBJECT);
    }

    public static JSONObject getJSONObject(String str, String str2, JSONObject jSONObject) {
        return (JSONObject) getValueByType(str, str2, jSONObject, (byte) TYPE_JSON_OBJECT);
    }

    public static JSONArray getJSONArray(JSONObject jSONObject, String str, JSONArray jSONArray) {
        return (JSONArray) getValueByType(jSONObject, str, jSONArray, (byte) TYPE_JSON_ARRAY);
    }

    public static JSONArray getJSONArray(String str, String str2, JSONArray jSONArray) {
        return (JSONArray) getValueByType(str, str2, jSONArray, (byte) TYPE_JSON_ARRAY);
    }

    private static <T> T getValueByType(JSONObject jSONObject, String str, T t, byte b) {
        if (!(jSONObject == null || str == null || str.length() == 0)) {
            if (b == 0) {
                try {
                    return Boolean.valueOf(jSONObject.getBoolean(str));
                } catch (JSONException e) {
                    Log.e("JsonUtils", "getValueByType: ", e);
                }
            } else if (b == 1) {
                return Integer.valueOf(jSONObject.getInt(str));
            } else {
                if (b == 2) {
                    return Long.valueOf(jSONObject.getLong(str));
                }
                if (b == 3) {
                    return Double.valueOf(jSONObject.getDouble(str));
                }
                if (b == 4) {
                    return jSONObject.getString(str);
                }
                if (b == 5) {
                    return jSONObject.getJSONObject(str);
                }
                if (b == 6) {
                    return jSONObject.getJSONArray(str);
                }
            }
        }
        return t;
    }

    private static <T> T getValueByType(String str, String str2, T t, byte b) {
        if (!(str == null || str.length() == 0 || str2 == null || str2.length() == 0)) {
            try {
                return getValueByType(new JSONObject(str), str2, t, b);
            } catch (JSONException e) {
                Log.e("JsonUtils", "getValueByType: ", e);
            }
        }
        return t;
    }

    public static String formatJson(String str) {
        return formatJson(str, 4);
    }

    public static String formatJson(String str, int i) {
        int i2 = 0;
        try {
            int length = str.length();
            while (i2 < length) {
                char charAt = str.charAt(i2);
                if (charAt == '{') {
                    JSONObject jSONObject = new JSONObject(str);
                    return !(jSONObject instanceof JSONObject) ? jSONObject.toString(i) : JSONObjectInstrumentation.toString(jSONObject, i);
                } else if (charAt == '[') {
                    JSONArray jSONArray = new JSONArray(str);
                    return !(jSONArray instanceof JSONArray) ? jSONArray.toString(i) : JSONArrayInstrumentation.toString(jSONArray, i);
                } else if (!Character.isWhitespace(charAt)) {
                    return str;
                } else {
                    i2++;
                }
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return str;
    }
}
