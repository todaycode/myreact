import { CounterActions } from "../actions";

export default function (state = 0, action) {
  switch (action.type) {
    case CounterActions.INC_COUNT:
      return state + 1;
    case CounterActions.DEC_COUNT:
      return state - 1;
    case CounterActions.INC_COUNT_AMOUNT:
      return state + action.amount;
    case CounterActions.DEC_COUNT_AMOUNT:
      return state - action.amount;
    default:
      return state;
  }
}
