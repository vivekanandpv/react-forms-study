import React from 'react';

const Navbar = (props) => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a className='navbar-brand' href='#'>
          <img
            src='%PUBLIC_URL%/logo192.png'
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt=''
          />
          React Learning
        </a>
      </nav>
    </>
  );
};

export default Navbar;
