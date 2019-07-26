import React, { Component } from 'react';

const Ourservice = props => {
  const className = props.service ? 'service' : '';
  return (
    <div>
      <h2>Our Services</h2>
      <div className={`${className} font-xl`}>TELEVISION AND RADIO SETUP</div>
      <div className={className}>DIGITAL CATV & MMDS</div>
      <div className='service'>FIBER & NETWORK</div>

      <div className='slideing-part'>hello</div>
    </div>
  );
};

export default Ourservice;
