import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
   background-color: #0b0b0b;
   width: 100dvw;
   min-height: 100dvh;
   display: flex;
   flex-direction: column;
   align-items: center;
   color: #fafafa;
   font-family: 'Roboto', sans-serif;
   overflow-x: hidden;
  }
`;
