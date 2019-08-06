import { combineReducers } from "redux";
import { reducer as TodoReducer } from "./TodoRedux";

export default combineReducers({
  todo: TodoReducer
});
