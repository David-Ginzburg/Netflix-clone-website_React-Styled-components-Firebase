import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home'

const App = () => {
  return (
    <Router>
        <Switch>
            <Route path="/sigin">
                <p>I will be the sign in page</p>
            </Route>
            <Route path="/singup">
                <p>I will be the sign up page</p>
            </Route>
            <Route path="/browse">
                <p>I will be the browse page</p>
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </Router>
  );
}

export default App
