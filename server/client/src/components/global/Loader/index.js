import React from "react";
import { Spinner } from "reactstrap";
import { SpinnerWrapper } from "./style";

export const Loader = ({
  background,
  width,
  changed,
  color,
  height,
  align,
  text,
}) => {
  return (
    <SpinnerWrapper
      background={background}
      width={width}
      height={height}
      align={align}
      changed={changed}
    >
      <Spinner color={color}></Spinner>
      {text && <div className="ms-2 text">{text}</div>}
    </SpinnerWrapper>
  );
};
