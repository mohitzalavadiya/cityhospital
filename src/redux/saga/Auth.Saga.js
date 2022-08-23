import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { AuthApi } from '../../context/AuthApi';
import * as AT from '../ActionType'


function* SignUp(action) {
   try {
      const user = yield call(AuthApi, action.payload);
      // yield put({type: AT.SIGN_UP, user: action.payload});
   } catch (e) {
      // yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* WatchSignup() {
  yield takeEvery( AT.SIGN_UP, SignUp);
}

export function* AllWatch() {
   yield all([
      WatchSignup()
   ])
}

export default SignUp;