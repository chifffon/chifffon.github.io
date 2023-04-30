import React from "react";
import Bullet from "../working/workingBullet";
import deepwork from "./2023/deepwork";

export default class Books extends React.Component {
  render() {
    return (
      <div>
        <h1>books</h1>
        <p>
          Book reviews, why I like or not like them, what was the most meaningful things I've learned from them, and a subjective rating from 0 to 5 points.
        </p>
        <h3>
        2023
        </h3>
          <Bullet title="The network state" text={""}></Bullet>
          <Bullet title="The four agreements" text={""}></Bullet>
          <Bullet title="Industrial society and it's future" text={""}></Bullet>
          <Bullet title="Atomic habits" text={""}></Bullet>
          <Bullet title="The changing world order" text={""}></Bullet>
          <Bullet title="System design interview" text={""}></Bullet>
          <Bullet title="Bronze age mindset" text={""}></Bullet>
          <Bullet title="Zero to one" text={""}></Bullet>
          <Bullet title="Deep work" text={deepwork}></Bullet>

        <h3>
         Currently reading
        </h3>
          <Bullet title="The brothers karamazov" text=""></Bullet>
          <Bullet title="The sovereign individual" text=""></Bullet>

          {/* Network state *****
The four agreements ***.5
Industrial society & its future ****
Atomic habits. ****.5
The changing world order by ray dalio ****
System design ***
Bronze age mindset — kinda garbo, should stop, it’s so stupid
Zero to one ****
Deep work ***.5 */}

          {/* <p>Trying to think less things and be less self-absorbed.</p> */}
      </div>
    );
  }
}
