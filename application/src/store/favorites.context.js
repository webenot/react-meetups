import React, { createContext, useState, useCallback, useEffect } from 'react';

export const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: meetup => meetup,
  removeFavorite: id => id,
  itemIsFavorite: id => id,
});

export const FavoritesContextProvider = ({ children }) => {

  const [ favorites, setFavorites ] = useState([]);

  useEffect(() => {
    let savedFavorites = window.localStorage.getItem('favorites');
    savedFavorites = savedFavorites ? JSON.parse(savedFavorites) : [];
    setFavorites(savedFavorites);
  }, []);

  const addFavoriteHandler = useCallback(meetup => {
    setFavorites(prevState => {
      const newFavorites = prevState.concat(meetup);
      window.localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  }, [ favorites ]);

  const removeFavoriteHandler = useCallback(id => {
    setFavorites(prevState => {
      const newFavorites = prevState.filter(meetup => meetup.id !== id);
      window.localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  }, [ favorites ]);

  const itemIsFavoriteHandler = useCallback(
    id => favorites.some(meetup => meetup.id === id),
    [ favorites ],
  );

  const context = {
    favorites,
    totalFavorites: favorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};
