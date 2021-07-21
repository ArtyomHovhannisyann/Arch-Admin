import React from "react";

export default function PasswordChanged({history}) {
    setTimeout(() => {
        history.push("/")
    }, 2000);
  return (
    <div className="successfull">
      <div className="successfull-content">
        <div className="successfull-text">
          <h3>Password Changed</h3>
          <p>Your Password has been changed successfully</p>
        </div>
        <div className="successfull-row-2">
          <img src="images/succesess.png" className = "succesess"/>
        </div>
      </div>
    </div>
  );
}
