import React from "react";
import InProgressProjects from "../../components/InProgress/InProgressProjects";
import MainLayout from "../../components/Layout/MainLayout";

export default function LandscapeInProgressProjects({ history }) {
  const pageInfo = {
    pageHeader: "Landscape Architecture",
    pageName: "In Progress Projects",
    className: "studio-layout-info menu-left-bar",
  };
  function addProject(e) {
    e.preventDefault();
    history.push("/landscape-architecture/add-in-progress-project");
  }
  return (
    <div className="houses-in-progress-projects">
      <MainLayout pageInfo={pageInfo}>
        <InProgressProjects pageInfo={pageInfo} addProject={addProject} />
      </MainLayout>
    </div>
  );
}
