import React from "react";

import "./listening.css";

export default class Listening extends React.Component {
  render() {
    return (
      <div>
        <h1>listening to</h1>
        <h4>
          I am trying to stop using Spotify or any other music streaming
          services. But I'm also trying to listen to more music after being away
          from it for a while, hence why I keep my subscription. My plan is to
          buy a music setup for my home and start buying music from artists
          directly instead of having a subscription. I'm planning to sell my tv
          because I don't really use it but I only bought it a few months ago,
          so I decided to give it some time to decide, I hope to make this
          change next year. Until then, I will continue sharing what I'm
          currently listening to, in a monthly basis, in the form of Spotify
          playlists.
        </h4>
        <h3>Last edit: 10/06/2020</h3>
        <p>
          Since September, I'm trying to step away from melancholic music. Music
          that evokes melancholy and hopelessness has an effect on my daily mood
          and it gets to the point where it affects my emotional stability
          considerably, even so, it is still the music that I've listened to for
          most of my life and I can't stop myself from enjoying it sometimes, so
          there still are melancholic tunes in there.
        </p>
        <ul>
          <li>
            <div className="playlist">
              <div className="month">
                <a href="https://open.spotify.com/playlist/1PxmvP7utB8k7pfGGVdaKN?si=Ze7bS-MVTrmop69gFlcvLg">
                  October
                </a>
                <iframe
                  src="https://open.spotify.com/embed/playlist/1PxmvP7utB8k7pfGGVdaKN"
                  width="300"
                  height="380"
                  frameborder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              </div>
              <div className="month">
                <a href="https://open.spotify.com/playlist/5PQkjp0w1mSrZU5JAHNCcv?si=-t3od6TCTUq4IL1Xzxq2_w">
                  September
                </a>
                <iframe
                  src="https://open.spotify.com/embed/playlist/5PQkjp0w1mSrZU5JAHNCcv"
                  width="300"
                  height="380"
                  frameborder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              </div>
              <div className="month">
                <a href="https://open.spotify.com/playlist/4eIwoptcDY3iJhy8mXDpbv?si=Y1U9tyanSXWkZPFoS7VJbA">
                  August
                </a>
                <iframe
                  src="https://open.spotify.com/embed/playlist/4eIwoptcDY3iJhy8mXDpbv"
                  width="300"
                  height="380"
                  frameborder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              </div>
              <div className="month">
                <a href="https://open.spotify.com/playlist/3lzmzPhM4jcl4sTFkjDcj7?si=jyS-zPQ3S1GtmrrmaGGURw">
                  July
                </a>
                <iframe
                  src="https://open.spotify.com/embed/playlist/3lzmzPhM4jcl4sTFkjDcj7"
                  width="300"
                  height="380"
                  frameborder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              </div>
              <div className="month">
                <a href="https://open.spotify.com/playlist/7MZkmhxNxMdt0FcM6xkO8Z?si=750hdlZHTk2P1JW7gTJ4dg">
                  June
                </a>
                <iframe
                  src="https://open.spotify.com/embed/playlist/7MZkmhxNxMdt0FcM6xkO8Z"
                  width="300"
                  height="380"
                  frameborder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
