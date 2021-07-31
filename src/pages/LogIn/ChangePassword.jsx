import React, { useState } from "react";
import LoginInput from "../../components/AdminLogin/LoginInput";
import { changePassword } from "../../lib/requests";
import { resetPasswordValidation } from "../../lib/validate";

export default function ChangePassword({ history,location }) {
  const [repeatPasswordMessage, setRepeatPasswordMessage] = useState("");
  function changePage(e, key) {
    e.preventDefault();
    history.push(key);
  }
  function isPasswordCorrect(e) {
    e.preventDefault();
    let formElements = e.target.elements;
    const formData = {
      password: formElements.password.value,
      repeatPassword: formElements["repeat-password"].value,
    };
    const { error } = resetPasswordValidation(formData);
    if (error) {
      setRepeatPasswordMessage(error.details[0].message);
    } else if (formData.password == formData.repeatPassword) {
      console.log(location);
      const data ={
        password:formData.password,
        "reset-token":location.state,
      }      
      changePassword(data,history)
    } else {
      setRepeatPasswordMessage("Password does not match");
    }
  }
  return (
    <div className="admin-logIn">
      <div className="logIn-header">
        <h1>Anarch</h1>
      </div>
      <div className="logIn-content">
        <form onSubmit={isPasswordCorrect}>
          <LoginInput
            type="password"
            placeholder="*password"
            iconType="email"
            name="password"
            className={repeatPasswordMessage.length > 0 ? "danger" : ""}
          />
          <LoginInput
            type="password"
            placeholder="*repeat"
            iconType="lock"
            name="repeat-password"
            className={repeatPasswordMessage.length > 0 ? "danger" : ""}
          />
          <p className="danger-text">{repeatPasswordMessage}</p>
          <a
            href=""
            className="forget-password"
            onClick={(e) => changePage(e, "/reset-password")}
          >
            Forget password?
          </a>
          <div className="logiIn-button">
            <button className="admin-logIn-btn">send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
