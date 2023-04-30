import React, { useState } from 'react';

function Collapsible(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div >
      <h5 className='collapsible' onClick={toggleCollapsible}> - {props.header}</h5>
      {isOpen && props.children}
    </div>
  );
}

export default Collapsible;