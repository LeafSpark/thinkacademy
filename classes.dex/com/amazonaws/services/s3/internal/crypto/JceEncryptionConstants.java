package com.amazonaws.services.s3.internal.crypto;

@Deprecated
public class JceEncryptionConstants {
    public static final int SYMMETRIC_CIPHER_BLOCK_SIZE = 16;
    public static final String SYMMETRIC_CIPHER_METHOD = "AES/CBC/PKCS5Padding";
    public static final String SYMMETRIC_KEY_ALGORITHM = "AES";
    public static final int SYMMETRIC_KEY_LENGTH = 256;
}
