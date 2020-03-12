import reducer from "./auth";
import * as actionTypes from "../actions/actionTypes";

describe("Auth reducer", () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: "/"
    };
  });
  it("should return initial state if action is empty", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should save token and userId when AUTH_SUCCESS is dispatched", () => {
    const action = {
      type: actionTypes.AUTH_SUCCESS,
      idToken: "token",
      userId: "userId"
    };
    const expectedState = {
      ...initialState,
      token: action.idToken,
      userId: action.userId
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
