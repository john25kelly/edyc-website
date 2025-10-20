import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 body {
   background: ${(props) => props.theme.colors.background};
   color: ${(props) => props.theme.colors.text};
   font-family: 'Segoe UI', 'Roboto', Arial, sans-serif;
   margin: 0;
   padding: 0;
 }
 a {
   color: ${(props) => props.theme.colors.accent};
   text-decoration: none;
   &:hover {
     text-decoration: underline;
   }
 }
`;

export default GlobalStyle;