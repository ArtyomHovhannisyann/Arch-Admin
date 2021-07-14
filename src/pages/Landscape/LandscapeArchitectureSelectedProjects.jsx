import React from "react";
import AddButton from "../../components/Layout/AddButton";
import MainLayout from "../../components/Layout/MainLayout";

export default function LandscapeArchitectureSelectedProjects({history}) {
  const pageInfo = {
    pageHeader: "Landscape Architecture",
    pageName: "Selected Projects",
    className: "studio-layout-info",
  };
  function addProject(e) {
    e.preventDefault();
    history.push("/landscape-architecture/add-selected-projects");
  }
  return (
    <div className="landscape-architecture-selected-projects">
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
