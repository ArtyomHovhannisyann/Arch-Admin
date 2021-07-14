import React from "react";
import LoginInput from "../../components/AdminLogin/LoginInput";

export default function ChangePassword({history}) {
  function changePage(e,key) {
    e.preventDefault();
    history.push(key);
  }
  return (
    <div className="admin-logIn">
      <div className="logIn-header">
        <div className="container-visitor">
          <h1>Anarch</h1>
        </div>
      </div>
      <div className="logIn-content">
        <div className="container-visitor">
          <form>
            <LoginInput
              type="email"
              placeholder="*password"
              iconType="email"
            />
            <LoginInput
              type="password"
              placeholder="*repeat"
              iconType="lock"
            />
            <a href="" className="forget-password" onClick={(e)=>changePage(e,"/reset-password")}>
              Forget password?
            </a>
            <div className="logiIn-button">
              <button className="admin-logIn-btn" onClick = {(e)=>changePage(e,"/password-changed")}>send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}