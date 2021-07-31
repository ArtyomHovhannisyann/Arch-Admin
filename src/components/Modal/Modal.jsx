import React from "react";
import "../../css/Modal/modal.css";

export default function Modal({ type, setOpenModal, delItem,currentId}) {
  function del() {
    delItem(currentId)
    setOpenModal(false)
  }
  return (
    <div
      className="delete-modal"
      onClick={(e) => {
        e.target.className === "delete-modal" && setOpenModal(false);
      }}
    >
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
          <button className="yes-btn" onClick={del}>
            Yes
          </button>
          <button className="no-btn" onClick={() => setOpenModal(false)}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}
