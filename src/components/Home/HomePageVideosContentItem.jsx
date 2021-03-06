import React, { useState } from "react";
import { Portal } from "react-portal";
import { generalUrl } from "../../lib/constants";
import Modal from "../Modal/Modal";

export default function HomePageVideosContentItem({ data, delVideo }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="layout-contnet-item">
      {openModal && (
        <Portal node={document.body}>
          <Modal
            setOpenModal={setOpenModal}
            type={"home page video"}
            delItem={delVideo}
            currentId={data.id}
          />
        </Portal>
      )}
      <div className="item">
        <iframe
          src={`${generalUrl}/${data.path}`}
          width="400"
          height="200"
          frameBorder="0"
        />
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
