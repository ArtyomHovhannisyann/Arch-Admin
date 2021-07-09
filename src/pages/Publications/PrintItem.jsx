import React from "react";
import "../../css/Publications/cover-article.css";

export default function PrintItem() {
  return (
    <div className="print-cover-article-item">
      <div className="article-item-image">
        <img src="../images/print-cover-article.png"  className = "article-info-image" alt = "aricle"/>
        <img src="../../images/trash.png" className="trash-icon" alt = "trash"/>
      </div>
      <input type="text" placeholder="*title" />
    </div>
  );
}
