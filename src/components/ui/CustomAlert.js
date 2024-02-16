import React from "react";
import { Alert, Button } from "react-bootstrap";

export const CustomAlert = ({ show, variant, handleClose, message }) => {
  return (
    <Alert show={show} variant={variant} className="custom__alert" dismissible>
      <p>{message}</p>
      <hr />
      <div className="d-flex justify-content-end">
        <Button onClick={handleClose} variant={`outline-${variant}`}>
          Close me
        </Button>
      </div>
    </Alert>
  );
};
