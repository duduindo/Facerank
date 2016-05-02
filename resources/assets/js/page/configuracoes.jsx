/*
*  @Configurações
*
*/
import React from 'react';
import { Content, Button } from 'react-mdl';


class Configuracoes extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Content id="ComponentConfiguracoes">
        <section>
          <div>
            <Button raised ripple> Política de privacidade </Button>
          </div>

          <div>
            <Button raised ripple> Termos de uso </Button>
          </div>

          <div>
            <Button raised ripple colored> Loggoff </Button>
          </div>

          <div>
            <Button raised ripple accent> Deletar conta </Button>
          </div>

        </section>
      </Content>
    );
  }
}

export default Configuracoes;
