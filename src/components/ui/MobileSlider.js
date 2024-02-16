import React from "react";
import { Modal } from "react-bootstrap";

export const MobileSlider = ({ show, handleClose, title, children }) => {
  return (
    <Modal
      show={show && window.innerWidth <= 592}
      fullscreen={true}
      onHide={handleClose}
      className="slider__modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};
