import React, { useEffect, useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import AddButton from "../../components/Layout/AddButton";
import "../../css/Studio/studio.css";
import "../../css/layout/layout.css";
import TeamItem from "../../components/Studio/TeamItem";
import { getStudioTeam } from "../../lib/requests";

export default function StudioMembers({ history }) {
  const pageInfo = {
    pageHeader: "Studio",
    className: "studio-layout-info menu-left-bar",
    subPage: ["Team", "Members"],
    active: 1,
  };
  const [teamItems, setTeamItems] = useState([
    {
      name:"123",
      url:"../images/home1.png",
      description:"test"
    },
    {
      name:"123",
      url:"../images/home2.png",
      description:"test"
    },
  ]);
  // useEffect(() => {
  //   getStudioTeam(setTeamItems);
  // }, []);
  console.log(teamItems);
  function changePage(key) {
    history.push(key);
  }
  return (
    <div className="studio-members">
      <MainLayout pageInfo={pageInfo}>
        <div className="layout-content">
          <div className="layout-content-header">
            <div className="layout-content-info">
              <p className="layout-content-info-header">
                {pageInfo.pageHeader}
              </p>
            </div>
            <div className="studio-team-sub-pages">
              {pageInfo.subPage.map((el, i) => {
                return (
                  <p
                    className={i === pageInfo.active ? "active" : ""}
                    key={i}
                    onClick={() => changePage(`${el.toLowerCase()}`)}
                  >
                    {el}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="layout-info">
            <AddButton text="Add" />
            <div className="items">
              {teamItems &&
                teamItems.map((el, i) => {
                  return <TeamItem
                    name={el.name}
                    description={el.description}
                    url={el.url}
                    key={i}
                  />;
                })}
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
