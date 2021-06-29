import React from "react";
import Menu from "./Menu";
import "../../css/layout/layout.css";
import Content from "./Content";
export default function MainLayout({ pageInfo }) {
  return (
    <div className="layout">
      <div className="layout-left-bar">
        <div className="layout-header">
          <h1>Anarch</h1>
        </div>
        <Menu />
      </div>
      {pageInfo && <Content pageInfo={pageInfo} />}
    </div>
  );
}
