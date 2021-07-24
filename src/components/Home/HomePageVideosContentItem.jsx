import React, { useState } from "react";
import { Portal } from "react-portal";
import Modal from "../Modal/Modal";

export default function HomePageVideosContentItem({ link }) {
  const [openModal, setOpenModal] = useState(false);
  console.log(`https://cdn.plrjs.com/player/66fn8nzyit4nk/k8fabriex66b.js?${link}`);
  return (
    <div className="layout-contnet-item">
      {openModal && (
        <Portal node={document.body}>
          <Modal setOpenModal={setOpenModal} type={"home page image"} />
        </Portal>
      )}
      <div className="item">
        <iframe
          src={`https://cdn.plrjs.com/player/66fn8nzyit4nk/0pq2jyohptqn.html?file=${link}`}
          width ="400"
          height = "200"
          frameBorder="0"
        ></iframe>
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
