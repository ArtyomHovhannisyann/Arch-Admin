import React, { useEffect, useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import SelectedProjects from "../../components/SelectedProjects/SelectedProjects";
import { getLandscapeSelectedProjects } from "../../lib/requests";

export default function LandscapeSelectedProjects({ history }) {
  const [projects, setProjects] = useState([]);
  const pageInfo = {
    pageHeader: "Landscape Architecture",
    pageName: "Selected Projects",
    className: "studio-layout-info menu-left-bar",
    data: projects,
  };
  function addProject(e) {
    e.preventDefault();
    history.push("/landscape-architecture/add-selected-project");
  }
  useEffect(() => {
    const token = document.cookie.split("=");
    if (!token[1]) {
      history.push("/log-in");
    }
    getLandscapeSelectedProjects((data) => {
      setProjects(data);
    });
  }, []);
  return (
    <div className="houses-selected-projects">
      <MainLayout pageInfo={pageInfo}>
        <SelectedProjects pageInfo={pageInfo} addProject={addProject} />
      </MainLayout>
    </div>
  );
}
