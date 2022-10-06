import "./App.css";
import Header from "./Components/Header/Header.js";
import List from "./Components/List/List.js";
import Button from "./Components/Button/Button.js";
import Video from "./Components/Video/Video";
import Audio from "./Components/Audio/Audio";

import video from "./assets/videos/GolTigre.mp4";
import mp3 from "./assets/audios/Incas.mp3";

import mercurio from "./assets/images/mercurio.avif";
import venus from "./assets/images/venus.avif";
import tierra from "./assets/images/tierra.avif";
import marte from "./assets/images/marte.avif";
import jupiter from "./assets/images/jupiter.avif";
import saturno from "./assets/images/saturno.avif";
import urano from "./assets/images/urano.avif";
import neptuno from "./assets/images/neptuno.avif";

const planetas = [
  { url: mercurio, alt:"foto de mercurio", width: 700},
  { url: venus, alt:"foto de venus", width: 200 },
  { url: tierra, alt:"foto de tierra", width: 500 },
  { url: marte, alt:"foto de marte", width: 600 },
  { url: jupiter, alt:"foto de jupiter", width: 300 },
  { url: saturno, alt:"foto de saturno", width: 800 },
  { url: urano, alt:"foto de urano", width: 150 },
  { url: neptuno, alt:"foto de neptuno", width: 400 },
];

function App() {
  return (
    <div className="App">
      <Button msg="Probando Botón desde PROPS" />
      <Header source={planetas} />
      <List />
      <Video src={video} />
      <Audio src={mp3} />
    </div>
  );
}

export default App;
