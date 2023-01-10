import { all, fork } from 'redux-saga/effects';
import { userSaga } from './user.saga';
import { roleSaga } from './role.saga';
import { articleSaga } from './article.saga';

export function* mySaga() {
  console.log('saga run');
  yield all([
    fork(userSaga),
    fork(roleSaga),
    fork(articleSaga),
  ]);
}