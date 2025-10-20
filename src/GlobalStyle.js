import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --max-width: 1100px;
  }

  * { box-sizing: border-box; }

  html, body, #root {
    height: 100%;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: 'Segoe UI', 'Roboto', Arial, sans-serif;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
  }

  main {
    padding: 20px;
  }

  h1, h2, h3 {
    margin-top: 0;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Form elements */
  input, textarea, select, button {
    font-family: inherit;
    font-size: 1rem;
  }

  input, textarea {
    padding: 8px 10px;
    border: 1px solid ${(props) => props.theme.colors.tileBorder};
    border-radius: 8px;
    width: 100%;
    outline: none;
  }

  textarea { resize: vertical; }

  button {
    background: ${(props) => props.theme.colors.accent};
    color: #fff;
    border: none;
    padding: 10px 14px;
    border-radius: 8px;
    cursor: pointer;
  }

  /* Responsive typography */
  @media (max-width: 680px) {
    body { font-size: 15px; }
    h2 { font-size: 1.5rem; }
  }

  @media (min-width: 1200px) {
    body { font-size: 17px; }
  }
`;

export default GlobalStyle;