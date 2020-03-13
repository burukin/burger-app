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

  it("should save token and userId when AUTH_START is dispatched", () => {
    const action = {
      type: actionTypes.AUTH_START,
      error: null,
      loading: true
    };
    const expectedState = {
      ...initialState,
      error: action.error,
      loading: action.loading
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
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

  it("should save error when AUTH_FAIL is dispatched", () => {
    const action = {
      type: actionTypes.AUTH_FAIL,
      error: "error",
      loading: false
    };
    const expectedState = {
      ...initialState,
      error: action.error,
      loading: action.loading
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it("should save error when AUTH_LOGOUT is dispatched", () => {
    initialState = {
      token: "token",
      userId: "userId",
      error: null,
      loading: false,
      authRedirectPath: "/"
    };

    const action = {
      type: actionTypes.AUTH_LOGOUT,
      token: null,
      userId: null
    };
    const expectedState = {
      ...initialState,
      token: action.token,
      userId: action.userId
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it("should save error when SET_AUTH_REDIRECT_PATH is dispatched", () => {
    const action = {
      type: actionTypes.SET_AUTH_REDIRECT_PATH,
      path: "/path"
    };
    const expectedState = {
      ...initialState,
      authRedirectPath: action.path
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
