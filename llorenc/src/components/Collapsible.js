import React, { useState } from 'react';

function Collapsible(props) {
  const isOpen = props.index === props.openIndex;

  const toggleCollapsible = () => {
    props.toggleCollapsible(props.index);
  };

  // Calculate the number of full and half stars to display based on the prop value
  const fullStars = Math.floor(props.stars);
  const hasHalfStar = (props.stars - fullStars) >= 0.5;
  const halfStars = hasHalfStar ? 1 : 0;

  // Create an array of full and half star elements
  const starElements = [];
  for (let i = 0; i < fullStars; i++) {
    starElements.push(<span key={`full_${i}`}>&#9733;</span>);
  }
  if (hasHalfStar) {
    starElements.push(<span key="half">&#9734;&#xFE0E;</span>);
  }
  for (let i = 0; i < (5 - fullStars - halfStars); i++) {
    starElements.push(<span key={`empty_${i}`}>&#9734;</span>);
  }

  return (
    <div>
      <h5 className="collapsible" onClick={toggleCollapsible}>
        {starElements} {props.header}
      </h5>
      {isOpen && <div>
        {props.children}
      </div>}
    </div>
  );
}

export default Collapsible;
