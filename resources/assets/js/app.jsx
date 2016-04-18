/*
*  @Rotas
*
*/

import React  from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

//Componets custom
import NavDefault from './navigation/default.jsx';


class App extends React.Component {
  render() {
    return(
      <Router history={hashHistory}>
        <Route path="/" component={NavDefault}></Route>
      </Router>
    );
  }
}



export default App;

