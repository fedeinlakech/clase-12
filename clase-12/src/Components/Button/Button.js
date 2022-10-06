import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <div className="Button">
      <p>Componente: Button</p>
      <button>{props.msg}</button>
    </div>
  );
}
