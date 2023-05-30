import React from "react";
import { ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Close from "../../svgs/Close";
import { Button } from "../Button";
import { Modal } from "./style";

export const MyModal = ({
  show,
  setShow,
  title,
  btnText,
  closeText,
  children,
  centered,
  fullscreen,
  size,
  onClick,
  ...rest
}) => {
  return (
    <Modal
      fullscreen={fullscreen}
      isOpen={show}
      toggle={() => setShow(true)}
      centered={centered}
      size={size}
      {...rest}
    >
      <ModalHeader>
        {title}
        <Close onClick={() => setShow(false)} />
      </ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        {btnText && (
          <Button className="white" onClick={onClick}>
            {btnText}
          </Button>
        )}
        <Button className="white" onClick={() => setShow(false)}>
          {closeText}
        </Button>
      </ModalFooter>
    </Modal>
  );
};
