import React, { useState } from "react";
import { Portal } from "react-portal";
import Modal from "../Modal/Modal";

export default function HomePagePicturesContnetItem({ data, delImage }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="layout-contnet-item">
      {openModal && (
        <Portal node={document.body}>
          <Modal
            delImage={delImage}
            currentId = {data.id}
            setOpenModal={setOpenModal}
            type={"home page image"}
          />
        </Portal>
      )}
      <div className="item">
        <img src={data.url} className="item-image" alt="" />
        <img
          src="../../images/trash.png"
          className="trash-icon"
          alt="trash"
          onClick={() => setOpenModal(true)}
        />
      </div>
    </div>
  );
}
