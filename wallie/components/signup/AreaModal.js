import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const AreadModalItem = ({ item, setSelectArea, setModalVisible }) => (
  <TouchableOpacity
    style={{
      padding: SIZES.padding,
      flexDirection: "row",
    }}
    onPress={() => {
      setSelectArea(item);
      setModalVisible(false);
    }}
  >
    <Image
      source={{ uri: item.flag }}
      style={{
        width: 30,
        height: 30,
        marginRight: 10,
      }}
    />
    <Text style={{ ...FONTS.body4 }}>{item.name}</Text>
  </TouchableOpacity>
);

const AreaModal = ({ areas, modalVisible, setModalVisible, setSelectArea }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              width: "90%",
              marginVertical: SIZES.font * 2,
              backgroundColor: COLORS.lightGreen,
              borderRadius: SIZES.radius,
            }}
          >
            <FlatList
              data={areas}
              renderItem={({ item }) => (
                <AreadModalItem
                  item={item}
                  setSelectArea={setSelectArea}
                  setModalVisible={setModalVisible}
                />
              )}
              keyExtractor={(item) =>
                `${item.code + item.callingCode + item.name}`
              }
              showsVerticalScrollIndicator={false}
              style={{
                padding: SIZES.font,
                marginBottom: SIZES.font,
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default AreaModal;
