import { useContext } from 'react'
import { StoreActions } from '../../context/reducer'
import { StoreContext } from '../../context/store'
import { StyledButton } from './Button.styled'

const Button = ({ value, ...props }) => {
  const { dispatch, state } = useContext(StoreContext)

  const handleClick = () => {
    switch (value) {
      case 'AC': {
        dispatch({ type: StoreActions.CLEAR_ALL })
        break
      }
      case 'C': {
        dispatch({ type: StoreActions.CLEAR })
        break
      }
      case '±': {
        break
      }
      case '%': {
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
        //this is the limit on the iOS calculator
        if (state.displayValue.length === 9 && state.operation === '') {
          return
        }
        if (
          state.displayValue.length === 9 &&
          state.operation !== '' &&
          state.secondValue !== ''
        ) {
          return
        }
        dispatch({ type: StoreActions.TAP, data: { value } })
        break
      }
    }
  }

  return (
    <StyledButton onClick={handleClick} {...props}>
      {value}
    </StyledButton>
  )
}

export default Button
