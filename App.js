import React, { Component } from "react";
import { StatusBar, StyleSheet } from "react-native";

import { Root, View, StyleProvider } from "native-base";
import getTheme from "./native-base-theme/components";
import platform from "./native-base-theme/variables/platform";

import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";

import { Provider } from "react-redux";
import store from "./store";
import { PersistGate } from "redux-persist/integration/react";

import { Colors } from "./constants/colors";
import MainNavigation from "./navigation/MainNavigation";

export default class App extends Component {
  state = { loading: true };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ loading: false });
  }

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
                <MainNavigation></MainNavigation>
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
