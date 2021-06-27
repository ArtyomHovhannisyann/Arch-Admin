import React from "react";

export default function LoginInput({ type , placeholder ,iconType}) {
  return (
    <div className={type == "email" ? "email-input" : "password-input"}>
      <input type={type == "email" ? "text" : "password"} placeholder={placeholder} className="admin-input" max = {1}/>
      <div className={iconType == "email" ? "email-user-icon" : "lock-icon"}></div>
    </div>
  );
}
