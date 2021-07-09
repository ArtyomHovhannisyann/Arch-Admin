import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import AddButton from "../../components/Layout/AddButton";
import "../../css/Job/job.css";

export default function AddJob() {
  const pageInfo = {
    pageHeader: "Job",
    className: "studio-layout-info",
  };
  return (
    <div className="add-job">
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
          <div className="credits-layout-info">
            <div className="layout-info-content">
              <AddButton text="Add" />
              <div className="added-job-info-img">
                <img src="../images/job.png" className = "job-info-img" alt = "job"/>
                <img src="../../images/trash.png" className="trash-icon" alt="trash"/>
              </div>
              <div className="job-info">
                <input type="text" placeholder="Title" />
                <input type="text" placeholder="Description" />
                <button>Confirm</button>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
