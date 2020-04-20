import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import App from './App';

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

      </Switch>
    </BrowserRouter>
  );
}