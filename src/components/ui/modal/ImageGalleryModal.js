import Image from "next/image";
import React from "react";
import { Modal } from "react-bootstrap";

export const ImageGalleryModal = ({ show, handleClose, images }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{`Tour's Images`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="grid grid-cols-5 gap-10px">
          {images?.map((image, i) => (
            <Image
              src={URL.createObjectURL(image)}
              alt=""
              key={i}
              width={100}
              height={100}
            />
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
};
