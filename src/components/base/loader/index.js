import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <div
      role="status"
      className="position-fixed z-index w-100 vh-100 bg-white d-flex justify-content-center align-items-center overflow-hidden"
    >
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loader;
