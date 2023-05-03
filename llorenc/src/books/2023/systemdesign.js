import React from "react";
import Highlights from "../../components/Highlights";

const SystemDesign = () => {
  const highlights = [
    "that. An effective system design interview gives strong signals about a person's ability to collaborate, to work under pressure, and to resolve ambiguity constructively. The ability to ask good questions is also an essential skill, and many interviewers specifically look for this skill. A good interviewer also looks for red flags. Over-engineering is a real disease of many engineers as they delight in design purity and ignore tradeoffs. They are often unaware of the compounding costs of over-engineered systems, and many companies pay a high price for that ignorance. You certainly do not want to demonstrate this tendency in a system design interview. Other red flags include narrow mindedness, stubbornness, etc.",
    "•Come up with an initial blueprint for the design. Ask for feedback. Treat your interviewer as a teammate and work together. Many good interviewers love to talk and get involved. •Draw box diagrams with key components on the whiteboard or paper. This might include clients (mobile/web), APIs, web servers, data stores, cache, CDN, message queue, etc. •Do back-of-the-envelope calculations to evaluate if your blueprint fits the scale constraints. Think out loud. Communicate with your interviewer if back-of-the-envelope is necessary before diving into it.",
    "•Always ask for clarification. Do not assume your assumption is correct. •Understand the requirements of the problem. •There is neither the right answer nor the best answer. A solution designed to solve the problems of a young startup is different from that of an established company with millions of users. Make sure you understand the requirements. •Let the interviewer know what you are thinking. Communicate with your interview. •Suggest multiple approaches if possible. •Once you agree with your interviewer on the blueprint, go into details on each component. Design the most critical components first. •Bounce ideas off the interviewer. A good interviewer works with you as a teammate. •Never give up.",
  ];

  const review = `
  Alex Xu's goated system design interview book. It's great, I think it's very practical, but I still bombed the design interview after having read this book
  while also doing Cracking the System Design Interview from Educative.io.

  I give it a 4/5, I don't usually read technical books.
  `;

  const highlightsUrl = process.env.PUBLIC_URL + "/2023/sysdesign.html";

  return (
    <div>
      <Highlights highlights={highlights} highlightsUrl={highlightsUrl} review={review}/>
    </div>
  );
};

export default SystemDesign;