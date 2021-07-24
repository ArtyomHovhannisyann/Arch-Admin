import React, { useState } from "react";
import AddButton from "../../components/Layout/AddButton";
import MainLayout from "../../components/Layout/MainLayout";
import HomePageVideosContentItem from "../../components/Home/HomePageVideosContentItem";

export default function HomePageMenuVideos({ history }) {
  const pageInfo = {
    pageHeader: "Homepage",
    pageName: "Menu",
    pages: ["Pictures", "Videos"],
    className: "menu-left-bar",
    active: 1,
  };
  const [contentItems, setContentItems] = useState([
    {
      url: "https://www.youtube.com/embed/jrqaH8HxexM",
    },
    {
      url: "https://www.youtube.com/embed/jrqaH8HxexM",
    },
  ]);
  function changePage(key) {
    history.push(key);
  }
  function addVideo(e) {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.addEventListener("load", (e) => {
      setContentItems([
        ...contentItems,
        {
          url: e.target.result,
        },
      ]);
    });
  }
  return (
    <div className="home-menu-videos">
      <MainLayout pageInfo={pageInfo}>
        <div className="layout-content">
          <div className="layout-content-header">
            <div className="layout-content-info">
              <p className="layout-content-info-header">
                {pageInfo.pageHeader}-
              </p>
              <p className="layout-content-info-name">{pageInfo.pageName}</p>
            </div>
            {pageInfo.pages.length > 0 && (
              <div className="layout-header-pages">
                {pageInfo.pages.map((el, i) => {
                  return (
                    <p
                      key={i}
                      className={i === pageInfo.active ? "active" : ""}
                      onClick={() => changePage(`${el.toLowerCase()}`)}
                    >
                      {el}
                    </p>
                  );
                })}
              </div>
            )}
          </div>
          <div className="layout-info">
            <AddButton
              text={"Add a video"}
              type="video/mp4,video/x-m4v,video/*"
              change = {addVideo}
            />
            <div className="layout-items">
              {contentItems &&
                contentItems.map((el, i) => {
                  return <HomePageVideosContentItem link={el.url} key={i} />;
                })}
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
