import React from "react";
import AddButton from "../../components/Layout/AddButton";
import { delProject, getProjects } from "../../lib/requests";
import SelectedProjectItem from "./SelectedProjectItem";
export default function SelectedProjects({
  pageInfo,
  addProject,
  setProjects,
}) {
  function delItem(id) {
    delProject(id).then(() => {
      getProjects((data)=>{
        setProjects(data);
      },pageInfo.type,pageInfo.category)
    });
  }
  return (
    <div className="layout-content">
      <div className="layout-content-header">
        <div className="layout-content-info">
          <p className="layout-content-info-header">{pageInfo.pageHeader}-</p>
          <p className="layout-content-info-name">{pageInfo.pageName}</p>
        </div>
      </div>
      <div className="layout-info">
        <div className="layout-info-content">
          <AddButton text={"Add"} click={addProject} />
          <div className="selected-items">
            {pageInfo.data &&
              pageInfo.data.projects &&
              pageInfo.data.projects.map((el, i) => {
                return (
                  <SelectedProjectItem data={el} key={i} delItem={delItem} />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
