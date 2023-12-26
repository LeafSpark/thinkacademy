package com.bonree.sdk.common.gson.internal.bind;

import com.bonree.sdk.common.gson.Gson;
import com.bonree.sdk.common.gson.JsonDeserializationContext;
import com.bonree.sdk.common.gson.JsonDeserializer;
import com.bonree.sdk.common.gson.JsonElement;
import com.bonree.sdk.common.gson.JsonParseException;
import com.bonree.sdk.common.gson.JsonSerializationContext;
import com.bonree.sdk.common.gson.JsonSerializer;
import com.bonree.sdk.common.gson.TypeAdapter;
import com.bonree.sdk.common.gson.TypeAdapterFactory;
import com.bonree.sdk.common.gson.internal.C$Gson$Preconditions;
import com.bonree.sdk.common.gson.internal.Streams;
import com.bonree.sdk.common.gson.reflect.TypeToken;
import com.bonree.sdk.common.gson.stream.JsonReader;
import com.bonree.sdk.common.gson.stream.JsonWriter;
import java.io.IOException;
import java.lang.reflect.Type;

public final class TreeTypeAdapter<T> extends TypeAdapter<T> {
    private final TreeTypeAdapter<T>.GsonContextImpl context = new GsonContextImpl();
    private TypeAdapter<T> delegate;
    private final JsonDeserializer<T> deserializer;
    final Gson gson;
    private final JsonSerializer<T> serializer;
    private final TypeAdapterFactory skipPast;
    private final TypeToken<T> typeToken;

    public TreeTypeAdapter(JsonSerializer<T> jsonSerializer, JsonDeserializer<T> jsonDeserializer, Gson gson2, TypeToken<T> typeToken2, TypeAdapterFactory typeAdapterFactory) {
        this.serializer = jsonSerializer;
        this.deserializer = jsonDeserializer;
        this.gson = gson2;
        this.typeToken = typeToken2;
        this.skipPast = typeAdapterFactory;
    }

    public final T read(JsonReader jsonReader) throws IOException {
        if (this.deserializer == null) {
            return delegate().read(jsonReader);
        }
        JsonElement parse = Streams.parse(jsonReader);
        if (parse.isJsonNull()) {
            return null;
        }
        return this.deserializer.deserialize(parse, this.typeToken.getType(), this.context);
    }

    public final void write(JsonWriter jsonWriter, T t) throws IOException {
        JsonSerializer<T> jsonSerializer = this.serializer;
        if (jsonSerializer == null) {
            delegate().write(jsonWriter, t);
        } else if (t == null) {
            jsonWriter.nullValue();
        } else {
            Streams.write(jsonSerializer.serialize(t, this.typeToken.getType(), this.context), jsonWriter);
        }
    }

    private TypeAdapter<T> delegate() {
        TypeAdapter<T> typeAdapter = this.delegate;
        if (typeAdapter != null) {
            return typeAdapter;
        }
        TypeAdapter<T> delegateAdapter = this.gson.getDelegateAdapter(this.skipPast, this.typeToken);
        this.delegate = delegateAdapter;
        return delegateAdapter;
    }

    public static TypeAdapterFactory newFactory(TypeToken<?> typeToken2, Object obj) {
        return new SingleTypeFactory(obj, typeToken2, false, (Class<?>) null);
    }

    public static TypeAdapterFactory newFactoryWithMatchRawType(TypeToken<?> typeToken2, Object obj) {
        return new SingleTypeFactory(obj, typeToken2, typeToken2.getType() == typeToken2.getRawType(), (Class<?>) null);
    }

    public static TypeAdapterFactory newTypeHierarchyFactory(Class<?> cls, Object obj) {
        return new SingleTypeFactory(obj, (TypeToken<?>) null, false, cls);
    }

    private static final class SingleTypeFactory implements TypeAdapterFactory {
        private final JsonDeserializer<?> deserializer;
        private final TypeToken<?> exactType;
        private final Class<?> hierarchyType;
        private final boolean matchRawType;
        private final JsonSerializer<?> serializer;

        SingleTypeFactory(Object obj, TypeToken<?> typeToken, boolean z, Class<?> cls) {
            JsonDeserializer<?> jsonDeserializer = null;
            JsonSerializer<?> jsonSerializer = obj instanceof JsonSerializer ? (JsonSerializer) obj : null;
            this.serializer = jsonSerializer;
            jsonDeserializer = obj instanceof JsonDeserializer ? (JsonDeserializer) obj : jsonDeserializer;
            this.deserializer = jsonDeserializer;
            C$Gson$Preconditions.checkArgument((jsonSerializer == null && jsonDeserializer == null) ? false : true);
            this.exactType = typeToken;
            this.matchRawType = z;
            this.hierarchyType = cls;
        }

        public final <T> TypeAdapter<T> create(Gson gson, TypeToken<T> typeToken) {
            boolean z;
            TypeToken<?> typeToken2 = this.exactType;
            if (typeToken2 != null) {
                z = typeToken2.equals(typeToken) || (this.matchRawType && this.exactType.getType() == typeToken.getRawType());
            } else {
                z = this.hierarchyType.isAssignableFrom(typeToken.getRawType());
            }
            if (z) {
                return new TreeTypeAdapter(this.serializer, this.deserializer, gson, typeToken, this);
            }
            return null;
        }
    }

    private final class GsonContextImpl implements JsonDeserializationContext, JsonSerializationContext {
        private GsonContextImpl() {
        }

        public final JsonElement serialize(Object obj) {
            return TreeTypeAdapter.this.gson.toJsonTree(obj);
        }

        public final JsonElement serialize(Object obj, Type type) {
            return TreeTypeAdapter.this.gson.toJsonTree(obj, type);
        }

        public final <R> R deserialize(JsonElement jsonElement, Type type) throws JsonParseException {
            return TreeTypeAdapter.this.gson.fromJson(jsonElement, type);
        }
    }
}