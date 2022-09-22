import styled from "styled-components";

export const Button = styled.button<{ center?: boolean, width?: string }>`
  width: ${props => props.width ? props.width : "40%"};
  font-size: 1.24em;
  border: none;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  user-select: none;
  box-shadow: 5px 5px 10px 10px rgba(0, 0, 0, 0.34);
  background: ${props => props.theme.color.third};

  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

  @media only screen and (max-width: 768px) {
    width: 70%;
  }

  ${props => props.center && `
    margin-left: 30%;
    margin-right: 30%;

    @media only screen and (max-width: 768px) {
      margin-left: 15%;
      margin-right: 15%;
    }
  `}

  &:hover {
    background: ${props => props.theme.color.secondary};
    // box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, 
    //             rgba(0, 0, 0, 0.12) 0px -12px 30px, 
    //             rgba(0, 0, 0, 0.12) 0px 4px 6px, 
    //             rgba(0, 0, 0, 0.17) 0px 12px 13px, 
    //             rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`

export default Button;