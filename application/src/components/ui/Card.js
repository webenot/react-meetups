import React from 'react';

import { card } from './Card.module.sass';

export const Card = ({ children }) => (
  <div className={card}>
    {children}
  </div>
);
