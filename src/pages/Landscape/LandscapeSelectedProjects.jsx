import React, { useEffect, useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import Loading from "../../components/Loading";
import SelectedProjects from "../../components/SelectedProjects/SelectedProjects";
import { getProjects } from "../../lib/requests";

export default function LandscapeSelectedProjects({ history }) {
  const [projects, setProjects] = useState([]);
  const [showLoading, setShowLoading] = useState([]);
  const pageInfo = {
    pageHeader: "Landscape Architecture",
    pageName: "Selected Projects",
    className: "studio-layout-info menu-left-bar",
    type:1,
    category:4,
    data: projects,
  };
  function addProject(e) {
    e.preventDefault();
    history.push("/landscape-architecture/add-selected-project");
  }
  useEffect(() => {
    const token = document.cookie.split("=");
    if (!token[1]) {
      history.push("/log-in");
    }
    setShowLoading(true)
    getProjects(
      (data) => {
        setProjects(data);
        setShowLoading(false)
      },
      1,
      4
    );
  }, []);
  return (
    <div className="landscape-selected-projects projects">
      <MainLayout pageInfo={pageInfo}>
        <SelectedProjects pageInfo={pageInfo} addProject={addProject} setProjects = {setProjects} />
      </MainLayout>
      {showLoading && <Loading />}
    </div>
  );
}
