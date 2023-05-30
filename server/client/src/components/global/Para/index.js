import React from "react";
import { ParaWrapper } from "./style";
const Para = ({ children, className }) => {
  return <ParaWrapper className={className}>{children}</ParaWrapper>;
};

export default Para;
