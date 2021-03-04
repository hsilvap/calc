import { GRAY, LIGHTGRAY, ORANGE } from "../../Utils"
import Button from "../Button/Button"
import Input from "../Input/Input"
import { StyledButtonsLayout, StyledInputLayout, StyledLayout } from "./Layout.styled"

const Layout = () => {
    return <StyledLayout>
        <StyledInputLayout>
            <Input />
        </StyledInputLayout>
        <StyledButtonsLayout>
            <Button color={GRAY} bgColor={LIGHTGRAY} value={'AC'} />
            <Button color={GRAY} bgColor={LIGHTGRAY} value={'±'} />
            <Button color={GRAY} bgColor={LIGHTGRAY} value={'%'} />
            <Button bgColor={ORANGE} value={'÷'} />
            <Button value={'7'} />
            <Button value={'8'} />
            <Button value={'9'} />
            <Button bgColor={ORANGE} value={'x'} />
            <Button value={'4'} />
            <Button value={'5'} />
            <Button value={'6'} />
            <Button bgColor={ORANGE} value={'-'} />
            <Button value={'1'} />
            <Button value={'2'} />
            <Button value={'3'} />
            <Button bgColor={ORANGE} value={'+'} />
            <Button value={'0'} />
            <Button value={'0'} />
            <Button value={'.'} />
            <Button bgColor={ORANGE} value={'='} />
        </StyledButtonsLayout>
    </StyledLayout>
}

export default Layout