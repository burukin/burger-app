import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import * as actions from "../actions/index";
import * as actionTypes from "../actions/actionTypes";

export function* initIngredientsSaga(action) {
  try {
    const res = yield axios.get(
      "https://react-my-burger-8a92c.firebaseio.com/ingredients.json"
    );
    yield put(actions.setIngredients(res.data));
  } catch (e) {
    yield put(actions.fetchIngredientsFailed());
  }
}

export function* watchBugerBuilder() {
  yield takeEvery(actionTypes.SET_INGREDIENTS_START, initIngredientsSaga);
}
