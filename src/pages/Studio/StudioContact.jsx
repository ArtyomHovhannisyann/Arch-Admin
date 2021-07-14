import React, { useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import AddButton from "../../components/Layout/AddButton";
import "../../css/Studio/studio-credits.css";
import { Portal } from "react-portal";
import Modal from "../../components/Modal/Modal";

export default function StudioContact() {
  const [openModal, setOpenModal] = useState(false);
  const pageInfo = {
    pageHeader: "Studio",
    pageName: "Contact",
    className: "studio-layout-info",
  };
  const contacts = ["Adress:", "Phone Number:", "E-mail address:"];
  return (
    <div className="studio-contact">
      {openModal && (
        <Portal node={document.body}>
          <Modal setOpenModal={setOpenModal} type = {"contact image"}/>
        </Portal>
      )}
      <MainLayout pageInfo={pageInfo}>
        <div className="layout-content">
          <div className="layout-content-header">
            <div className="layout-content-info">
              <p className="layout-content-info-header">
                {pageInfo.pageHeader}-
              </p>
              <p className="layout-content-info-name">{pageInfo.pageName}</p>
            </div>
          </div>
          <div className="contact-layout-info">
            <div className="layout-info-content">
              <AddButton text="Add" />
              <div className="contact-image">
                <img src="../images/studio-contact.png" alt="credit-image" />
                <img
                  src="../../images/trash.png"
                  className="trash-icon"
                  alt="trash"
                  onClick={() => setOpenModal(true)}
                />
              </div>
              <div className="studio-contact-page-info">
                {contacts.map((el, i) => {
                  return (
                    <div className="contact-input-div" key={i + "a"}>
                      <p key={i + "b"}>{el}</p>
                      <div className="contact-input">
                        <input type="text" key={i + "c"} />
                        <img
                          src="../../images/trash.png"
                          className="trash-icon"
                          alt="trash"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
