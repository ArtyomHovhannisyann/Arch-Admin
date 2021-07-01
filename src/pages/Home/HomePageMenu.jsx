import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import "../../css/Home/homeMenuPage.css";
export default function HomePageMenu({ history }) {
  const pageInfo = {
    pageHeader: "Homepage",
    pageName: "Menu",
    pages: ["Pictures", "Videos"],
    className: "menu-left-bar",
    type: "image",
    active: 0,
    url:"https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg"
  };
  return (
    <div className="home-menu-page">
      <MainLayout pageInfo={pageInfo} history={history} />
    </div>
  );
}
