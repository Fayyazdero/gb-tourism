import React from "react";
import ErrorIcon from "../svgs/Error";
import { Error } from "./style";

function FieldError(props) {
  const { children } = props;
  return (
    <Error>
      <ErrorIcon className="me-2" /> {children}
    </Error>
  );
}

export default FieldError;
