//attempting functional component
import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import { H2, Text, View } from "native-base";
import { format } from "date-fns";

class NewsDetails extends Component {
  render() {
    const {
      urlToImage,
      title,
      author,
      publishedAt,
      content,
    } = this.props.route.params;
    return (
      <>
        {urlToImage != null && (
          <Image source={{ uri: urlToImage }} style={styles.image}></Image>
        )}
        <View style={{ margin: 20 }}>
          <H2 style={{ marginTop: 10 }}>{title}</H2>
          <View style={styles.textDetails}>
            {author != null && <Text>{"By " + author}</Text>}
            <Text note>{format(new Date(publishedAt), "MMM d, h:mm a")}</Text>
          </View>
          <Text>{content}</Text>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
  textDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
});

export default NewsDetails;
