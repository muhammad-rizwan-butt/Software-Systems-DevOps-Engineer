import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { IoFilterSharp } from "react-icons/io5";

export const MobileFilterModal = ({ title, children }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>
        <IoFilterSharp size={18} /> <span>Filter</span>
      </button>
      <Modal
        show={show}
        fullscreen={true}
        onHide={() => setShow(false)}
        className="filter__modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{React.cloneElement(children, { setShow })}</Modal.Body>
      </Modal>
    </>
  );
};
