import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { header, logo, badge, active } from './MainNavigation.module.sass';
import { FavoritesContext } from '../../store/favorites.context';

export const MainNavigation = () => {

  const { totalFavorites } = useContext(FavoritesContext);

  const location = useLocation();

  return (
    <header className={header}>
      <div className={logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link
              to='/'
              className={location.pathname === '/' ? active : ''}
            >All Meetups</Link>
          </li>
          <li>
            <Link
              to='/new-meetup'
              className={location.pathname === '/new-meetup' ? active : ''}
            >Add New Meetup</Link>
          </li>
          <li>
            <Link
              to='/favorites'
              className={location.pathname === '/favorites' ? active : ''}
            >
              My Favorites
              <span className={badge}>{totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
