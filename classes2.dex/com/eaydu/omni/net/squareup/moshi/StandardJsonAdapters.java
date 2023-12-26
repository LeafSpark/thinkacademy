package com.eaydu.omni.net.squareup.moshi;

import com.eaydu.omni.net.squareup.moshi.JsonAdapter;
import java.io.IOException;
import java.lang.annotation.Annotation;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

final class StandardJsonAdapters {
    static final JsonAdapter<Boolean> BOOLEAN_JSON_ADAPTER = new JsonAdapter<Boolean>() {
        public String toString() {
            return "JsonAdapter(Boolean)";
        }

        public Boolean fromJson(JsonReader jsonReader) throws IOException {
            return Boolean.valueOf(jsonReader.nextBoolean());
        }

        public void toJson(JsonWriter jsonWriter, Boolean bool) throws IOException {
            jsonWriter.value(bool.booleanValue());
        }
    };
    static final JsonAdapter<Byte> BYTE_JSON_ADAPTER = new JsonAdapter<Byte>() {
        public String toString() {
            return "JsonAdapter(Byte)";
        }

        public Byte fromJson(JsonReader jsonReader) throws IOException {
            return Byte.valueOf((byte) StandardJsonAdapters.rangeCheckNextInt(jsonReader, "a byte", -128, 255));
        }

        public void toJson(JsonWriter jsonWriter, Byte b) throws IOException {
            jsonWriter.value((long) (b.intValue() & 255));
        }
    };
    static final JsonAdapter<Character> CHARACTER_JSON_ADAPTER = new JsonAdapter<Character>() {
        public String toString() {
            return "JsonAdapter(Character)";
        }

        public Character fromJson(JsonReader jsonReader) throws IOException {
            String nextString = jsonReader.nextString();
            if (nextString.length() <= 1) {
                return Character.valueOf(nextString.charAt(0));
            }
            throw new JsonDataException(String.format(StandardJsonAdapters.ERROR_FORMAT, new Object[]{"a char", '\"' + nextString + '\"', jsonReader.getPath()}));
        }

        public void toJson(JsonWriter jsonWriter, Character ch) throws IOException {
            jsonWriter.value(ch.toString());
        }
    };
    static final JsonAdapter<Double> DOUBLE_JSON_ADAPTER = new JsonAdapter<Double>() {
        public String toString() {
            return "JsonAdapter(Double)";
        }

        public Double fromJson(JsonReader jsonReader) throws IOException {
            return Double.valueOf(jsonReader.nextDouble());
        }

        public void toJson(JsonWriter jsonWriter, Double d) throws IOException {
            jsonWriter.value(d.doubleValue());
        }
    };
    private static final String ERROR_FORMAT = "Expected %s but was %s at path %s";
    public static final JsonAdapter.Factory FACTORY = new JsonAdapter.Factory() {
        public JsonAdapter<?> create(Type type, Set<? extends Annotation> set, Moshi moshi) {
            if (!set.isEmpty()) {
                return null;
            }
            if (type == Boolean.TYPE) {
                return StandardJsonAdapters.BOOLEAN_JSON_ADAPTER;
            }
            if (type == Byte.TYPE) {
                return StandardJsonAdapters.BYTE_JSON_ADAPTER;
            }
            if (type == Character.TYPE) {
                return StandardJsonAdapters.CHARACTER_JSON_ADAPTER;
            }
            if (type == Double.TYPE) {
                return StandardJsonAdapters.DOUBLE_JSON_ADAPTER;
            }
            if (type == Float.TYPE) {
                return StandardJsonAdapters.FLOAT_JSON_ADAPTER;
            }
            if (type == Integer.TYPE) {
                return StandardJsonAdapters.INTEGER_JSON_ADAPTER;
            }
            if (type == Long.TYPE) {
                return StandardJsonAdapters.LONG_JSON_ADAPTER;
            }
            if (type == Short.TYPE) {
                return StandardJsonAdapters.SHORT_JSON_ADAPTER;
            }
            if (type == Boolean.class) {
                return StandardJsonAdapters.BOOLEAN_JSON_ADAPTER.nullSafe();
            }
            if (type == Byte.class) {
                return StandardJsonAdapters.BYTE_JSON_ADAPTER.nullSafe();
            }
            if (type == Character.class) {
                return StandardJsonAdapters.CHARACTER_JSON_ADAPTER.nullSafe();
            }
            if (type == Double.class) {
                return StandardJsonAdapters.DOUBLE_JSON_ADAPTER.nullSafe();
            }
            if (type == Float.class) {
                return StandardJsonAdapters.FLOAT_JSON_ADAPTER.nullSafe();
            }
            if (type == Integer.class) {
                return StandardJsonAdapters.INTEGER_JSON_ADAPTER.nullSafe();
            }
            if (type == Long.class) {
                return StandardJsonAdapters.LONG_JSON_ADAPTER.nullSafe();
            }
            if (type == Short.class) {
                return StandardJsonAdapters.SHORT_JSON_ADAPTER.nullSafe();
            }
            if (type == String.class) {
                return StandardJsonAdapters.STRING_JSON_ADAPTER.nullSafe();
            }
            if (type == Object.class) {
                return new ObjectJsonAdapter(moshi).nullSafe();
            }
            Class<?> rawType = Types.getRawType(type);
            if (rawType.isEnum()) {
                return new EnumJsonAdapter(rawType).nullSafe();
            }
            return null;
        }
    };
    static final JsonAdapter<Float> FLOAT_JSON_ADAPTER = new JsonAdapter<Float>() {
        public String toString() {
            return "JsonAdapter(Float)";
        }

        public Float fromJson(JsonReader jsonReader) throws IOException {
            float nextDouble = (float) jsonReader.nextDouble();
            if (jsonReader.isLenient() || !Float.isInfinite(nextDouble)) {
                return Float.valueOf(nextDouble);
            }
            throw new JsonDataException("JSON forbids NaN and infinities: " + nextDouble + " at path " + jsonReader.getPath());
        }

        public void toJson(JsonWriter jsonWriter, Float f) throws IOException {
            Objects.requireNonNull(f);
            jsonWriter.value((Number) f);
        }
    };
    static final JsonAdapter<Integer> INTEGER_JSON_ADAPTER = new JsonAdapter<Integer>() {
        public String toString() {
            return "JsonAdapter(Integer)";
        }

        public Integer fromJson(JsonReader jsonReader) throws IOException {
            return Integer.valueOf(jsonReader.nextInt());
        }

        public void toJson(JsonWriter jsonWriter, Integer num) throws IOException {
            jsonWriter.value((long) num.intValue());
        }
    };
    static final JsonAdapter<Long> LONG_JSON_ADAPTER = new JsonAdapter<Long>() {
        public String toString() {
            return "JsonAdapter(Long)";
        }

        public Long fromJson(JsonReader jsonReader) throws IOException {
            return Long.valueOf(jsonReader.nextLong());
        }

        public void toJson(JsonWriter jsonWriter, Long l) throws IOException {
            jsonWriter.value(l.longValue());
        }
    };
    static final JsonAdapter<Short> SHORT_JSON_ADAPTER = new JsonAdapter<Short>() {
        public String toString() {
            return "JsonAdapter(Short)";
        }

        public Short fromJson(JsonReader jsonReader) throws IOException {
            return Short.valueOf((short) StandardJsonAdapters.rangeCheckNextInt(jsonReader, "a short", -32768, 32767));
        }

        public void toJson(JsonWriter jsonWriter, Short sh) throws IOException {
            jsonWriter.value((long) sh.intValue());
        }
    };
    static final JsonAdapter<String> STRING_JSON_ADAPTER = new JsonAdapter<String>() {
        public String toString() {
            return "JsonAdapter(String)";
        }

        public String fromJson(JsonReader jsonReader) throws IOException {
            return jsonReader.nextString();
        }

        public void toJson(JsonWriter jsonWriter, String str) throws IOException {
            jsonWriter.value(str);
        }
    };

