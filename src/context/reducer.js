import { Calculate } from "../CoreOperations";
import { initialState } from "./store";

export const StoreActions = {
    ADD: 'ADD',
    SUBSTRACT: 'SUBSTRACT',
    MULTIPLY: 'MULTIPLY',
    DIVIDE: 'DIVIDE',
    TAP: 'TAP',
    CLEAR: 'CLEAR',
    RESULT: 'RESULT',
}

export function StoreReducer(state, action) {
    switch (action.type) {
        case StoreActions.TAP: {
            const { data } = action;
            if (state.operation === '') {
                const current = state.firstValue + data.value
                return { ...state, firstValue: current, displayValue: current }
            } else {
                const current = state.secondValue + data.value
                return { ...state, secondValue: current, displayValue: current }
            }
            break
        }
        case StoreActions.ADD: {
            return { ...state, operation: '+' }
        }
        case StoreActions.SUBSTRACT: {
            return { ...state, operation: '-' }
        }
        case StoreActions.MULTIPLY: {
            return { ...state, operation: 'x' }
        }
        case StoreActions.DIVIDE: {
            return { ...state, operation: '÷' }
        }
        case StoreActions.RESULT: {
            const { operation, firstValue, secondValue } = state
            const result = Calculate(operation, firstValue, secondValue)
            return { ...state, displayValue: result, operation: '', firstValue: '', secondValue: '' }
        }
        case StoreActions.CLEAR: {
            return { ...initialState }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type} `)
        }
    }
}