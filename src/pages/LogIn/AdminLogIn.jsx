import React, { useState } from "react";
import LoginInput from "../../components/AdminLogin/LoginInput";
import { checkIsEmailPasswordCorrect, request } from "../../lib/request";
import { SEND_LOG_IN } from "../../lib/requestUrls";

export default function AdminLogIn({history}) {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  function changePage(e,key) {
    e.preventDefault()
    history.push(key)
  }
  function isEmailOrPasswordCorrect(e) {
    e.preventDefault()
    checkIsEmailPasswordCorrect({email:email,password:password})
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
            <LoginInput type  = "email" placeholder="*email address" iconType = "email" value = {email} onChange = {(e)=>setEmail(e.target.value)}/>
            <LoginInput  type  = "password" placeholder="*password" iconType = "lock" value = {password} onChange = {(e)=>setPassword(e.target.value)}/>
            <a className="forget-password" onClick  = {(e)=>changePage(e,"/reset-password")}>
              Forget password?
            </a>
            <div className="logiIn-button">
              <button className="admin-logIn-btn" onClick = {isEmailOrPasswordCorrect}>Log In</button>
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
