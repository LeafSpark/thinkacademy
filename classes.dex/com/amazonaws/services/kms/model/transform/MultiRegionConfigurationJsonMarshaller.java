package com.amazonaws.services.kms.model.transform;

import com.amazonaws.services.kms.model.MultiRegionConfiguration;
import com.amazonaws.services.kms.model.MultiRegionKey;
import com.amazonaws.util.json.AwsJsonWriter;
import java.util.List;

class MultiRegionConfigurationJsonMarshaller {
    private static MultiRegionConfigurationJsonMarshaller instance;

    MultiRegionConfigurationJsonMarshaller() {
    }

    public void marshall(MultiRegionConfiguration multiRegionConfiguration, AwsJsonWriter awsJsonWriter) throws Exception {
        awsJsonWriter.beginObject();
        if (multiRegionConfiguration.getMultiRegionKeyType() != null) {
            String multiRegionKeyType = multiRegionConfiguration.getMultiRegionKeyType();
            awsJsonWriter.name("MultiRegionKeyType");
            awsJsonWriter.value(multiRegionKeyType);
        }
        if (multiRegionConfiguration.getPrimaryKey() != null) {
            MultiRegionKey primaryKey = multiRegionConfiguration.getPrimaryKey();
            awsJsonWriter.name("PrimaryKey");
            MultiRegionKeyJsonMarshaller.getInstance().marshall(primaryKey, awsJsonWriter);
        }
        if (multiRegionConfiguration.getReplicaKeys() != null) {
            List<MultiRegionKey> replicaKeys = multiRegionConfiguration.getReplicaKeys();
            awsJsonWriter.name("ReplicaKeys");
            awsJsonWriter.beginArray();
            for (MultiRegionKey next : replicaKeys) {
                if (next != null) {
                    MultiRegionKeyJsonMarshaller.getInstance().marshall(next, awsJsonWriter);
                }
            }
            awsJsonWriter.endArray();
        }
        awsJsonWriter.endObject();
    }

    public static MultiRegionConfigurationJsonMarshaller getInstance() {
        if (instance == null) {
            instance = new MultiRegionConfigurationJsonMarshaller();
        }
        return instance;
    }
}
