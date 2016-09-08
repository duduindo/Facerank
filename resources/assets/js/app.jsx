/*
*  @Rotas
*
*/

import React  from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

//  Componets custom
import NavDefault         from './navigation/default.jsx';
import Home               from './page/home.jsx';
import Preferencias       from './page/preferencias.jsx';
import Configuracoes      from './page/configuracoes.jsx';
import Procurar           from './page/procurar.jsx';
import Ranking            from './page/ranking.jsx';
import Perfil             from './page/perfil.jsx';
import Login              from './page/login.jsx';
import ProcurarLocais     from './page/preferencias-buscar-locais.jsx';


class App extends React.Component {
  render() {
    return(
      <Router history={hashHistory}>
        <Route path="/" component={NavDefault}>
          <IndexRoute component={Home} />
          <Route path="/preferencias" component={Preferencias} />
          <Route path="/configuracoes" component={Configuracoes} />
          <Route path="/procurar" component={Procurar} />
          <Route path="/ranking" component={Ranking} />
          <Route path="/perfil" component={Perfil} />
          <Route path="/login" component={Login} />
          <Route path="/procurarLocais" component={ProcurarLocais} />
        </Route>
      </Router>
    );
  }
}

export default App;
