import styled, { css } from "styled-components";

export const EmptyWrapper = styled.div`
  height: ${(props) => {
    return props.height ? props.height + "px;" : "50px;";
  }};
  background: ${(props) => {
    return props.background ? props.background + ";" : "transparent;";
  }};
  align-items: ${(props) => {
    return props.justify ? props.justify + ";" : "self-start;";
  }};
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  & svg {
    fill: ${(props) => props.theme.primaryColor};
    max-width: ${(props) => (props.size ? props.size : 100)}px;
    max-height: ${(props) => (props.size ? props.size : 100)}px;
  }
`;

export const EmptyTitle = styled.span`
  color: ${(props) => props.theme.primaryColor};
  font: ${(props) => {
    return props.fontSize
      ? `normal 400 ${props.fontSize}px Jost;`
      : "normal 400 15px Jost;";
  }};
`;
