import React, { useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import AddButton from "../../components/Layout/AddButton";
import "../../css/Residential/selected-project.css";

export default function AddCommericalInProgressProject() {
  const [projectImages, setProjectImages] = useState([
    {
      id: 1,
      path: "../images/residential-in-progress.png",
    },
    {
      id: 2,
      path: "../images/residential-in-progress.png",
    },
    {
      id: 3,
      path: "../images/residential-in-progress.png",
    },
    {
      id: 4,
      path: "../images/residential-in-progress.png",
    },
    {
      id: 5,
      path: "../images/residential-in-progress.png",
    },
    {
      id: 6,
      path: "../images/residential-in-progress.png",
    },
  ]);
  const pageInfo = {
    pageHeader: "Commerical Projects",
    pageName: "In Progress",
  };
  const inputs = [
    "Title",
    "Location",
    "Total floor area",
    "Total site area",
    "Design and built",
    "Program",
    "Description",
  ];
  return (
    <div>
      <MainLayout pageInfo={pageInfo} showMenu={false}>
        <div className="layout-content residential-selected-project-layout-content">
          <div className="layout-content-header">
            <div className="layout-content-info">
              <p className="layout-content-info-header">
                {pageInfo.pageHeader}-
              </p>
              <p className="layout-content-info-name">{pageInfo.pageName}</p>
            </div>
          </div>
          <div className="credits-layout-info">
            <div className="residential-selected-project-layout-info-content">
              <AddButton text={"Add"} />
              <div className="added-images">
                {projectImages.map((el) => (
                  <img src={el.path} key={el.id} />
                ))}
              </div>
              <div className="residential-selected-project-inputs">
                {inputs.map((el, i) => {
                  return (
                    <input
                      type="text"
                      placeholder={el}
                      key={i}
                      className={
                        i == inputs.length - 1 ? "description-input" : ""
                      }
                    />
                  );
                })}
                <button className="add-selected-project">Confirm</button>
              </div>
            </div>
          </div>
        </div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quia ipsum soluta. Facere beatae laudantium, sed veniam dolores odit. Velit inventore laboriosam debitis ea sint nesciunt deleniti repellat, tempora aspernatur.
        Corporis necessitatibus, ad maiores quam dolor amet veritatis incidunt porro blanditiis possimus, fugit impedit iure quisquam voluptatem id debitis exercitationem sequi cum. Quasi aut quo laboriosam molestias dolorum animi voluptatum?
        Quidem cupiditate at minus asperiores culpa vero optio, sed doloribus dicta amet sit obcaecati minima dolores iure similique, accusamus eveniet. Nulla officia explicabo, suscipit perspiciatis assumenda voluptatum officiis hic modi.
        Repellendus, temporibus rerum sequi impedit quo laudantium quia inventore nemo numquam eveniet similique nisi placeat deleniti fugiat nihil, voluptates dolorum aut architecto, vel accusantium quos soluta? Nesciunt nam dolor iure.
        Modi impedit, et suscipit deserunt alias voluptates, placeat excepturi repudiandae neque similique nobis molestias? Dicta nesciunt assumenda voluptatem ipsam, libero culpa reiciendis eaque saepe eum adipisci, porro dolor quia tempora?
        Harum dignissimos eos molestias nemo placeat laudantium quae corrupti, doloribus id non incidunt tempore quam vel officiis odio ratione sunt minima possimus aut ducimus tenetur fugit! Dolore veritatis perferendis qui!
        Enim eos expedita tempora sit quas atque distinctio ea architecto consequatur cum minima eveniet, placeat ab libero ad soluta ducimus ullam? Porro consequuntur fuga iste impedit nesciunt ipsum eius ipsam.
        Exercitationem eius tenetur minus, ut itaque ipsa. Architecto nostrum magnam aspernatur perferendis ad eaque iure perspiciatis corrupti sapiente, tempore enim explicabo cupiditate obcaecati? Recusandae adipisci mollitia nihil quos deserunt ipsum!
        Voluptatibus saepe aspernatur velit nihil, fugiat error rem quibusdam maiores suscipit, debitis, distinctio quia excepturi officiis tenetur repudiandae commodi incidunt alias fuga consequatur. Quisquam at animi quaerat error, consectetur nobis.
        Iure vitae earum beatae fugit quas neque dolor adipisci. Eaque asperiores non optio fuga odit incidunt earum, voluptates sed, adipisci odio quisquam pariatur veritatis repudiandae quia dolore, veniam distinctio aperiam.
      </MainLayout>
    </div>
  );
}
