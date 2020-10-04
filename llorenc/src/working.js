import React from "react";

export default class Working extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li className="box">
            career <br></br>
            <a className="bullet-box">decentralized identity</a>
          </li>
          <li className="box">
            social
            <br></br>
            <a className="bullet-box">thinking less things</a>
          </li>
          <li className="box">
            active
            <br></br>
            <a className="bullet-box">rope skipping</a>
          </li>
          <li className="box">
            creative
            <br></br>
            <a className="bullet-box">music</a>
          </li>
        </ul>
      </div>
    );
  }
}
