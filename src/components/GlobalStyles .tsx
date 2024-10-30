import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bodyBg};
    color: ${({ theme }) => theme.textColor};
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

export default GlobalStyles;
