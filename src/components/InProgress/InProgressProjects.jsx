import React from "react";
import AddButton from "../Layout/AddButton";

export default function InProgressProjects({ pageInfo, addProject }) {
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
        </div>
      </div>
    </div>
  );
}
