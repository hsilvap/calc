import styled from '@emotion/styled'
import { GRAY } from '../../Utils'

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;
    background-color: ${props => props.bgColor ? props.bgColor : GRAY};
    border: solid 1px ${props => props.bgColor ? props.bgColor : GRAY};
    color: ${props => props.color ? props.color : 'white'};
    border-radius: 50%;
    font-size: 2em;
    &:active {
        filter: brightness(120%);
    }
    &:focus {
        outline: 0;
    }
`