import React from "react";

export default function LoginInput({
  type,
  placeholder,
  iconType,
  value,
  onChange,
  className = ""
}) {
  return (
    <div className={type === "email" ? "email-input" : "password-input"}>
      <input
        type={type === "email" ? "text" : "password"}
        placeholder={placeholder}
        className={`admin-input ${className}`}
        max={1}
        defaultValue={value}
        onChange={onChange}
      />
      <img
        src={
          iconType === "email"
            ? "images/login-user.png"
            : "images/login-lock-icon.png"
        }
        className="login-icons"
        alt = "Lock"
      />
    </div>
  );
}
