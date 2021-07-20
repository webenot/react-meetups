import React, { useContext } from 'react';

import { MeetupList } from '../components/meetups/MeetupList';
import { FavoritesContext } from '../store/favorites.context';

export const FavoritesPage = () => {

  const { favorites } = useContext(FavoritesContext);

  return (
    <section>
      <h1>My Favorites</h1>
      {!favorites.length ? (
        <div>Your Favorites List is Empty</div>
      ) : (
        <MeetupList meetups={favorites} />
      )}
    </section>
  );
};
