import React from "react";
import { EmptyWrapper, EmptyTitle } from "./style";
import { Button } from "./../global/Button";
import EmptyBox from "../svgs/EmptyBox";

export const Empty = ({
  height,
  children,
  background,
  color,
  justify,
  fontSize,
  back,
  size,
}) => {
  return (
    <EmptyWrapper
      height={height}
      background={background}
      justify={justify}
      size={size}
    >
      <EmptyTitle
        color={color}
        fontSize={fontSize}
        className="mt-2 d-flex flex-column justify-center align-items-center"
      >
        <EmptyBox />
        {children}
      </EmptyTitle>
      {back && <Button className="primary mt-3">Go Back</Button>}
    </EmptyWrapper>
  );
};
