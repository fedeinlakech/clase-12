import React from "react";
import "./Audio.css";

export default function Audio(props) {
    return (
      <div className="Audio">
        <p>Componente: Audio</p>
        <audio controls>
          <source
            src={props.src}
            type="audio/mpeg"
          />
        </audio>
      </div>
    );
}
