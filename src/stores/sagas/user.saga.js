import { put, takeEvery } from "redux-saga/effects";
import { AuthAPI } from "../../api";
import {
  loginAction,
  loginActionFailed,
  loginActionSuccess,
  registerAction,
  registerActionSuccess,
  registerActionFailed
} from "../slices/user.slice";

function* login(action) {
  try {
    const loginPayload = action.payload;
    const response = yield AuthAPI.login({
      Gmail: loginPayload.Gmail,
      Password: loginPayload.Password,
    });
    yield put(loginActionSuccess(response.data.data.user));
  } catch (e) {
    yield put(loginActionFailed(e.response.data.message));
  }
}
function* register(action) {
  try {
    const registerPayload = action.payload;

    const response = yield AuthAPI.register({
      Name: registerPayload.Name,
      Gmail: registerPayload.Gmail,
      Password: registerPayload.Password,
    });
    yield put(registerActionSuccess(response.data.message));
  } catch (e) {
    yield put(registerActionFailed(e.response.data.message));
  }
}
export function* userSaga() {
  yield takeEvery(loginAction, login);
  yield takeEvery(registerAction, register);
}
