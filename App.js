import React, { Component } from "react";
import { StatusBar, StyleSheet, Image } from "react-native";
import { Root, View, StyleProvider } from "native-base";

import getTheme from "./native-base-theme/components";
import platform from "./native-base-theme/variables/platform";

import { AppLoading } from "expo";
import * as Font from "expo-font";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Constants from "expo-constants";

import { Colors } from "./constants/colors";
import { Provider } from "react-redux";
import store from "./store";
import { PersistGate } from "redux-persist/integration/react";
// import Tabs from "./components/Tabs";

import Gainers from "./components/Gainers";
import Losers from "./components/Losers";
import MostActive from "./components/MostActive";
import Stock from "./components/Stock";
import Favorites from "./components/Favorites";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import NewsBloomberg from "./components/News/NewsBloomberg";
import NewsBusinessInsider from "./components/News/NewsBusinessInsider";
import NewsFinancialPost from "./components/News/NewsFinancialPost";
import NewsFortune from "./components/News/NewsFortune";
import NewsWallStreet from "./components/News/NewsWallStreet";

import NewsDetails from "./components/News/NewsDetails";

const favStack = createStackNavigator();

const loserStack = createStackNavigator();
const gainerStack = createStackNavigator();
const activeStack = createStackNavigator();

const MainTab = createBottomTabNavigator();
const MarketsTab = createMaterialTopTabNavigator();
const NewsTab = createMaterialTopTabNavigator();

const bloombergStack = createStackNavigator();
const businessInsiderStack = createStackNavigator();
const financialPostStack = createStackNavigator();
const fortuneStack = createStackNavigator();
const wallStreetStack = createStackNavigator();

export default class App extends Component {
  state = { loading: true };
  //1
  //use bloomberg as an example. modal, remove stack header
  bloombergScreen = () => (
    <bloombergStack.Navigator mode="modal">
      <bloombergStack.Screen name="Bloomberg" component={NewsBloomberg} />
      <bloombergStack.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{ headerShown: false }}
      />
    </bloombergStack.Navigator>
  );
  businessInsiderScreen = () => (
    <businessInsiderStack.Navigator mode="modal">
      <businessInsiderStack.Screen
        name="Business Insider"
        component={NewsBusinessInsider}
      />
      <businessInsiderStack.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{ headerShown: false }}
      />
    </businessInsiderStack.Navigator>
  );
  financialPostScreen = () => (
    <financialPostStack.Navigator mode="modal">
      <financialPostStack.Screen
        name="Financial Post"
        component={NewsFinancialPost}
      />
      <financialPostStack.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{ headerShown: false }}
      />
    </financialPostStack.Navigator>
  );
  fortuneScreen = () => (
    <fortuneStack.Navigator mode="modal">
      <fortuneStack.Screen name="Fortune" component={NewsFortune} />
      <fortuneStack.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{ headerShown: false }}
      />
    </fortuneStack.Navigator>
  );
  wallStreetScreen = () => (
    <wallStreetStack.Navigator mode="modal">
      <wallStreetStack.Screen
        name="Wall Street Journal"
        component={NewsWallStreet}
      />
      <wallStreetStack.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{ headerShown: false }}
      />
    </wallStreetStack.Navigator>
  );
  //5

  NewsTabScreen = () => (
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
        name="Bloomberg"
        component={this.bloombergScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("./assets/news_icons/bloomberg.png")}
              style={styles.icon}
            />
          ),
        }}
      />
      <NewsTab.Screen
        name="BusinessInsider"
        component={this.businessInsiderScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("./assets/news_icons/business_insider.jpeg")}
              style={styles.icon}
            />
          ),
        }}
      />
      <NewsTab.Screen
        name="Financial Post"
        component={this.financialPostScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("./assets/news_icons/financial_post.jpg")}
              style={styles.icon}
            />
          ),
        }}
      />
      <NewsTab.Screen
        name="Fortune"
        component={this.fortuneScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("./assets/news_icons/fortune.png")}
              style={styles.icon}
            />
          ),
        }}
      />
      <NewsTab.Screen
        name="Wall Street Journal"
        component={this.wallStreetScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("./assets/news_icons/wsj.png")}
              style={styles.icon}
            />
          ),
        }}
      />
    </NewsTab.Navigator>
  );

  favStackScreen = () => (
    <favStack.Navigator>
      <favStack.Screen name="Favorites" component={Favorites} />
      <favStack.Screen name="Stock" component={Stock} />
    </favStack.Navigator>
  );
  //1
  loserStackScreen = () => (
    //remove refresh control from Stock component as it hinders modal
    <loserStack.Navigator mode="modal" headerMode="none">
      <loserStack.Screen name="Losers" component={Losers} />
      <loserStack.Screen name="Stock" component={Stock} />
    </loserStack.Navigator>
  );
  gainerStackcreen = () => (
    <gainerStack.Navigator mode="modal" headerMode="none">
      <gainerStack.Screen name="Gainers" component={Gainers} />
      <gainerStack.Screen name="Stock" component={Stock} />
    </gainerStack.Navigator>
  );
  activeStackScreen = () => (
    <activeStack.Navigator mode="modal" headerMode="none">
      <activeStack.Screen name="MostActive" component={MostActive} />
      <activeStack.Screen name="Stock" component={Stock} />
    </activeStack.Navigator>
  );
  //3

  MarketsTabScreen = () => (
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
        component={this.loserStackScreen}
      ></MarketsTab.Screen>
      <MarketsTab.Screen
        name="Gainers"
        component={this.gainerStackcreen}
      ></MarketsTab.Screen>
      <MarketsTab.Screen
        name="MostActive"
        component={this.activeStackScreen}
        options={{ title: "Active" }}
      ></MarketsTab.Screen>
    </MarketsTab.Navigator>
  );

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ loading: false });
  }

  MyTheme = {
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

  render() {
    if (this.state.loading) {
      return <AppLoading style={styles.container} />;
    }

    return (
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <StyleProvider style={getTheme(platform)}>
            <View style={styles.container}>
              <Root>
                <NavigationContainer theme={this.MyTheme}>
                  <MainTab.Navigator>
                    <MainTab.Screen
                      name="Favorites"
                      component={this.favStackScreen}
                      options={{
                        tabBarIcon: ({ color, size }) => (
                          <MaterialIcons
                            name="favorite"
                            color={color}
                            size={size}
                          />
                        ),
                      }}
                    />
                    <MainTab.Screen
                      name="Markets"
                      component={this.MarketsTabScreen}
                      options={{
                        tabBarIcon: ({ color, size }) => (
                          <MaterialIcons
                            name="show-chart"
                            color={color}
                            size={size}
                          />
                        ),
                      }}
                    />
                    <MainTab.Screen
                      name="News"
                      component={this.NewsTabScreen}
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
                  </MainTab.Navigator>
                </NavigationContainer>
              </Root>
            </View>
          </StyleProvider>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BLUE2,
    flex: 1,
    paddingTop:
      Platform.OS === "ios"
        ? Constants.statusBarHeight
        : StatusBar.currentHeight,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
});
