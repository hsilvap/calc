import { useContext } from "react"
import { StoreContext } from "../../context/store"
import { StyledInput } from "./Input.styled"

const Input = () => {
    const { state } = useContext(StoreContext)

    const formatResult = (amount) => {
        let amountStr = amount.toString()
        if (amount < 0) {
            if (amountStr.length > 10) {
                return amount.toFixed(10)
            }
        } else {
            if (amountStr.length > 9) {
                return +amountStr.substring(0, 9)
            }
        }
        return amount
    }

    return <StyledInput>
        {state.displayValue !== 'Error' ? new Intl.NumberFormat(undefined, { maximumFractionDigits: 12 }).format(formatResult(state.displayValue)) : state.displayValue}
    </StyledInput>
}

export default Input