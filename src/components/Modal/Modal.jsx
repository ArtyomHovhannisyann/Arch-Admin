import React from "react";
import "../../css/Modal/modal.css";

export default function Modal({ type, setOpenModal }) {
  return (
    <div className="delete-modal">
      <div className="delete-modal-container">
        <div className="modal-header">
          <img
            src="../../images/close-icon.png"
            alt="close"
            onClick={() => setOpenModal(false)}
          />
        </div>
        <div className="modal-content">
          <p>Do you want to delete the {type}?</p>
          <button className = "yes-btn">Yes</button>
          <button className = "no-btn" onClick = {()=>setOpenModal(false)}>No</button>
        </div>
      </div>
    </div>
  );
}
