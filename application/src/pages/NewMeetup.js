import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { NewMeetupForm } from '../components/meetups/NewMeetupForm';

export const NewMeetupPage = () => {

  const history = useHistory();

  const handleAddMeetup = useCallback(meetup => {
    // Get 405 error without "auth" query param
    fetch(
      `https://react-meetups-28834-default-rtdb.europe-west1.firebasedatabase.app/meetups.json?auth=${process.env.REACT_APP_FIREBASE_AUTH_KEY}`,
      {
        method: 'POST',
        body: JSON.stringify(meetup),
        headers: { 'Content-Type': 'application/json' },
      },
    )
      .then(() => history.replace('/'));
  }, []);

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </section>
  );
};
