import React, { useEffect, useState } from "react";
import AddButton from "../../components/Layout/AddButton";
import MainLayout from "../../components/Layout/MainLayout";
import HomePageVideosContentItem from "../../components/Home/HomePageVideosContentItem";
import {
  delHomePageVideo,
  getHomePageVideos,
  setHomePageVideo,
} from "../../lib/requests";
import Loading from "../../components/Loading";

export default function HomePageMenuVideos({ history }) {
  const pageInfo = {
    pageHeader: "Homepage",
    pageName: "Menu",
    pages: ["Pictures", "Videos"],
    className: "menu-left-bar",
    active: 1,
  };
  const [contentItems, setContentItems] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  useEffect(() => {
    const token = document.cookie.split("=");
    if (!token[1]) {
      history.push("/log-in");
    }
    setShowLoading(true);
    getHomePageVideos(setContentItems).then(() => setShowLoading(false));
  }, []);
  function changePage(key) {
    history.push(key);
  }
  function addVideo(e) {
    const formData = new FormData();
    formData.append("path", e.target.files[0]);
    setShowLoading(true);
    setHomePageVideo(formData).then(() => {
      getHomePageVideos(setContentItems).then(() => setShowLoading(false));
    });
  }
  function delVideo(id) {
    setShowLoading(true);
    delHomePageVideo(id).then(() => {
      getHomePageVideos(setContentItems).then(() => setShowLoading(false));
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
              change={addVideo}
            />
            <div className="layout-items">
              {contentItems &&
                contentItems.map((el, i) => {
                  return (
                    <HomePageVideosContentItem
                      data={el}
                      key={i}
                      delVideo={delVideo}
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
