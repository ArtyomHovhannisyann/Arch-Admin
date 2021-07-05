import React from "react";
import "../../css/Publications/cover-article.css";

export default function PrintItem() {
  return (
    <div className="print-cover-article-item">
      <div className="article-item-image">
        <img src="../images/print-cover-article.png"  className = "article-info-image"/>
        <img src="../../images/trash.png" className="trash-icon" />
      </div>
      <input type="text" placeholder="*title" />
    </div>
  );
}
