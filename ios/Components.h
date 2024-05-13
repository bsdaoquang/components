#ifdef __cplusplus
#import "react-native-components.h"
#endif

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNComponentsSpec.h"

@interface Components : NSObject <NativeComponentsSpec>
#else
#import <React/RCTBridgeModule.h>

@interface Components : NSObject <RCTBridgeModule>
#endif

@end
