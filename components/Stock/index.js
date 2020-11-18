import React, { Component } from "react";
import { RefreshControl, StyleSheet } from "react-native";
import { Content, Text, View, Button } from "native-base";
import { connect } from "react-redux";

import { Colors } from "../../constants/colors";
import { getStock } from "../../store/actions";

import Info from "./Info";
import Chart from "./Chart";
import Details from "./Details";
import News from "./News";
import Save from "./Save";

import Modal from "react-native-modal";
import { getRecommendation } from "../../store/actions/stock";
import { format } from "date-fns";

class Stock extends Component {
  state = {
    modalVisible: false,
    symbol: "",
    toggleRecommendation: false,
  };
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
    this.props.getRecommendation(this.state.symbol);
    
  };
  // onRefresh = () => {
  //   if (this.props.stock.data.quote) {
  //     this.props.getStock(
  //       this.props.stock.data.quote.symbol,
  //       this.props.stock.range
  //     );
  //   }
  // };

  componentDidMount(){
    const symbol = this.props.route.params;
    this.setState({symbol: symbol})
    
  }
  render() {
    const { error, loading } = this.props.stock;
    const isError = error && !loading;
    const { data, latestUpdate, load } = this.props.recommendation;
    //{console.log("Symbol is ", this.state.symbol)}
    return (
      <View style={styles.container}>
        {isError ? (
          <Text style={styles.noResults}>{error}</Text>
        ) : (
          <View style={styles.container}>
            <Content
            // refreshControl={
            //   <RefreshControl
            //     colors={[Colors.TEXT_NORMAL]}
            //     onRefresh={this.onRefresh}
            //     progressBackgroundColor={Colors.BLUE3}
            //     refreshing={loading}
            //   />
            // }
            >
              {
                load ? (console.log(load)) //put loading page here
                : //does not work with stocks without icons coz they are not found in finnhub API
                (<Modal
                  animationType="slide"
                  transparent={true}
                  backdropOpacity={0.85}
                  isVisible={this.state.modalVisible}
                  onRequestClose={() => this.setModalVisible(false)}
                  swipeDirection={["up", "left", "right", "down"]}
                >
                  <View style={styles.modal}>
                    <Text style={styles.mainTextModal}>Latest analyst recommendation trends for a {this.state.symbol}</Text>
                    <View style={styles.itemRows}>
                      <Text note style={styles.buy}>{"Strong Buy"}</Text>
                      <Text style={styles.buy}>{data.strongBuy}</Text>
                    </View>
                    <View style={styles.itemRows}>
                      <Text note style={styles.sell}>{"Strong Sell"}</Text>
                      <Text style={styles.sell}>{data.strongSell}</Text>
                    </View>
                    <View style={styles.itemRows}>
                      <Text note>{"Hold"}</Text>
                      <Text>{data.hold}</Text>
                    </View>
                    <View style={styles.itemRows}>
                      <Text note style={styles.buy}>{"Buy"}</Text>
                      <Text style={styles.buy}>{data.buy}</Text>
                    </View>
                    <View style={styles.itemRows}>
                      <Text note style={styles.sell}>{"Sell"}</Text>
                      <Text style={styles.sell}>{data.sell}</Text>
                    </View>
                    <View style={styles.itemRows}>
                      <Text note>{"Month"}</Text>
                      {data.period ? (<Text>{ format(new Date(data.period), "LLLL")}</Text>)
                      : 
                      (<Text>{data.period}</Text>)}
                      
                    </View>
                    <Button
                      rounded
                      small
                      info
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                      }}
                      style={styles.modalButton}
                    >
                      <Text>Close</Text>
                    </Button>
                  </View>
                </Modal>)
              }
              
              <Info />
              <Button style={styles.modalButton} rounded light onPress={() => this.setModalVisible(true)}>
                <Text style={{color: '#ffffff'}}>Analyst Recommendation for {this.state.symbol}</Text>
              </Button>
              <Chart />
              <Details />
              <News />
            </Content>
            <Save />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  noResults: {
    color: Colors.TEXT_DARK,
    fontSize: 13,
    padding: 20,
    textAlign: "center",
  },
  itemRows: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    marginHorizontal: 10,
  },
  modal: {
    backgroundColor: Colors.BLUE1,
    borderRadius: 15,
  },
  modalButton: {
    alignSelf: "center",
    marginBottom: 10,
  },
  mainTextModal: {
    textAlign: "center", 
    margin: 20
  },
  buy: {
    color: Colors.GREEN,
  },
  sell: {
    color: Colors.RED,
  }
});

const mapStateToProps = (state) => ({
  stock: state.stock,
  // symbol: state.symbol,
  recommendation: state.recommendation,
});

const mapDispatchToProps = {
  getStock,
  getRecommendation,
};

export default connect(mapStateToProps, mapDispatchToProps)(Stock);
