/*
*  @Rotas
*
*/

import React  from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

//Componets custom
import NavDefault     from './navigation/default.jsx';
import Home           from './page/home.jsx';
import Preferencias   from './page/preferencias.jsx';


class App extends React.Component {
  render() {
    return(
      <Router history={hashHistory}>
        <Route path="/" component={NavDefault}>
          <IndexRoute component={Home}></IndexRoute>
          <Route path="/preferencias" component={Preferencias}></Route>
        </Route>
      </Router>
    );
  }
}



export default App;

