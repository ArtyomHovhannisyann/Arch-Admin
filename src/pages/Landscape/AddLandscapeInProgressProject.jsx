import React, { useEffect, useState } from "react";
import AddInProgressProject from "../../components/InProgress/AddInProgressProject";
import MainLayout from "../../components/Layout/MainLayout";

export default function AddLandscapeInProgressProject({ history }) {
  const [projectImages, setProjectImages] = useState([]);
  const pageInfo = {
    pageHeader: "Landscape Architecture",
    pageName: "In Progress",
    className: "new-project-layout-left-bar",
    type: 2,
    category: 4,
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
