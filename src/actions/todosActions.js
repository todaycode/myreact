export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const CLEAR_ALL = "CLEAR_ALL";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  todo,
  id: Date.now(),
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id,
});

export const updateTodo = (id, todo) => ({
  type: UPDATE_TODO,
  id,
  todo,
});

export const clearAll = () => ({
  type: CLEAR_ALL,
});
