import { combineReducers } from "redux";

import CounterReducer from "./counterReducer";
import TodosReducer from "./todosReducer";

export default combineReducers({
  counter: CounterReducer,
  todos: TodosReducer,
});
