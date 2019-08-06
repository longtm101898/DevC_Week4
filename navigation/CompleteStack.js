import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";
import CompleteScreen from "../screens/CompleteScreen";
import TabBarIcon from "../components/TabBarIcon";

const CompleteStack = createStackNavigator(
  {
    Complete: CompleteScreen
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: {
        flex: 1,
        textAlign: "center",
        fontWeight: "bold"
      },
      headerStyle: {
        backgroundColor: "#4ed9d9"
      },
      headerTintColor: "#fff"
    }
  }
);

CompleteStack.navigationOptions = {
  tabBarLabel: "Complete",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-check" : "md-checkmark"}
    />
  )
};

CompleteStack.path = "";

export default CompleteStack;
