import React from "react";
import { ButtonWrapper } from "./style";

export const Button = ({
  children,
  onClick,
  className,
  type,
  disabled,
  variant,
}) => {
  return (
    <ButtonWrapper
      disabled={disabled}
      type={type}
      className={`btn ${className}`}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  );
};
