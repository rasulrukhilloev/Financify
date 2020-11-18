import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Favorites from "../components/FavoritesScreen/Favorites";
import Stock from "../components/Stock";

const favStack = createStackNavigator();

const favStackScreen = () => (
  <favStack.Navigator>
    <favStack.Screen name="Favorites" component={Favorites} />
    <favStack.Screen name="Stock" component={Stock} />
  </favStack.Navigator>
);

export default favStackScreen;
