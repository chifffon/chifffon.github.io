import React, { useState } from "react";

const Highlights = ({ highlights, highlightsUrl, review }) => {
  const [showHighlights, setShowHighlights] = useState(false);

  const toggleHighlights = () => {
    setShowHighlights(!showHighlights);
  };

  const formattedReview = review.split('\n').map((line, index) => <React.Fragment key={index}>{line}<br/></React.Fragment>);

  return (
    <div style={{ paddingLeft: "15px" }}>
      <p style={{ margin: 0, whiteSpace: "pre-line" }}>{formattedReview}</p>
        <p>
          4/5
        </p>
      <h4 style={{ cursor: "pointer" }} onClick={toggleHighlights}>
        Favorite highlights
      </h4>
      {showHighlights && (
        <>
          <p style={{ fontWeight: "400" }}>
            {highlights.map((highlight) => (
              <li className="highlight" key={highlight}>- {highlight}</li>
            ))}
            <a href={highlightsUrl} target="_blank">... see all highlights</a>
          </p>
        </>
      )}
    </div>
  );
};

export default Highlights;