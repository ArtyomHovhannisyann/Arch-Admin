import React from "react";
import AddButton from "../../components/Layout/AddButton";

export default function SelectedProjects({ pageInfo, addProject }) {
  return (
    <div className="layout-content">
      <div className="layout-content-header">
        <div className="layout-content-info">
          <p className="layout-content-info-header">{pageInfo.pageHeader}-</p>
          <p className="layout-content-info-name">{pageInfo.pageName}</p>
        </div>
      </div>
      {pageInfo.data.length > 0 && pageInfo.data.map((el, i) => {
        return (
          <div className="selected-project-item" key = {i}>
            <img src={el.photos[0].path} alt="" />
            <img src="../images/trash.png" className="trash" alt="" />
          </div>
        );
      })}
      <div className="layout-info">
        <div className="layout-info-content">
          <AddButton text={"Add"} click={addProject} />
        </div>
      </div>
    </div>
  );
}
