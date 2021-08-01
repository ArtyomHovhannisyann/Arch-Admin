import React, { useEffect, useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import SelectedProjects from "../../components/SelectedProjects/SelectedProjects";
import { getApartamentsSelectedProjects } from "../../lib/requests";

export default function ApartamentsSelectedProjects({ history }) {
  const [projects,setProjects] = useState([])
  const pageInfo = {
    pageHeader: "Appartaments Projects",
    pageName: "Selected Projects",
    className: "studio-layout-info menu-left-bar",
    data:projects,
  };
  function addProject(e) {
    e.preventDefault();
    history.push("/apartaments/add-selected-project");
  }
  useEffect(() => {
    getApartamentsSelectedProjects((data) => {
      setProjects(data);
    });
  }, []);
  return (
    <div className="apartaments-selected-projects">
      <MainLayout pageInfo={pageInfo}>
        <SelectedProjects
          pageInfo={pageInfo}
          history={history}
          addProject={addProject}
        />
      </MainLayout>
    </div>
  );
}
