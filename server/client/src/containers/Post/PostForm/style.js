import styled from "styled-components";

export const FormWrapper = styled.div`
  & .invalid-feedback {
    position: absolute;
    left: 12px;
  }
  & .form-group {
    position: relative;
  }
  & .form-control:focus {
    background: transparent;
    box-shadow: none;
  }
  & .spinner-border {
    width: 1rem;
    height: 1rem;
  }
`;