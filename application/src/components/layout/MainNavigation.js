import React from 'react';
import { Link } from 'react-router-dom';

import { header, logo } from './MainNavigation.module.sass';

export const MainNavigation = () => (
  <header className={header}>
    <div className={logo}>React Meetups</div>
    <nav>
      <ul>
        <li>
          <Link to='/'>All Meetups</Link>
        </li>
        <li>
          <Link to='/new-meetup'>Add New Meetup</Link>
        </li>
        <li>
          <Link to='/favorites'>My Favorites</Link>
        </li>
      </ul>
    </nav>
  </header>
);
