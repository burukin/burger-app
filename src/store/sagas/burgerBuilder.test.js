import { runSaga } from "redux-saga";
import axios from "axios";

import * as actions from "../actions/index";

import { initIngredientsSaga } from "./burgerBuilder";

describe("initIngredientsSaga", () => {
  it("should call axios.get and dispatch success action", async () => {
    const ingredients = { bacon: 0, cheese: 0, meat: 0, salad: 0 };

    const requestIngredients = jest
      .spyOn(axios, "get")
      .mockImplementation(() => Promise.resolve({ data: ingredients }));

    const dispatched = [];

    const result = await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      initIngredientsSaga
    );

    expect(requestIngredients).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([actions.setIngredients(ingredients)]);
    requestIngredients.mockClear();
  });

  it("should call axios.get and dispatch error action", async () => {
    const requestIngredients = jest
      .spyOn(axios, "get")
      .mockImplementation(() => Promise.reject());

    const dispatched = [];

    const result = await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      initIngredientsSaga
    );

    expect(requestIngredients).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([actions.fetchIngredientsFailed()]);
    requestIngredients.mockClear();
  });
});
