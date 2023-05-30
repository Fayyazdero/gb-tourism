import React from "react";
import CheckIcon from "../svgs/CheckIcon";
import CopyIcon from "../svgs/CopyIcon";
import { CopyWrapper } from "./style";

const CopyToClip = ({ onClick, copied, id, copyText }) => {
  return (
    <CopyWrapper onClick={onClick}>
      {copied && id == copyText.id ? (
        <>
          Copied <CheckIcon className="ms-2" />
        </>
      ) : (
        <>
          Click to copy <CopyIcon className="ms-2" />
        </>
      )}
    </CopyWrapper>
  );
};

export default CopyToClip;
