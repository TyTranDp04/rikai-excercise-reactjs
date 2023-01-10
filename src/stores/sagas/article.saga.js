import { delay, put, takeEvery } from "redux-saga/effects";
import { getArticleAction, getArticleActionFailed, getArticleActionSuccess } from "../slices/article.slice";
import { ArticleAPI } from "../../api/article.api";

function* getArticle(action) {
  try {
    yield delay(500);
    const response = yield ArticleAPI.get(action.payload);
    yield put(getArticleActionSuccess(response?.data?.data));
  } catch (e) {
    yield put(getArticleActionFailed(e.response.data));
  }
}

export function* articleSaga() {
  yield takeEvery(getArticleAction, getArticle);
}
