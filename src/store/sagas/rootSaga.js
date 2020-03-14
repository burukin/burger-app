import { all } from "redux-saga/effects";
import { watchBugerBuilder } from "./burgerBuilder";
import { watchOrder } from "./order";

export default function*() {
  yield all([watchBugerBuilder(), watchOrder()]);
}
