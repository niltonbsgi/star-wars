import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SwPersonsList from '../pages/sw-persons-list';

function Routes() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/sw_persons/' component={SwPersonsList} />
            <Route exact path='*' component={SwPersonsList} />
          </Switch>
        </div>
      </Router>
    );
  }
  
  export default Routes;