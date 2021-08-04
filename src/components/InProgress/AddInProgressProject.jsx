import React, { useState } from "react";
import AddButton from "../../components/Layout/AddButton";
import { useHistory } from "react-router-dom";
import { addProject, addProjectPhoto } from "../../lib/requests";
import { dataURLtoFile } from "../../lib/a-lib";

export default function AddInProgressProject({ pageInfo }) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [projectImages, setProjectImages] = useState([]);
  const [totalFloorArea, setTotalFloorArea] = useState("");
  const [designAndBuilt, setDesignAndBuilt] = useState("");

  const [titleAM, setTitleAM] = useState("");
  const [description, setDescription] = useState("");
  const [locationAM, setLocationAM] = useState("");
  const [totalFloorAreaAM, setTotalFloorAreaAM] = useState("");
  const [designAndBuiltAM, setDesignAndBuiltAM] = useState("");
  const [descriptionAM, setDescriptionAM] = useState("");

  let history = useHistory();
  function addImage(e) {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.addEventListener("load", (e) => {
      setProjectImages([...projectImages, e.target.result]);
    });
  }
  function sendData() {
    const data = {
      title,
      title_hy: titleAM,
      location,
      location_hy: locationAM,
      "total-floor-area": totalFloorArea,
      "total-floor-area_hy": totalFloorAreaAM,
      "design-and-built": designAndBuilt,
      "design-and-built_hy": designAndBuiltAM,
      description,
      description_hy: descriptionAM
    };
    
    addProject(data, pageInfo.type, pageInfo.category).then((data) => {
      addProjectPhoto(dataURLtoFile(projectImages[0]), data.insertId);
      history.goBack();
    });
  }
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
          <AddButton text={"Add"} change={addImage} />
          <div className="added-images">
            {projectImages.map((el) => (
              <img src={el} key={el.id} alt="project-image" />
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
              placeholder="*վերնագիր"
              value={titleAM}
              onChange={(e) => setTitleAM(e.target.value)}
            />
            <input
              type="text"
              placeholder="*location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <input
              type="text"
              placeholder="*վայր"
              value={locationAM}
              onChange={(e) => setLocationAM(e.target.value)}
            />
            <input
              type="text"
              placeholder="*total floor area"
              value={totalFloorArea}
              onChange={(e) => setTotalFloorArea(e.target.value)}
            />
            <input
              type="text"
              placeholder="*բնակելի մակերես"
              value={totalFloorAreaAM}
              onChange={(e) => setTotalFloorAreaAM(e.target.value)}
            />
            <input
              type="text"
              placeholder="*design and built"
              value={designAndBuilt}
              onChange={(e) => setDesignAndBuilt(e.target.value)}
            />
            <input
              type="text"
              placeholder="*նախագծում և իրականացում"
              value={designAndBuiltAM}
              onChange={(e) => setDesignAndBuiltAM(e.target.value)}
            />
            <input
              type="text"
              placeholder="*description"
              value={description}
              className="description-input"
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="text"
              placeholder="*նկարագրություն"
              value={descriptionAM}
              className="description-input"
              onChange={(e) => setDescriptionAM(e.target.value)}
            />
            <button className="add-selected-project" onClick={sendData}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
