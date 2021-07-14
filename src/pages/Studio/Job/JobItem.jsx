import React, { useState } from "react";
import { Portal } from "react-portal";
import Modal from "../../../components/Modal/Modal";

export default function JobItem() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="job-item">
      {openModal && (
        <Portal node={document.body}>
          <Modal setOpenModal={setOpenModal} type = {"job image"}/>
        </Portal>
      )}
      <img src="../images/job.png" className="job-item-img" alt="job" />
      <img
        src="../../images/trash.png"
        className="trash-icon"
        alt="trash"
        onClick={() => setOpenModal(true)}
      />
    </div>
  );
}
