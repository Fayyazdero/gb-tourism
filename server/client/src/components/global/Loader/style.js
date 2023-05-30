import styled, { css } from "styled-components";

export const SpinnerWrapper = styled.div`
  ${(props) => {
    switch (props.background) {
      case "white":
        return css`
          background: #fff;
        `;

      default:
        return css`
          background: none;
        `;
    }
  }}
  min-height: ${(props) => props.height}px;
  ${(props) => {
    return css`
      justify-content: ${props.align};
    `;
  }}
  display: flex;
  align-items: center;
  width: ${(props) => (props.width ? props.width : "100%")};
  padding: 5px;
  & .spinner-border {
    color: ${(props) => props.theme.bToW};
    ${(props) => {
      return css`
        color: ${props.changed && props.theme.wToB} !important;
      `;
    }}
  }
  & .text {
    font-weight: 500;
    color: ${(props) => props.theme.bToW};
  }
`;
