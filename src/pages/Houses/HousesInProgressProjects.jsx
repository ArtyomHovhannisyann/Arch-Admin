import React, { useEffect, useState } from "react";
import InProgressProjects from "../../components/InProgress/InProgressProjects";
import MainLayout from "../../components/Layout/MainLayout";
import { getHousesInProgressProjects } from "../../lib/requests";

export default function HousesInProgressProjects({ history }) {
  const [projects, setProjects] = useState([]);
  const pageInfo = {
    pageHeader: "Houses Projects",
    pageName: "In Progress Projects",
    className: "studio-layout-info menu-left-bar",
    data: projects,
  };
  function addProject(e) {
    e.preventDefault();
    history.push("/houses/add-in-progress-project");
  }
  useEffect(() => {
    getHousesInProgressProjects((data) => {
      setProjects(data);
    });
  }, []);
  return (
    <div className="houses-in-progress-projects">
      <MainLayout pageInfo={pageInfo}>
        <InProgressProjects pageInfo={pageInfo} addProject={addProject} />
      </MainLayout>
    </div>
  );
}
