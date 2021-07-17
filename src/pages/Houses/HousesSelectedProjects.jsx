import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import SelectedProjects from "../../components/SelectedProjects/SelectedProjects";

export default function HousesSelectedProjects({history}) {
  const pageInfo = {
    pageHeader: "Houses Projects",
    pageName: "Selected Projects",
    className: "studio-layout-info menu-left-bar",
  };
  function addProject(e) {
    e.preventDefault();
    history.push("/houses/add-selected-project");
  }
  return (
    <div className="houses-selected-projects">
      <MainLayout pageInfo={pageInfo}>
        <SelectedProjects pageInfo={pageInfo} addProject = {addProject}/>
      </MainLayout>
    </div>
  );
}
