import React, { Component } from "react";
import { connect } from "react-redux";
import { clearFavorites, getFavorites } from "../../store/actions";
import { TextStrings } from "../../constants/textStrings";

import List from "../Markets/List";

import Search from "./Search";
import AutoSuggest from "./AutoSuggest";
import { View } from "native-base";

class Favorites extends Component {
  onRefresh = () => this.props.getFavorites(this.props.favorites.symbols);

  componentDidMount() {
    if (this.props.favorites.symbols.length) {
      this.props.getFavorites(this.props.favorites.symbols);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.favorites.symbols !== this.props.favorites.symbols) {
      this.props.favorites.symbols.length
        ? this.props.getFavorites(this.props.favorites.symbols)
        : this.props.clearFavorites();
    }
  }

  render() {
    const { data, latestUpdate, loading } = this.props.favorites;

    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Search />
        <AutoSuggest navigation={this.props.navigation} />
        <List
          headerTitle="Favorites"
          latestUpdate={latestUpdate}
          loading={loading}
          list={data}
          noListData={TextStrings.NO_FAVORITES}
          onRefresh={this.onRefresh}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  favorites: state.favorites,
});

const mapDispatchToProps = {
  clearFavorites,
  getFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
