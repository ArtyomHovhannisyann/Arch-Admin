import React, { useEffect, useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import AddSelectedProject from "../../components/SelectedProjects/AddSelectedProject";

export default function AddResidentialAndPublicSelectedProjects({history}) {
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
  const pageInfo = {
    pageHeader: "Residential and Public",
    pageName: "Selected Projects",
    className: "new-project-layout-left-bar",
    type:1,
    category:3,
  };
  useEffect(() => {
    const token = document.cookie.split("=");
    if (!token[1]) {
      history.push("/log-in");
    }
  }, [])
  return (
    <div className="new-houses-selected-project">
      <MainLayout
        pageInfo={pageInfo}
        showMenu={false}
        className="new-project-content"
      >
        <AddSelectedProject
          pageInfo={pageInfo}
          projectImages={projectImages}
        />
      </MainLayout>
    </div>
  );
}
