import * as AT from '../ActionType'

export const signinAction = (values) => (dispatch) => {

    dispatch({ type : AT.SIGN_UP, payload : values})
}