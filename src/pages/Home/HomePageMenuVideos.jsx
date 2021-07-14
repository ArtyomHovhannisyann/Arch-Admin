import React from "react";
import AddButton from "../../components/Layout/AddButton";
import MainLayout from "../../components/Layout/MainLayout";
import HomePageVideosContentItem from "../../components/Home/HomePageVideosContentItem";

export default function HomePageMenuVideos({ history }) {
  const pageInfo = {
    pageHeader: "Homepage",
    pageName: "Menu",
    pages: ["Pictures", "Videos"],
    className: "menu-left-bar",
    type: "video",
    active: 1,
  };
  const contentItems = [
    {
      url: "https://www.youtube.com/embed/jrqaH8HxexM",
    },
    {
      url: "https://www.youtube.com/embed/jrqaH8HxexM",
    },
  ];
  function changePage(key) {
    history.push(key);
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
            <AddButton text={"Add a video"} />
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
