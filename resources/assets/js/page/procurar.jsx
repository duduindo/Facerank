/*
*  @Procurar
*
*/

import React from 'react';
import { Content, Textfield, List, ListItem, ListItemContent, ListItemAction, Icon } from 'react-mdl';

const StyleTextSearch = {
  width: '100%'
};

const StyleList = {
  width: '100%'
};

class Procurar extends React.Component {

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
              label="Procure por pessoas/locais"
              floatingLabel
              style={StyleTextSearch}
              type="search"
            />
          </article>

          <article>
            <List style={StyleList}>
              <ListItem twoLine>
                <ListItemContent avatar="person" subtitle="62 episodes">Bryan Cranston</ListItemContent>
                <ListItemAction info="Actor">
                  <a href="#"><Icon name="star" /></a>
                </ListItemAction>
              </ListItem>
              <ListItem twoLine>
                <ListItemContent avatar="person" subtitle="62 episodes">Aaron Paul</ListItemContent>
                <ListItemAction>
                  <a href="#"><Icon name="star" /></a>
                </ListItemAction>
              </ListItem>
              <ListItem twoLine>
                <ListItemContent avatar="person" subtitle="62 episodes">Bob Odenkirk</ListItemContent>
                <ListItemAction>
                  <a href="#"><Icon name="star" /></a>
                </ListItemAction>
              </ListItem>
            </List>
          </article>
        </section>
      </Content>
    );
  }
}

export default Procurar;
