import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import IPO from "../components/Calendars/IPO";
import Earnings from "../components/Calendars/Earnings";
import Economic from "../components/Calendars/Economic";

const CalendarsTab = createMaterialTopTabNavigator();

const CalendarsTabScreen = () => (
  <CalendarsTab.Navigator>
    <CalendarsTab.Screen name="IPO" component={IPO}></CalendarsTab.Screen>
    <CalendarsTab.Screen
      name="Earnings"
      component={Earnings}
    ></CalendarsTab.Screen>
    <CalendarsTab.Screen
      name="Economic"
      component={Economic}
    ></CalendarsTab.Screen>
  </CalendarsTab.Navigator>
);

export default CalendarsTabScreen;
