import React from "react";
import MainLayout from "../../../components/Layout/MainLayout";
import AddButton from "../../../components/Layout/AddButton";
import JobItem from "./JobItem";

export default function Job({ history }) {
  const pageInfo = {
    pageHeader: "Studio-",
    pageName: "Jobs",
    className: "studio-layout-info menu-left-bar",
  };
  function addJob(e) {
    e.preventDefault();
    history.push("/studio/jobs/add");
  }
  return (
    <div className="job">
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
          <div className="layout-info">
            <div className="layout-info-content aricle-info-content">
              <AddButton text="Add" click={addJob} />
            </div>
            <div className="job-items">
              <JobItem />
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
