import React, { useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import AddButton from "../../components/Layout/AddButton";
import "../../css/Residential/selected-project.css"

export default function AddResidentialProject() {
  const [projectImages, setProjectImages] = useState([
    {
      id: 1,
      path: "../images/residential-project.png",
    },
    {
      id: 2,
      path: "../images/residential-project.png",
    },
    {
      id: 3,
      path: "../images/residential-project.png",
    },
    {
      id: 4,
      path: "../images/residential-project.png",
    },
    {
      id: 5,
      path: "../images/residential-project.png",
    },
    {
      id: 6,
      path: "../images/residential-project.png",
    },
  ]);
  const inputs = [
    "*title",
    "*location",
    "*total floor area",
    "*total site area",
    "*design and built",
    "*program",
    "*description",
  ];
  const pageInfo = {
    pageHeader: "Housing Projects",
    pageName: "Selected Projects",
  };
  return (
    <div className="new-residential-selected-project">
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
                  <img src={el.path} key={el.id} />
                ))}
              </div>
              <div className="residential-selected-project-inputs">
                {inputs.map((el, i) => {
                  return <input type="text" placeholder={el} key={i} className = {i == inputs.length - 1  ? "description-input" : ""}/>;
                })}
                <button className = "add-selected-project">Confirm</button>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
