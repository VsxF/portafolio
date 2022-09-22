import 'styled-components';
import { createGlobalStyle, ITheme } from 'styled-components';

declare module 'styled-components' {
  export interface ITheme {
    id: string,
    name: string,
    color: {
      main: string;
      secondary?: string;
      third?: string;
      title?: string;
      background?: string;
      background2?: string;
      font?: string;
      lines?: string;
    };
  }
}

// declare module 'module-name' {
//   export function myFunction(): string;
// }

export default createGlobalStyle<{ theme: ITheme }>`
  html * {
    //font-size: 20px;
    font-family: cabin;
    letter-spacing: 1px;

    // @media only screen and (max-width: 1350px) {
    //   font-size: 19px;
    // };
  
    // @media only screen and (max-width: 768px) {
    //   font-size: 18px;
    // }
  
    // @media only screen and (max-width: 480px) {
    //   font-size: 16px;
    // }
  }

  body{
    background-color: ${props => props.theme.color.background};
    margin: 0;
    display: flex;
    flex-direction: column;
    max-width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    overflow-x: hidden;

    a {
      color: ${props => props.theme.color.font};
      cursor: pointer;
      text-decoration: none;
    } 

    >footer {
      display: table-row;
    }
  }

  h1,
  h2 {
    font-family: Cairo;
    letter-spacing: normal;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.color.main};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track-piece {
    display:none;
  }
`