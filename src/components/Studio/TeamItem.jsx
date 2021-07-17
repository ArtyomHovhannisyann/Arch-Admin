import React, { useState } from "react";
import { Portal } from "react-portal";
import Modal from "../Modal/Modal";

export default function TeamItem({ url, name, description }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="studio-team-item">
      {openModal && (
        <Portal node={document.body}>
          <Modal setOpenModal={setOpenModal} type={"home page image"} />
        </Portal>
      )}
      <img src={url} className="team-item-img" alt="team" />
      <textarea
        disabled
        value={name}
        className="team-name"
        placeholder="*name"
      />
      <textarea
        type="text"
        disabled
        value={description}
        className="team-description"
        placeholder="*description"
      />
      <img
        src="../../images/trash.png"
        className="trash-icon"
        alt="trash"
        onClick={() => setOpenModal(true)}
      />
    </div>
  );
}
