import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant: ButtonVariant ;
}

const ButtonVariants = {
    primary: 'purple',
    secondary:  'orange',
    danger: 'red',
    success: 'blue'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;
    border-radius: 8px;
    margin: 10px;

    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.color};

    /* ${props => {
        return `background-color: ${ButtonVariants[props.variant]}`
    }} */
`


// .primary {
//     background: blue;
// }

// .secondary {
//     background: yellow;
// }x

// .danger {
//     background: orange;
// }

// .success {
//     background: green;
// }
