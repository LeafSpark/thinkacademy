package com.amazonaws.services.cognitoidentityprovider.model.transform;

import com.amazonaws.services.cognitoidentityprovider.model.ContextDataType;
import com.amazonaws.services.cognitoidentityprovider.model.HttpHeader;
import com.amazonaws.util.json.AwsJsonWriter;
import java.util.List;

class ContextDataTypeJsonMarshaller {
    private static ContextDataTypeJsonMarshaller instance;

    ContextDataTypeJsonMarshaller() {
    }

    public void marshall(ContextDataType contextDataType, AwsJsonWriter awsJsonWriter) throws Exception {
        awsJsonWriter.beginObject();
        if (contextDataType.getIpAddress() != null) {
            String ipAddress = contextDataType.getIpAddress();
            awsJsonWriter.name("IpAddress");
            awsJsonWriter.value(ipAddress);
        }
        if (contextDataType.getServerName() != null) {
            String serverName = contextDataType.getServerName();
            awsJsonWriter.name("ServerName");
            awsJsonWriter.value(serverName);
        }
        if (contextDataType.getServerPath() != null) {
            String serverPath = contextDataType.getServerPath();
            awsJsonWriter.name("ServerPath");
            awsJsonWriter.value(serverPath);
        }
        if (contextDataType.getHttpHeaders() != null) {
            List<HttpHeader> httpHeaders = contextDataType.getHttpHeaders();
            awsJsonWriter.name("HttpHeaders");
            awsJsonWriter.beginArray();
            for (HttpHeader next : httpHeaders) {
                if (next != null) {
                    HttpHeaderJsonMarshaller.getInstance().marshall(next, awsJsonWriter);
                }
            }
            awsJsonWriter.endArray();
        }
        if (contextDataType.getEncodedData() != null) {
            String encodedData = contextDataType.getEncodedData();
            awsJsonWriter.name("EncodedData");
            awsJsonWriter.value(encodedData);
        }
        awsJsonWriter.endObject();
    }

    public static ContextDataTypeJsonMarshaller getInstance() {
        if (instance == null) {
            instance = new ContextDataTypeJsonMarshaller();
        }
        return instance;
    }
}
