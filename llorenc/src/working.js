import React from "react";

export default class Working extends React.Component {
  render() {
    return (
      <div>
        <h1>working on</h1>

        <ul>
          <li className="box">
            career <br></br>
            <a className="bullet-box">decentralized identity</a>
          </li>
          <li className="box">
            social
            <br></br>
            <a className="bullet-box">thinking less things</a>
            {/* <p>Trying to think less things and be less self-absorbed.</p> */}
          </li>
          <li className="box">
            active
            <br></br>
            <a className="bullet-box">rope skipping</a>
            {/* <p>
              I'm currently working on double unders. I'm trying to see how
              close I can get to the world record for 30 seconds. My record is
              71. The world record is 102:
              https://www.reddit.com/r/theocho/comments/8anf0r/double_under_world_record_30sec_competitive_jump/
            </p> */}
          </li>
          <li className="box">
            creative
            <br></br>
            <a className="bullet-box">music</a>
            {/* <p>
              I am learning guitar, as an adult. I will upload stuff to my
              youtube channel and link it here soon, to see my progress.
            </p> */}
          </li>
          <li className="box">
            reading
            <br></br>
            <a className="bullet-box">books & articles</a>
            {/* <p></p> */}
          </li>
        </ul>
      </div>
    );
  }
}
