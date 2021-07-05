import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import AddButton from "../../components/Layout/AddButton";
import PrintItem from "./PrintItem";
import "../../css/Publications/cover-article.css";

export default function PrintCoverArticle() {
  const pageInfo = {
    pageHeader: "Publications",
    pageName: "Print-Cover Article",
    className: "studio-layout-info",
  };
  return (
    <div className="print-cover-article">
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
            <div className="layout-info-content aricle-info-content">
              <AddButton
                text="attach PDF"
                type="application/pdf,application/vnd.ms-excel"
                url = "../images/pdf-icon.png"
              />
              <div className="print-items">
                <PrintItem />
                <PrintItem />
                <PrintItem />
                <PrintItem />
                <PrintItem />
                <PrintItem />
                <PrintItem />
                <PrintItem />
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
