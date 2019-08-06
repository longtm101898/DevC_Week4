import React, { Component } from "react";
import {
  Alert,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
  ImageBackground,
  Button,
  KeyboardAvoidingView
} from "react-native";
import { connect } from "react-redux";
import TodoItem from "../components/TodoItem";
import {
  getTodos,
  postTodo,
  removeTodo,
  updateTodoStatus
} from "../redux/TodoRedux";

class TodoScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    todoInputText: ""
  };

  componentWillMount() {
    this.props.dispatch(getTodos());
  }

  onChangeTodoInput = text => {
    this.setState({ todoInputText: text });
  };

  onSubmit = () => {
    const { todoList } = this.props;
    const { todoInputText } = this.state;
    const newTodo = {
      id: todoList.length + 1,
      status: "Active",
      body: todoInputText
    };
    this.props.dispatch(postTodo(newTodo));
    // const newTodoList = todoList.concat(newTodo);
    this.setState({
      todoInputText: ""
    });
  };

  onToggleTodoItem = id => {
    const { todoList } = this.props;
    const todo = todoList.find(todo => todo.id === id);
    todo.status = todo.status === "Done" ? "Active" : "Done";
    const foundIndex = todoList.findIndex(todo => todo.id === id);
    todoList[foundIndex] = todo;
    const newTodoList = [...todoList];
    //redux: updateTodoStatus
    this.props.dispatch(updateTodoStatus(newTodoList)).then(res => {
      setTimeout(() => {
        this.props.navigation.navigate("TodoDetail", {
          data: todo
        });
      }, 800);
    });
  };

  onLongPressTodoItem = todo => {
    Alert.alert("Delete your todo?", todo.body, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => this.onConfirmDelete(todo.id) }
    ]);
  };

  onConfirmDelete = id => {
    this.props.dispatch(removeTodo(id));
  };

  render() {
    const { todoList } = this.props;
    const { todoInputText } = this.state;
    return (
      <ImageBackground
        source={require("../assets/images/notes.jpg")}
        style={styles.backgroundImage}
      >
        <KeyboardAvoidingView
          behavior="padding"
          enabled
          style={styles.keyboardContainer}
          keyboardVerticalOffset={5}
        >
          <ScrollView
            contentContainerStyle={styles.todoContainer}
            keyboardShouldPersistTaps="always"
          >
            <Text style={styles.text}>Todo List ({todoList.length})</Text>
            {todoList.length > 0 ? (
              todoList.map((todo, i) => (
                <TodoItem
                  key={i}
                  todo={todo}
                  onToggleTodo={() => this.onToggleTodoItem(todo.id)}
                  onLongPress={() => this.onLongPressTodoItem(todo)}
                />
              ))
            ) : (
              <ActivityIndicator size="large" color="#0000ff" />
            )}
            <TextInput
              keyboardType="default"
              onChangeText={this.onChangeTodoInput}
              style={styles.input}
              value={todoInputText}
            />
            <Button title="Submit" onPress={this.onSubmit} />
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  todoList: state.todo.todos
});

export default connect(
  mapStateToProps,
  null
)(TodoScreen);

const styles = StyleSheet.create({
  backgroundImage: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute"
  },
  keyboardContainer: {
    flex: 1,
    marginTop: 70
  },
  todoContainer: {
    justifyContent: "center",
    marginHorizontal: 20,
    paddingBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "#072114"
  },
  input: {
    borderWidth: 1,
    height: 50,
    borderColor: "gray",
    borderRadius: 10,
    marginVertical: 10
  },
  text: {
    fontSize: 24,
    fontWeight: "600"
  }
});
