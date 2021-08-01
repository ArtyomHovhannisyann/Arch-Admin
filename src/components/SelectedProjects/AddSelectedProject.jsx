import React, { useState } from "react";
import AddButton from "../Layout/AddButton";
import { useHistory } from "react-router-dom";

export default function AddSelectedProject({
  pageInfo,
  projectImages,
}) {
  let history = useHistory();
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [totalFloorArea, setTotalFloorArea] = useState("");
  const [totalSiteArea, setTotalSiteArea] = useState("");
  const [designAndBuilt, setDesignAndBuilt] = useState("");
  const [program, setProgram] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="layout-content new-project-layout-content">
      <div className="layout-content-header new-layout-content-header">
        <div className="layout-content-info">
          <img
            src="../images/back.png"
            alt=""
            className="back-icon"
            onClick={() => history.goBack()}
          />
          <p className="layout-content-info-header">{pageInfo.pageHeader}-</p>
          <p className="layout-content-info-name">{pageInfo.pageName}</p>
        </div>
      </div>
      <div className="projects-layout-info">
        <div className="new-project-layout-info-content">
          <AddButton text={"Add"} />
          <div className="added-images">
            {projectImages.map((el) => (
              <img src={el.path} key={el.id} alt="project-item" />
            ))}
          </div>
          <div className="new-project-inputs">
            <input
              type="text"
              placeholder="*title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="*location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <input
              type="text"
              placeholder="*total floor area"
              value={totalFloorArea}
              onChange={(e) => setTotalFloorArea(e.target.value)}
            />
            <input
              type="text"
              placeholder="*total site area"
              value={totalSiteArea}
              onChange={(e) => setTotalSiteArea(e.target.value)}
            />
            <input
              type="text"
              placeholder="*design and built"
              value={designAndBuilt}
              onChange={(e) => setDesignAndBuilt(e.target.value)}
            />
            <input
              type="text"
              placeholder="*program"
              value={program}
              onChange={(e) => setProgram(e.target.value)}
            />
            <input
              type="text"
              placeholder="*description"
              value={description}
              className="description-input"
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className="add-project">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
}
