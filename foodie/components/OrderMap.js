import React from "react";
import { Image, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { COLORS, icons, SIZES } from "../constants";
import { GOOGLE_API_KEY } from "@env";

const DestinationMarker = ({ toLocation }) => (
  <Marker coordinate={toLocation}>
    <View
      style={{
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white,
      }}
    >
      <View
        style={{
          height: 30,
          width: 30,
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.primary,
        }}
      >
        <Image
          source={icons.pin}
          style={{
            width: 25,
            height: 25,
            tintColor: COLORS.white,
          }}
        />
      </View>
    </View>
  </Marker>
);

const CarIcon = ({ fromLocation, angle }) => (
  <Marker
    coordinate={fromLocation}
    anchor={{ x: 0.5, y: 0.5 }}
    flat={true}
    rotation={angle}
  >
    <Image
      source={icons.car}
      style={{
        width: 40,
        height: 40,
      }}
    />
  </Marker>
);

const OrderMap = ({
  mapView,
  fromLocation,
  toLocation,
  region,
  angle,
  setAngle,
  setFromLocation,
  setDuration,
  setIsReady,
}) => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapView}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
        style={{ flex: 1 }}
      >
        <MapViewDirections
          origin={fromLocation}
          destination={toLocation}
          apikey={GOOGLE_API_KEY}
          strokeWidth={5}
          strokeColor={COLORS.primary}
          optimizeWaypoints={true}
          onReady={(result) => {
            setDuration(result.duration);

            if (!isReady) {
              mapView.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: SIZES.width / 20,
                  bottom: SIZES.height / 4,
                  left: SIZES.width / 20,
                  top: SIZES.height / 8,
                },
              });

              let nextLoc = {
                latitude: result.coordinates[0].latitude,
                longitude: result.coordinates[0].longitude,
              };

              if (result.coordinates.length >= 2) {
                let angle = calculateAngle(result.coordinates);
                setAngle(angle);
              }

              setFromLocation(nextLoc);
              setIsReady(true);
            }
          }}
        />

        <DestinationMarker toLocation={toLocation} />
        {fromLocation && <CarIcon fromLocation={fromLocation} angle={angle} />}
      </MapView>
    </View>
  );
};

export default OrderMap;
