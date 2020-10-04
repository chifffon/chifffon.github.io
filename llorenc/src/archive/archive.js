import React from "react";
import wa from "./img/IMG_6752.jpg";
import me from "./img/meolde.png";
import cl from "./img/kittycl.png";
import kittysleep from "./img/kittysleep.png";
import menew from "./img/menew.png";
import mom from "./img/mom.JPG";
import terr from "./img/terry.png";
import mirr from "./img/mirror.png";
import kitty from "./img/kittybalcony.JPG";

import "./archive.css";
import Cutout from "./photocutout";
export default class Archive extends React.Component {
  state = { originals: false };

  showOriginals = () => {
    this.setState({ originals: !this.state.originals });
  };

  render() {
    return (
      <div>
        <h1>archive</h1>
        <h4>
          picture archive mainly for me to reminisce in, things that don't go to
          instagram for whatever reason
        </h4>
        <Cutout src={cl}></Cutout>
        <Cutout src={mirr}></Cutout>
        <Cutout src={wa}></Cutout>
        <Cutout src={menew}></Cutout>
        <Cutout src={kitty}></Cutout>
        <Cutout src={mom}></Cutout>
        <Cutout src={kittysleep}></Cutout>
        <Cutout src={terr}></Cutout>
      </div>
    );
  }
}
