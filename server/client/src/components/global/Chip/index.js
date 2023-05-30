import React from "react";
import { ChipWrapper } from "./styles";

const Chip = ({ children, category, className, to }) => {
  return (
    <ChipWrapper to={to ? to : "#"} category={category} className={className}>
      {children ? children.split("-").join(" ") : ""}
    </ChipWrapper>
  );
};

export default Chip;
