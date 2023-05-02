import React from "react";
import Highlights from "../../components/Highlights";

const DeepWork = () => {
  const highlights = [
    "To support deep work often requires the rejection of much of what is new and high-tech. Deep work is exiled in favor of more distracting high-tech behaviors, like the professional use of social media, not because the former is empirically inferior to the latter.",
    "We live in an era where anything Internet related is understood by default to be innovative and necessary. Depth-destroying behaviors such as immediate e-mail responses and an active social media presence are lauded, while avoidance of these trends generates suspicion.",
    "Ironically, jobs are actually easier to enjoy than free time, because like flow activities they have built-in goals, feedback rules, and challenges, all of which encourage one to become involved in one’s work, to concentrate and lose oneself in it. Free time, on the other hand, is unstructured, and requires much greater effort to be shaped into something that can be enjoyed.",
    "To build your working life around the experience of flow produced by deep work is a proven path to deep satisfaction.",
    'The task of a craftsman, they conclude, "is not to generate meaning, but rather to cultivate in himself the skill of discerning the meanings that are already there."',
    "The same applies to knowledge work. You don’t need a rarified job; you need instead a rarified approach to your work.",
    "I have been a happy man ever since January 1, 1990, when I no longer had an email address. I’d used email since about 1975, and it seems to me that 15 years of email is plenty for one lifetime. Email is a wonderful thing for people whose role in life is to be on top of things. But not for me; my role is to be on the bottom of things. What I do takes long hours of studying and uninterruptible concentration.",
    '“It is only ideas gained from walking that have any worth.”',
  ];

  const review = `
  I liked multiple things about this book; the first two-thirds or so were very valuable, and I wish to incorporate these ideas with me.
  
  Being bored is natural and we should have that, the absence of noise and stimuli rests our brain and is where creativity happens, Cal mentions people like Nietzsche or Jung going for deep walks and isolating themselves to be with their thoughts only, and this was like a mandated ritual, something necessary for them to be able to produce world-changing work.
  
  I agree with the idea about technology not being entirely beneficial to us, we constantly accept a new technology if it has a single valuable thing and we completely ignore the potential harms that this technology could bring, and leave them to the user’s will to be able to handle them with no guidance or warning. I overall think technology has had deeply adverse effects on people, with the obvious that our attention spans are being exposed to technologies that reduce them even further every day, you have to deal with this issue, and nobody will do it for you.
  
  Cal also mentions that since everyone is used to shallow work and this is the default, deep work gives an advantage to knowledge workers.
  
  He also mentions an artisan’s approach to deep work, in which one is in love with the approach to the work, instead of the surrounding matters or the object itself. This, I believe, is a healthy approach to working in a capitalist economy in which you can struggle to find value in working for a company that could not care for you.
  
  I give it a 3.8/5 because the last third was mostly talking about emails and being a proffessor.
  `;

  const highlightsUrl = process.env.PUBLIC_URL + "/2023/deepwork_highlights.html";

  return (
    <div>
      <Highlights highlights={highlights} highlightsUrl={highlightsUrl} review={review}/>
    </div>
  );
};

export default DeepWork;