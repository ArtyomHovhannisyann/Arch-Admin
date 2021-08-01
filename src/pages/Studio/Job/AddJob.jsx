import React, { useEffect, useState } from "react";
import MainLayout from "../../../components/Layout/MainLayout";
import AddButton from "../../../components/Layout/AddButton";
import "../../../css/Job/job.css";
import { Portal } from "react-portal";
import Modal from "../../../components/Modal/Modal";

export default function AddJob({history}) {
  const [openModal, setOpenModal] = useState(false);
  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")

  const pageInfo = {
    pageHeader: "Job",
    className: "studio-layout-info menu-left-bar",
  };
  useEffect(() => {
    const token = document.cookie.split("=");
    if (!token[1]) {
      history.push("/log-in");
    }
  }, [])
  return (
    <div className="add-job">
      {openModal && (
        <Portal node={document.body}>
          <Modal setOpenModal={setOpenModal} type={"job image"} />
        </Portal>
      )}
      <MainLayout pageInfo={pageInfo}>
        <div className="layout-content">
          <div className="layout-content-header">
            <div className="layout-content-info">
              <p className="layout-content-info-header">
                {pageInfo.pageHeader}
              </p>
              <p className="layout-content-info-name">{pageInfo.pageName}</p>
            </div>
          </div>
          <div className="projects-layout-info">
            <div className="layout-info-content">
              <AddButton text="Add" />
              <div className="added-job-info-img">
                <img src="../../images/job.png" className = "job-info-img" alt = "job"/>
                <img src="../../images/trash.png" className="trash-icon" alt="trash" onClick = {()=>setOpenModal(true)}/>
              </div>
              <div className="job-info">
                <input type="text" placeholder="Title" value = {title} onChange = {e=>setTitle(e.target.value)}/>
                <input type="text" placeholder="Description" value = {description} onChange = {e=>setDescription(e.target.value)}/>
                <button>Confirm</button>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
