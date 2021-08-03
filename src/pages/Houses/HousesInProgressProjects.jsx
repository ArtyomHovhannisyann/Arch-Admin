import React, { useEffect, useState } from "react";
import InProgressProjects from "../../components/InProgress/InProgressProjects";
import MainLayout from "../../components/Layout/MainLayout";
import { getProjects } from "../../lib/requests";

export default function HousesInProgressProjects({ history }) {
  const [projects, setProjects] = useState([]);
  const pageInfo = {
    pageHeader: "Houses Projects",
    pageName: "In Progress Projects",
    className: "studio-layout-info menu-left-bar",
    type:2,
    category:2,
    data: projects,
  };
  function addProject(e) {
    e.preventDefault();
    history.push("/houses/add-in-progress-project");
  }
  useEffect(() => {
    const token = document.cookie.split("=");
    if (!token[1]) {
      history.push("/log-in");
    }
    getProjects(
      (data) => {
        setProjects(data);
      },
      2,
      2
    );
  }, []);
  return (
    <div className="houses-in-progress-projects projects">
      <MainLayout pageInfo={pageInfo}>
        <InProgressProjects pageInfo={pageInfo} addProject={addProject} setProjects = {setProjects}/>
      </MainLayout>
    </div>
  );
}
