import React, { useEffect, useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import Loading from "../../components/Loading";
import SelectedProjects from "../../components/SelectedProjects/SelectedProjects";
import { getProjects } from "../../lib/requests";

export default function HousesSelectedProjects({ history }) {
  const [projects, setProjects] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const pageInfo = {
    pageHeader: "Houses Projects",
    pageName: "Selected Projects",
    className: "studio-layout-info menu-left-bar",
    type:1,
    category:2,
    data: projects,
  };
  function addProject(e) {
    e.preventDefault();
    history.push("/houses/add-selected-project");
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
      2,
      1
    );
  }, []);
  return (
    <div className="houses-selected-projects projects">
      <MainLayout pageInfo={pageInfo}>
        <SelectedProjects pageInfo={pageInfo} addProject={addProject} setProjects = {setProjects}/>
      </MainLayout>
      {showLoading && <Loading />}
    </div>
  );
}
