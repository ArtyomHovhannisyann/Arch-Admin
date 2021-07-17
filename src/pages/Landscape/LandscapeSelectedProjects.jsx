import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import SelectedProjects from "../../components/SelectedProjects/SelectedProjects";

export default function LandscapeSelectedProjects({history}) {
  const pageInfo = {
    pageHeader: "Landscape Architecture",
    pageName: "Selected Projects",
    className: "studio-layout-info menu-left-bar",
  };
  function addProject(e) {
    e.preventDefault();
    history.push("/landscape-architecture/add-selected-project");
  }
  return (
    <div className="houses-selected-projects">
      <MainLayout pageInfo={pageInfo}>
        <SelectedProjects pageInfo={pageInfo} addProject = {addProject}/>
      </MainLayout>
    </div>
  );
}
