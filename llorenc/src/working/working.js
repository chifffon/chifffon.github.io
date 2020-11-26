import React from "react";
import Bullet from "./workingBullet";

import beingMoreSocial from "./entries/beingMoreSocial";
import ropeSkipping from "./entries/ropeSkipping";
import thinkingless from "./entries/thinkingless";
import coffee from "./entries/writing/hermano";
import laying from "./entries/laying";
import booksArticles from "./entries/booksArticles";

export default class Working extends React.Component {
  render() {
    return (
      <div>
        <h1>working on</h1>

        <ul>
          {/* <li className="box">
            career <br></br>
            <Bullet
              title="decentralized identity"
              text={decentralizedIdentity()}
            ></Bullet>
          </li> */}
          <li className="box">
            social
            <br></br>
            <Bullet title="thinking less things" text={thinkingless}></Bullet>
            <Bullet title='being more "social"' text={beingMoreSocial}></Bullet>
            {/* <p>Trying to think less things and be less self-absorbed.</p> */}
          </li>
          <li className="box">
            active
            <br></br>
            <Bullet title="rope skipping" text={ropeSkipping}></Bullet>
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
            <Bullet
              title="books & articles"
              className="bullet-box"
              text={booksArticles}
            ></Bullet>
            {/* <p></p> */}
          </li>
          {/* <li className="box">
            writing
            <br></br>
            <Bullet title="lying in the floor" text={laying}></Bullet>
            <Bullet title="coffee" text={coffee}></Bullet>
          </li> */}
        </ul>
      </div>
    );
  }
}
