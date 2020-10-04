import React from "react";
import kitty from "./img/IMG_2202.JPG";
import me from "./img/IMG_6752.jpg";
import wa from "./img/IMG_8947.jpg";

import "./archive.css";

export default class Archive extends React.Component {
  render() {
    return (
      <div>
        <h4>this is a photo archive, mainly for me to reminisce</h4>
        <img className="photo" src={kitty}></img>
        <img className="photo" src={me}></img>
        <img className="photo" src={wa}></img>
      </div>
    );
  }
}
