import React, { Component } from "react";
import { FlatList, RefreshControl } from "react-native";
import { Text } from "native-base";
import NewsItem from "./NewsItem";

import { connect } from "react-redux";
import { getNewsBusinessInsider } from "../../store/actions";

class NewsBusinessInsider extends Component {
  componentDidMount() {
    this.props.getNewsBusinessInsider();
  }
  onRefresh = () => this.props.getNewsBusinessInsider();

  refreshControl = (loading) => (
    <RefreshControl
      // colors={[Colors.TEXT_NORMAL]}
      // progressBackgroundColor={Colors.BLUE3}
      refreshing={loading}
      onRefresh={this.onRefresh}
    />
  );

  render() {
    const { data, latestUpdate, loading } = this.props.business_insider;
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
  return { business_insider: state.business_insider };
};

const mapDispatchToProps = {
  getNewsBusinessInsider,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsBusinessInsider);
