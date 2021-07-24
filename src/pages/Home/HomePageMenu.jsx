import React, { useState } from "react";
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
    active: 0,
  };
  const [contentItems, setContentItems] = useState([
    {
      url: "../../images/home1.png",
    },
    {
      url: "../../images/home2.png",
    },
  ]);
  function changePage(key) {
    history.push(key);
  }
  function addImage(e) {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.addEventListener("load", (e) => {
      setContentItems([
        ...contentItems,
        {
          url: e.target.result,
        },
      ]);
      console.log(contentItems);
    });
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
            <AddButton text="Add a picture" change={addImage} />
            <div className="layout-items">
              {contentItems &&
                contentItems.map((el, i) => {
                  return <HomePagePicturesContnetItem link={el.url} key={i} />;
                })}
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
