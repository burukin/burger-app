import { put, takeEvery } from "redux-saga/effects";
import axios from "../../axios-orders";

import * as actions from "../actions/index";
import * as actionTypes from "../actions/actionTypes";

function* purchaseBurgerSaga(action) {
  try {
    yield put(actions.purchaseBurgerStart());

    const res = yield axios.post(
      "/orders.json?auth=" + action.payload.token,
      action.payload.orderData
    );

    yield put(
      actions.purchaseBurgerSuccess(res.data.name, action.payload.orderData)
    );
  } catch (err) {
    yield put(actions.purchaseBurgerFail(err));
  }
}

function* fetchOrdersSaga(action) {
  try {
    yield put(actions.fetchOrdersStart());
    const queryParams = `?auth=${action.payload.token}&orderBy="userId"&equalTo="${action.payload.userId}"`;
    const res = yield axios.get("/orders.json" + queryParams);
    const fetchedOrders = [];
    for (let key in res.data) {
      fetchedOrders.push({
        ...res.data[key],
        id: key
      });
    }
    yield put(actions.fetchOrderSuccess(fetchedOrders));
  } catch (err) {
    yield put(actions.fetchOrdersFail(err));
  }
}

export function* watchOrder() {
  yield takeEvery(actionTypes.INITIATE_PURCHASE_BURGER, purchaseBurgerSaga);
  yield takeEvery(actionTypes.INITIATE_FETCH_ORDERS, fetchOrdersSaga);
}
