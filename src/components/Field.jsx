import { useState } from "react";

import "../../styles/field.css";

function Field({ icon, placeholder, type = "text" }) {
  const [show, setShow] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="field">
      <span className="field-icon">{icon}</span>

      <input
        className="field-input"
        type={isPassword && !show ? "password" : "text"}
        placeholder={placeholder}
        autoComplete="off"
      />

      {isPassword && (
        <span className="field-eye" onClick={() => setShow(!show)}>
          {show ? "🙈" : "👁️"}
        </span>
      )}
    </div>
  );
}

export default Field;
