import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import SelectedProjects from "../../components/SelectedProjects/SelectedProjects";

export default function ApartamentsSelectedProjects({ history }) {
  const pageInfo = {
    pageHeader: "Appartaments Projects",
    pageName: "Selected Projects",
    className: "studio-layout-info menu-left-bar",
  };
  function addProject(e) {
    e.preventDefault();
    history.push("/apartaments/add-selected-project");
  }
  return (
    <div className="apartaments-selected-projects">
      <MainLayout pageInfo={pageInfo}>
        <SelectedProjects pageInfo = {pageInfo} history = {history} addProject = {addProject}/>
      </MainLayout>
    </div>
  );
}
