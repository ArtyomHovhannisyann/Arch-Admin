import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import AddButton from "../../components/Layout/AddButton";
import "../../css/Studio/studio-credits.css";

export default function StudioCredits() {
  const pageInfo = {
    pageHeader: "Studio",
    pageName: "Credits",
    className: "studio-layout-info",
  };
  const credits = [
    "Web Design:",
    "Photographers:",
    "Styling for photography:",
    "3D Simulation:",
    "Site Inspectors & Contractors:",
    "Light Design:",
    "Structures Engineer:",
    "Site Inspectors & Contractors:",
    "Light Design:",
    "Structures Engineer:",
  ];
  return (
    <div className="studio-credits">
      <MainLayout pageInfo={pageInfo}>
        <div className="layout-content">
          <div className="layout-content-header">
            <div className="layout-content-info">
              <p className="layout-content-info-header">
                {pageInfo.pageHeader}-
              </p>
              <p className="layout-content-info-name">{pageInfo.pageName}</p>
            </div>
          </div>
          <div className="credits-layout-info">
            <div className="layout-info-content">
              <AddButton text = "Add"/>
              <div className="credits-image">
                <img src="../images/studio-credits.png" />
                <img src="../../images/trash.png" className="trash-icon" />
              </div>
              <div className="studio-credits-page-info">
                {credits.map((el, i) => {
                  return (
                    <div className="credits-input-div" key={i + "a"}>
                      <p key={i + "b"}>{el}</p>
                      <input
                        type="text"
                        className="credits-input"
                        key={i + "c"}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
