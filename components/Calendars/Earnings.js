import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Agenda } from "react-native-calendars";
import { addWeeks, subWeeks, format } from "date-fns";
import { View, Text } from "native-base";

import { connect } from "react-redux";
import { getEarnings } from "../../store/actions/calendars";
import { Colors } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

class Earnings extends Component {
  current_date = new Date();
  week_before = format(subWeeks(this.current_date, 2), "yyyy-MM-dd");
  week_after = format(addWeeks(this.current_date, 2), "yyyy-MM-dd");

  componentDidMount() {
    this.props.getEarnings(this.week_before, this.week_after);
  }

  renderItem = (item, firstItemInDay) => {
    return (
      <View style={styles.item}>
        <View style={styles.itemRows}>
          <Text note>{"Stock symbol"}</Text>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            {item.symbol}
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text>{"Earnings Per Share"}</Text>
        </View>
        <View style={styles.itemRows}>
          <Text note>{"Actual/Estimate"}</Text>
          <Text>{item.epsActual + " / " + item.epsEstimate}</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text>{"Revenue"}</Text>
        </View>
        <View style={styles.itemRows}>
          <Text note>{"Actual/Estimate"}</Text>
          <Text>
            {parseFloat(item.revenueActual * 1).toFixed(2) +
              " / " +
              parseFloat(item.revenueEstimate * 1).toFixed(2)}
          </Text>
        </View>
      </View>
    );
  };

  renderKnob = () => (
    <Ionicons name="ios-arrow-dropdown" color={Colors.TEXT_NORMAL} size={23} />
  );

  render() {
    const { data, latestUpdate, loading } = this.props.earnings;
    return (
      <Agenda
        items={data}
        // selected={this.current_date} //Current date
        renderItem={(item, firstItemInDay) =>
          this.renderItem(item, firstItemInDay)
        }
        // refreshing={true}
        renderEmptyData={() => {
          return (
            <View style={styles.emptyData}>
              <Text>
                {"There is no earnings on this date, choose another date."}
              </Text>
            </View>
          );
        }}
        pastScrollRange={2}
        futureScrollRange={2}
        minDate={this.week_before}
        maxDate={this.week_after}
        renderKnob={this.renderKnob}
        // hideKnob={true} //know button.
        // onRefresh={() =>
        //   this.props.getEarnings(this.week_before, this.week_after)
        // }
        theme={{
          backgroundColor: Colors.BLUE1,
          calendarBackground: Colors.BLUE3,
          dayTextColor: Colors.TEXT_NORMAL,
          textDisabledColor: Colors.TEXT_DARK,
          monthTextColor: Colors.TEXT_NORMAL,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.BLUE3,
    flex: 1,
    borderRadius: 10,
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const mapStateToProps = (state) => ({
  earnings: state.earnings,
});

const mapDispatchToProps = {
  getEarnings,
};

export default connect(mapStateToProps, mapDispatchToProps)(Earnings);
