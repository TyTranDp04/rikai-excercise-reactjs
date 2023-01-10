import { delay, put, takeEvery } from "redux-saga/effects";
import { AuthAPI } from "../../api";
import { getRoleAction, getRoleActionFailed, getRoleActionSuccess } from "../slices/role.slice";

function* getRole(action) {
  try {
    yield delay(500);
    const response = yield AuthAPI.getUser(action.payload);
    yield put(getRoleActionSuccess(response?.data?.data));
  } catch (e) {
    yield put(getRoleActionFailed(e.response.data));
  }
}

export function* roleSaga() {
  yield takeEvery(getRoleAction, getRole);
}
