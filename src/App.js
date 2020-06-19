import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";


import MainContainerv2 from './containers/MainContainerv2/MainContainerv2';
import TaskContainer from './containers/TaskContainer/TaskContainer';
import Container404 from './containers/Container404/Container404'
import LyricsFind from './containers/LyricsFind/LyricsFind';
import Lyrics from './containers/Lyrics/Lyrics';
import Inicio from './containers/Inicio/Inicio';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Inicio/>
          </Route> 
          <Route exact path="/lyrics">
            <LyricsFind/>
          </Route>
          <Route exact path="/historial">
            <MainContainerv2/>
          </Route>
          <Route path="/create">
            <TaskContainer/>
          </Route>
          <Route exact path="/lyrics/:id">
            <Lyrics/>
          </Route>
          <Route path="*">
            <Container404 />
          </Route>
          
      </Switch>
  </Router>
  );
}

export default App;
