import styled from '@emotion/styled'
import { GRAY, ORANGE } from '../../Utils'

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;
    background-color: ${props => props.active ? 'white' : props.bgColor ? props.bgColor : GRAY};
    border: solid 1px  ${props => props.active ? 'white' : props.bgColor ? props.bgColor : GRAY};
    color: ${props => props.color ? props.color : props.active ? ORANGE : 'white'};
    border-radius: 50%;
    font-size: 2em;

    @media (max-width: 768px) {
        height: 75px;
        width: 75px;
    }

    ${({ gridArea }) => gridArea && `grid-area: ${gridArea}; border-radius: 60px; width: 100%; padding-right: 115px; 
        @media (max-width: 768px) {
            height: 75px;
            width: 100%;
            padding-right: 90px; 
        }
    `}
  
    &:active {
        filter: brightness(120%);
    }
    &:focus {
        outline: 0;
    }
`