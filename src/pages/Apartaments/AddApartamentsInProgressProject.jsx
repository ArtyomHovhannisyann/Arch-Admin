import React, { useEffect, useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import AddInProgressProject from "../../components/InProgress/AddInProgressProject";

export default function AddApartamentsInProgressProject({history}) {
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
    pageHeader: "Apartaments",
    pageName: "In Progress",
    className: "new-project-layout-left-bar",
  };
  useEffect(() => {
    const token = document.cookie.split("=");
    if (!token[1]) {
      history.push("/log-in");
    }
  }, [])
  return (
    <div>
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
