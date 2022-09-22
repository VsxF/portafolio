import styled, { css, keyframes } from "styled-components";

const upAnimation = keyframes`
    0% {
        transform-origin: bottom;
        transform: translateY(-100%) translateX(-35%) rotate(135deg);
    }

    50% {
        transform-origin: bottom;
        transform: translateY(-125%) translateX(-35%) rotate(135deg);
    }

    100% {
        transform-origin: bottom;
        transform: translateY(-100%) translateX(-35%) rotate(135deg);
    }
`

export const CrossCircle = styled.circle`
    fill: ${props => props.theme.color.font};
`

export const CrossVertical = styled.g<{ less?: boolean }>`
    opacity: ${props => props.less ? "0" : "1"};
    fill: ${props => props.theme.color.background2};
`

export const CrossHorizontal = styled.g`
    fill: ${props => props.theme.color.background2};
`

export const CrossContainer = styled.g<{ up?: boolean }>`
    ${props => props.up && css`
        transition: all 0.2s ease;
        animation: ${upAnimation} 1s forwards;
    `}
`

const auxHover = css`
${CrossHorizontal} {
    transform-origin: right;
    transform:  matrix(0.63, 0, 0, 0.63, 0, 0) rotate(0deg);
}

${CrossVertical} {
    opacity: 1;
    transform-origin: top;
    transform: matrix(0.63, 0, 0, 0.63, 0, 0) rotate(0deg);
}

${CrossContainer} {
    transform-origin: bottom;
    transform: translateY(-100%) translateX(-35%) rotate(135deg);
}
`

export const CrossSVG = styled.svg<{ less?: boolean, clicked?: boolean, isPhone?: boolean }>`
    transition: all 1s ease;
    width: 100%;
    height: 100%;

    ${props => props.less && `
        transform: scaleY(-1);
    `}

    ${props => !props.isPhone && css`
        &:hover {
            ${auxHover}
        }
    `}

    ${props => props.clicked && css`${auxHover}`}
`

