import React, { useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import AddButton from "../../components/Layout/AddButton";
import "../../css/Studio/studio.css";
import "../../css/layout/layout.css";
import { Portal } from "react-portal";
import Modal from "../../components/Modal/Modal";

export default function StudioTeam({ history }) {
  const [openModal, setOpenModal] = useState(false);
  const pageInfo = {
    pageHeader: "Studio",
    className: "studio-layout-info menu-left-bar",
    subPage: ["Team", "Members"],
    active: 0,
  };
  function changePage(key) {
    history.push(key);
  }

  return (
    <div className="studio-team">
      {openModal && (
        <Portal node={document.body}>
          <Modal setOpenModal={setOpenModal} type = {"team image"}/>
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
            <AddButton text="Add" />
            <div className="team-image">
              <img src="../images/team.png" alt="team" />
              <img
                src="../../images/trash.png"
                className="trash-icon"
                alt="trash"
                onClick = {()=>setOpenModal(true)}
              />
            </div>
            <div className="team-description">
              <textarea
                className="team-description-input"
                placeholder="*info"
              />
              <textarea
                className="team-description-input"
                placeholder="*description"
              />
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
