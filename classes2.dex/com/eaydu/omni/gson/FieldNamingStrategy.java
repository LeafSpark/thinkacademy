package com.eaydu.omni.gson;

import java.lang.reflect.Field;

public interface FieldNamingStrategy {
    String translateName(Field field);
}
