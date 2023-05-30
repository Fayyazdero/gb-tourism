import ReactTagInput from "@pathofdev/react-tag-input";
import React from "react";
import FieldError from "./FieldErrors";
import { FieldWrapper } from "./style";

function TagsInput(props) {
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
    tags,
    setTags,
    onChange,
    ...rest
  } = props;
  return (
    <FieldWrapper
      className={`${outerClass}`}
      error={errors[name]}
      touches={touched[name]}
    >
      {label && (
        <label className="mb-2" htmlFor={name}>
          {label}
        </label>
      )}
      <div className="w-100">
        <ReactTagInput
          name={name}
          placeholder={placeholder}
          tags={tags}
          onChange={onChange}
          {...rest}
        />
        {errors[name] && touched[name] ? (
          <FieldError>{errors[name]}</FieldError>
        ) : null}
      </div>
    </FieldWrapper>
  );
}

export default TagsInput;
