import React, { Component } from "react";
import { FlatList, RefreshControl } from "react-native";
import { Text } from "native-base";
import NewsItem from "./NewsItem";

import * as Linking from "expo-linking"; //RN Linking does not work in expo managed workflow

import { connect } from "react-redux";
import { getNewsBloomberg } from "../../store/actions";

class NewsBloomberg extends Component {
  componentDidMount() {
    this.props.getNewsBloomberg();
  }
  onRefresh = () => this.props.getNewsBloomberg();

  refreshControl = (loading) => (
    <RefreshControl
      // colors={[Colors.TEXT_NORMAL]}
      // progressBackgroundColor={Colors.BLUE3}
      refreshing={loading}
      onRefresh={this.onRefresh}
    />
  );

  render() {
    const { data, latestUpdate, loading } = this.props.bloomberg;
    return (
      <>
        {data.length === 0 && (
          <Text style={{textAlign: 'center'}}>{"Updating news ..."}</Text>
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
  return { bloomberg: state.bloomberg };
};

const mapDispatchToProps = {
  getNewsBloomberg,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsBloomberg);
