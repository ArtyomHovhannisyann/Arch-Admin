import React, { useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import "../../css/Selected/selected-project.css";
import AddSelectedProject from "../../components/SelectedProjects/AddSelectedProject";

export default function AddApartamentsProject() {
  const [projectImages, setProjectImages] = useState([]);
  const pageInfo = {
    pageHeader: "Apartaments",
    pageName: "Selected Projects",
    className: "new-project-layout-left-bar",
  };
  return (
    <div className="new-selected-project">
      <MainLayout
        pageInfo={pageInfo}
        showMenu={false}
        className="new-project-content"
      >
        <AddSelectedProject pageInfo={pageInfo} projectImages={projectImages} />
      </MainLayout>
    </div>
  );
}
