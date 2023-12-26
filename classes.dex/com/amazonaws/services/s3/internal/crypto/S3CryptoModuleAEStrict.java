package com.amazonaws.services.s3.internal.crypto;

import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.services.kms.AWSKMSClient;
import com.amazonaws.services.s3.internal.S3Direct;
import com.amazonaws.services.s3.model.CryptoConfiguration;
import com.amazonaws.services.s3.model.CryptoMode;
import com.amazonaws.services.s3.model.EncryptionMaterialsProvider;

@Deprecated
class S3CryptoModuleAEStrict extends S3CryptoModuleAE {
    /* access modifiers changed from: protected */
    public final boolean isStrict() {
        return true;
    }

    S3CryptoModuleAEStrict(AWSKMSClient aWSKMSClient, S3Direct s3Direct, AWSCredentialsProvider aWSCredentialsProvider, EncryptionMaterialsProvider encryptionMaterialsProvider, CryptoConfiguration cryptoConfiguration) {
        super(aWSKMSClient, s3Direct, aWSCredentialsProvider, encryptionMaterialsProvider, cryptoConfiguration);
        if (cryptoConfiguration.getCryptoMode() != CryptoMode.StrictAuthenticatedEncryption) {
            throw new IllegalArgumentException();
        }
    }

    /* access modifiers changed from: protected */
    public void securityCheck(ContentCryptoMaterial contentCryptoMaterial, S3ObjectWrapper s3ObjectWrapper) {
        if (!ContentCryptoScheme.AES_GCM.equals(contentCryptoMaterial.getContentCryptoScheme())) {
            throw new SecurityException("S3 object [bucket: " + s3ObjectWrapper.getBucketName() + ", key: " + s3ObjectWrapper.getKey() + "] not encrypted using authenticated encryption");
        }
    }
}