import React from "react";
import "../../css/layout/layout.css";

export default function Content({ pageInfo }) {
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
                <p key={i} className={i == 0 ? "active" : ""}>
                  {el}
                </p>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
