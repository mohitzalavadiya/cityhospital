import * as AT from '../ActionType'

export const setAlertValue = (data) => (dispatch) => {
    dispatch({type: AT.SET_ALERT, payload: data})
}
export const resetAlertValue = () => (dispatch) =>{
    dispatch({type: AT.RESET_ALERT})
}
