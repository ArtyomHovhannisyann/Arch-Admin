import React from "react";

export default function LayoutContnetItem({ type, link }) {
  return (
    <div className="layout-contnet-item">
      <div className="item">
        {type === "image" ? (
          <img src={link} className={`item-${type}`} alt = "arch"/>
        ) : (
          <iframe
            width="359"
            height="198"
            src={link}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
        <img src="../../images/trash.png" className="trash-icon" alt= "trash"/>
      </div>
    </div>
  );
}
