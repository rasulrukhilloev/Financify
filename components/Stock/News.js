import React, { Component } from "react";
import { /*Linking, */ StyleSheet, TouchableHighlight } from "react-native";
import { Text, View } from "native-base";
import { connect } from "react-redux";
import { format } from "date-fns";

import * as Linking from "expo-linking"; //RN Linking does not work in expo managed workflow

import { Colors } from "../../constants/colors";

class News extends Component {
  render() {
    const { news } = this.props.stock.data;

    if (!news || news.length === 0) return null;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>News</Text>
        {news.map((article, index) => (
          <TouchableHighlight
            background={Colors.BLUE2}
            key={index}
            onPress={() => Linking.openURL(article.url)}
          >
            <View style={styles.item}>
              <Text style={styles.preHeadline}>
                {article.source} – {format(article.datetime, "MMM d, h:mm a")}
              </Text>
              <View>
                <Text style={styles.headline}>{article.headline}</Text>
              </View>
            </View>
          </TouchableHighlight>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginBottom: 78,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingHorizontal: 16,
  },
  item: {
    flexDirection: "column",
    flex: 1,
    flexWrap: "wrap",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  preHeadline: {
    color: Colors.TEXT_DARK,
    fontSize: 13,
  },
  headline: {
    fontWeight: "bold",
    marginTop: 4,
  },
  summary: {
    marginTop: 8,
  },
});

const mapStateToProps = (state) => ({
  stock: state.stock,
});

export default connect(mapStateToProps)(News);
