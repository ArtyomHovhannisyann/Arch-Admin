import React from "react";

export default function AddButton({ text, click = null }) {
  return (
    <label className="file-input" onClick={click}>
      <div className = "add-btn-image"></div>
      <p>{text}</p>
      <input
        type="file"
        id="file"
        style={{ display: "none" }}
        name="file"
        accept="image/*"
      />
    </label>
  );
}
