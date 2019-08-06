import { createBottomTabNavigator } from "react-navigation";

import TodoStack from "./TodoStack";
import CompleteStack from "./CompleteStack";
import ActiveStack from "./ActiveStack";

const tabNavigator = createBottomTabNavigator(
  {
    CompleteStack,
    TodoStack,
    ActiveStack
  },
  {
    initialRouteName: "TodoStack"
  }
);

tabNavigator.path = "";

export default tabNavigator;
