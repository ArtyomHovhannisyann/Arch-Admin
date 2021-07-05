import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import "../../css/Publications/web-publications.css"

export default function WebPublications() {
  const pageInfo = {
    pageHeader: "Publications",
    pageName: "Web Publications",
    className: "studio-layout-info",
  };
  return (
    <div className="web-publications">
      <MainLayout pageInfo={pageInfo}>
        <div className="layout-content">
          <div className="layout-content-header">
            <div className="layout-content-info">
              <p className="layout-content-info-header">
                {pageInfo.pageHeader}-
              </p>
              <p className="layout-content-info-name">{pageInfo.pageName}</p>
            </div>
          </div>
          <div className="credits-layout-info">
            <div className="layout-info-content">
                <div className = "add-publication">
                    <input type="text" placeholder = "Date"/>
                    <input type="text" placeholder = "Description" className = "web-description"/>
                    <button>Confirm</button>
                </div>
              <div className="print-items"></div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
