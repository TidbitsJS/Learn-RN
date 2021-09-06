import React from "react";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = (props) => {
  return <MealList listData={MEALS} navigation={props.navigation} />;
};

export default FavoritesScreen;
