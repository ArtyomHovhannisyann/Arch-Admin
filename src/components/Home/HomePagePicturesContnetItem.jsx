import React, { useState } from "react";
import {generalUrl} from "../../lib/constants"
import { Portal } from "react-portal";
import Modal from "../Modal/Modal";
import "../../css/Home/homeMenuPage.css"
export default function HomePagePicturesContnetItem({ data, delImage }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="layout-contnet-item">
      {openModal && (
        <Portal node={document.body}>
          <Modal
            delItem={delImage}
            currentId = {data.id}
            setOpenModal={setOpenModal}
            type={"home page image"}
          />
        </Portal>
      )}
      <div className="item">
        <img src={`${generalUrl}/${data.path}`} className="item-image" alt="" />
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
