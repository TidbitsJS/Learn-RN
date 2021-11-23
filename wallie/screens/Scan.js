import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { Camera } from "expo-camera";
import { useIsFocused } from "@react-navigation/core";
import ScanPaymentMethods from "../components/ScanPaymentMethods";

const ScanHeader = ({ navigation }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: SIZES.base,
      paddingHorizontal: SIZES.medium,
    }}
  >
    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <Image
        source={icons.close}
        style={{
          width: 15,
          height: 15,
          tintColor: COLORS.white,
        }}
      />
    </TouchableOpacity>

    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ ...FONTS.body3, color: COLORS.white }}>
        Scan for Payment
      </Text>
    </View>

    <TouchableOpacity
      style={{
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={icons.info}
        style={{
          width: "80%",
          height: "80%",
          tintColor: COLORS.primary,
        }}
      />
    </TouchableOpacity>
  </View>
);

const Scan = ({ navigation }) => {
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
          onBarCodeScanned={(result) => console.log("Scanned", result.data)}
          androidCameraPermissionOptions={{
            title: "Permission to use camera",
            message: "Camera is required for barcode scanning",
            buttonPositive: "OK",
            buttonNegative: "Cancel",
          }}
        >
          <ScanHeader navigation={navigation} />
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: "20%",
              left: 0,
              right: 0,
            }}
          >
            <Image
              source={images.focus}
              resizeMode="stretch"
              style={{
                width: 200,
                height: 300,
              }}
            />
          </View>

          <ScanPaymentMethods />
        </Camera>
      )}
    </SafeAreaView>
  );
};

export default Scan;
