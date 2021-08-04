import React, { useEffect, useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import AddButton from "../../components/Layout/AddButton";
import "../../css/Job/job.css";
import { Portal } from "react-portal";
import Modal from "../../components/Modal/Modal";
import { getJobs, setJob } from "../../lib/requests";
import { generalUrl } from "../../lib/constants";
import { dataURLtoFile } from "../../lib/a-lib";

export default function AddJob({ history }) {
  const [jobs, setJobs] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleAM, setTitleAM] = useState("");
  const [descriptionAM, setDescriptionAM] = useState("");

  const pageInfo = {
    pageHeader: "Job",
    className: "studio-layout-info menu-left-bar",
  };
  useEffect(() => {
    const token = document.cookie.split("=");
    if (!token[1]) {
      history.push("/log-in");
    }
    getJobs((data) => {
      setJobs(data);
    });
  }, []);
  useEffect(() => {
    jobs.length > 0 && setTitle(jobs[0].title);
    jobs.length > 0 && setDescription(jobs[0].description);
    jobs.length > 0 && setImage(`${generalUrl}/${jobs[0].image}`);
  }, [jobs]);
  function sendJob() {
    const data = {
      title: title,
      description: description,
      image: dataURLtoFile(image),
    };
    setJob(data);
  }
  function addImage(e) {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.addEventListener("load", (e) => {
      setImage(e.target.result);
    });
  }
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
              <AddButton text="Add" change={addImage} />
              <div className="added-job-info-img">
                <img
                  src={jobs.length > 0 ? image : ""}
                  className="job-info-img"
                  alt="job"
                />
                <img
                  src="../../images/trash.png"
                  className="trash-icon"
                  alt="trash"
                  onClick={() => setOpenModal(true)}
                />
              </div>
              <div className="job-info">
                <input
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Վերնագիր"
                  value={titleAM}
                  onChange={(e) => setTitleAM(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Նկարագրություն"
                  value={descriptionAM}
                  onChange={(e) => setDescriptionAM(e.target.value)}
                />
                <div className="confirm">
                  <button className="confirm-btn" onClick={sendJob}>
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
