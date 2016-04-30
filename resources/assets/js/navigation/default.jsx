/*
*  @Cabeçalho > default
*
*/

import React from 'react';
import { Link } from 'react-router';
import { Layout, Drawer, Navigation, Content, Header, HeaderRow, Textfield } from 'react-mdl';



const Style = {
  height: `${window.screen.height}px`,
  position: 'relative'
}

class NavDefault extends React.Component {

  static propTypes = {
    children: React.PropTypes.object
  }

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div style={Style}>
        <Layout fixedHeader>
            <Header title="Teste"></Header>
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

