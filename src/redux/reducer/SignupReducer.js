import * as AT from '../ActionType'

const initVal = {
    isLoading : false,
    user : null,
    error : ''
}

export const SignupReducer = (state = initVal, action) => {
    switch (action.type) {
        case AT.LOGIN_UP:
          return {
            ...state,
            data: action.payload,
            isLoading: false,
            error : ''
          };
        default : 
        return state
    }
}