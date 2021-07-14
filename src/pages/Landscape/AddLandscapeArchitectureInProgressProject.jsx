import React, { useState } from "react";
import AddButton from "../../components/Layout/AddButton";
import MainLayout from "../../components/Layout/MainLayout";

export default function AddLandscapeArchitectureInProgressProject() {
  const [projectImages, setProjectImages] = useState([
    {
      id: 1,
      path: "../images/residential-in-progress.png",
    },
    {
      id: 2,
      path: "../images/residential-in-progress.png",
    },
    {
      id: 3,
      path: "../images/residential-in-progress.png",
    },
    {
      id: 4,
      path: "../images/residential-in-progress.png",
    },
    {
      id: 5,
      path: "../images/residential-in-progress.png",
    },
    {
      id: 6,
      path: "../images/residential-in-progress.png",
    },
  ]);
  const pageInfo = {
    pageHeader: "Landscape Architecture Projects",
    pageName: "In Progress",
  };
  const inputs = [
    "Title",
    "Location",
    "Total floor area",
    "Total site area",
    "Design and built",
    "Program",
    "Description",
  ];
  return (
    <div className="add-landscape-architecture-in-progress-project">
      <MainLayout pageInfo={pageInfo} showMenu={false}>
        <div className="layout-content residential-selected-project-layout-content">
          <div className="layout-content-header">
            <div className="layout-content-info">
              <p className="layout-content-info-header">
                {pageInfo.pageHeader}-
              </p>
              <p className="layout-content-info-name">{pageInfo.pageName}</p>
            </div>
          </div>
          <div className="credits-layout-info">
            <div className="residential-selected-project-layout-info-content">
              <AddButton text={"Add"} />
              <div className="added-images">
                {projectImages.map((el) => (
                  <img src={el.path} key={el.id} alt="project-image" />
                ))}
              </div>
              <div className="residential-selected-project-inputs">
                {inputs.map((el, i) => {
                  return (
                    <input
                      type="text"
                      placeholder={el}
                      key={i}
                      className={
                        i === inputs.length - 1 ? "description-input" : ""
                      }
                    />
                  );
                })}
                <button className="add-selected-project">Confirm</button>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}