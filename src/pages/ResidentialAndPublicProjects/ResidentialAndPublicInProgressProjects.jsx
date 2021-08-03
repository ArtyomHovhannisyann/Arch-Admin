import React, { useEffect, useState } from "react";
import InProgressProjects from "../../components/InProgress/InProgressProjects";
import MainLayout from "../../components/Layout/MainLayout";
import { getProjects, getResidentialInProgressProjects } from "../../lib/requests";

export default function ResidentialAndPublicInProgressProjects({ history }) {
  const [projects, setProjects] = useState([]);
  const pageInfo = {
    pageHeader: "Residential and Public Projects",
    pageName: "In Progress Projects",
    className: "studio-layout-info menu-left-bar",
    type:2,
    category:3,
    data: projects,
  };
  function addProject(e) {
    e.preventDefault();
    history.push("/residential-and-public/add-in-progress-project");
  }
  useEffect(() => {
    const token = document.cookie.split("=");
    if (!token[1]) {
      history.push("/log-in");
    }
    getProjects((data) => {
      setProjects(data);
    },2,3);
  }, []);
  return (
    <div className="houses-in-progress-projects projects">
      <MainLayout pageInfo={pageInfo}>
        <InProgressProjects pageInfo={pageInfo} addProject={addProject} setProjects = {setProjects}/>
      </MainLayout>
    </div>
  );
}
