import React from "react";
import { Error, InputOuter, InputWrapper } from "./style";

const Input = ({
  name,
  value,
  placeholder,
  type,
  border,
  errors,
  touched,
  className,
  as,
  rows,
  children,
}) => {
  return (
    <InputOuter className="w-100">
      <InputWrapper
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        border={border}
        className={`${className} w-100`}
        error={errors[name]}
        touches={`${touched[name]}`}
        as={as}
        rows={rows}
      >
        {children}
      </InputWrapper>
      {errors[name] && touched[name] ? <Error>{errors[name]}</Error> : null}
    </InputOuter>
  );
};

export default Input;
