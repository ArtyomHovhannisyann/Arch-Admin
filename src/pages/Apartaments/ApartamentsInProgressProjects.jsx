import React, { useEffect, useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import InProgressProjects from "../../components/InProgress/InProgressProjects";
import { getApartamentsInProgressProjects } from "../../lib/requests";

export default function ApartamentsInProgressProjects({ history }) {
  const [projects,setProjects] = useState([])
  const pageInfo = {
    pageHeader: "Appartaments Projects",
    pageName: "In progress",
    className: "studio-layout-info menu-left-bar",
    data:projects,
  };
  function addProject(e) {
    e.preventDefault();
    history.push("/apartaments/add-in-progress-project");
  }
  useEffect(() => {
    getApartamentsInProgressProjects((data)=>{
      setProjects(data)
    });
  }, []);
  return (
    <div className="residential-in-progress-projects">
      <MainLayout pageInfo={pageInfo}>
        <InProgressProjects pageInfo={pageInfo} addProject={addProject} />
      </MainLayout>
    </div>
  );
}
