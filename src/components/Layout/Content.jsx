import React, { useEffect, useState } from "react";
import "../../css/layout/layout.css";
import { getHomePagePictures, getHomePageVideos } from "../../lib/request";
import LayoutContnetItem from "../Home/Home-Menu/LayoutContnetItem";
import AddButton from "./AddButton";

export default function Content({ pageInfo, history }) {
  const [contentItems, setContentItems] = useState([]);
  useEffect(() => {
    if (pageInfo.type === "image") {
      getHomePagePictures(setContentItems);
    } else {
      getHomePageVideos(setContentItems);
    }
  }, []);
  function changePage(key) {
    history.push(key);
  }
  return (
    <div className="layout-content">
      <div className="layout-content-header">
        <div className="layout-content-info">
          <p className="layout-content-info-header">{pageInfo.pageHeader}-</p>
          <p className="layout-content-info-name">{pageInfo.pageName}</p>
        </div>
        {pageInfo.pages.length > 0 && (
          <div className="layout-header-pages">
            {pageInfo.pages.map((el, i) => {
              return (
                <p
                  key={i}
                  className={i === pageInfo.active ? "active" : ""}
                  onClick={() => changePage(`${el}`)}
                >
                  {el}
                </p>
              );
            })}
          </div>
        )}
      </div>
      <div className="layout-info">
        <AddButton text={pageInfo.type === "image" ? "Add a picture" : "Add a video"} />
        <div className="layout-items">
          {contentItems && contentItems.map((el, i) => {
            return (
              <LayoutContnetItem type={pageInfo.type} link={el.url} key={i} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
