import React, { useEffect, useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import Loading from "../../components/Loading";
import SelectedProjects from "../../components/SelectedProjects/SelectedProjects";
import { getProjects } from "../../lib/requests";

export default function ApartamentsSelectedProjects({ history }) {
  const [projects, setProjects] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const pageInfo = {
    pageHeader: "Apartments Projects",
    pageName: "Selected Projects",
    className: "studio-layout-info menu-left-bar",
    type: 1,
    category: 1,
    data: projects,
  };
  function addProject(e) {
    e.preventDefault();
    history.push("/apartment/add-selected-project");
  }
  useEffect(() => {
    const token = document.cookie.split("=");
    if (!token[1]) {
      history.push("/log-in");
    }
    setShowLoading(true);
    getProjects(
      (data) => {
        setProjects(data);
        setShowLoading(false)
      },
      1,
      1
    );
  }, []);
  return (
    <div className="apartaments-selected-projects projects">
      <MainLayout pageInfo={pageInfo}>
        <SelectedProjects
          pageInfo={pageInfo}
          history={history}
          addProject={addProject}
          setProjects={setProjects}
        />
      </MainLayout>
      {showLoading && <Loading />}
    </div>
  );
}
