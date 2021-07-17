import React from "react";
import AddButton from "../Layout/AddButton";

export default function AddSelectedProject({
  pageInfo,
  projectImages,
  inputs,
}) {
  return (
    <div className="layout-content new-project-layout-content">
      <div className="layout-content-header new-layout-content-header">
        <div className="layout-content-info">
          <p className="layout-content-info-header">{pageInfo.pageHeader}-</p>
          <p className="layout-content-info-name">{pageInfo.pageName}</p>
        </div>
      </div>
      <div className="projects-layout-info">
        <div className="new-project-layout-info-content">
          <AddButton text={"Add"} />
          <div className="added-images">
            {projectImages.map((el) => (
              <img src={el.path} key={el.id} alt="project-item" />
            ))}
          </div>
          <div className="new-project-inputs">
            {inputs.map((el, i) => {
              return (
                <input
                  type="text"
                  placeholder={el}
                  key={i}
                  className={i === inputs.length - 1 ? "description-input" : ""}
                />
              );
            })}
            <button className="add-project">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
}
