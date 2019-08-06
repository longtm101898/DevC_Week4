import { TODOS } from "../constants/TODOS";

const types = {
  GET_TODOS: "GET_TODOS",
  POST_TODO: "POST_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  CHANGE_TODO_STATUS: "CHANGE_TODO_STATUS"
};

export const getTodos = () => dispatch => {
  dispatch({
    type: types.GET_TODOS,
    payload: TODOS
  });
};

export const postTodo = newTodo => dispatch => {
  dispatch({
    type: types.POST_TODO,
    payload: newTodo
  });
};

export const removeTodo = todoId => dispatch => {
  dispatch({
    type: types.REMOVE_TODO,
    payload: todoId
  });
};

export const updateTodoStatus = newTodos => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: types.CHANGE_TODO_STATUS,
      payload: newTodos
    });
    resolve();
  });
};

const initState = {
  todos: []
};

export const reducer = (state = initState, action) => {
  const { payload, type } = action;
  switch (type) {
    case types.GET_TODOS:
      return {
        ...state,
        todos: payload
      };
    case types.POST_TODO:
      return {
        ...state,
        todos: [...state.todos, payload]
      };
    case types.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload)
      };
    case types.CHANGE_TODO_STATUS:
      return {
        ...state,
        todos: payload
      };
    default:
      return state;
  }
};
