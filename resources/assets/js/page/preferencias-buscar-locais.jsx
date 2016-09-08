/*
*  @Procurar
*
*/

import React from 'react';
import { Content, Textfield, List, ListItem, ListItemContent } from 'react-mdl';

const StyleTextSearch = {
  width: '100%'
};

const StyleList = {
  width: '100%'
};

class ProcurarLocais extends React.Component {

  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    if( event.keyCode === 13 ) { // Search action

    }
  }

  render() {
    return(
      <Content id="ComponentProcurar">
        <section>
          <article>
            <Textfield
              onKeyDown={this.handleSearch}
              label="Procure por locais"
              floatingLabel
              style={StyleTextSearch}
              type="search"
            />
          </article>

          <article>
            <List style={StyleList} id="ComponentBuscaLocais">
              <ListItem threeLine>
                <ListItemContent subtitle="Cidade">Carapicuíba</ListItemContent>
              </ListItem>

              <ListItem threeLine>
                <ListItemContent subtitle="Cidade">Osasco</ListItemContent>
              </ListItem>

              <ListItem threeLine>
                <ListItemContent subtitle="Cidade">Jandira</ListItemContent>
              </ListItem>

            </List>
          </article>
        </section>
      </Content>
    );
  }
}

export default ProcurarLocais;
