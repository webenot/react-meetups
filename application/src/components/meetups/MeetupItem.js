import React, { useCallback, useContext } from 'react';

import classes from './MeetupItem.module.sass';
import { Card } from '../ui/Card';
import { FavoritesContext } from '../../store/favorites.context';

export const MeetupItem = ({
  id,
  title,
  image,
  address,
  description,
}) => {

  const { removeFavorite, addFavorite, itemIsFavorite } = useContext(FavoritesContext);

  const isFavorite = itemIsFavorite(id);

  const toggleFavoriteStatusHandler = useCallback(() => {
    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite({
        id,
        title,
        image,
        address,
        description,
      });
    }
  }, [ isFavorite ]);

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button
            type="button"
            onClick={toggleFavoriteStatusHandler}
          >{isFavorite ? 'Remove From Favorite' : 'To Favorite'}
          </button>
        </div>
      </Card>
    </li>
  );
};
