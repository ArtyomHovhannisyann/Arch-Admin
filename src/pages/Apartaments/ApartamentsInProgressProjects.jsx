import React, { useEffect, useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import InProgressProjects from "../../components/InProgress/InProgressProjects";
import { getProjects } from "../../lib/requests";

export default function ApartamentsInProgressProjects({ history }) {
  const [projects, setProjects] = useState([]);
  const pageInfo = {
    pageHeader: "Apartment Projects",
    pageName: "In progress",
    className: "studio-layout-info menu-left-bar",
    type:2,
    category:1,
    data: projects,
  };
  function addProject(e) {
    e.preventDefault();
    history.push("/apartment/add-in-progress-project");
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
      1
    );
  }, []);
  return (
    <div className="residential-in-progress-projects projects">
      <MainLayout pageInfo={pageInfo}>
        <InProgressProjects pageInfo={pageInfo} addProject={addProject} setProjects = {setProjects}/>
      </MainLayout>
    </div>
  );
}
