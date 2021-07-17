import React from "react";
import Menu from "./Menu";
import "../../css/layout/layout.css";
export default function MainLayout({
  pageInfo,
  children,
  className,
  showMenu = true,
}) {
  return (
    <div className={`layout ${className ? className : ""}`}>
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
        {showMenu && <Menu />}
      </div>
      {children}
    </div>
  );
}
