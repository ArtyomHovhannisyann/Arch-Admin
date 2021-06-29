import React from "react";
import "../../css/Home/home.css";
import MainLayout from "../../components/Layout/MainLayout";

export default function HomePage() {
  return (
    <div className="home">
      <MainLayout>
        <div className="home-content">
          <h1 className="admin-welcome">
            Welcome to <br />
            Admin Panel!
          </h1>
          <img src="../images/home-img.png" className="home-content-img" />
        </div>
      </MainLayout>
    </div>
  );
}
