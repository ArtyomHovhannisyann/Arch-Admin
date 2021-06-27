import React from "react";

export default function ResetPasswordCode({history}) {
    function submitForm(e) {
        e.preventDefault()
        history.push("/change-password")
    }
  return (
    <div className="reset-password">
      <div className="reset-header">
        <h1>Reset Password</h1>
      </div>
      <div className="reset-content">
        <form onSubmit = {submitForm}>
          <div className="code-inputs">
            {[1, 2, 3, 4].map((i) => {
              return (
                <input
                  type="text"
                  maxLength="1"
                  key={i}
                  className="code-input"
                />
              );
            })}
          </div>

          <div className="reset-send-btn">
            <button className="reset-btn">send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
