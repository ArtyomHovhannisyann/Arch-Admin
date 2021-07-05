import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import AddButton from "../../components/Layout/AddButton";

export default function Job({history}) {
  const pageInfo = {
    pageHeader: "Job",
    className: "studio-layout-info",
  };
  function addJob(e) {
      e.preventDefault()
      history.push("job/add")
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
          <div className="credits-layout-info">
            <div className="layout-info-content aricle-info-content">
              <AddButton text="Add" click = {addJob}/>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
