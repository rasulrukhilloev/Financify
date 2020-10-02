import React, { Component } from "react";
import { FlatList, RefreshControl } from "react-native";
import { Text } from "native-base";
import NewsItem from "./NewsItem";

import { connect } from "react-redux";
import { getNewsFortune } from "../../store/actions";

class NewsFortune extends Component {
  componentDidMount() {
    this.props.getNewsFortune();
  }
  onRefresh = () => this.props.getNewsFortune();

  refreshControl = (loading) => (
    <RefreshControl
      // colors={[Colors.TEXT_NORMAL]}
      // progressBackgroundColor={Colors.BLUE3}
      refreshing={loading}
      onRefresh={this.onRefresh}
    />
  );

  render() {
    const { data, latestUpdate, loading } = this.props.fortune;
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
  return { fortune: state.fortune };
};

const mapDispatchToProps = {
  getNewsFortune,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsFortune);
