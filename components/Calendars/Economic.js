import React, { Component } from "react";
import { StyleSheet, Image, TouchableWithoutFeedback } from "react-native";
import { Agenda } from "react-native-calendars";
import { addMonths, subMonths, format } from "date-fns";
import { View, Text, Button } from "native-base";

import { connect } from "react-redux";
import { getEconomic } from "../../store/actions/calendars";
import { Colors } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

import Modal from "react-native-modal";

class Economic extends Component {
  state = {
    modalVisible: false,
    modalData: {},
  };
  setModalVisible = (visible, data = "") => {
    this.setState({ modalVisible: visible });
    this.setState({ modalData: data });
  };

  current_date = new Date();
  month_before = format(subMonths(this.current_date, 1), "yyyy-MM-dd");
  month_after = format(addMonths(this.current_date, 1), "yyyy-MM-dd");

  componentDidMount() {
    this.props.getEconomic(this.month_before, this.month_after);
  }

  renderItem = (item, firstItemInDay) => {
    const flag = `https://www.countryflags.io/${item.country}/shiny/64.png`;
    return (
      <TouchableWithoutFeedback
        onPress={() => this.setModalVisible(true, item)}
      >
        <View style={styles.item}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text note style={{ marginTop: 5 }}>
              {item.time.slice(0, -3)}
            </Text>
            <Image source={{ uri: flag }} style={{ height: 30, width: 30 }} />
          </View>
          <Text ellipsizeMode="tail" numberOfLines={2}>
            {item.event}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  renderKnob = () => (
    <Ionicons name="ios-arrow-dropdown" color={Colors.TEXT_NORMAL} size={23} />
  );

  render() {
    const { data, latestUpdate, loading } = this.props.economic;
    let modal_event = this.state.modalData;
    return (
      <>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible(false)}
          swipeDirection={["up", "left", "right", "down"]}
        >
          <View style={styles.modal}>
            <View style={styles.itemRows}>
              <Text note>{"Impact"}</Text>
              <Text>{modal_event.impact}</Text>
            </View>
            <Text style={{ textAlign: "center" }}>{"Earnings per share"}</Text>
            <View style={styles.itemRows}>
              <Text note>{"Previous"}</Text>
              <Text>{modal_event.prev}</Text>
            </View>
            {modal_event.estimate != null && (
              <View style={styles.itemRows}>
                <Text note>{"Estimate"}</Text>
                <Text>{modal_event.estimate}</Text>
              </View>
            )}
            {modal_event.actual && (
              <View style={styles.itemRows}>
                <Text note>{"Actual"}</Text>
                <Text>{modal_event.actual}</Text>
              </View>
            )}
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
        </Modal>
        <Agenda
          items={data}
          // selected={this.current_date} //Current date
          renderItem={(item, firstItemInDay) =>
            this.renderItem(item, firstItemInDay)
          }
          renderEmptyData={() => {
            return (
              <View style={styles.emptyData}>
                <Text>{"There is no event on this day"}</Text>
              </View>
            );
          }}
          pastScrollRange={2}
          futureScrollRange={2}
          minDate={this.month_before}
          maxDate={this.month_after}
          renderKnob={this.renderKnob}
          // hideKnob={true} //know button.
          onRefresh={() =>
            this.props.getEconomic(this.month_before, this.month_after)
          }
          // refreshing={true}
          theme={{
            backgroundColor: Colors.BLUE1,
            calendarBackground: Colors.BLUE3,
            dayTextColor: Colors.TEXT_NORMAL,
            textDisabledColor: Colors.TEXT_DARK,
            monthTextColor: Colors.TEXT_NORMAL,
          }}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.BLUE3,
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    marginTop: 20,
  },
  emptyData: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
});

const mapStateToProps = (state) => ({
  economic: state.economic,
});

const mapDispatchToProps = {
  getEconomic,
};

export default connect(mapStateToProps, mapDispatchToProps)(Economic);
