import React from "react";
import "./Header.css";

export default function Header(props) {
  const myVideoList = props.source.map((image) => {
    return <img src={image.url} width={image.width} alt={image.alt} />;
  });

  const myFilteredVideoList = myVideoList.filter(
    (image) => image.props.width < 500
  );

  return (
    <header className="Header">
      <p>Componente: Header</p>
      <h2>Fotos de los Planetas del Sistema Solar</h2>
      <div className="planetas">{myVideoList}</div>
      <h2>Fotos anteriores filtradas: menos de 500 de width</h2>
      <div className="planetas">{myFilteredVideoList}</div>
      <h1>TIGRE y LIVERPOOL, las maravillas del mundo moderno.</h1>
      <div className="links">
        <a
          className="Header__link"
          href="https://catigre.com.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Página oficial de Tigre
        </a>
        <a
          className="Header__link"
          href="https://liverpoolfc.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Liverpool official site
        </a>
      </div>
    </header>
  );
}

Header.defaultProps = {
  size: 600,
};
