/*
*  @Cabeçalho > default
*
*/

import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
import { Layout, Drawer, Navigation, Content, Header, HeaderRow, Textfield } from 'react-mdl';

const Links = () =>
  <Navigation>
    <Link to="/">Fulano</Link>
    <Link to="/perfil">Perfil</Link>
    <Link to="/ranking">Ranking</Link>
    <Link to="/preferencias">Preferências</Link>
    <Link to="/procurar">Procurar</Link>
    <Link to="/configuracoes">Configurações</Link>
  </Navigation>


const Style = {
  height: `${window.screen.height}px`,
  position: 'relative'
}

class NavDefault extends React.Component {
  render() {
    return(
      <div style={Style}>
        <Layout fixedHeader>
            <Header title="&nbsp;"></Header>
            <Drawer title="Menu">
              <Router history={ hashHistory } >
                <Route path="/" component={Links}></Route>
                <Route path="/perfil" component={Links}></Route>
                <Route path="/ranking" component={Links}></Route>
                <Route path="/preferencias" component={Links}></Route>
                <Route path="/procurar" component={Links}></Route>
                <Route path="/configuracoes" component={Links}></Route>
              </Router>
            </Drawer>
            <Content />
        </Layout>
      </div>
    );
  }
}

export default NavDefault;

