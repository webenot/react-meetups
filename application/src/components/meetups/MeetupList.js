import React from 'react';

import { MeetupItem } from './MeetupItem';
import classes from './MeetupList.module.sass';

export const MeetupList = ({ meetups }) => (
  <ul className={classes.list}>
    {meetups.map(meetup => (
      <MeetupItem
        key={`meetup-${meetup.id}`}
        title={meetup.title}
        image={meetup.image}
        description={meetup.description}
        address={meetup.address}
        id={meetup.id}
      />
    ))}
  </ul>
);
