import { useContext } from "react"
import { StoreActions } from "../../context/reducer"
import { StoreContext } from "../../context/store"
import { StyledButton } from "./Button.styled"

const Button = ({ value, ...props }) => {
    const { dispatch, state } = useContext(StoreContext)

    const handleClick = (e) => {
        switch (value) {
            case 'AC': {
                dispatch({ type: StoreActions.CLEAR })
                break
            }
            case '±': {
                dispatch({ type: StoreActions.CLEAR })
                break
            }
            case '%': {
                dispatch({ type: StoreActions.CLEAR })
                break
            }
            case '÷': {
                dispatch({ type: StoreActions.DIVIDE })
                break
            }
            case 'x': {
                dispatch({ type: StoreActions.MULTIPLY })
                break
            }
            case '-': {
                dispatch({ type: StoreActions.SUBSTRACT })
                break
            }
            case '+': {
                dispatch({ type: StoreActions.ADD })
                break
            }
            case '=': {
                dispatch({ type: StoreActions.RESULT })
                break
            }
            default: {
                if (state.displayValue.length === 9)
                    return
                dispatch({ type: StoreActions.TAP, data: { value } })
                break
            }
        }

    }

    return <StyledButton onClick={handleClick} {...props}>
        {value}
    </StyledButton>
}

export default Button