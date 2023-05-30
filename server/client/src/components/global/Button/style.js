import styled, { css } from "styled-components";
import { Button as Btn } from "reactstrap";

export const ButtonWrapper = styled(Btn)`
  border: 1px solid ${(props) => props.theme.borderColor} !important;
  border-radius: 3px;
  background: ${(props) => props.theme.bToW};
  color: ${(props) => props.theme.wToB} !important;
  box-shadow: none !important;
  outline: none;
  &:hover,
  &:active,
  &:focus {
    background: ${(props) => props.theme.primaryColor};
  }
  &.black {
    background: ${(props) => props.theme.blackColor};
    color: ${(props) => props.theme.whiteColor} !important;
  }
  &.white {
    background: #fff;
    color: #333 !important;
  }
  &.secondary {
    background: ${(props) => props.theme.fbTw};
    color: ${(props) => props.theme.wToB} !important;
  }
  &.transparent {
    background: ${(props) => props.theme.wToB};
    color: ${(props) => props.theme.primaryColor} !important;
  }
  &.danger {
    background: red;
  }
  &.round {
    border-radius: 100%;
  }
`;
