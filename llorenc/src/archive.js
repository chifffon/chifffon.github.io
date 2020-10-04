import React from "react";
import kitty from "./img/IMG_2202.JPG";
import me from "./img/IMG_6752.jpg";
import wa from "./img/IMG_8947.jpg";
import cl from "./img/kittycl.jpg";
import kittysleep from "./img/kittysleep.jpg";
import menew from "./img/menew.jpg";
import mom from "./img/mom.JPG";
import terr from "./img/terry.JPG";

import "./archive.css";

export default class Archive extends React.Component {
  render() {
    return (
      <div>
        <h4>
          photo archive mainly for me to reminisce, things that don't go to
          instagram for whatever reason
        </h4>
        <img className="photo" src={kitty}></img>
        <img className="photo" src={me}></img>
        <img className="photo" src={wa}></img>
        <img className="photo" src={cl}></img>
        <img className="photo" src={kittysleep}></img>
        <img className="photo" src={menew}></img>
        <img className="photo" src={mom}></img>
        <img className="photo" src={terr}></img>
      </div>
    );
  }
}
