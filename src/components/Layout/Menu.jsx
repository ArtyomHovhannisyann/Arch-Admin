import React from "react";
import { pages } from "../../lib/constants";
import { Link } from "react-router-dom";
import "../../css/Home/home.css";

export default function Menu() {
  return (
    <div className="pages">
      <dl className="pages-menu">
        {pages.map((el, i) => {
          if (el.pageHeader) {
            if (el.path) {
              return (
                <Link to={el.path ? el.path : "/"} key={i}>
                  <dt className="home-pageheader" key={i}>
                    {el.pageHeader}
                  </dt>
                </Link>
              );
            }
            return (
              <dt
                className={"home-pageheader", i === 15 ? "landScape" : "home-pageheader"}
                key={i}
              >
                {el.pageHeader}
              </dt>
            );
          }
          return (
            <Link to={el.path ? el.path : "/"} key={i}>
              <dd key={i}>{el.pageName}</dd>
            </Link>
          );
        })}
      </dl>
    </div>
  );
}
