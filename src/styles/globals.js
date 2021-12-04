import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
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
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;
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
      background-color: rgba(0,0,0,.5);
      cursor: auto;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: teal; 
    }

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  input {
    outline: none;
  }
`;

export default GlobalStyles;
