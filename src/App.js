import React, { Fragment } from 'react';
import './sass/main.scss';
import { Configure, Navbar, Profile } from './components';

export default function App() {
  return( 
    <Fragment>
      <Navbar/>
      <Profile/>
      <Configure/>
    </Fragment>
    );

}
