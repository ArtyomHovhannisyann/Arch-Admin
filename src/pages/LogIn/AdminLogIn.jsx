import React, { useEffect, useState } from "react";
import LoginInput from "../../components/AdminLogin/LoginInput";
import { checkIsEmailPasswordCorrect } from "../../lib/requests";
import { loginValidation } from "../../lib/validate";

export default function AdminLogIn({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  useEffect(() => {
    document.cookie = "token=";
  }, []);

  function changePage(e, key) {
    e.preventDefault();
    history.push(key);
  }
  function isEmailOrPasswordCorrect(e) {
    e.preventDefault();
    let formElements = e.target.elements;
    const formData = {
      email: formElements.email.value,
      password: formElements.password.value,
    };
    const { error } = loginValidation(formData);
    if (error) {
      if (error.details[0].path == "email") {
        setPasswordMessage("");
        setEmailMessage("The email is incorrect");
      } else {
        setEmailMessage("");
        setPasswordMessage("The password is incorrect");
      }
    } else {
      checkIsEmailPasswordCorrect(formData, history,setEmailMessage);
    }
  }
  return (
    <div className="admin-logIn">
      <div className="admin-container">
        <div className="logIn-header">
          <div className="container-visitor">
            <h1>Anarch</h1>
          </div>
        </div>
        <div className="logIn-content">
          <div className="container-visitor">
            <form onSubmit={isEmailOrPasswordCorrect}>
              <LoginInput
                type="email"
                placeholder="*email address"
                iconType="email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="danger-text">{emailMessage}</p>
              <LoginInput
                type="password"
                placeholder="*password"
                iconType="lock"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="danger-text">{passwordMessage}</p>
              <a
                className="forget-password"
                onClick={(e) => changePage(e, "/reset-password")}
              >
                Forget password?
              </a>
              <div className="logiIn-button">
                <button className="admin-logIn-btn">Log In</button>
              </div>
            </form>
            <div className="remember-checkbox">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="remember-input"
              />
              <label htmlFor="remember">remember</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
