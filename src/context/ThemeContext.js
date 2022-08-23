import { useReducer } from "react";
import { createContext } from "react";
import { TOGGLE_THEME } from "./ActionType";
import { ThemeReducer } from "./reducer/Reducer";

const initVal = {
    theme : "light"
}

export const ThemeContext = createContext();

export const ThemeProvider = ( { children} ) => {
    const [state, dispatch] = useReducer(ThemeReducer, initVal);

    const Toggle_Theme = (val) => {
        let Theme = val === "light" ? "dark" : "light";

        dispatch( { type : TOGGLE_THEME, payload : Theme})
    };

    return (
        <ThemeContext.Provider 
        value ={{
            ...state,
            Toggle_Theme}
        }>
            {children}
        </ThemeContext.Provider>
    )
} 