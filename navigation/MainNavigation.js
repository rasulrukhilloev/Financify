import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../constants/colors";

import NewsTabScreen from "./NewsNavigator";
import favStackScreen from "./FavoritesNavigator";
import MarketsTabScreen from "./MarketsNavigator";
import CalendarsTabScreen from "./CalendarsNavigator";

const MainTab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.BLUE4,
    background: Colors.BLUE1,
    card: Colors.BLUE2,
    text: Colors.TEXT_NORMAL,
    border: Colors.BLUE3,
  },
};
const MainNavigation = () => (
  <NavigationContainer theme={MyTheme}>
    <MainTab.Navigator>
      <MainTab.Screen
        name="Favorites"
        component={favStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite" color={color} size={size} />
          ),
        }}
      />
      <MainTab.Screen
        name="Markets"
        component={MarketsTabScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="show-chart" color={color} size={size} />
          ),
        }}
      />
      <MainTab.Screen
        name="News"
        component={NewsTabScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="newspaper"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Calendars"
        component={CalendarsTabScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="calendar-month"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </MainTab.Navigator>
  </NavigationContainer>
);
export default MainNavigation;
