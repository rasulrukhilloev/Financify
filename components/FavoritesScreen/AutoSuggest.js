import React, { Component } from "react";
import {
  BackHandler,
  Dimensions,
  FlatList,
  Keyboard,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";
import { Spinner, Text, View } from "native-base";
import { connect } from "react-redux";
import Constants from "expo-constants";
import { TouchableHighlight } from "react-native";

import { Colors } from "../../constants/colors";
import { Ranges } from "../../constants/ranges";
import { getStock, getSymbols, showAutoSuggest } from "../../store/actions";

class AutoSuggest extends Component {
  state = {
    filteredSearch: [],
  };

  listHeight = () => {
    const statusBar =
      Platform.OS === "ios"
        ? Constants.statusBarHeight
        : StatusBar.currentHeight;
    const windowHeight = Dimensions.get("window").height;
    const tabAndSearchHeight = 105 + 10;
    return windowHeight - statusBar - tabAndSearchHeight;
  };

  onBackPress = () =>
    this.props.autoSuggest ? this.props.showAutoSuggest(false) : false;

  onPress = (symbol) => {
    this.props.getStock(symbol, Ranges.ONE_MONTH);
    this.props.showAutoSuggest(false);
    this.setState({ filteredSearch: [] });
    Keyboard.dismiss();

    this.props.navigation.push("Stock");
  };

  renderItem = ({ item }) => (
    <TouchableHighlight
      background={Colors.BLUE3}
      onPress={() => this.onPress(item.symbol)}
      style={styles.item}
    >
      <Text ellipsizeMode="tail" numberOfLines={1}>
        {item.symbol} <Text style={styles.name}>{item.name}</Text>
      </Text>
    </TouchableHighlight>
  );

  search = (symbol) => {
    const matches = this.props.symbols.data
      .filter((stock) => stock.symbol.startsWith(symbol))
      .slice(0, 20);
    this.setState({ filteredSearch: matches });
  };

  componentDidMount() {
    this.props.getSymbols();
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.symbols.loading !== this.props.symbols.loading) {
      this.search(this.props.symbol);
    }
  }

  UNSAFE_componentWillUpdate(nextProps) {
    if (nextProps.symbol !== this.props.symbol) {
      this.search(nextProps.symbol);
    }
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  render() {
    const { filteredSearch } = this.state;

    if (!this.props.autoSuggest) {
      return false;
    }

    return (
      <View>
        {this.props.symbols.loading ? (
          <Spinner color={Colors.TEXT_DARK} />
        ) : (
          filteredSearch.length !== 0 && (
            <FlatList
              contentInset={{ bottom: 16 }}
              data={filteredSearch}
              keyboardShouldPersistTaps="always"
              keyExtractor={(item) => item.symbol}
              renderItem={(item) => this.renderItem(item)}
              style={[styles.container, { height: this.listHeight() }]}
            />
          )
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BLUE2,
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  name: {
    color: Colors.TEXT_DARK,
    fontSize: 13,
  },
});

const mapStateToProps = (state) => ({
  autoSuggest: state.autoSuggest,
  symbol: state.symbol,
  symbols: state.symbols,
});

const mapDispatchToProps = {
  getStock,
  getSymbols,
  showAutoSuggest,
};

export default connect(mapStateToProps, mapDispatchToProps)(AutoSuggest);
