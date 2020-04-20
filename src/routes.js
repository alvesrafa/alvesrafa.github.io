import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import App from './App';

import ViewHub from './pages/projects/ViewHub';
import Assistencia from './pages/projects/Assistencia';
import BeTheHero from './pages/projects/BeTheHero';
import DevRadar from './pages/projects/DevRadar';
import MakingCard from './pages/projects/MakingCard';
import RastreiAqui from './pages/projects/RastreiAqui';
import Weather from './pages/projects/Weather';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <App/>
        </Route>
        <Route exact path="/portfolio">
          <App/>
        </Route>

        <Route path="/viewhub">
          <ViewHub/>
        </Route>
        <Route path="/assistencia">
          <Assistencia/>
        </Route>
        <Route path="/bethehero">
          <BeTheHero/>
        </Route>
        <Route path="/devradar">
          <DevRadar/>
        </Route>
        <Route path="/makingcard">
          <MakingCard/>
        </Route>
        <Route path="/rastreiaqui">
          <RastreiAqui/>
        </Route>
        <Route path="/weather">
          <Weather/>
        </Route>


      </Switch>
    </BrowserRouter>
  );
}