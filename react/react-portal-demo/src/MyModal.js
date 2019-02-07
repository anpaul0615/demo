import React from "react";
import "./MyModal.css";

const MyModal = ({ onClose }) => {
  return (
    <div className="MyModal">
      <div className="content">
        <h3>Modal</h3>
        <p>~~~~~~</p>
        <button onClick={onClose}>close</button>
      </div>
    </div>
  );
};

export default MyModal;
