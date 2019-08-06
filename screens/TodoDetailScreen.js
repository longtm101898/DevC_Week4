import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TodoDetailScreen = ({ navigation: { getParam } }) => {
  const { id, status, body } = getParam("data");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {id}. {status}
      </Text>
      <Text style={styles.text}>{body}</Text>
    </View>
  );
};

TodoDetailScreen.navigationOptions = {
  title: "Todo Detail Screen"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 24,
    fontWeight: "200"
  }
});

export default TodoDetailScreen;
