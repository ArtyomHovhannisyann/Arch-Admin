import React, { useState } from "react";
import LoginInput from "../../components/AdminLogin/LoginInput";
import { resetPasswordEmailValidation } from "../../lib/validate";

export default function ResetPassword({ history }) {
  const [emailMessage, setEmailMessage] = useState("");
  function changePage(e, key) {
    e.preventDefault();
    history.push(key);
  }
  function checkIsEmailCorrect(e) {
    e.preventDefault();
    let formElements = e.target.elements;
    const formData = {
      email: formElements.email.value,
    };
    const { error } = resetPasswordEmailValidation(formData);
    if (error) {
      setEmailMessage(error.details[0].message);
    } else {
      history.push("/reset-password-code");
    }
  }
  return (
    <div className="reset-password">
      <div className="reset-header">
        <h1>Reset Password</h1>
      </div>
      <div className="reset-content email-reset-content">
        <form onSubmit={checkIsEmailCorrect}>
          <LoginInput
            placeholder="*email"
            type="email"
            iconType="email"
            className="email-reset-input"
            name = "email"
          />
          <p className="danger-text">{emailMessage}</p>
          <div className="reset-send-btn">
            <button className="reset-btn">send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