    StandardJsonAdapters() {
    }

    static int rangeCheckNextInt(JsonReader jsonReader, String str, int i, int i2) throws IOException {
        int nextInt = jsonReader.nextInt();
        if (nextInt >= i && nextInt <= i2) {
            return nextInt;
        }
        throw new JsonDataException(String.format(ERROR_FORMAT, new Object[]{str, Integer.valueOf(nextInt), jsonReader.getPath()}));
    }

    static final class EnumJsonAdapter<T extends Enum<T>> extends JsonAdapter<T> {
        private final Class<T> enumType;
        private final Map<String, T> nameConstantMap;
        private final String[] nameStrings;

        public EnumJsonAdapter(Class<T> cls) {
            this.enumType = cls;
            try {
                Enum[] enumArr = (Enum[]) cls.getEnumConstants();
                this.nameConstantMap = new LinkedHashMap();
                this.nameStrings = new String[enumArr.length];
                for (int i = 0; i < enumArr.length; i++) {
                    Enum enumR = enumArr[i];
                    Json json = (Json) cls.getField(enumR.name()).getAnnotation(Json.class);
                    String name = json != null ? json.name() : enumR.name();
                    this.nameConstantMap.put(name, enumR);
                    this.nameStrings[i] = name;
                }
            } catch (NoSuchFieldException e) {
                throw new AssertionError("Missing field in " + cls.getName(), e);
            }
        }

