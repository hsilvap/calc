import { Calculate } from "../CoreOperations";
import { initialState } from "./store";

export const StoreActions = {
    ADD: 'ADD',
    SUBSTRACT: 'SUBSTRACT',
    MULTIPLY: 'MULTIPLY',
    DIVIDE: 'DIVIDE',
    TAP: 'TAP',
    CLEAR_ALL: 'CLEAR_ALL',
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
            } else if (state.operation === '=') {
                const current = data.value
                return { ...state, firstValue: current, displayValue: current, operation: '' }
            }
            else {
                if (state.firstValue === '') {
                    const current = state.firstValue + data.value
                    return { ...state, firstValue: current, displayValue: current }
                } else {
                    const current = state.secondValue + data.value
                    return { ...state, secondValue: current, displayValue: current }
                }
            }
            break
        }
        case StoreActions.ADD: {
            const { firstValue, secondValue } = state
            if (firstValue !== '' && secondValue !== '') {
                const result = Calculate('+', firstValue, secondValue)
                return { ...state, operation: '+', firstValue: result, secondValue: '', displayValue: result }
            }
            return { ...state, operation: '+' }
        }
        case StoreActions.SUBSTRACT: {
            const { firstValue, secondValue } = state
            if (firstValue !== '' && secondValue !== '') {
                const result = Calculate('-', firstValue, secondValue)
                return { ...state, operation: '-', firstValue: result, secondValue: '', displayValue: result }
            }
            return { ...state, operation: '-' }
        }
        case StoreActions.MULTIPLY: {
            const { firstValue, secondValue } = state
            if (firstValue !== '' && secondValue !== '') {
                const result = Calculate('x', firstValue, secondValue)
                return { ...state, operation: 'x', firstValue: result, secondValue: '', displayValue: result }
            }
            return { ...state, operation: 'x' }
        }
        case StoreActions.DIVIDE: {
            const { firstValue, secondValue } = state
            if (firstValue !== '' && secondValue !== '') {
                const result = Calculate('÷', firstValue, secondValue)
                return { ...state, operation: '÷', firstValue: result, secondValue: '', displayValue: result }
            }
            return { ...state, operation: '÷' }
        }
        case StoreActions.RESULT: {
            const { operation, firstValue, secondValue } = state
            if (firstValue === '' || secondValue === '')
                return { ...state, operation: '=' }
            const result = Calculate(operation, firstValue, secondValue)
            return { ...state, displayValue: result, operation: '', firstValue: '', secondValue: '' }
        }
        case StoreActions.CLEAR: {
            const { firstValue, secondValue } = state
            if (secondValue !== '') {
                return { ...state, displayValue: '', secondValue: '' }
            }
            if (firstValue !== '') {
                return { ...state, displayValue: '', firstValue: '' }
            }
            break;
        }
        case StoreActions.CLEAR_ALL: {
            return { ...initialState }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type} `)
        }
    }
}