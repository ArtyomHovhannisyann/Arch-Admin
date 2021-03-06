import React, { useEffect, useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import AddInProgressProject from "../../components/InProgress/AddInProgressProject";

export default function AddApartamentsInProgressProject({ history }) {
  const [projectImages, setProjectImages] = useState([]);
  const pageInfo = {
    pageHeader: "Apartments",
    pageName: "In Progress",
    className: "new-project-layout-left-bar",
    type: 1,
    category: 2,
  };
  useEffect(() => {
    const token = document.cookie.split("=");
    if (!token[1]) {
      history.push("/log-in");
    }
  }, []);
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
