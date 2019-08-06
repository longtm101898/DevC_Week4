import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const TodoItem = ({ todo: { status, body }, onToggleTodo, onLongPress }) => {
  const btnStyle =
    status === "Active" ? styles.activeButton : styles.normalButton;
  return (
    <TouchableOpacity
      style={[btnStyle, styles.button]}
      onPress={onToggleTodo}
      onLongPress={onLongPress}
    >
      <Text style={styles.todoItemText}>{body}</Text>
    </TouchableOpacity>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  activeButton: {
    backgroundColor: "green"
  },
  normalButton: {
    backgroundColor: "blue"
  },
  button: {
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    marginTop: 10,
    paddingVertical: 10
  },
  todoItemText: {
    fontSize: 20,
    fontWeight: "400",
    color: "white"
  }
});
