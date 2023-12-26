package com.adyen.checkout.components.model.payments.response;

import com.adyen.checkout.core.exception.ModelSerializationException;
import com.adyen.checkout.core.model.JsonUtilsKt;
import com.adyen.checkout.core.model.ModelObject;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.json.JSONException;
import org.json.JSONObject;

@Metadata(d1 = {"\u0000\u0019\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003*\u0001\u0000\b\n\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001J\u0010\u0010\u0003\u001a\u00020\u00022\u0006\u0010\u0004\u001a\u00020\u0005H\u0016J\u0010\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0002H\u0016¨\u0006\b"}, d2 = {"com/adyen/checkout/components/model/payments/response/Threeds2Action$Companion$SERIALIZER$1", "Lcom/adyen/checkout/core/model/ModelObject$Serializer;", "Lcom/adyen/checkout/components/model/payments/response/Threeds2Action;", "deserialize", "jsonObject", "Lorg/json/JSONObject;", "serialize", "modelObject", "components-core_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
/* compiled from: Threeds2Action.kt */
public final class Threeds2Action$Companion$SERIALIZER$1 implements ModelObject.Serializer<Threeds2Action> {
    Threeds2Action$Companion$SERIALIZER$1() {
    }

    public JSONObject serialize(Threeds2Action threeds2Action) {
        Intrinsics.checkNotNullParameter(threeds2Action, "modelObject");
        JSONObject jSONObject = new JSONObject();
        try {
            jSONObject.putOpt("type", threeds2Action.getType());
            jSONObject.putOpt("paymentData", threeds2Action.getPaymentData());
            jSONObject.putOpt(Action.PAYMENT_METHOD_TYPE, threeds2Action.getPaymentMethodType());
            jSONObject.putOpt("token", threeds2Action.getToken());
            jSONObject.putOpt("subtype", threeds2Action.getSubtype());
            jSONObject.putOpt("authorisationToken", threeds2Action.getAuthorisationToken());
            return jSONObject;
        } catch (JSONException e) {
            throw new ModelSerializationException(Threeds2Action.class, e);
        }
    }

    public Threeds2Action deserialize(JSONObject jSONObject) {
        Intrinsics.checkNotNullParameter(jSONObject, "jsonObject");
        try {
            Threeds2Action threeds2Action = new Threeds2Action(JsonUtilsKt.getStringOrNull(jSONObject, "token"), JsonUtilsKt.getStringOrNull(jSONObject, "subtype"), JsonUtilsKt.getStringOrNull(jSONObject, "authorisationToken"));
            threeds2Action.setType(JsonUtilsKt.getStringOrNull(jSONObject, "type"));
            threeds2Action.setPaymentData(JsonUtilsKt.getStringOrNull(jSONObject, "paymentData"));
            threeds2Action.setPaymentMethodType(JsonUtilsKt.getStringOrNull(jSONObject, Action.PAYMENT_METHOD_TYPE));
            return threeds2Action;
        } catch (JSONException e) {
            throw new ModelSerializationException(Threeds2Action.class, e);
        }
    }
}