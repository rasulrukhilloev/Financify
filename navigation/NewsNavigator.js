import React from "react";

import { Image, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Bloomberg from "../components/News/Bloomberg";
import BusinessInsider from "../components/News/BusinessInsider";
import FinancialPost from "../components/News/FinancialPost";
import Fortune from "../components/News/Fortune";
import WallStreet from "../components/News/WallStreet";

import NewsDetails from "../components/News/NewsDetails";

const NewsTab = createMaterialTopTabNavigator();

const bloombergStack = createStackNavigator();
const businessInsiderStack = createStackNavigator();
const financialPostStack = createStackNavigator();
const fortuneStack = createStackNavigator();
const wallStreetStack = createStackNavigator();

const bloombergScreen = () => (
  <bloombergStack.Navigator mode="modal">
    <bloombergStack.Screen name="Bloomberg" component={Bloomberg} />
    <bloombergStack.Screen
      name="NewsDetails"
      component={NewsDetails}
      options={{ headerShown: false }}
    />
  </bloombergStack.Navigator>
);
const businessInsiderScreen = () => (
  <businessInsiderStack.Navigator mode="modal">
    <businessInsiderStack.Screen
      name="Business Insider"
      component={BusinessInsider}
    />
    <businessInsiderStack.Screen
      name="NewsDetails"
      component={NewsDetails}
      options={{ headerShown: false }}
    />
  </businessInsiderStack.Navigator>
);
const financialPostScreen = () => (
  <financialPostStack.Navigator mode="modal">
    <financialPostStack.Screen
      name="Financial Post"
      component={FinancialPost}
    />
    <financialPostStack.Screen
      name="NewsDetails"
      component={NewsDetails}
      options={{ headerShown: false }}
    />
  </financialPostStack.Navigator>
);
const fortuneScreen = () => (
  <fortuneStack.Navigator mode="modal">
    <fortuneStack.Screen name="Fortune" component={Fortune} />
    <fortuneStack.Screen
      name="NewsDetails"
      component={NewsDetails}
      options={{ headerShown: false }}
    />
  </fortuneStack.Navigator>
);
const wallStreetScreen = () => (
  <wallStreetStack.Navigator mode="modal">
    <wallStreetStack.Screen name="Wall Street Journal" component={WallStreet} />
    <wallStreetStack.Screen
      name="NewsDetails"
      component={NewsDetails}
      options={{ headerShown: false }}
    />
  </wallStreetStack.Navigator>
);

const NewsTabScreen = () => (
  <NewsTab.Navigator
    tabBarOptions={{
      showIcon: true,
      showLabel: false,
    }}
    // style={{
    //   paddingTop:
    //     Platform.OS === "ios"
    //       ? Constants.statusBarHeight
    //       : StatusBar.currentHeight,
    // }}
  >
    <NewsTab.Screen
      name="BusinessInsider"
      component={businessInsiderScreen}
      options={{
        tabBarIcon: () => (
          <Image
            source={require("../assets/news_icons/business_insider.jpeg")}
            style={styles.icon}
          />
        ),
      }}
    />
    <NewsTab.Screen
      name="Financial Post"
      component={financialPostScreen}
      options={{
        tabBarIcon: () => (
          <Image
            source={require("../assets/news_icons/financial_post.jpg")}
            style={styles.icon}
          />
        ),
      }}
    />
    <NewsTab.Screen
      name="Fortune"
      component={fortuneScreen}
      options={{
        tabBarIcon: () => (
          <Image
            source={require("../assets/news_icons/fortune.png")}
            style={styles.icon}
          />
        ),
      }}
    />
    <NewsTab.Screen
      name="Wall Street Journal"
      component={wallStreetScreen}
      options={{
        tabBarIcon: () => (
          <Image
            source={require("../assets/news_icons/wsj.png")}
            style={styles.icon}
          />
        ),
      }}
    />
    <NewsTab.Screen
      name="Bloomberg"
      component={bloombergScreen}
      options={{
        tabBarIcon: () => (
          <Image
            source={require("../assets/news_icons/bloomberg.png")}
            style={styles.icon}
          />
        ),
      }}
    />
  </NewsTab.Navigator>
);

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
});

export default NewsTabScreen;
