import React from "react";
import { Modal } from "react-bootstrap";
import { Login } from "../Login";

export const LoginModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Login show={show} handleClose={handleClose} />
      </Modal.Body>
    </Modal>
  );
};
