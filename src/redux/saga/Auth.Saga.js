import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { AuthApiLogin, AuthApiSignup, googleNewUser, logOutUser, resetPassword } from '../../context/AuthApi';
import { loginAction, SignedOut } from '../action/Action';
import { setAlertValue } from '../action/Alert.action';
import * as AT from '../ActionType'


function* SignUp(action) {
   try {
      const user = yield call(AuthApiSignup, action.payload);
      // yield put(SignedOut(user))
      yield put(setAlertValue({type: AT.SET_ALERT, payload: { text: user, color: "success"}}));
      // console.log(user);
   } catch (e) {
      yield put(setAlertValue({type: AT.SET_ALERT, payload: { text : e, color: "error"}}))
      // console.log(e);
   }
}

function* Login(action) {
   try{
      const user = yield call(AuthApiLogin, action.payload)
      yield put(loginAction(user))
      yield put(setAlertValue({type: AT.SET_ALERT, payload: { text : "Login successfull", color: "success"}}))
      // console.log(user);

   } catch(e) {
      yield put(setAlertValue({type: AT.SET_ALERT, payload: { text : e, color: "error"}}))
      // console.log(e);

   }
}
function* LogedOutSaga(action) {
   try {
     const user = yield call(logOutUser, action.payload);
     yield put(SignedOut({type: AT.SIGNED_OUT})) 
     yield put(setAlertValue({type: AT.SET_ALERT, payload: {text: user.payload, color: "success"}})) 
   } catch (e) {; 
     yield put(SignedOut({type: AT.SET_ALERT, payload: {text : e, color: "error"}}))
   }
 }

 function* googleSignUpSaga() {
   try {
     const user = yield call(googleNewUser);
     yield put(loginAction(user))
     yield put(setAlertValue({type: AT.SET_ALERT, payload: {text : "You are successfully login with Google", color: "success"}}))
   } catch (e) {
     yield put(setAlertValue({type: AT.SET_ALERT, payload: {text : e, color: "error"}}))
   }
 }

 function* resetPasswordSaga(action) {
   try {
     const user = yield call(resetPassword, action.payload);
     yield put(setAlertValue({type: AT.SET_ALERT, payload: {text : user.payload, color: "success"}}))
   } catch (e) {
     yield put(setAlertValue({type: AT.SET_ALERT, payload: {text : e, color: "error"}}))
   }
 }

function* WatchSignup() {
  yield takeEvery( AT.SIGN_UP, SignUp);
}

function* WatchLogin() {
   yield takeEvery(AT.LOGIN_UP, Login)
}
function* watchLogOut() {
   yield takeEvery(AT.SIGNED_OUT, LogedOutSaga); 
 }
 function* watchGoogleSignIn() {
   yield takeEvery(AT.GOOGLE_SIGN_UP, googleSignUpSaga); 
 }

 function* watchResetPassword() {
   yield takeEvery(AT.PASSWOED_RESET, resetPasswordSaga); 
 }

export function* AllWatch() {
   yield all([
      WatchSignup(),
      WatchLogin(),
      watchLogOut(),
      watchResetPassword(),
      watchGoogleSignIn()
   ])
}

export default SignUp;