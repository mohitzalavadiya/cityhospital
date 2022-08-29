import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { AuthApiLogin, AuthApiSignup } from '../../context/AuthApi';
import { SignedOut } from '../action/Action';
import * as AT from '../ActionType'


function* SignUp(action) {
   try {
      const user = yield call(AuthApiSignup, action.payload);
      yield put(SignedOut(user))
      yield put({type: AT.SET_ALERT, payload: { text: "Login Successfully", color: "success"}});
      // console.log(user);
   } catch (e) {
      yield put({type: AT.SET_ALERT, payload: { text : e, color: "error"}})
      // console.log(e);
   }
}

function* Login(action) {
   try{
      const user = yield call(AuthApiLogin, action.payload)
      yield put({type: AT.SET_ALERT, payload: { text : user, color: "success"}})
      // console.log(user);

   } catch(e) {
      yield put({type: AT.SET_ALERT, payload: { text : e, color: "error"}})
      // console.log(e);

   }
}

function* WatchSignup() {
  yield takeEvery( AT.SIGN_UP, SignUp);
}

function* WatchLogin() {
   yield takeEvery(AT.LOGIN_UP, Login)
}

export function* AllWatch() {
   yield all([
      WatchSignup(),
      WatchLogin()
   ])
}

export default SignUp;