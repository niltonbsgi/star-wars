import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SwPersonsList from '../views/person/sw-persons-list';
import SwHomePage from '../views/home/sw-home-page';
import SwPersonDetail from '../views/person/sw-person-detail';

function Routes() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/sw_home/' component={SwHomePage} />
            <Route exact path='/sw_persons/' component={SwPersonsList} />
            <Route exact path='/sw_persons/:id' component={SwPersonDetail} />
            <Route exact path='*' component={SwHomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
  
  export default Routes;