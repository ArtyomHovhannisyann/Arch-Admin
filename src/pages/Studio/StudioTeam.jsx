import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import AddButton from "../../components/Layout/AddButton";
import TeamItem from "../../components/Studio/TeamItem";
import "../../css/Studio/studioTeam.css";
import "../../css/layout/layout.css";

export default function StudioTeam() {
  const pageInfo = {
    pageHeader: "Studio",
    pageName: "Team",
    className: "studio-layout-info",
  };
  return (
    <div className="studio-team">
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
          <div className="layout-info">
            <AddButton />
            <div className="items">
              <TeamItem
                name={"Shirley Marco"}
                description={
                  "AA (Architectural Association) Diploma RIBA Part 2 FOUNDER SINCE 2000"
                }
                url={"../../images/persone.png"}
              />
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
