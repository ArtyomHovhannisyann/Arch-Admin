import React, { useState } from "react";

export default function ResetPasswordCode({ history }) {
  function submitForm(e) {
    e.preventDefault();
    let form = e.target;
    let code = "";
    for (let i = 0; i < form.length - 1; i++) {
      code += form[i].value;
    }
    console.log(code);
    history.push("/change-password");
  }
  function inputFocus(e) {
    const target = e.target;
    if (e.code !== "Backspace") {
      const nextTarget = target.nextSibling;
      if (e.keyCode > 47 && e.keyCode < 58) {
        if (target.value === "") {
          target.value = e.key;
        }
        if (nextTarget) {
          nextTarget.focus();
        }
      }
      e.preventDefault();
    } else {
      const previousTarget = target.previousSibling;
      if (previousTarget && target.value === "") {
        previousTarget.focus();
      }
      target.value = "";
    }
  }
  let formRef = React.createRef();
  return (
    <div className="reset-password">
      <div className="reset-header">
        <h1>Reset Password</h1>
      </div>
      <div className="code-container">
        <h1>Code</h1>
        <div className="reset-content">
          <form onSubmit={submitForm} ref={formRef}>
            <div className="code-inputs">
              {[1, 2, 3, 4].map((i) => {
                return (
                  <input
                    type="text"
                    maxLength="1"
                    key={i}
                    onKeyDown={(e) => inputFocus(e, formRef.current)}
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
    </div>
  );
}
