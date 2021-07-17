import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import InProgressProjects from "../../components/InProgress/InProgressProjects";

export default function ApartamentsInProgressProjects({ history }) {
  const pageInfo = {
    pageHeader: "Appartaments Projects",
    pageName: "In progress",
    className: "studio-layout-info menu-left-bar",
  };
  function addProject(e) {
    e.preventDefault();
    history.push("/apartaments/add-in-progress-project");
  }
  return (
    <div className="residential-in-progress-projects">
      <MainLayout pageInfo={pageInfo}>
        <InProgressProjects pageInfo={pageInfo} addProject={addProject} />
      </MainLayout>
    </div>
  );
}
