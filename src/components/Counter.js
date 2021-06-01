import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { CounterActions } from "../actions";

export default function Counter(props) {
  const [amount, setAmount] = useState(2);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter App {JSON.stringify(counter)}</h2>
      <Chip label={counter} />
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
      >
        <Button onClick={() => dispatch(CounterActions.incCount())}>+</Button>
        <Button onClick={() => dispatch(CounterActions.decCount())}>-</Button>
      </ButtonGroup>
      <form noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
        />
      </form>
      <ButtonGroup
        variant="contained"
        color="secondary"
        aria-label="contained primary button group"
      >
        <Button onClick={() => dispatch(CounterActions.incCountAmount(amount))}>
          +
        </Button>
        <Button onClick={() => dispatch(CounterActions.decCountAmount(amount))}>
          -
        </Button>
      </ButtonGroup>
    </div>
  );
}
