/*
*  @Ranking
*
*/

import React from 'react';
import { Link } from 'react-router';
import { Content, List, ListItem, ListItemContent } from 'react-mdl';

const StyleList = {
  width: '100%'
};

class Ranking extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Content id="ComponentRanking">
        <section>
          <article>
            <List style={StyleList}>

              <Link to="/perfil?id=111111">
                <ListItem>
                  <ListItemContent>
                    <img className="avatar-image" src="http://placehold.it/40x40?text=40" />
                    <b>1º</b> Bryan Cranston
                </ListItemContent>
                </ListItem>
              </Link>

              <Link to="/perfil?id=222222">
                <ListItem>
                  <ListItemContent>
                    <img className="avatar-image" src="http://placehold.it/40x40?text=40" />
                    <b>2º</b> Bryan Cranston
                </ListItemContent>
                </ListItem>
              </Link>

              <Link to="/perfil?id=333333">
                <ListItem>
                  <ListItemContent>
                    <img className="avatar-image" src="http://placehold.it/40x40?text=40" />
                    <b>3º</b> Bryan Cranston
                </ListItemContent>
                </ListItem>
              </Link>

            </List>
          </article>
        </section>
      </Content>
    );
  }
}

export default Ranking;
