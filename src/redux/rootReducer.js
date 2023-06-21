import { combineReducers } from "redux";
import * as auth from "../Admin/authredux";
import { all } from "redux-saga/effects";

export const rootReducer = combineReducers({
  auth: auth.reducers,
});

// export function* rootSaga() {
//   yield all([])
// }
