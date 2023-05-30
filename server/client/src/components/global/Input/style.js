import styled from "styled-components";
import { Field as Inp } from "formik";
export const InputWrapper = styled(Inp)`
    border: none;
    border-radius: 0;
    box-shadow: none !important;
    border-${(props) => props.border}: 1px solid ${(props) =>
  props.touches === "true" && props.error
    ? "red"
    : props.theme.sameBorderColor};
    padding: 5px 0 11px 0;
    outline: none;
    color: ${(props) => props.theme.bToW};
    `;

export const InputOuter = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const Error = styled.div`
  position: absolute;
  font-size: 12px;
  bottom: -20px;
  color: #ff5050;
`;
