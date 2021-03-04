export const StoreActions = {
    ADD: 'ADD',
    SUBSTRACT: 'SUBSTRACT',
    MULTIPLY: 'MULTIPLY',
    DIVIDE: 'DIVIDE',
}

export function StoreReducer (state, action) {
    switch (action.type) {
        case StoreActions.ADD: {
            //add
        }
        default:{
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}