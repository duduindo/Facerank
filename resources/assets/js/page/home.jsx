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
    document.querySelectorAll(".escolhendo-imagem")[0].classList.toggle("escolhendo-imagem__active");
    document.querySelectorAll(".escolhendo-imagem")[1].classList.toggle("escolhendo-imagem__active");
  }

  render() {
    return(
      <Content>
        <section id="escolhendo" style={StyleHeight} onClick={this.teste}>
          <article className="escolhendo-imagens" style={StyleContentHeight}>

            <div className="escolhendo-imagem escolhendo-imagem__active" >
              <div className="escolhendo-camadas">
                <div className="escolhendo-camada escolhendo-camada-informacoes"></div>
                <div className="escolhendo-camada">
                  <img src="http://placehold.it/400x400" alt=""/>
                </div>
              </div>
            </div>

            <div className="escolhendo-imagem" >
              <div className="escolhendo-camadas">
                <div className="escolhendo-camada escolhendo-camada-informacoes"></div>
                <div className="escolhendo-camada">
                  <img src="http://placehold.it/350x500/FFFFFF/888888" alt=""/>
                </div>
              </div>
            </div>

          </article>

          <article className="escolhendo-botoes">

          </article>
        </section>
      </Content>
    );
  }
}

export default Home;
