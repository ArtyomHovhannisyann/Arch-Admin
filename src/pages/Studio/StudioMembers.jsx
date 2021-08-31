import React, { useEffect, useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import AddButton from "../../components/Layout/AddButton";
import "../../css/Studio/studio.css";
import "../../css/layout/layout.css";
import TeamItem from "../../components/Studio/TeamItem";
import { delStudioTeamMember, getStudioMembers } from "../../lib/requests";
import { generalUrl } from "../../lib/constants";
import Loading from "../../components/Loading";

export default function StudioMembers({ history }) {
  const [teamItems, setTeamItems] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  useEffect(() => {
    const token = document.cookie.split("=");
    if (!token[1]) {
      history.push("/log-in");
    }
    setShowLoading(true)
    getStudioMembers((data) => {
      let dataWithGoodImageUrls = data.map((el) => {
        el.image = generalUrl + "/" + el.image;
        return el;
      });
      setTeamItems(dataWithGoodImageUrls);
      setShowLoading(false)
    });
  }, []);

  const pageInfo = {
    pageHeader: "Studio",
    className: "studio-layout-info menu-left-bar",
    subPage: ["Team", "Members"],
    active: 1,
  };

  function changePage(key) {
    history.push(key);
  }

  function addItem(e) {
    setShowLoading(true)
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.addEventListener("load", (e) => {
      setTeamItems([
        ...teamItems,
        {
          description: "",
          image: e.target.result,
          name: "",
          isExested: false,
        },
      ]);
      setShowLoading(false)
    });
  }

  function delMember(id) {
    setShowLoading(true)
    delStudioTeamMember(id).then(() => {
      getStudioMembers((data) => {
        let dataWithGoodImageUrls = data.map((el) => {
          el.image = generalUrl + "/" + el.image;
          return el;
        });
        setTeamItems(dataWithGoodImageUrls);
      });
      setShowLoading(false)
    });
  }

  return (
    <div className="studio-members">
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
            <AddButton text="Add" change={addItem} />
            <div className="items">
              {teamItems &&
                teamItems.map((el, i) => {
                  return (
                    <TeamItem
                      nameValue={el.name}
                      name_hy={el.name_hy}
                      delMember={delMember}
                      description_hy={el.description_hy}
                      descriptionValue={el.description}
                      url={el.image}
                      key={i}
                      currentId={el.id}
                      isExested={
                        el.isExested != undefined ? el.isExested : true
                      }
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </MainLayout>
      {showLoading && <Loading />}
    </div>
  );
}
