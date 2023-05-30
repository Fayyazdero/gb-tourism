import React, { useRef } from "react";
import ImagePreview from "../ImagePreview";
import { UploaderWrapper, UploaderWrapperInner } from "./style";
import Image from "../svgs/Image";
import FieldError from "./FieldErrors";
import { Loader } from "../global/Loader";
import Close from "../svgs/Close";

function Uploader(props) {
  const {
    label,
    name,
    type,
    onChange,
    selected,
    outerClass,
    loading,
    errors,
    touched,
    onClick,
    ...rest
  } = props;
  const fileRef = useRef(null);
  return (
    <UploaderWrapper
      onClick={() => {
        fileRef.current.click();
      }}
      className="mb-4"
    >
      <div className={outerClass}>
        {label && <label htmlFor={name}>{label}</label>}
        <div className="w-100">
          <UploaderWrapperInner
            error={errors[name]}
            touches={touched[name]}
            className="d-flex align-items-center w-100"
          >
            {loading ? (
              <Loader width="50px" />
            ) : selected ? (
              <div className="position-relative">
                <Close className="delete-file" onClick={onClick} />
                <ImagePreview file={selected} />
              </div>
            ) : (
              <Image className="upload-icon" />
            )}
            <p className="mb-0 uploader-text">
              Click here to <span>Upload your Image</span>
            </p>
            <input
              hidden
              ref={fileRef}
              id={name}
              onChange={onChange}
              name={name}
              type={type}
              {...rest}
            />
          </UploaderWrapperInner>
          {errors[name] && touched[name] ? (
            <FieldError className="ps-0">{errors[name]}</FieldError>
          ) : null}
        </div>
      </div>
    </UploaderWrapper>
  );
}

export default Uploader;
