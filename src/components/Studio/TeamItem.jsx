import React from "react";

export default function TeamItem({ url, name, description }) {
  return (
    <div className="studio-team-item">
      <img src={url} className="team-item-img" />
      <textarea disabled value={name} className = "team-name" placeholder = "*name"/>
      <textarea
        type="text"
        disabled
        value={description}
        className="team-description"
        placeholder = "*description"
      />
      <img src="../../images/trash.png" className="trash-icon" />
    </div>
  );
}
