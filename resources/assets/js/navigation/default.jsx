/*
*  @Cabeçalho > default
*
*/

import React from 'react';
import { Link } from 'react-router';
import { Layout, Drawer, Navigation, Header } from 'react-mdl';

const Style = {
  height: `${ window.screen.height }px`,
  position: 'relative'
};

class NavDefault extends React.Component {

  static propTypes = {
    children: React.PropTypes.object
  }

  constructor(props) {
    super(props);
    console.log(this.props.children)
  }

  render() {
    return(
      <div style={Style}>
        <Layout fixedHeader>
            <Header title="Teste"/>
            <Drawer title="Menu">
              <Navigation>
                <Link to="/">Fulano</Link>
                <Link to="/perfil">Perfil</Link>
                <Link to="/ranking">Ranking</Link>
                <Link to="/preferencias">Preferências</Link>
                <Link to="/procurar">Procurar</Link>
                <Link to="/configuracoes">Configurações</Link>
              </Navigation>
            </Drawer>
            {this.props.children}
        </Layout>
      </div>
    );
  }
}

export default NavDefault;

