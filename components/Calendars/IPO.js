import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Agenda } from "react-native-calendars";
import { addWeeks, subMonths, format } from "date-fns";
import { View, Text } from "native-base";

import { connect } from "react-redux";
import { getIPO } from "../../store/actions/calendars";
import { Colors } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

class IPO extends Component {
  current_date = new Date();
  month_before = format(subMonths(this.current_date, 1), "yyyy-MM-dd");
  week_after = format(addWeeks(this.current_date, 1), "yyyy-MM-dd");

  componentDidMount() {
    this.props.getIPO(this.month_before, this.week_after);
  }

  computeValue = (total, number) => parseFloat(total / number).toFixed(2);

  renderItem = (item, firstItemInDay) => {
    return (
      <View style={styles.item}>
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={{ fontWeight: "bold", fontSize: 19 }}
        >
          {item.name}
        </Text>
        <View style={styles.itemRows}>
          <Text note>{"Symbol"}</Text>
          <Text>{item.symbol}</Text>
        </View>
        {item.price != null && (
          <View style={styles.itemRows}>
            <Text note>{"IPO Price"}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
        {item.totalSharesValue != null && item.numberOfShares != null && (
          <View style={styles.itemRows}>
            <Text note>{"IPO Value"}</Text>
            <Text>
              {this.computeValue(item.totalSharesValue, item.numberOfShares)}
            </Text>
          </View>
        )}
        {item.exchange != null && (
          <View style={styles.itemRows}>
            <Text note>{"Exchange"}</Text>
            <Text>{item.exchange}</Text>
          </View>
        )}
      </View>
    );
  };

  renderKnob = () => (
    <Ionicons name="ios-arrow-dropdown" color={Colors.TEXT_NORMAL} size={23} />
  );

  render() {
    const { data, latestUpdate, loading } = this.props.ipo;
    return (
      <Agenda
        items={data}
        // selected={this.current_date} //Current date
        renderItem={(item, firstItemInDay) =>
          this.renderItem(item, firstItemInDay)
        }
        renderEmptyData={() => {
          return (
            <View style={styles.emptyData}>
              <Text>{"There has not been issued any IPO on this date"}</Text>
            </View>
          );
        }}
        pastScrollRange={2}
        futureScrollRange={2}
        minDate={this.month_before}
        maxDate={this.week_after}
        renderKnob={this.renderKnob}
        // hideKnob={true} //know button.
        onRefresh={() => this.props.getIPO(this.month_before, this.week_after)}
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
  ipo: state.ipo,
});

const mapDispatchToProps = {
  getIPO,
};

export default connect(mapStateToProps, mapDispatchToProps)(IPO);
