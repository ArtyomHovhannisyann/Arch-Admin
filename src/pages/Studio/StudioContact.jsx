import React, { useEffect, useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import AddButton from "../../components/Layout/AddButton";
import "../../css/Studio/studio-credits.css";
import { Portal } from "react-portal";
import Modal from "../../components/Modal/Modal";
import { getContacts, setContact } from "../../lib/requests";
import { generalUrl } from "../../lib/constants";
import { dataURLtoFile } from "../../lib/a-lib";
import Loading from "../../components/Loading";

export default function StudioContact({ history }) {
  const [openModal, setOpenModal] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [image, setImage] = useState("");
  const [address, setAddress] = useState(``);
  const [phoneNumber, setPhoneNumber] = useState(``);
  const [emailAddress, setEmailAddress] = useState(``);
  const [showLoading, setShowLoading] = useState(false);

  const pageInfo = {
    pageHeader: "Studio",
    pageName: "Contact",
    className: "studio-layout-info menu-left-bar",
  };
  useEffect(() => {
    const token = document.cookie.split("=");
    if (!token[1]) {
      history.push("/log-in");
    }
    setShowLoading(true)
    getContacts((data) => {
      setContacts(data);
      setShowLoading(false)
    });
  }, []);
  useEffect(() => {
    contacts.length > 0 && setAddress(contacts[0].address);
    contacts.length > 0 && setPhoneNumber(contacts[0]["phone-number"]);
    contacts.length > 0 && setEmailAddress(contacts[0].email);
    contacts.length > 0 && setImage(`${generalUrl}/${contacts[0].image}`);
  }, [contacts]);
  function sendContact() {
    setShowLoading(true)
    const data = {
      address: address,
      "phone-number": phoneNumber,
      email: emailAddress,
      image: dataURLtoFile(image),
    };
    setContact(data).then(()=>setShowLoading(false));
  }
  function addImage(e) {
    setShowLoading(true)
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.addEventListener("load", (e) => {
      setImage(e.target.result);
    });
    setShowLoading(false)
  }
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
              <AddButton text="Add" change={addImage} />
              <div className="contact-image">
                <img src={image} alt="credit-image" />
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
                <button
                  onClick={sendContact}
                  className="confirm-btn"
                  style={{ marginTop: "20px" }}
                >
                  {" "}
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
      {showLoading && <Loading />}
    </div>
  );
}
