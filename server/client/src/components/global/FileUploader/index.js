import React, { useRef } from "react";
import {
  UploaderWrapper,
  UploaderWrapperInner,
  UploadInp,
  Title,
  SubTitle,
} from "./style";
import Close from "../../svgs/Close";
import Upload from "../../svgs/Upload";

const FileUploader = ({ className, title, file, color, setFile }) => {
  const handleUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const ImageThumb = ({ image, className }) => {
    return (
      <img
        className={`${className} uploaded-img`}
        src={file ? URL.createObjectURL(image) : ""}
        alt={image.name}
      />
    );
  };

  const removeImage = (e) => {
    e.preventDefault();
    setFile("");
  };
  const ref = useRef(null);
  const handleClick = (e) => {
    e.preventDefault();
    if (ref.current) {
      ref.current.click();
    }
  };
  return (
    <UploaderWrapper className={className}>
      {file && (
        <Close
          className="close-icon cursor-pointer"
          onClick={(e) => removeImage(e)}
        />
      )}
      <UploadInp
        type="file"
        ref={ref}
        onChange={(event) => handleUpload(event)}
      />
      <UploaderWrapperInner onClick={(e) => handleClick(e)}>
        {file ? (
          <ImageThumb image={file} className="mt-3" />
        ) : (
          <Upload className="mt-3" />
        )}
        <Title className={color}>{title}</Title>
        <SubTitle>Supports JPG, JPEG, PNG</SubTitle>
      </UploaderWrapperInner>
    </UploaderWrapper>
  );
};

export default FileUploader;
