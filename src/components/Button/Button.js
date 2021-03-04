import { StyledButton } from "./Button.styled"

const Button = ({bgColor, color, children}) => {
    return <StyledButton bgColor={bgColor} color={color}>
        {children}
    </StyledButton>
}

export default Button