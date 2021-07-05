import React from "react";

export default function AddButton({ text,type = "image/*", click = null ,url = "../images/cross.png"}) {
  return (
    <label className="file-input" onClick={click}>
      <img  src = {url} className = {`add-btn-image ${type == "application/pdf,application/vnd.ms-excel" ? "add-pdf" : ""}`} />
      <p>{text}</p>
      <input
        type="file"
        id="file"
        style={{ display: "none" }}
        name="file"
        accept={type}
      />
    </label>
  );
}
