import React, { useRef } from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';

import useStyles from './styles';
import useAlan from './components/Alan';

import { Actors, MovieInformation, Movies, NavBar, Profile } from './components';

function App() {
  const classes = useStyles();
  const alanBtnContainer = useRef();

  useAlan();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/movie/:id" element={<MovieInformation />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/approved" element={<Navigate to="/" replace />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
}

export default App;
