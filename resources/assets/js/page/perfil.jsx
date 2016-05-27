/*
*  @Perfil
*
*/

import React from 'react';
import { Content, Card, CardTitle, CardActions } from 'react-mdl';

const StyleCard = {
  width: `${ window.screen.width }px`,
  height: 'auto',
  background: 'url(http://www.getmdl.io/assets/demos/image_card.jpg) center / cover',
  margin: 'auto'
};

const StyleCardActions = {
  height: '52px',
  padding: '16px',
  background: 'rgba(0,0,0,0.7)'
};

const StyleCardSpan = {
  color: '#fff',
  fontSize: '14px',
  fontWeight: '500'
};

class Perfil extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Content id="ComponentPerfil">
        <section>
          <article>
            <Card shadow={0} style={StyleCard}>
                <CardTitle expand />
                <CardActions style={StyleCardActions}>
                    <span style={StyleCardSpan}>
                        Fulano
                    </span>
                </CardActions>
            </Card>
          </article>

          <article className="container">
            <h6>Sobre mim</h6>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          </article>


        </section>
      </Content>
    );
  }
}

export default Perfil;
