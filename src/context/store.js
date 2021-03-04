import React, { useReducer } from 'react'
import { StoreReducer } from './reducer';

export const initialState = {
    operation: '',
    firstValue: 0,
    secondValue: 0,
    result: 0
}

export const StoreContext = React.createContext();

export const StoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(StoreReducer, initialState) 
    return (
        <StoreContext.Provider value={{state, dispatch}}>
            {children}
        </StoreContext.Provider>
    )
}