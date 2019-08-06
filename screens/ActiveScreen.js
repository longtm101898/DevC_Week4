import React from "react";
import { connect } from "react-redux";
import { ScrollView, ActivityIndicator, StyleSheet } from "react-native";
import { getTodos } from "../redux/TodoRedux";
import TodoItem from "../components/TodoItem";

class ActiveScreen extends React.Component {
  componentWillMount() {
    this.props.onGetTodos();
  }

  renderActiveTodoList = todoList =>
    todoList.map((todo, i) => {
      if (todo.status == "Active") {
        return (
          <TodoItem
            key={i}
            todo={todo}
            onToggleTodo={() => null}
            onLongPress={() => null}
          />
        );
      }
    });

  render() {
    const { todoList } = this.props;
    return (
      <ScrollView
        contentContainerStyle={styles.todoContainer}
        keyboardShouldPersistTaps="always"
      >
        {todoList.length > 0 ? (
          this.renderActiveTodoList(todoList)
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
      </ScrollView>
    );
  }
}

ActiveScreen.navigationOptions = {
  title: "Active Todos"
};

const styles = StyleSheet.create({
  todoContainer: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20
  }
});

const mapStateToProps = state => ({
  todoList: state.todo.todos
});

const mapDispatchToProps = dispatch => {
  return {
    onGetTodos: () => dispatch(getTodos())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveScreen);
