import React from "react";
import { SafeAreaView, View } from "react-native";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { COLORS } from "../constants";
import OrderMap from "../components/OrderMap";
import OrderDestinationHeader from "../components/OrderDestinationHeader";
import OrderDeliveryInfo from "../components/OrderDeliveryInfo";

const Order = ({ route, navigation }) => {
  const mapView = React.useRef();

  const [restuarant, setRestuarant] = React.useState(null);
  const [streetName, setStreetName] = React.useState("");
  const [fromLocation, setFromLocation] = React.useState(null);
  const [toLocation, setToLocation] = React.useState(null);
  const [region, setRegion] = React.useState(null);

  const [duration, setDuration] = React.useState(0);
  const [isReady, setIsReady] = React.useState(false);
  const [angle, setAngle] = React.useState(0);

  React.useEffect(() => {
    let { restuarant, currentLocation } = route.params;

    let fromLoc = currentLocation.gps;
    let toLoc = restuarant.location;
    let street = currentLocation.streetName;

    let mapRegion = {
      latitude: (fromLoc.latitude + toLoc.latitude) / 2,
      longitude: (fromLoc.longitude + toLoc.longitude) / 2,
      latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
      longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2,
    };

    setRestuarant(restuarant);
    setStreetName(street);
    setFromLocation(fromLoc);
    setToLocation(toLoc);
    setRegion(mapRegion);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        animated={true}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />

      <View style={{ flex: 1 }}>
        <OrderMap
          mapView={mapView}
          fromLocation={fromLocation}
          toLocation={toLocation}
          region={region}
          angle={angle}
          setAngle={setAngle}
          setFromLocation={setFromLocation}
          setDuration={setDuration}
          setIsReady={setIsReady}
        />
        <OrderDestinationHeader streetName={streetName} duration={duration} />
        <OrderDeliveryInfo navigation={navigation} restuarant={restuarant} />
      </View>
    </SafeAreaView>
  );
};

export default Order;
