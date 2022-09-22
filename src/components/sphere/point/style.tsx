import styled from "styled-components";

export const PointCSS = styled.div.attrs<{ opacity: number, transform: string }>(props => ({
    style: {
        // opacity: props.opacity
        // transform: props.transform
    }
}))`
background: #E87A24;
border-radius: 50%;
height: 10px;
position: absolute;
transform-style: preserve-3d;
width: 10px;
color: white;
font-weight: bold;
// transform: translate3d(151px,150px,0px);
`