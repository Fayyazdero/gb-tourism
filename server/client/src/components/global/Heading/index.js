import React from "react";
import { HeadingWrapper } from "./style";

export const Heading = ({ children, className }) => {
  return <HeadingWrapper className={className}>{children}</HeadingWrapper>;
};
