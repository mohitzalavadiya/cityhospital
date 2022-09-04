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
            user: action.payload,
            isLoading: false,
            error : ''
          };
          case AT.SIGNED_OUT : 
            return {
              ...state,
              user: null,
              error: false,
              isLoading: false,
            };
        default : 
        return state
    }
}