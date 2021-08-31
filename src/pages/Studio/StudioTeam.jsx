import React, { useEffect, useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import AddButton from "../../components/Layout/AddButton";
import "../../css/Studio/studio.css";
import "../../css/layout/layout.css";
import { Portal } from "react-portal";
import Modal from "../../components/Modal/Modal";
import { getStudioTeam, setStudioTeam } from "../../lib/requests";
import { generalUrl } from "../../lib/constants";
import { dataURLtoFile } from "../../lib/a-lib";
import Loading from "../../components/Loading";

export default function StudioTeam({ history }) {
  const [openModal, setOpenModal] = useState(false);
  const [teamData, setTeamData] = useState([]);
  const [infoValue, setInfoValue] = useState("");
  const [infoAMValue, setInfoAMValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [descriptionAMValue, setDescriptionAMValue] = useState("");
  const [image, setImage] = useState("");
  const [showLoading, setShowLoading] = useState(false);


  useEffect(() => {
    setShowLoading(true)
    getStudioTeam((data) => {
      let dataWithGoodImageUrls = data.map((el) => {
        el.image = generalUrl + "/" + el.image;
        return el;
      });
      setTeamData(dataWithGoodImageUrls);
      setShowLoading(false)
    });
  }, []);

  useEffect(() => {
    const token = document.cookie.split("=");
    if (!token[1]) {
      history.push("/log-in");
    }
    if (teamData.length > 0) {
      setInfoValue(teamData[0].info);
      setInfoAMValue(teamData[0].info_hy);
      setDescriptionValue(teamData[0].description);
      setDescriptionAMValue(teamData[0].description_hy);
      setImage(teamData[0].image);
    }
  }, [teamData]);

  const pageInfo = {
    pageHeader: "Studio",
    className: "studio-layout-info menu-left-bar",
    subPage: ["Team", "Members"],
    active: 0,
  };
  
  function changePage(key) {
    history.push(key);
  }

  function sendData() {
    setShowLoading(true)
    const data = {
      image: dataURLtoFile(image, "image.jpg"),
      info: infoValue,
      info_hy: infoAMValue,
      description: descriptionValue,
      description_hy: descriptionAMValue,
    };
    setStudioTeam(data).then(() => {
      getStudioTeam((data) => {
        let dataWithGoodImageUrls = data.map((el) => {
          el.image = generalUrl + "/" + el.image;
          return el;
        });
        setTeamData(dataWithGoodImageUrls);
        setShowLoading(false)
      });
    });
  }

  function changeImage(e) {
    setShowLoading(true)
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.addEventListener("load", (e) => {
      setImage(e.target.result);
    });
    setShowLoading(false)
  }

  function delImage() {
    setShowLoading(true)
    setImage("");
    const data = {
      image: image,
      info: infoValue,
      description: descriptionValue,
    };
    setStudioTeam(data).then(() => {
      getStudioTeam((data) => {
        let dataWithGoodImageUrls = data.map((el) => {
          el.image = generalUrl + "/" + el.image;
          return el;
        });
        setTeamData(dataWithGoodImageUrls);
        setShowLoading(false)
      });
    });
  }

  return (
    <div className="studio-team">
      {openModal && (
        <Portal node={document.body}>
          <Modal
            setOpenModal={setOpenModal}
            type={"team image"}
            delItem={delImage}
          />
        </Portal>
      )}
      <MainLayout pageInfo={pageInfo}>
        <div className="layout-content">
          <div className="layout-content-header">
            <div className="layout-content-info">
              <p className="layout-content-info-header">
                {pageInfo.pageHeader}
              </p>
            </div>
            <div className="studio-team-sub-pages">
              {pageInfo.subPage.map((el, i) => {
                return (
                  <p
                    className={i === pageInfo.active ? "active" : ""}
                    key={i}
                    onClick={() => changePage(`${el.toLowerCase()}`)}
                  >
                    {el}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="layout-info">
            <AddButton text="Add" change={changeImage} />
            <div className="team-image">
              <img src={image} alt="team" />
              <img
                src="../../images/trash.png"
                className="trash-icon"
                alt="trash"
                onClick={() => setOpenModal(true)}
              />
            </div>
            <div className="team-description">
              <textarea
                className="team-description-input"
                placeholder="*info"
                value={infoValue}
                onChange={(e) => setInfoValue(e.target.value)}
              />
              <textarea
                className="team-description-input"
                placeholder="*description"
                value={descriptionValue}
                onChange={(e) => setDescriptionValue(e.target.value)}
              />
              <textarea
                className="team-description-input"
                placeholder="*ինֆորմացիա"
                value={infoAMValue}
                onChange={(e) => setInfoAMValue(e.target.value)}
              />
              <textarea
                className="team-description-input"
                placeholder="*նկարագրություն"
                value={descriptionAMValue}
                onChange={(e) => setDescriptionAMValue(e.target.value)}
              />
            </div>
            <div className="confirm-btn" onClick={sendData}>
              Confirm
            </div>
          </div>
        </div>
      </MainLayout>
      {showLoading && <Loading />}
    </div>
  );
}
