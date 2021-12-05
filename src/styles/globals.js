import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;

    @font-face {
        font-family: 'CodeHide';
        font-weight: normal;
        font-style: normal;
        src: url("./assets/fonts/FlowCircularRegular.ttf");
    }
    @font-face {
        font-family: 'PoiretOne';
        font-weight: normal;
        font-style: normal;
        src: url("./assets/fonts/PoiretOne-Regular.ttf");
    }
    @font-face {
        font-family: 'Baloo';
        font-weight: normal;
        font-style: normal;
        src: url("./assets/fonts/BalooBhaijaan2-VariableFont_wght.ttf");
    }
  }

  body {
    font-family: ${(props) => props.theme.fonts.main};
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: 10px;
      cursor: auto;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      border: 3px solid transparent;
      background-clip: padding-box;
      border-radius: 10px;
      background-color: rgba(0,0,0);
      cursor: auto;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: ${(props) => props.theme.colors.primary1}; 
    }

  }
  a {
    text-decoration: none;
    color: inherit;
  }
  li{
    list-style: none;
  }
  input {
    outline: none;
  }
`;

export default GlobalStyles;
