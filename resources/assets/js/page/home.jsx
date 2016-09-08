/*
*  @Prefencias
*
*/
import React from 'react';
import { Content } from 'react-mdl';

const StyleHeight = {
  height: `${ window.innerHeight - 56 }px`
};

const StyleContentHeight = {
  height: `${ window.innerHeight - (56 + 60) }px`
};



class Home extends React.Component {

  teste() {
    document.querySelectorAll(".escolhendo")[0].classList.toggle("escolhendo__ativo");
    document.querySelectorAll(".escolhendo")[1].classList.toggle("escolhendo__ativo");
  }

  render() {
    return(
      <Content>
        <section id="escolhe" style={StyleHeight} onClick={this.teste}>
          <article className="escolhe-filhas escolhe-filhas-galeria">
            <div className="escolhendo escolhendo__ativo">
              <div></div>
            </div>
            <div className="escolhendo">
              <div></div>
            </div>
          </article>
          <article className="escolhe-filhas escolhe-filhas-botoes"></article>
        </section>
      </Content>
    );
  }
}

export default Home;
