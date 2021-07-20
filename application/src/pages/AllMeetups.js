import React, { useState, useEffect } from 'react';

import { MeetupList } from '../components/meetups/MeetupList';

export const AllMeetupsPage = () => {

  const [ loading, setLoading ] = useState(true);
  const [ meetups, setMeetups ] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://react-meetups-28834-default-rtdb.europe-west1.firebasedatabase.app/meetups.json?auth=${process.env.REACT_APP_FIREBASE_AUTH_KEY}`,
    )
      .then(response => response.json())
      .then(data => {
        const result = [];
        for (const id in data) {
          if (data.hasOwnProperty(id)) {
            result.push({
              id,
              ...data[id],
            });
          }
        }
        setMeetups(result);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <section>Loading...</section>
      ) : (
        <section>
          <h1>All Meetups</h1>
          <MeetupList meetups={meetups} />
        </section>
      )}
    </>
  );
};
