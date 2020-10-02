import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Gainers from "../components/Markets/Gainers";
import Losers from "../components/Markets/Losers";
import MostActive from "../components/Markets/MostActive";
import Stock from "../components/Stock";

const loserStack = createStackNavigator();
const gainerStack = createStackNavigator();
const activeStack = createStackNavigator();
const MarketsTab = createMaterialTopTabNavigator();

const loserStackScreen = () => (
  //remove refresh control from Stock component as it hinders modal
  <loserStack.Navigator mode="modal" headerMode="none">
    <loserStack.Screen name="Losers" component={Losers} />
    <loserStack.Screen name="Stock" component={Stock} />
  </loserStack.Navigator>
);
const gainerStackcreen = () => (
  <gainerStack.Navigator mode="modal" headerMode="none">
    <gainerStack.Screen name="Gainers" component={Gainers} />
    <gainerStack.Screen name="Stock" component={Stock} />
  </gainerStack.Navigator>
);
const activeStackScreen = () => (
  <activeStack.Navigator mode="modal" headerMode="none">
    <activeStack.Screen name="MostActive" component={MostActive} />
    <activeStack.Screen name="Stock" component={Stock} />
  </activeStack.Navigator>
);
//3

const MarketsTabScreen = () => (
  <MarketsTab.Navigator
  // tabBar={() => false} DO IT LATER
  // style={{
  //   paddingTop:
  //     Platform.OS === "ios"
  //       ? Constants.statusBarHeight
  //       : StatusBar.currentHeight,
  // }}
  >
    <MarketsTab.Screen
      name="Losers"
      component={loserStackScreen}
    ></MarketsTab.Screen>
    <MarketsTab.Screen
      name="Gainers"
      component={gainerStackcreen}
    ></MarketsTab.Screen>
    <MarketsTab.Screen
      name="MostActive"
      component={activeStackScreen}
      options={{ title: "Active" }}
    ></MarketsTab.Screen>
  </MarketsTab.Navigator>
);
export default MarketsTabScreen;
