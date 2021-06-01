import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TodosActions } from "../actions";

import TodoEdit from './TodoEdit';

function Todo(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <List
        key={props.id}
        component="nav"
        aria-label="secondary mailbox folders"
      >
        <ListItem button onClick={(e) => alert()}>
          <ListItemText primary={props.todo} />
          <ListItemIcon>
            <CloseIcon
              onClick={(e) => {
                dispatch(TodosActions.removeTodo(props.id));
                e.stopPropagation();
              }}
            />
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );
}

function AddTodo(props) {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("Web");
  function generateTodo() {
    dispatch(TodosActions.addTodo(Date.now() + todo));
  }
  return (
    <div className="d-flex">
      <form noValidate autoComplete="off">
        <TextField
          id="filled-basic"
          label="ToDo"
          variant="filled"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </form>
      <Button onClick={generateTodo} variant="contained" color="primary">
        Add Todo
      </Button>
    </div>
  );
}

export default function (props) {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <h2>ToDos App</h2>
      <AddTodo />
      <TodoEdit/>
      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} todo={todo.todo} />
      ))}
    </div>
  );
}
