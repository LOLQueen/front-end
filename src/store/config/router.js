import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../../containers/App';
import LandingPage from '../../containers/LandingPage';
import SummonerPage from '../../containers/SummonerPage';

const routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ LandingPage } />
    <Route path=":region/summoners/:summonerName" component={ SummonerPage }/>
  </Route>
);

export default routes;
