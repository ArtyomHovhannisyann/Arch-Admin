import React from "react";
import AddButton from "../../components/Layout/AddButton";
import { useHistory } from "react-router-dom";

export default function AddInProgressProject({
  pageInfo,
  projectImages,
  inputs,
}) {
  let history = useHistory()
  return (
    <div className="layout-content new-project-layout-content">
      <div className="layout-content-header new-layout-content-header">
        <div className="layout-content-info">
          <img src="../images/back.png" alt="" className="back-icon" onClick = {()=>history.goBack()}/>
          <p className="layout-content-info-header">{pageInfo.pageHeader}-</p>
          <p className="layout-content-info-name">{pageInfo.pageName}</p>
        </div>
      </div>
      <div className="projects-layout-info">
        <div className="new-project-layout-info-content">
          <AddButton text={"Add"} />
          <div className="added-images">
            {projectImages.map((el) => (
              <img src={el.path} key={el.id} alt="project-image" />
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
            <button className="add-selected-project">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
}
