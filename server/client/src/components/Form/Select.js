import React from "react";
import { Field } from "formik";
import { FieldWrapper } from "./style";
import FieldError from "./FieldErrors";

function Select(props) {
  const {
    label,
    name,
    options,
    outerClass,
    errors,
    touched,
    multiple,
    ...rest
  } = props;
  return (
    <FieldWrapper
      error={errors[name]}
      touches={touched[name]}
      className={outerClass}
    >
      <label htmlFor={name}>{label}</label>
      <Field as="select" multiple={multiple} id={name} name={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          );
        })}
      </Field>
      {errors[name] && touched[name] ? (
        <FieldError>{errors[name]}</FieldError>
      ) : null}
    </FieldWrapper>
  );
}

export default Select;
