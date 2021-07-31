import React, { useEffect, useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import AddButton from "../../components/Layout/AddButton";
import "../../css/Studio/studio.css";
import "../../css/layout/layout.css";
import { Portal } from "react-portal";
import Modal from "../../components/Modal/Modal";
import { getStudioTeam, setStudioTeam } from "../../lib/requests";
import { generalUrl } from "../../lib/constants";

export default function StudioTeam({ history }) {
  const [openModal, setOpenModal] = useState(false);
  const [teamData, setTeamData] = useState([]);
  const [infoValue, setInfoValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    getStudioTeam(setTeamData);
  }, []);
  useEffect(() => {
    if (teamData.length > 0) {
      setInfoValue(teamData[0].info);
      setDescriptionValue(teamData[0].description);
      setImage(teamData[0].image);
    }
  }, [teamData]);
  const pageInfo = {
    pageHeader: "Studio",
    className: "studio-layout-info menu-left-bar",
    subPage: ["Team", "Members"],
    active: 0,
  };
  function changePage(key) {
    history.push(key);
  }
  function sendData() {
    const data = {
      image: image,
      info: infoValue,
      description: descriptionValue,
    };
    setStudioTeam(data).then(()=>{
      getStudioTeam(setTeamData)
    });
  }
  return (
    <div className="studio-team">
      {openModal && (
        <Portal node={document.body}>
          <Modal setOpenModal={setOpenModal} type={"team image"} />
        </Portal>
      )}
      <MainLayout pageInfo={pageInfo}>
        <div className="layout-content">
          <div className="layout-content-header">
            <div className="layout-content-info">
              <p className="layout-content-info-header">
                {pageInfo.pageHeader}
              </p>
            </div>
            <div className="studio-team-sub-pages">
              {pageInfo.subPage.map((el, i) => {
                return (
                  <p
                    className={i === pageInfo.active ? "active" : ""}
                    key={i}
                    onClick={() => changePage(`${el.toLowerCase()}`)}
                  >
                    {el}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="layout-info">
            <AddButton text="Add" change={(e) => setImage(e.target.files[0])} />
            <div className="team-image">
              <img src={`${generalUrl}/${image}`} alt="team" />
              <img
                src="../../images/trash.png"
                className="trash-icon"
                alt="trash"
                onClick={() => setOpenModal(true)}
              />
            </div>
            <div className="team-description">
              <textarea
                className="team-description-input"
                placeholder="*info"
                value={infoValue}
                onChange={(e) => setInfoValue(e.target.value)}
              />
              <textarea
                className="team-description-input"
                placeholder="*description"
                value={descriptionValue}
                onChange={(e) => setDescriptionValue(e.target.value)}
              />
            </div>
            <div className="confirm-btn" onClick={sendData}>
              Confirm
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
