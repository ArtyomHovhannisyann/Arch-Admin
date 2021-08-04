import React, { useState } from "react";
import { Portal } from "react-portal";
import { generalUrl } from "../../lib/constants";
import Modal from "../Modal/Modal";

export default function InProgressProjectItem({ data, delItem }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="selected-project-item">
      <img
        src={data.photos[0] ? `${generalUrl}/${data.photos[0].path}` : ""}
        alt=""
      />
      <img
        src="../images/trash.png"
        className="trash-icon"
        alt=""
        onClick={() => setOpenModal(true)}
      />
      {openModal && (
        <Portal node={document.body}>
          <Modal
            delItem={delItem}
            currentId={data.id}
            setOpenModal={setOpenModal}
            type={"project"}
          />
        </Portal>
      )}
    </div>
  );
}
