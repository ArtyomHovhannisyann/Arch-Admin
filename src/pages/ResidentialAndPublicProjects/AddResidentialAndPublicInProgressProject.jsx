import React, { useState } from "react";
import AddInProgressProject from "../../components/InProgress/AddInProgressProject";
import MainLayout from "../../components/Layout/MainLayout";

export default function AddResidentialAndPublicInProgressProject() {
  const [projectImages, setProjectImages] = useState([
    {
      id: 1,
      path: "../images/residential-in-progress.png",
    },
    {
      id: 2,
      path: "../images/residential-in-progress.png",
    },
    {
      id: 3,
      path: "../images/residential-in-progress.png",
    },
    {
      id: 4,
      path: "../images/residential-in-progress.png",
    },
    {
      id: 5,
      path: "../images/residential-in-progress.png",
    },
    {
      id: 6,
      path: "../images/residential-in-progress.png",
    },
  ]);
  const pageInfo = {
    pageHeader: "Residential and Public",
    pageName: "In Progress",
    className: "new-project-layout-left-bar",
  };
  const inputs = [
    "Title",
    "Location",
    "Total floor area",
    "Total site area",
    "Design and built",
    "Program",
    "Description",
  ];
  return (
    <div className="add-in-progress-project">
      <MainLayout
        pageInfo={pageInfo}
        showMenu={false}
        className="addProjectLayout"
      >
        <AddInProgressProject
          pageInfo={pageInfo}
          projectImages={projectImages}
          inputs={inputs}
        />
      </MainLayout>
    </div>
  );
}
