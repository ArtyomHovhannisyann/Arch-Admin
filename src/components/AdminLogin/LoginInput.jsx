import React from "react";

export default function LoginInput({
  type,
  placeholder,
  iconType,
  value,
  onChange,
  name,
  className = ""
}) {
  return (
    <div className={type === "email" ? "email-input" : "password-input"}>
      <input
        type={type === "email" ? "text" : "password"}
        placeholder={placeholder}
        className={`admin-input ${className}`}
        max={1}
        name = {name}
        defaultValue={value}
        onChange={onChange}
      />
      <img
        src={
          iconType === "email"
            ? className == "danger" ? "images/login-user-danger.png":"images/login-user.png"
            : className == "danger"? "images/login-lock-danger-icon.png":"images/login-lock-icon.png"
        }
        className="login-icons"
        alt = "Lock"
      />
    </div>
  );
}
