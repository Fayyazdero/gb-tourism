import styled from "styled-components";

export const LayoutWrapper = styled.div`
  padding-top: 130px;
  @media (max-width: 568px) {
    padding-top: 112px;
  }
  & button.styles_scroll-to-top__2A70v {
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.wToB};
  }
`;

export const Content = styled.div`
  min-height: calc(100vh - 483px);
`;
