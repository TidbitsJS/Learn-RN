import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { COLORS, FONTS, images, SIZES } from "../constants";
import SignUpForm from "../components/SignUpForm";
import AreaModal from "../components/AreaModal";

const SignUp = ({ navigation }) => {
  const [areas, setAreas] = React.useState([]);
  const [selectedArea, setSelectedArea] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);

  const fetchAreas = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    const jsonData = await response.json();

    let data = jsonData.map((item) => {
      return {
        code: item.alpha2Code,
        name: item.name,
        callingCode: `+${item.callingCodes[0]}`,
        flag: item.flags.png,
      };
    });

    setAreas(data);
    if (data.length > 0) {
      let defaultData = data.filter((a) => a.code === "US");

      if (defaultData.length > 0) {
        setSelectedArea(defaultData[0]);
      }
    }
  };

  React.useEffect(() => {
    fetchAreas();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.lime} />
      <LinearGradient
        colors={[COLORS.lime, COLORS.emerald]}
        style={{ flex: 1 }}
      >
        <ScrollView>
          <View style={{ flex: 1 }}>
            <View
              style={{
                marginVertical: SIZES.font,
                height: 100,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={images.wallieLogo}
                resizeMode="contain"
                style={{ width: "60%" }}
              />
            </View>

            <SignUpForm
              selectedArea={selectedArea}
              setModalVisible={setModalVisible}
            />

            <AreaModal
              areas={areas}
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              setSelectArea={setSelectedArea}
            />

            <View
              style={{
                marginTop: SIZES.font * 2,
                marginBottom: SIZES.font,
                marginHorizontal: SIZES.font * 1.25,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.black,
                  borderRadius: SIZES.radius,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: SIZES.font,
                }}
                onPress={() => navigation.navigate("Tabs")}
              >
                <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SignUp;
