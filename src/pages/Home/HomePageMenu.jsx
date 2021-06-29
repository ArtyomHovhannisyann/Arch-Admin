import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import "../../css/Home/homeMenuPage.css"
export default function HomePageMenu() {
    const pageInfo = {
        pageHeader:"Homepage",
        pageName:"Menu",
        pages:["Pictures","Videos"],
    }
  return (
    <div className = "home-menu-page">
      <MainLayout pageInfo = {pageInfo}/>
    </div>
  );
}
