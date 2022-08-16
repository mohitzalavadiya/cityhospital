import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from '...'

function* SignUp(action) {
   try {
    //   const user = yield call(Api.fetchUser, action.payload.userId);
      yield put({type: AT.SIGN_UP, user: action.payload});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* Watch() {
  yield takeEvery( AT.SIGN_UP, SignUp);
}

export function* AllWatch() {
   yield all([
      Watch()
   ])
}

export default mySaga;