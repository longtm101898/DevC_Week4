import React from "react";
import { createStackNavigator } from "react-navigation";
import { Platform } from "react-native";
import TabBarIcon from "../components/TabBarIcon";
import TodoScreen from "../screens/TodoScreen";
import TodoDetailScreen from "../screens/TodoDetailScreen";

const TodoStack = createStackNavigator({
  Todo: TodoScreen,
  TodoDetail: TodoDetailScreen
});

TodoStack.navigationOptions = {
  tabBarLabel: "All",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

TodoStack.path = "";

export default TodoStack;
