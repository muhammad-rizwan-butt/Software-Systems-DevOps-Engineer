import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { ProtectedRoute } from "../../components/layout/ProtectedRoute";
import Navbar from "../../components/ui/Navbar";
import Sidebar from "../../components/ui/Sidebar";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <ProtectedRoute>
      <div className="container-fluid">
        <ToastContainer autoClose={2000} closeOnClick />
        <div className={` ${isOpen && "layout__innercontainer"}`}>
          <Sidebar show={isOpen} handleClose={() => setIsOpen(false)} />
          <div className={`${isOpen ? "content__container" : "w-100"}`}>
            <Navbar showSidebar={() => setIsOpen(!isOpen)} />
            {children}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Layout;
