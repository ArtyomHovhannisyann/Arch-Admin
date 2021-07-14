import React from "react";
import LoginInput from "../../components/AdminLogin/LoginInput";

export default function ResetPassword({history}) {
  function changePage(e, key) {
    e.preventDefault();
    history.push(key);
  }
  return (
    <div className="reset-password">
      <div className="reset-header">
        <h1>Reset Password</h1>
      </div>
      <div className="reset-content email-reset-content">
        <form onSubmit = {(e)=>changePage(e,"/reset-password-code")}>
          <LoginInput placeholder="*email" type="email" iconType="email" className = "email-reset-input"/>
          <div className="reset-send-btn">
            <button className="reset-btn">send</button>
          </div>
        </form>
      </div>
    </div>
  );
}