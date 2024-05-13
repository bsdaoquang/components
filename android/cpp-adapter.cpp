#include <jni.h>
#include "react-native-components.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_components_ComponentsModule_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return components::multiply(a, b);
}
