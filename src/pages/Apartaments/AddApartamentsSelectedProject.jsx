import React, { useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import "../../css/Selected/selected-project.css";
import AddSelectedProject from "../../components/SelectedProjects/AddSelectedProject";

export default function AddApartamentsProject() {
  const [projectImages, setProjectImages] = useState([
    {
      id: 1,
      path: "../images/residential-project.png",
    },
    {
      id: 2,
      path: "../images/residential-project.png",
    },
    {
      id: 3,
      path: "../images/residential-project.png",
    },
    {
      id: 4,
      path: "../images/residential-project.png",
    },
    {
      id: 5,
      path: "../images/residential-project.png",
    },
    {
      id: 6,
      path: "../images/residential-project.png",
    },
  ]);
  const inputs = [
    "*title",
    "*location",
    "*total floor area",
    "*total site area",
    "*design and built",
    "*program",
    "*description",
  ];
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
        <AddSelectedProject
          pageInfo={pageInfo}
          projectImages={projectImages}
          inputs={inputs}
        />
      </MainLayout>
    </div>
  );
}
