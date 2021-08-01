import React, { useEffect, useState } from "react";
import AddInProgressProject from "../../components/InProgress/AddInProgressProject";
import MainLayout from "../../components/Layout/MainLayout";

export default function AddLandscapeInProgressProject({history}) {
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
    pageHeader: "Landscape Architecture",
    pageName: "In Progress",
    className: "new-project-layout-left-bar",
  };
  useEffect(() => {
    const token = document.cookie.split("=");
    if (!token[1]) {
      history.push("/log-in");
    }
  }, []);
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
        />
      </MainLayout>
    </div>
  );
}
