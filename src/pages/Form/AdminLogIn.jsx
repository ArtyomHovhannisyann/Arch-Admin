import React from "react";
import LoginInput from "../../components/AdminLogin/LoginInput";

export default function AdminLogIn({history}) {
  function changePage(e) {
    e.preventDefault()
    history.push("/reset-password")
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
            <LoginInput type  = "email" placeholder="*email address" iconType = "email"/>
            <LoginInput  type  = "password" placeholder="*password" iconType = "lock"/>
            <a href="" className="forget-password" onClick  = {changePage}>
              Forget password?
            </a>
            <div className="logiIn-button">
              <button className="admin-logIn-btn">Log In</button>
            </div>
          </form>
          <div className="remember-checkbox">
            <input type="checkbox" className="remember-input" />
            <p>remember</p>
          </div>
        </div>
      </div>
    </div>
  );
}
