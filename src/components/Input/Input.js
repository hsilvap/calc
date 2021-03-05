import { useContext } from "react"
import { StoreContext } from "../../context/store"
import { StyledInput } from "./Input.styled"

const Input = () => {
    const { state } = useContext(StoreContext)
    return <StyledInput>
        {state.displayValue != 'Error' ? new Intl.NumberFormat().format(state.displayValue) : state.displayValue}
    </StyledInput>
}

export default Input