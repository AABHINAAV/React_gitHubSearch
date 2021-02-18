import React from 'react';
import spinner from './spinner.gif';
const Spinner = () => {
  return (
    <>
      <img
        src={spinner}
        alt='loading...'
        style={{ width: '50px', height: '50px', margin: 'auto', display: 'block' }}
      />
    </>
  );
};

export default Spinner;
