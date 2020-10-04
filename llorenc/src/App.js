import React from "react";
import axios from "axios";
import About from "./about";
import Archive from "./archive";
import Blog from "./blog";
import Working from "./working";

import "./App.css";

class App extends React.Component {
  state = { advice: "", columnContent: null };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then(response => {
        const { advice } = response.data.slip;
        this.setState({ advice: advice });
      })
      .catch(error => {
        console.log(error);
      });
  };

  selectAbout = () => {
    this.setState({ columnContent: <About></About> });
  };

  selectBlog = () => {
    this.setState({ columnContent: <Blog></Blog> });
  };

  selectArchive = () => {
    this.setState({ columnContent: <Archive></Archive> });
  };

  selectWorking = () => {
    this.setState({ columnContent: <Working></Working> });
  };

  render() {
    const paragraph = `llorenç ibarra`;
    const quote = `"I have decided to live. I am going to use this suffering to purify me and help me get closer to God.
I think I could stand anything, any suffering, only to be able to say and to repeat to myself every moment, 'I exist.'
In thousands of agonies -- I exist. I'm tormented on the rack -- but I exist! Though I sit alone in a pillar -- I exist! I see the sun, and if I don't see the sun, I know it's there. And there's a whole life in that, in knowing that the sun is there. "

- The Brothers Karamazov`;
    return (
      <div>
        <div className="row">
          <div className="column-left">
            <div className="header">
              <h1>{paragraph}</h1>
            </div>
            <div>
              <a onClick={this.selectAbout}>about</a> //{" "}
              <a onClick={this.selectBlog}>blog</a> //{" "}
              <a onClick={this.selectArchive}>archive</a> //{" "}
              <a onClick={this.selectWorking}>currently working on</a>
              <br></br>
              <br></br>
            </div>
            <div className="bullet"></div>
            <p>{quote}</p>
            <p>
              I like people, but I am naturally shy and withdrawn. I am a tough
              person with myself. I need to constantly remind myself to not be
              hypervigilant.
              <br></br>
              <br></br>
              "Dove sta memoria You have not snared her, Scarecrow Death: She's
              in my pulse, My heart, my breath. Eye sees only Local hardware;
              Brain conceives Nonlocal software; Brain knows more Than eye can
              see: Brain can scan Eternity."
              <br></br>
              <br></br>I like people, but I am naturally shy and withdrawn. My
              life revolves around love. I need to constantly remind myself to
              love myself.
              <br></br>
              <br></br>
              "Dove sta memoria You have not snared her, Scarecrow Death: She's
              in my pulse, My heart, my breath. Eye sees only Local hardware;
              Brain conceives Nonlocal software; Brain knows more Than eye can
              see: Brain can scan Eternity."
              <br></br>
              <br></br>
              "Probably you were not quite well, my little dove, when you wrote
              to me, for a note of real melancholy pervaded your letter. I
              recognized in it a nature closely akin to my own. I know the
              feeling only too well. In my life, too, there are days, hours,
              weeks, aye, and months, in which everything looks black, when I am
              tormented by the thought that I am forsaken, that no one cares for
              me. Indeed, my life is of little worth to anyone. Were I to vanish
              from the face of the earth to-day, it would be no great loss to
              Russian music, and would certainly cause no one great unhappiness.
              In short, I live a selfish bachelor’s life. I work for myself
              alone, and care only for myself. This is certainly very
              comfortable, although dull, narrow, and lifeless. But that you,
              who are indispensable to so many whose happiness you make, that
              you can give way to depression, is more than I can believe. How
              can you doubt for a moment the love and esteem of those who
              surround you? How could it be possible not to love you? No, there
              is no one in the world more dearly loved than you are. As for me,
              it would be absurd to speak of my love for you. If I care for
              anyone, it is for you, for your family, for my brothers and our
              old Dad. I love you all, not because you are my relations, but
              because you are the best people in the world."
            </p>
          </div>
          <div className="column-right">{this.state.columnContent}</div>
        </div>
        <p className="footer">
          <a
            href="https://linkedin.com/in/jorge-ibarra-borbas"
            target="_blank"
            className="link"
          >
            linkedin
          </a>
          <a
            href="https://www.instagram.com/hhbhbbbj/"
            target="_blank"
            className="link"
          >
            instagram
          </a>
          <a
            href="https://github.com/chifffon/"
            target="_blank"
            className="link"
          >
            github
          </a>
        </p>
      </div>
    );
  }
}

export default App;
