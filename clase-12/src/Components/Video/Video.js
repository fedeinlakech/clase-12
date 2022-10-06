import React from "react";
import "./Video.css";

export default function Video(props) {
    return (
      <div className="Video">
        <p>Componente: Video</p>
        <video controls>
          <source
            src={props.src}
            type="video/mp4"
          />
        </video>
      </div>
    ); 
}
