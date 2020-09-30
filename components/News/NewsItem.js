import React, { Component } from "react";
import { Text, ListItem, Left, Body, Thumbnail, View } from "native-base";

import { formatDistance } from "date-fns";

class NewsItem extends Component {
  render() {
    this.props.data.urlToImage == null
      ? (urlToImage =
          "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U") //putting random pics if url for image is empty. random: https://picsum.photos/200
      : (urlToImage = this.props.data.urlToImage);
    return (
      <ListItem thumbnail onPress={this.props.onPress}>
        <Left>
          <Thumbnail
            style={{ borderRadius: 10 }}
            square
            large
            source={{
              uri: urlToImage,
            }}
          />
        </Left>
        <Body>
          <Text ellipsizeMode="tail" numberOfLines={2}>
            {this.props.data.title}
          </Text>
          {/* <Text>{this.props.data.description}</Text> */}
          <View
            style={{ alignItems: "flex-end", marginRight: 10, marginTop: 20 }}
          >
            <Text note>
              {formatDistance(
                new Date(),
                new Date(this.props.data.publishedAt)
              )}
            </Text>
          </View>
        </Body>
      </ListItem>
    );
  }
}

export default NewsItem;
