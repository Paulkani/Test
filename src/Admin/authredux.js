import React from "react";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { put, takeLatest } from "redux-saga/effects";

export const actionTypes = {
  Login: "[Login] Action",
};

const initialstate = {
  data: undefined,
  token: undefined,
};

export const reducers = persistReducer(
  {
    storage,
    key: "testreact",
    whitelist: ["token"],
  },
  (state = initialstate, action) => {
    switch (action.type) {
      case actionTypes.Login: {
        const { token } = action.payload;
        return { token };
      }
      default:
        return state;
    }
  }
);

export const actions = {
  login: (token) => ({
    type: actionTypes.Login,
    payload: { token },
  }),
  requestUser: (user) => ({
    type: actionTypes.UserRequested,
    payload: { user },
  }),
};

// export function * saga(){
//   yield takeLatest(actionTypes.Login, function loginsaga(){
//     yield put(actions.requestUser())
//   })
// }
