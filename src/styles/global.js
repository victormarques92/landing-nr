import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    font-family: 'FuturaPT Medium', sans-serif;
    margin: 0;
    outline: none !important;
    padding: 0;
    scroll-behavior: smooth;
  }

  body,
  html {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.grey};
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  textarea {
    resize: none;
  }

  button, a {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Maven Pro', sans-serif;
  }
`;

export default GlobalStyle;
