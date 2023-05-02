import React, { useState } from "react";
import Bullet from "../working/workingBullet";
import DeepWork from "./2023/deepwork";
import Collapsible from "../components/Collapsible";
import ZeroToOne from "./2023/zerotoone";

export default function Books() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCollapsible = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <h1>books</h1>
      <p>
        Book reviews, why I like or dislike them, what were the most meaningful
        things I learned from them and a subjective rating from 0 to 5.
      </p>
      <h3>2023</h3>
      <Collapsible header="The network state" index={0} openIndex={openIndex} toggleCollapsible={toggleCollapsible} />
      <Collapsible header="The four agreements" index={1} openIndex={openIndex} toggleCollapsible={toggleCollapsible} />
      <Collapsible header="Industrial society and it's future" index={2} openIndex={openIndex} toggleCollapsible={toggleCollapsible} />
      <Collapsible header="Atomic habits" index={3} openIndex={openIndex} toggleCollapsible={toggleCollapsible} />
      <Collapsible header="The changing world order" index={4} openIndex={openIndex} toggleCollapsible={toggleCollapsible} />
      <Collapsible header="System design interview" index={5} openIndex={openIndex} toggleCollapsible={toggleCollapsible} />
      <Collapsible header="Bronze age mindset" index={6} openIndex={openIndex} toggleCollapsible={toggleCollapsible} />
      <Collapsible header="Zero to one" index={7} openIndex={openIndex} toggleCollapsible={toggleCollapsible}>
        <ZeroToOne />
      </Collapsible>
      <Collapsible header="Deep work" index={8} openIndex={openIndex} toggleCollapsible={toggleCollapsible}>
        <DeepWork />
      </Collapsible>

      <h3>Currently reading</h3>
      <Collapsible header="The brothers karamazov" index={9} openIndex={openIndex} toggleCollapsible={toggleCollapsible} />
      <Collapsible header="The sovereign individual" index={10} openIndex={openIndex} toggleCollapsible={toggleCollapsible} />
    </div>
  );
}

// {/* Network state *****
// The four agreements ***.5
// Industrial society & its future ****
// Atomic habits. ****.5
// The changing world order by ray dalio ****
// System design ***
// Bronze age mindset — kinda garbo, should stop, it’s so stupid
// Zero to one ****
// Deep work ***.5 */}