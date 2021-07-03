import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import AddButton from "../../components/Layout/AddButton";

export default function CommericalInProgressProjects({history}) {
  const pageInfo = {
    pageHeader: "Commerical Projects",
    pageName: "In progress",
    className: "studio-layout-info",
  };
  function addProject(e) {
    e.preventDefault();
    history.push("/commerical/add-in-progress-projects");
  }
  return (
    <div className="commerical-in-progress-projects">
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
          <div className="credits-layout-info">
            <div className="layout-info-content">
              <AddButton text={"Add"} click={addProject} />
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
