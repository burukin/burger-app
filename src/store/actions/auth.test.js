import moxios from "moxios";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/auth";
import * as authActions from "./auth";

describe("Auth actions", () => {
  let testStore;
  beforeEach(() => {
    moxios.install();
    testStore = createStore(authReducer, compose(applyMiddleware(thunk)));
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("should update store correctly afte authStart action", () => {
    const expectedState = {
      token: null,
      userId: null,
      error: null,
      loading: true,
      authRedirectPath: "/"
    };

    testStore.dispatch(authActions.authStart());
    const newState = testStore.getState();
    expect(newState).toEqual(expectedState);
  });

  test("should update store correctly afte authSuccess action", () => {
    const expectedState = {
      token: "token",
      userId: "userId",
      error: null,
      loading: false,
      authRedirectPath: "/"
    };

    testStore.dispatch(authActions.authSuccess("token", "userId"));
    const newState = testStore.getState();
    expect(newState).toEqual(expectedState);
  });

  test("should update store correctly afte authFail action", () => {
    const expectedState = {
      token: null,
      userId: null,
      error: "error",
      loading: false,
      authRedirectPath: "/"
    };

    testStore.dispatch(authActions.authFail("error"));
    const newState = testStore.getState();
    expect(newState).toEqual(expectedState);
  });

  test("should update store correctly afte logout action", () => {
    const expectedState = {
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: "/"
    };

    testStore.dispatch(authActions.logout());
    const newState = testStore.getState();
    expect(newState).toEqual(expectedState);
  });

  test("should update store correctly after auth action", () => {
    const expectedState = {
      token: "token",
      userId: "userId",
      error: null,
      loading: false,
      authRedirectPath: "/"
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { idToken: "token", localId: "userId" }
      });
    });

    testStore.dispatch(authActions.auth());

    setTimeout(() => {
      const newState = testStore.getState();
      expect(newState).toEqual(expectedState);
    }, 0);
  });
});
