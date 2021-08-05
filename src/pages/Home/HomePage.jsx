import React, { useEffect } from "react";
import "../../css/Home/home.css";
import MainLayout from "../../components/Layout/MainLayout";

export default function HomePage({ history }) {
  useEffect(() => {
    const token = document.cookie.split("=");
    if (!token[1]) {
      history.push("/log-in");
    }
  }, []);
  return (
    <div className="home">
      <MainLayout />
      <div className="home-content">
        <h1 className="admin-welcome">
          Welcome to <br />
          Admin Panel!
        </h1>
        <img
          src="../images/home-img.png"
          className="home-content-img"
          alt="home"
        />
      </div>
    </div>
  );
}
