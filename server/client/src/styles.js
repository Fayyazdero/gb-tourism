import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => (props.whiteColor ? "white" : "#1c1e20")};
     font-family: Poppins;
  }
  .google-signin-btn {
    display: inline-flex;
    align-items: center;
    color: #333 !important;
    box-shadow: none !important;
    padding: 0px;
    border-radius: 2px;
    border: 1px solid #333 !important;
    font-size: 14px;
    font-weight: 500;
    font-family: unset !important;
    border: 1px solid;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .infinite-scroll-component {
    overflow: hidden !important;
    .end-message {
      color: ${(props) => props.theme.lightWhiteColor};
      font-size: 16px;
      font-weight: 500;
      text-align: center;
    }
  }
  .inner {
    min-height: 63.8vh;
  }

  .dashboard-outer {
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
  }

  .dashboard-content {
    width: calc(100% - 300px);
  }
`;
