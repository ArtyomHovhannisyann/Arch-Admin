import React, { useEffect, useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import SelectedProjects from "../../components/SelectedProjects/SelectedProjects";
import { getResidentialSelectedProjects } from "../../lib/requests";

export default function ResidentialAndPublicSelectedProjects({ history }) {
  const [projects, setProjects] = useState([]);
  const pageInfo = {
    pageHeader: "Residential and Public Projects",
    pageName: "Selected Projects",
    className: "studio-layout-info menu-left-bar",
    data: projects,
  };
  function addProject(e) {
    e.preventDefault();
    history.push("/residential-and-public/add-selected-project");
  }
  useEffect(() => {
    const token = document.cookie.split("=");
    if (!token[1]) {
      history.push("/log-in");
    }
    getResidentialSelectedProjects((data) => {
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
