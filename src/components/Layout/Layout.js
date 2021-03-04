import { GRAY, LIGHTGRAY, ORANGE } from "../../Utils"
import Button from "../Button/Button"
import { StyledButtonsLayout, StyledInputLayout, StyledLayout } from "./Layout.styled"

const Layout = () => {
    return <StyledLayout>
        <StyledInputLayout>
            0
        </StyledInputLayout>
        <StyledButtonsLayout>
            <Button color={GRAY} bgColor={LIGHTGRAY}>AC</Button>
            <Button color={GRAY} bgColor={LIGHTGRAY}>±</Button>
            <Button color={GRAY} bgColor={LIGHTGRAY}>%</Button>
            <Button bgColor={ORANGE}>÷</Button>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button bgColor={ORANGE}>x</Button>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button bgColor={ORANGE}>-</Button>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button bgColor={ORANGE}>+</Button>
            <Button>0</Button>
            <Button>0</Button>
            <Button>.</Button>
            <Button bgColor={ORANGE}>=</Button>

        </StyledButtonsLayout>
    </StyledLayout>
}

export default Layout