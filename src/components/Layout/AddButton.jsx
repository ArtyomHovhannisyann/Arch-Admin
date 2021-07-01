import React from "react";

export default function AddButton() {
  return (
    <label className="file-input">
      Add Picture
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
