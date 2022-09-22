import styled from "styled-components"

export const SphereST = styled.div`
height: 600px;
margin: 0 auto;
perspective: 2000px;
perspective-origin: center center;
position: relative;
top: 50%;
width: 600px;
background: blue;
display: flex;
flex-direction: row;
// border-radius: 50%;


&::after {
    content: '';
    display: block;
    background: green;
    width: 6px;
    height: 6px;
    position: absolute;
    top: calc(50% - 3px);
    left: calc(50% - 3px);
}

&::before {
    content: '';
    display: block;
    background: yellow;
    width: 4px;
    height: 300px;
    position: absolute;
    left: calc(50% - 2px);
    transform: rotate(45deg);
    transform-origin: bottom;
}
`