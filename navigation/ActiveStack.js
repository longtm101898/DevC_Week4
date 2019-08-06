import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";
import TabBarIcon from "../components/TabBarIcon";
import ActiveScreen from "../screens/ActiveScreen";

const ActiveStack = createStackNavigator(
  {
    Active: ActiveScreen
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: {
        flex: 1,
        textAlign: "center",
        fontWeight: "bold"
      },
      headerStyle: {
        backgroundColor: "#4ed994"
      },
      headerTintColor: "#fff"
    }
  }
);

ActiveStack.navigationOptions = {
  tabBarLabel: "Active",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

ActiveStack.path = "";

export default ActiveStack;
