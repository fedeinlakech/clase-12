import React, { Component } from "react";
import "./List.css";

export default class List extends Component {
  render() {
    return (
      <div className="List">
        <p>Componente: List</p>
        <ul>
          <li>Arqueros</li>
          <li>Defensores</li>
          <li>Mediocampistas</li>
          <li>Delanteros</li>
        </ul>
      </div>
    );
  }
}
