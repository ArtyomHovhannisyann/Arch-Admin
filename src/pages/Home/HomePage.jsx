import React from "react";
import "../../css/Home/home.css";

export default function HomePage() {
  const pages = [
    {
      pageHeader: "Homepage",
    },
    {
      pageName: "Menu",
    },
    {
      pageHeader: "Studio",
    },
    {
      pageName: "Team",
    },
    {
      pageName: "Videos",
    },
    {
      pageName: "Credits",
    },
    {
      pageHeader: "Residential Projects",
    },
    {
      pageName: "Selected Projects",
    },
    {
      pageName: "In Progress",
    },
    {
      pageHeader: "Housing Projects",
    },
    {
      pageName: "Selected Projects",
    },
    {
      pageName: "In Progress",
    },
    {
      pageHeader: "Commercial Projects",
    },
    {
      pageName: "Selected Projects",
    },
    {
      pageName: "In Progress",
    },
    {
      pageHeader: "Publications",
    },
    {
      pageName: "Print-Cover Article",
    },
    {
      pageName: "Print-Books",
    },
    {
      pageName: "Web Publications",
    },
    {
      pageHeader: "Contact",
    },
    {
      pageHeader: "Jobs",
    },
  ];
  return (
    <div className="home">
      <div className="home-left-bar">
        <div className="home-header">
          <h1>Anarch</h1>
        </div>
        <div className="pages">
          <dl className="pages-menu">
            {pages.map((el, i) => {
              if (el.pageHeader) {
                return (
                  <dt className="home-pageheader" key={i}>
                    {el.pageHeader}
                  </dt>
                );
              }
              return <dd key={i}>{el.pageName}</dd>;
            })}
          </dl>
        </div>
      </div>
      <div className="home-content">
        <h1 className="admin-welcome">
          Welcome to <br />
          Admin Panel!
        </h1>
        <img src="../images/home-img.png" className="home-content-img" />
      </div>
    </div>
  );
}
