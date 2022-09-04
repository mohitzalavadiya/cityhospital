import * as AT from '../ActionType'

export const signupAction = (values) => (dispatch) => {

    dispatch({ type : AT.SIGN_UP, payload : values})
}

export const loginAction = (values) => (dispatch) => {
    dispatch( {type : AT.LOGIN_UP, payload : values})
}
export const SignedOut = (values) => (dispatch) => {
    dispatch({ type : AT.SIGNED_OUT, payload : values})
}
export const resetPasswordAction = (mail) => (dispatch) => {
    dispatch({type: AT.PASSWOED_RESET, payload:mail})
}
export const googleSighUpAction = () => (dispatch) => {
    dispatch({type: AT.GOOGLE_SIGN_UP})
}