import React from "react";
import Bullet from "../working/workingBullet";
import DeepWork from "./2023/deepwork";
import Collapsible from "../components/Collapsible";

export default class Books extends React.Component {
  render() {
    return (
      <div>
        <h1>books</h1>
        <p>
          Book reviews, why I like or dislike them, what were the most meaningful things I learned from them and a subjective rating from 0 to 5.
        </p>
        <h3>
        2023
        </h3>
          <Collapsible header="The network state">
            <DeepWork></DeepWork>
          </Collapsible>
          <Collapsible header="The four agreements">
            <DeepWork></DeepWork>
          </Collapsible>
          <Collapsible header="Industrial society and it's future">
            <DeepWork></DeepWork>
          </Collapsible>
          <Collapsible header="Atomic habits">
            <DeepWork></DeepWork>
          </Collapsible>
          <Collapsible header="The changing world order">
            <DeepWork></DeepWork>
          </Collapsible>
          <Collapsible header="System design interview">
            <DeepWork></DeepWork>
          </Collapsible>
          <Collapsible header="Bronze age mindset">
            <DeepWork></DeepWork>
          </Collapsible>
          <Collapsible header="Zero to one">
            <DeepWork></DeepWork>
          </Collapsible>
          <Collapsible header="Deep work">
            <DeepWork></DeepWork>
          </Collapsible>
          <div>
          </div>

        <h3>
         Currently reading
        </h3>
        <Collapsible header="The brothers karamazov">
          </Collapsible>
          <Collapsible header="The sovereign individual">
          </Collapsible>
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