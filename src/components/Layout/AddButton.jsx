import React from "react";

export default function AddButton({
  text,
  type = "image/*",
  click = null,
  url,
  change = null,
}) {
  return (
    <label className="file-input" onClick={click}>
      <img
        alt="cross"
        src={url ? url : "../../images/cross.png"}
        className={`add-btn-image ${
          type === "application/pdf,application/vnd.ms-excel" ? "add-pdf" : ""
        }`}
      />
      <p>{text}</p>
      <input
        type="file"
        id="file"
        style={{ display: "none" }}
        name="file"
        onClick={(event) => {
          event.target.value = null;
        }}
        onChange={(e) => {
          change(e);
        }}
        accept={type}
      />
    </label>
  );
}
