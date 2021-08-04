import React, { useState } from "react";
import { Portal } from "react-portal";
import { dataURLtoFile } from "../../lib/a-lib";
import { addStudioMember, editStudioMember } from "../../lib/requests";
import Modal from "../Modal/Modal";

export default function TeamItem({
  url,
  nameValue,
  name_hy,
  descriptionValue,
  description_hy,
  isExested,
  delMember,
  currentId,
}) {
  const [openModal, setOpenModal] = useState(false);
  const [description, setDescription] = useState(descriptionValue);
  const [descriptionAM, setDescriptionAM] = useState( description_hy );
  const [name, setName] = useState(nameValue);
  const [nameAM, setNameAM] = useState(name_hy);
  function addMember() {
    const data = {
      name: name,
      name_hy: nameAM,
      description: description,
      description_hy: descriptionAM,
      image: dataURLtoFile(url, `image.png`),
    };
    if (!isExested) {
      addStudioMember(data);
    } else {
      editStudioMember(data,currentId);
    }
  }
  return (
    <div className="studio-team-item">
      {openModal && (
        <Portal node={document.body}>
          <Modal
            setOpenModal={setOpenModal}
            type={"home page image"}
            delItem={delMember}
            currentId={currentId}
          />
        </Portal>
      )}
      <img src={url} className="team-item-img" alt="team" />

      <textarea
        value={name}
        className="team-name"
        placeholder="*name"
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="team-description"
        placeholder="*description"
      />
      <textarea
        value={nameAM}
        className="team-name"
        placeholder="*անուն "
        onChange={(e) => setNameAM(e.target.value)}
      />
      <textarea
        value={descriptionAM}
        onChange={(e) => setDescriptionAM(e.target.value)}
        className="team-description"
        placeholder="*նկարագրություն"
      />
      <button
        className="confirm-btn"
        onClick={addMember}
        style={{ marginTop: "20px" }}
      >
        Confirm
      </button>
      <img
        src="../../images/trash.png"
        className="trash-icon"
        alt="trash"
        onClick={() => setOpenModal(true)}
      />
    </div>
  );
}