        public T fromJson(JsonReader jsonReader) throws IOException {
            String nextString = jsonReader.nextString();
            T t = (Enum) this.nameConstantMap.get(nextString);
            if (t != null) {
                return t;
            }
            throw new JsonDataException("Expected one of " + this.nameConstantMap.keySet() + " but was " + nextString + " at path " + jsonReader.getPath());
        }

        public void toJson(JsonWriter jsonWriter, T t) throws IOException {
            jsonWriter.value(this.nameStrings[t.ordinal()]);
        }

        public String toString() {
            return "JsonAdapter(" + this.enumType.getName() + ")";
        }
    }

    static final class ObjectJsonAdapter extends JsonAdapter<Object> {
        private final Moshi moshi;

        public String toString() {
            return "JsonAdapter(Object)";
        }

        public ObjectJsonAdapter(Moshi moshi2) {
            this.moshi = moshi2;
        }

        public Object fromJson(JsonReader jsonReader) throws IOException {
            switch (AnonymousClass11.$SwitchMap$com$eaydu$omni$net$squareup$moshi$JsonReader$Token[jsonReader.peek().ordinal()]) {
                case 1:
                    ArrayList arrayList = new ArrayList();
                    jsonReader.beginArray();
                    while (jsonReader.hasNext()) {
                        arrayList.add(fromJson(jsonReader));
                    }
                    jsonReader.endArray();
                    return arrayList;
                case 2:
                    LinkedHashTreeMap linkedHashTreeMap = new LinkedHashTreeMap();
                    jsonReader.beginObject();
                    while (jsonReader.hasNext()) {
                        linkedHashTreeMap.put(jsonReader.nextName(), fromJson(jsonReader));
                    }
                    jsonReader.endObject();
                    return linkedHashTreeMap;
                case 3:
                    return jsonReader.nextString();
                case 4:
                    return Double.valueOf(jsonReader.nextDouble());
                case 5:
                    return Boolean.valueOf(jsonReader.nextBoolean());
                case 6:
                    return jsonReader.nextNull();
                default:
                    throw new IllegalStateException("Expected a value but was " + jsonReader.peek() + " at path " + jsonReader.getPath());
            }
        }

        public void toJson(JsonWriter jsonWriter, Object obj) throws IOException {
            Class<?> cls = obj.getClass();
            if (cls == Object.class) {
                jsonWriter.beginObject();
                jsonWriter.endObject();
                return;
            }
            this.moshi.adapter(toJsonType(cls), Util.NO_ANNOTATIONS).toJson(jsonWriter, obj);
        }

        private Class<?> toJsonType(Class<?> cls) {
            if (Map.class.isAssignableFrom(cls)) {
                return Map.class;
            }
            return Collection.class.isAssignableFrom(cls) ? Collection.class : cls;
        }
    }

