import React, { Component } from "react";
import { FlatList, RefreshControl } from "react-native";
import { Text } from "native-base";
import NewsItem from "./NewsItem";

import { connect } from "react-redux";
import { getNewsWallStreetJournal } from "../../store/actions/news";

class NewsWallStreet extends Component {
  componentDidMount() {
    this.props.getNewsWallStreetJournal();
  }
  onRefresh = () => this.props.getNewsWallStreetJournal();

  refreshControl = (loading) => (
    <RefreshControl
      // colors={[Colors.TEXT_NORMAL]}
      // progressBackgroundColor={Colors.BLUE3}
      refreshing={loading}
      onRefresh={this.onRefresh}
    />
  );

  render() {
    const { data, latestUpdate, loading } = this.props.wall_street_journal;
    return (
      <>
        {data.length === 0 && (
          <Text>{"There are either no news or error while updating"}</Text>
        )}
        <FlatList //using FlastList over List(native-base) coz the latter is depricated
          refreshControl={this.refreshControl(loading)}
          data={data}
          keyExtractor={(news) => news.url.toString()}
          renderItem={({ item, index }) => (
            <NewsItem
              onPress={
                () => this.props.navigation.navigate("NewsDetails", item)
                // Linking.openURL(item.url) //temporary
              }
              data={item}
            />
          )}
        />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { wall_street_journal: state.wall_street_journal };
};

const mapDispatchToProps = {
  getNewsWallStreetJournal,
};
// getCrypto,
// getStock,
// setSymbol,
// setTab,
// showAutoSuggest,

export default connect(mapStateToProps, mapDispatchToProps)(NewsWallStreet);
