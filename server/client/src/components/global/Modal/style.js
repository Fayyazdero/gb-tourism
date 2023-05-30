import { Modal as CustomModal } from "reactstrap";
import styled from "styled-components";

export const Modal = styled(CustomModal)`
  & .modal-content {
    border: none;
  }
  & .modal-header {
    /* border-bottom: 1px solid #474747de !important; */
    & h5 {
      font: normal 500 16px Jost;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      & svg {
        cursor: pointer;
      }
    }
    background: ${(props) => props.theme.lightBlackColor};
    color: ${(props) => props.theme.primaryColor};
    border-bottom: 1px solid ${(props) => props.theme.borderColor} !important;
  }
  & .modal-body {
    font: normal 500 16px Jost;
    background: ${(props) => props.theme.lightBlackColor};
    color: ${(props) => props.theme.primaryColor};
    /* border: 1px solid #474747de !important;
    */
  }
  & .modal-footer {
    /* border: 1px solid #474747de !important;
    border-top: 0px solid #474747de !important; */
    /* background: ${(props) => props.theme.bToLG}; */
    border-top: 1px solid ${(props) => props.theme.borderColor} !important;
    background: ${(props) => props.theme.lightBlackColor};
  }
`;
