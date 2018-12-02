import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '400px', width:'90%',
    display: 'flex',  
    flexFlow: 'row wrap'
    }}>
      {props.children}
    </div>
  );
};

export default Scroll;