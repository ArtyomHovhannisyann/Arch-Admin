import React, { useEffect, useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import AddButton from "../../components/Layout/AddButton";
import "../../css/Job/job.css";
import { Portal } from "react-portal";
import Modal from "../../components/Modal/Modal";
import { getJobs, setJob } from "../../lib/requests";
import { generalUrl } from "../../lib/constants";
import { dataURLtoFile } from "../../lib/a-lib";
import Loading from "../../components/Loading";

export default function AddJob({ history }) {
  const [jobs, setJobs] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleAM, setTitleAM] = useState("");
  const [descriptionAM, setDescriptionAM] = useState("");
  const [showLoading, setShowLoading] = useState(false);

  const pageInfo = {
    pageHeader: "Job",
    className: "studio-layout-info menu-left-bar",
  };
  useEffect(() => {
    const token = document.cookie.split("=");
    if (!token[1]) {
      history.push("/log-in");
    }
    setShowLoading(true);
    getJobs((data) => {
      setJobs(data);
      setShowLoading(false);
    });
  }, []);

  useEffect(() => {
    if (jobs.length > 0) {
      setTitle(jobs[0].title);
      setTitleAM(jobs[0].title_hy);
      setDescription(jobs[0].description);
      setDescriptionAM(jobs[0].description_hy);
      setImage(`${generalUrl}/${jobs[0].image}`);
    }
  }, [jobs]);

  function sendJob() {
    setShowLoading(true);
    const data = {
      title: title,
      title_hy: titleAM,
      description: description,
      description_hy: descriptionAM,
      image: dataURLtoFile(image),
    };
    setJob(data).then(() => setShowLoading(false));
  }
  function addImage(e) {
    setShowLoading(true);
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.addEventListener("load", (e) => {
      setImage(e.target.result);
    });
    setShowLoading(false);
  }
  function delImage() {
    setShowLoading(true);
    setImage("");
    setShowLoading(false);
  }
  return (
    <div className="add-job">
      {openModal && (
        <Portal node={document.body}>
          <Modal
            setOpenModal={setOpenModal}
            type={"job image"}
            delItem={delImage}
          />
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
      {showLoading && <Loading />}
    </div>
  );
}
