import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { Camera } from "expo-camera";
import { useIsFocused } from "@react-navigation/core";

const Scan = () => {
  const [hasPermission, setHasPermission] = React.useState(null);
  const isFocused = useIsFocused();
  const cameraRef = React.useRef(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) return <View />;
  if (hasPermission === false)
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar
          backgroundColor={COLORS.white}
          barStyle="dark-content"
        />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: SIZES.font,
          }}
        >
          <Text style={{ ...FONTS.body4, color: COLORS.primary }}>
            No access to camera
          </Text>
        </View>
      </SafeAreaView>
    );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isFocused && (
        <Camera
          ref={cameraRef}
          style={{ flex: 1 }}
          captureAudio={false}
          type={Camera.Constants.Type.back}
          flashMode={Camera.Constants.FlashMode.off}
          //   onBarCodeScanned={onBarCodeRead}
          androidCameraPermissionOptions={{
            title: "Permission to use camera",
            message: "Camera is required for barcode scanning",
            buttonPositive: "OK",
            buttonNegative: "Cancel",
          }}
        ></Camera>
      )}
    </SafeAreaView>
  );
};

export default Scan;
