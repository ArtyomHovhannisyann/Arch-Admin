import React from "react";
import Menu from "./Menu";
import "../../css/layout/layout.css";
import Content from "./Content";
export default function MainLayout({
  pageInfo,
  history,
  children,
}) {
  return (
    <div className="layout">
      <div
        className={
          pageInfo && pageInfo.className
            ? pageInfo.className
            : "layout-left-bar"
        }
      >
        <div className="layout-header">
          <h1>Anarch </h1>
        </div>
        <Menu />
      </div>

      {pageInfo && pageInfo.pages ? (
        <Content pageInfo={pageInfo} history={history} />
      ) : (
        children
      )}
    </div>
  );
}
