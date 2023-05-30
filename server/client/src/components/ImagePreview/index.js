import React from "react";
import { ImagePreviewWrapper } from "./style";

const ImagePreview = ({ file }) => {
  return (
    <ImagePreviewWrapper>
      <img src={file} alt="image preview" />
    </ImagePreviewWrapper>
  );
};

export default ImagePreview;
