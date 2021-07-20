import React from 'react';

import classes from './Layout.module.sass';
import { MainNavigation } from './MainNavigation';

export const Layout = ({ children }) => (
  <div>
    <MainNavigation />
    <main className={classes.main}>
      {children}
    </main>
  </div>
);
