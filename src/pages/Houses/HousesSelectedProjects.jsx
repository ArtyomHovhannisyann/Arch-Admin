import React, { useEffect, useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import SelectedProjects from "../../components/SelectedProjects/SelectedProjects";
import { getHousesSelectedProjects } from "../../lib/requests";

export default function HousesSelectedProjects({ history }) {
  const [projects, setProjects] = useState([]);
  const pageInfo = {
    pageHeader: "Houses Projects",
    pageName: "Selected Projects",
    className: "studio-layout-info menu-left-bar",
    data:projects,
  };
  function addProject(e) {
    e.preventDefault();
    history.push("/houses/add-selected-project");
  }
  useEffect(() => {
    getHousesSelectedProjects((data) => {
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
