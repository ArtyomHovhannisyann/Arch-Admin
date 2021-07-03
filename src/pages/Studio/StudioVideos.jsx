import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import AddButton from "../../components/Layout/AddButton";
import VideosItem from "../../components/Studio/VideosItem";
import "../../css/Studio/studio.css"

export default function StudioVideos() {
  const pageInfo = {
    pageHeader: "Studio",
    pageName: "Videos",
    className: "studio-layout-info",
  };
  return (
    <div className="studio-videos">
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
            <AddButton text = "Add"/>
            <div className="items">
              <VideosItem link={"https://www.youtube.com/embed/_8C-ATUpAGM"} />
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
