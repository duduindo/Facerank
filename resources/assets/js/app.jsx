/*
*  @
*
*/

import React  from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';


const Message = (props) =>
  <div><h1>{props.params.message || 'Olá'}</h1><Links /> </div>

const Links = (props) =>
  <nav>
    <Link to="/" >Olá</Link> &nbsp;
    <Link to="/Hi" >Hi</Link> &nbsp;
    <Link to="/Yo" >Yo</Link> &nbsp;
  </nav>

class App extends React.Component {
  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/(:message)" component={Message}></Route>
      </Router>
    );
  }
}

export default App;

