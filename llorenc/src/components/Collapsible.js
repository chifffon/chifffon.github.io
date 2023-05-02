import React, { useState } from 'react';

function Collapsible(props) {
  const isOpen = props.index === props.openIndex;

  const toggleCollapsible = () => {
    props.toggleCollapsible(props.index);
  };

  return (
    <div>
      <h5 className="collapsible" onClick={toggleCollapsible}>
        - {props.header}
      </h5>
      {isOpen && <div>
        {props.children}
      </div>}
    </div>
  );
}

export default Collapsible;