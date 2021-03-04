import styled from '@emotion/styled'

export const StyledLayout = styled.div`
    display: grid;
    grid-template-rows: 1fr 2fr;
    background-color:black;
    min-width: 375px;
    height: 812px;
    padding: 15px 20px;
`
export const StyledInputLayout = styled.div`
    display: flex;
    aling-items: flex-end;
`

export const StyledButtonsLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    width: 100%;
    height: 100%
`