    /* renamed from: com.eaydu.omni.net.squareup.moshi.StandardJsonAdapters$11  reason: invalid class name */
    static /* synthetic */ class AnonymousClass11 {
        static final /* synthetic */ int[] $SwitchMap$com$eaydu$omni$net$squareup$moshi$JsonReader$Token;

        /* JADX WARNING: Can't wrap try/catch for region: R(14:0|1|2|3|4|5|6|7|8|9|10|11|12|14) */
        /* JADX WARNING: Failed to process nested try/catch */
        /* JADX WARNING: Missing exception handler attribute for start block: B:11:0x003e */
        /* JADX WARNING: Missing exception handler attribute for start block: B:3:0x0012 */
        /* JADX WARNING: Missing exception handler attribute for start block: B:5:0x001d */
        /* JADX WARNING: Missing exception handler attribute for start block: B:7:0x0028 */
        /* JADX WARNING: Missing exception handler attribute for start block: B:9:0x0033 */
        static {
            /*
                com.eaydu.omni.net.squareup.moshi.JsonReader$Token[] r0 = com.eaydu.omni.net.squareup.moshi.JsonReader.Token.values()
                int r0 = r0.length
                int[] r0 = new int[r0]
                $SwitchMap$com$eaydu$omni$net$squareup$moshi$JsonReader$Token = r0
                com.eaydu.omni.net.squareup.moshi.JsonReader$Token r1 = com.eaydu.omni.net.squareup.moshi.JsonReader.Token.BEGIN_ARRAY     // Catch:{ NoSuchFieldError -> 0x0012 }
                int r1 = r1.ordinal()     // Catch:{ NoSuchFieldError -> 0x0012 }
                r2 = 1
                r0[r1] = r2     // Catch:{ NoSuchFieldError -> 0x0012 }
            L_0x0012:
                int[] r0 = $SwitchMap$com$eaydu$omni$net$squareup$moshi$JsonReader$Token     // Catch:{ NoSuchFieldError -> 0x001d }
                com.eaydu.omni.net.squareup.moshi.JsonReader$Token r1 = com.eaydu.omni.net.squareup.moshi.JsonReader.Token.BEGIN_OBJECT     // Catch:{ NoSuchFieldError -> 0x001d }
                int r1 = r1.ordinal()     // Catch:{ NoSuchFieldError -> 0x001d }
                r2 = 2
                r0[r1] = r2     // Catch:{ NoSuchFieldError -> 0x001d }
            L_0x001d:
                int[] r0 = $SwitchMap$com$eaydu$omni$net$squareup$moshi$JsonReader$Token     // Catch:{ NoSuchFieldError -> 0x0028 }
                com.eaydu.omni.net.squareup.moshi.JsonReader$Token r1 = com.eaydu.omni.net.squareup.moshi.JsonReader.Token.STRING     // Catch:{ NoSuchFieldError -> 0x0028 }
                int r1 = r1.ordinal()     // Catch:{ NoSuchFieldError -> 0x0028 }
                r2 = 3
                r0[r1] = r2     // Catch:{ NoSuchFieldError -> 0x0028 }
            L_0x0028:
                int[] r0 = $SwitchMap$com$eaydu$omni$net$squareup$moshi$JsonReader$Token     // Catch:{ NoSuchFieldError -> 0x0033 }
                com.eaydu.omni.net.squareup.moshi.JsonReader$Token r1 = com.eaydu.omni.net.squareup.moshi.JsonReader.Token.NUMBER     // Catch:{ NoSuchFieldError -> 0x0033 }
                int r1 = r1.ordinal()     // Catch:{ NoSuchFieldError -> 0x0033 }
                r2 = 4
                r0[r1] = r2     // Catch:{ NoSuchFieldError -> 0x0033 }
            L_0x0033:
                int[] r0 = $SwitchMap$com$eaydu$omni$net$squareup$moshi$JsonReader$Token     // Catch:{ NoSuchFieldError -> 0x003e }
                com.eaydu.omni.net.squareup.moshi.JsonReader$Token r1 = com.eaydu.omni.net.squareup.moshi.JsonReader.Token.BOOLEAN     // Catch:{ NoSuchFieldError -> 0x003e }
                int r1 = r1.ordinal()     // Catch:{ NoSuchFieldError -> 0x003e }
                r2 = 5
                r0[r1] = r2     // Catch:{ NoSuchFieldError -> 0x003e }
            L_0x003e:
                int[] r0 = $SwitchMap$com$eaydu$omni$net$squareup$moshi$JsonReader$Token     // Catch:{ NoSuchFieldError -> 0x0049 }
                com.eaydu.omni.net.squareup.moshi.JsonReader$Token r1 = com.eaydu.omni.net.squareup.moshi.JsonReader.Token.NULL     // Catch:{ NoSuchFieldError -> 0x0049 }
                int r1 = r1.ordinal()     // Catch:{ NoSuchFieldError -> 0x0049 }
                r2 = 6
                r0[r1] = r2     // Catch:{ NoSuchFieldError -> 0x0049 }
            L_0x0049:
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: com.eaydu.omni.net.squareup.moshi.StandardJsonAdapters.AnonymousClass11.<clinit>():void");
        }
    }
}
