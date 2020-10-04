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

export default class Original extends React.Component {
  state = { cutout: true };

  switchlayout = () => {
    this.setState({ cutout: !this.state.cutout });
  };
  render() {
    const { src } = this.props;
    return (
      <div onMouseEnter={this.switchlayout} onMouseLeave={this.switchlayout}>
        {this.state.cutout ? (
          <div className="photo-container">
            <div className="cutout">
              <img className="photo" src={src}></img>
              <img className="photo" src={src}></img>
              <img className="photo" src={src}></img>
              <img className="photo" src={src}></img>
              <img className="photo" src={src}></img>
              <img className="photo" src={src}></img>
            </div>
          </div>
        ) : (
          <div className="photo-container">
            <img className="photo" src={src}></img>
          </div>
        )}
      </div>
    );
  }
}
