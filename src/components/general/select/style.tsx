import styled from "styled-components"

export const SelectContainer = styled.div<{ $radius?: boolean, width?: string }>`
  width: fit-content;
  padding-left: 5px;
  display: flex;
  flex-direction: row;
  position: relative;
  font-size: 1.25em;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 5;
  
  width: ${props => props.width ? props.width : "100%"};
  
  ${props => props.$radius && `
    padding: 5px;
    border-radius: 5px;
    background: ${props.theme.color.secondary};
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  `}

`
export const OptionsTriangle = styled.span`
  width: 10%;
  height: 10px;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
`

export const Options = styled.div<{ open: boolean, width?: string }>`
  position: absolute;
  top: calc(100% + 5px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.color.third};
  opacity: 0;
  width: ${props => props.width ? props.width : "auto"};
  min-width: calc(100% + 10px);
  max-width: 0px;
  max-height: 0px;
  border-radius: 5px;
  overflow-y: auto;
  overflow-x: clip;
  z-index: 100;
  transition: all 0.3s ease-in-out;

  ${props => props.open && `
      opacity: 1;
      max-width: 210px;
      max-height: 1000%;
      padding-top: 5px;
      padding-bottom: 5px;
  `}
  
  option {
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${props => props.theme.color.secondary};
    }
  }
`