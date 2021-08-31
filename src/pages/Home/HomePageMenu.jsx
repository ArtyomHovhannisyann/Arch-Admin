import React, { useEffect, useState } from "react";
import HomePagePicturesContnetItem from "../../components/Home/HomePagePicturesContnetItem";
import AddButton from "../../components/Layout/AddButton";
import MainLayout from "../../components/Layout/MainLayout";
import "../../css/Home/homeMenuPage.css";
import {
  delHomePagePicture,
  getHomePagePictures,
  setHomePagePicture,
} from "../../lib/requests";
import Loading from "../../components/Loading";
export default function HomePageMenu({ history }) {
  const pageInfo = {
    pageHeader: "Homepage",
    pageName: "Menu",
    pages: ["Pictures", "Videos"],
    className: "menu-left-bar",
    active: 0,
  };
  const [contentItems, setContentItems] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  useEffect(() => {
    const token = document.cookie.split("=");
    if (!token[1]) {
      history.push("/log-in");
    }
    setShowLoading(true);
    getHomePagePictures(setContentItems).then(() => setShowLoading(false));
  }, []);
  function changePage(key) {
    history.push(key);
  }
  function addImage(e) {
    const formData = new FormData();
    formData.append("path", e.target.files[0]);
    if (e.target.files.length > 0) {
      setShowLoading(true);
      setHomePagePicture(formData).then(() => {
        getHomePagePictures(setContentItems).then(() => setShowLoading(false));
      });
    }
  }
  function delImage(id) {
    delHomePagePicture(id).then(() => {
      setShowLoading(true);
      getHomePagePictures(setContentItems).then(() => setShowLoading(false));
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
                  return (
                    <HomePagePicturesContnetItem
                      delImage={delImage}
                      data={el}
                      key={i}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </MainLayout>
      {showLoading && <Loading />}
    </div>
  );
}
