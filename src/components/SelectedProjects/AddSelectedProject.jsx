import React, { useState } from "react";
import AddButton from "../Layout/AddButton";
import { useHistory } from "react-router-dom";
import { dataURLtoFile } from "../../lib/a-lib.js";
import { addProject, addProjectPhotos } from "../../lib/requests";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/core/styles";
import Loading from "../Loading";

export default function AddSelectedProject({ pageInfo }) {
  let history = useHistory();
  const useStyles = makeStyles(() => ({
    root: {
      "& > * + *": {
        color: "#fff !important",
      },
    },
  }));

  const [title, setTitle] = useState("");
  const [titleAM, setTitleAM] = useState("");

  const [projectImages, setProjectImages] = useState([]);

  const [totalFloorArea, setTotalFloorArea] = useState("");
  const [totalFloorAreaAM, setTotalFloorAreaAM] = useState("");

  const [locationAM, setLocationAM] = useState("");
  const [location, setLocation] = useState("");

  const [designAndBuilt, setDesignAndBuilt] = useState("");
  const [designAndBuiltAM, setDesignAndBuiltAM] = useState("");

  const [description, setDescription] = useState("");
  const [descriptionAM, setDescriptionAM] = useState("");

  const [designTeam, setDesignTeam] = useState("");
  const [designTeamAM, setDesignTeamAM] = useState("");

  const [showErrToast, setShowErrToast] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  function addImage(e) {
    setShowLoading(true)
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.addEventListener("load", (e) => {
      setProjectImages([...projectImages, e.target.result]);
    });
    setShowLoading(false)
  }

  function sendData() {
    setShowLoading(true)
    const data = {
      title,
      title_hy: titleAM,
      location,
      location_hy: locationAM,
      "total-floor-area": totalFloorArea,
      "total-floor-area_hy": totalFloorAreaAM,
      "design-and-built": designAndBuilt,
      "design-and-built_hy": designAndBuiltAM,
      "design-team": designTeam,
      "design-team_hy": designTeamAM,
      description,
      description_hy: descriptionAM,
    };
    addProject(data, pageInfo.type, pageInfo.category, setShowErrToast).then(
      async (data) => {
        if (projectImages.length > 0) {
          try {
            const images = dataURLtoFile(projectImages);
            await Promise.all(
              images.map((image) => addProjectPhotos(image, data.insertId))
            );
            setShowLoading(false)
          } catch (err) {}
          history.goBack();
        }
      }
    );
  }
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
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
            {projectImages.map((el, i) => (
              <img src={el} key={i} alt="project-item" />
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
              placeholder="*design team"
              value={designTeam}
              onChange={(e) => setDesignTeam(e.target.value)}
            />
            <input
              type="text"
              placeholder="*թիմ"
              value={designTeamAM}
              onChange={(e) => setDesignTeamAM(e.target.value)}
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
            <button className="add-project" onClick={sendData}>
              Confirm
            </button>
          </div>
        </div>
      </div>

      <Snackbar
        open={showErrToast}
        autoHideDuration={3000}
        onClose={() => setShowErrToast(false)}
      >
        <Alert severity="error">
          Inputs must be must contain about project some information
        </Alert>
      </Snackbar>
      {showLoading && <Loading />}
    </div>
  );
}
