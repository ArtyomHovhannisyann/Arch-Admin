import React, { useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import AddButton from "../../components/Layout/AddButton";
import "../../css/Studio/studio-credits.css";
import { Portal } from "react-portal";
import Modal from "../../components/Modal/Modal";

export default function StudioContact() {
  const [openModal, setOpenModal] = useState(false);
  const [address, setAddress] = useState(``);
  const [phoneNumber, setPhoneNumber] = useState(``);
  const [emailAddress, setEmailAddress] = useState(``);

  const pageInfo = {
    pageHeader: "Studio",
    pageName: "Contact",
    className: "studio-layout-info menu-left-bar",
  };

  return (
    <div className="studio-contact">
      {openModal && (
        <Portal node={document.body}>
          <Modal setOpenModal={setOpenModal} type={"contact image"} />
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
          <div className="contact-layout-info ">
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
                <div className="contact-input-div">
                  <p>Address:</p>
                  <div className="contact-input">
                    <input
                      type="text"
                      value={address}
                      onInput={(e) => setAddress(e.target.value)}
                    />
                    <img
                      src="../../images/trash.png"
                      className="trash-icon"
                      alt="trash"
                      onClick={() => setAddress(``)}
                    />
                  </div>
                </div>
                <div className="contact-input-div">
                  <p>Phone Number:</p>
                  <div className="contact-input">
                    <input
                      type="text"
                      value={phoneNumber}
                      onInput={(e) => setPhoneNumber(e.target.value)}
                    />
                    <img
                      src="../../images/trash.png"
                      className="trash-icon"
                      alt="trash"
                      onClick={() => setPhoneNumber(``)}
                    />
                  </div>
                </div>
                <div className="contact-input-div">
                  <p>E-mail address:</p>
                  <div className="contact-input">
                    <input
                      type="text"
                      value={emailAddress}
                      onInput={(e) => setEmailAddress(e.target.value)}
                    />
                    <img
                      src="../../images/trash.png"
                      className="trash-icon"
                      alt="trash"
                      onClick={() => setEmailAddress(``)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
