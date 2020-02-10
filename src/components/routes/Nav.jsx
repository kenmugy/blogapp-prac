import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='teal'>
      <div className='container nav-wrapper'>
        <a href='#' className='brand-logo left'>
          Bblog
        </a>
        <ul className='right'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/post'>Post</Link>
          </li>
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
