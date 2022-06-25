import React from "react";
import "./modal.css";

const Modal = ({ children, handleClose, handleSave }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-content">{children}</div>
        <section className="container-buttons">
          <button onClick={handleClose}>Calcelar</button>
          <button onClick={handleSave}>Guardar</button>
        </section>
      </div>
    </div>
  );
};

export default Modal;
