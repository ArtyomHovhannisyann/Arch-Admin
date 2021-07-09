import React from "react";

export default function VideosItem({title,link}) {
  return (
    <div className="studio-videos-item">
      <iframe
        width="283"
        height="186"
        src={link}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <textarea
        disabled
        value={title}
        className="team-name"
        placeholder="*title"
      />
      <img alt= "trash" src="../../images/trash.png" className="trash-icon" />
    </div>
  );
}
