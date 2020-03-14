import { takeEvery } from "redux-saga/effects";

import { watchOrder, purchaseBurgerSaga, fetchOrdersSaga } from "./order";
import * as actionTypes from "../actions/actionTypes";

describe("Orders saga", () => {
  const genObject = watchOrder();

  it("should wait for every INITIATE_PURCHASE_BURGER action and call purchaseBurgerSaga", () => {
    expect(genObject.next().value).toEqual(
      takeEvery(actionTypes.INITIATE_PURCHASE_BURGER, purchaseBurgerSaga)
    );
  });

  it("should wait for every INITIATE_FETCH_ORDERS action and call fetchOrdersSaga", () => {
    expect(genObject.next().value).toEqual(
      takeEvery(actionTypes.INITIATE_FETCH_ORDERS, fetchOrdersSaga)
    );
  });

  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
