import { Field } from "formik";
import React from "react";
import FieldError from "./FieldErrors";
import { Error, FieldWrapper } from "./style";

function Textarea(props) {
  const {
    label,
    name,
    outerClass,
    errors,
    touched,
    type,
    placeholder,
    children,
    className,
    rows,
  } = props;
  return (
    <FieldWrapper
      className={`${outerClass}`}
      error={errors[name]}
      touches={touched[name]}
    >
      {label && <label htmlFor={name}>{label}</label>}{" "}
      <div className="w-100">
        <Field
          name={name}
          type={type}
          placeholder={placeholder}
          className={`${className} w-100`}
          as="textarea"
          rows={rows}
        >
          {children}
        </Field>
        {errors[name] && touched[name] ? (
          <FieldError>{errors[name]}</FieldError>
        ) : null}
      </div>
    </FieldWrapper>
  );
}

export default Textarea;
