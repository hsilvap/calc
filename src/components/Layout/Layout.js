import { useContext } from 'react'
import { StoreContext } from '../../context/store'
import { GRAY, LIGHTGRAY, ORANGE } from '../../Utils'
import Button from '../Button/Button'
import Input from '../Input/Input'
import {
  StyledButtonsLayout,
  StyledInputLayout,
  StyledLayout
} from './Layout.styled'

const Layout = () => {
  const { state } = useContext(StoreContext)
  console.log(state)
  const getClearBtnValue = () => {
    if (state.firstValue !== '') {
      return 'C'
    } else {
      return 'AC'
    }
  }
  const isActive = (operation) => {
    return state.operation === operation && state.secondValue === ''
  }

  return (
    <StyledLayout data-testid="layout">
      <StyledInputLayout data-testid="input-layout">
        <Input />
      </StyledInputLayout>
      <StyledButtonsLayout data-testid="buttons-layout">
        <Button color={GRAY} bgColor={LIGHTGRAY} value={getClearBtnValue()} />
        <Button color={GRAY} bgColor={LIGHTGRAY} value={'±'} />
        <Button color={GRAY} bgColor={LIGHTGRAY} value={'%'} />
        <Button bgColor={ORANGE} value={'÷'} active={isActive('÷')} />
        <Button value={'7'} />
        <Button value={'8'} />
        <Button value={'9'} />
        <Button bgColor={ORANGE} value={'x'} active={isActive('x')} />
        <Button value={'4'} />
        <Button value={'5'} />
        <Button value={'6'} />
        <Button bgColor={ORANGE} value={'-'} active={isActive('-')} />
        <Button value={'1'} />
        <Button value={'2'} />
        <Button value={'3'} />
        <Button bgColor={ORANGE} value={'+'} active={isActive('+')} />
        <Button value={'0'} gridArea={'cero'} />
        <Button value={'.'} />
        <Button bgColor={ORANGE} value={'='} />
      </StyledButtonsLayout>
    </StyledLayout>
  )
}

export default Layout
