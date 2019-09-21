import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => (
  <div className='header'>
    <header>Header</header>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/posts'>Post</Link></li>
      </ul>
  </div>
);

export default Header;