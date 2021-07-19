import React from 'react';

import classes from './MeetupItem.module.sass';
import { Card } from '../ui/Card';

export const MeetupItem = ({ title, image, address, description }) => (
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
        <button type="button">To Favorite</button>
      </div>
    </Card>
  </li>
);
