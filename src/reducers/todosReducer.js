import { TodosActions } from "../actions";

export default function (state = [], action) {
  switch (action.type) {
    case TodosActions.ADD_TODO:
      return state.concat({ id: action.id, todo: action.todo });
    case TodosActions.REMOVE_TODO:
        return state.filter(t => t.id != action.id);
    default:
      return state;
  }
}
