/*
*  @Prefencias
*
*/
import React    from 'react';
import { Link } from "react-router";
import { Content, DataTable, TableHeader, Slider, Radio, Button, Icon } from 'react-mdl';

/* Style */
const StyleTable = {
  width: '100%'
};

const StyleLabelKm = {
  float: 'right'
};

const StyleButtonLocal = {
  top: '15px',
  left: '20px'
};


class Preferencias extends React.Component {

  constructor(props) {
    super(props);
    this.changeSlider       = this.changeSlider.bind(this);

    this.state = {
      distancia: 10,
      local: "Brasil"
    };
  }

  changeSlider(event) {
    const el = event.target;

    this.setState({
      distancia: el.value
    });
  }

  render() {
    return(
      <Content id="ComponentPreferencias">
        <section>
          <article>
            <h6>Mostrar:</h6>
            <DataTable
              selectable
              style={StyleTable}
              shadow={0}
              rowKeyColumn="id"
              rows={[
                  {id: 1001, sexo: 'Mulheres'},
                  {id: 1002, sexo: 'Homens'}
              ]}>
              <TableHeader name="sexo" tooltip="Qual é a sua preferência?">Selecionar tudo</TableHeader>
            </DataTable>
          </article>

          <article>
            <Radio
              value="distancia"
              name="sorteio"
              ripple
            > Sorteio por distância</Radio>

            <span style={StyleLabelKm} >{this.state.distancia}km</span>

            <Slider
              min={1}
              max={100}
              defaultValue={10}
              onChange={this.changeSlider}
            />

          </article>

          <article>
            <Radio
              value="local"
              name="sorteio"
              ripple
            > Sorteio por locais:</Radio>

            <div>
              <Button style={StyleButtonLocal} raised ripple onClick={() => { location.href="#/procurarLocais" }}> <Icon name="mode_edit" /> {this.state.local} </Button>
            </div>
          </article>
        </section>
      </Content>
    );
  }
}

export default Preferencias;
