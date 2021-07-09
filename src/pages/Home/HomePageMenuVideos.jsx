import React from "react";
import MainLayout from "../../components/Layout/MainLayout";

export default function HomePageMenuVideos({ history }) {
  const pageInfo = {
    pageHeader: "Homepage",
    pageName: "Menu",
    pages: ["Pictures", "Videos"],
    className: "menu-left-bar",
    type:"video",
    active:1,
    url:"https://www.youtube.com/embed/jrqaH8HxexM"
  };
  return (
    <div className="home-menu-videos">
      <MainLayout pageInfo={pageInfo} history={history} />
    </div>
  );
}
