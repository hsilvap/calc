import { StyledButton } from "./Button.styled"

const Button = ({bgColor, color, value}) => {

    const handleClick = (e) => {
        console.log(value)
    }

    return <StyledButton bgColor={bgColor} color={color} onClick={handleClick}>
        {value}
    </StyledButton>
}

export default Button