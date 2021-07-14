import React from "react";
import HomePagePicturesContnetItem from "../../components/Home/HomePagePicturesContnetItem";
import AddButton from "../../components/Layout/AddButton";
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
  };
  const contentItems = [
    {
      url: "../../images/home1.png",
    },
    {
      url: "../../images/home2.png",
    },
  ];
  function changePage(key) {
    history.push(key);
  }
  return (
    <div className="home-menu-page">
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
              text={pageInfo.type === "image" ? "Add a picture" : "Add a video"}
            />
            <div className="layout-items">
              {contentItems &&
                contentItems.map((el, i) => {
                  return (
                    <HomePagePicturesContnetItem
                      link={el.url}
                      key={i}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
