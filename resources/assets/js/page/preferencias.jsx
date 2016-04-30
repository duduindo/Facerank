/*
*  @Prefencias
*
*/
import React from 'react';
import { Content, DataTable, TableHeader, Tabs, Tab, Slider } from 'react-mdl';

const StyleTable = {
  width: '100%'
}

class Preferencias extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      distancia: 10
    };
  }

  render() {
    return(
      <Content>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab>Mostrar</Tab>
            <Tab>Distância</Tab>
            <Tab>Locais</Tab>
        </Tabs>
        <section>
            {(() => {
              switch( this.state.activeTab ) {
                case 0: {
                  return <DataTable
                    selectable
                    style={StyleTable}
                    shadow={0}
                    rowKeyColumn="id"
                    rows={[
                        {id: 1001, sexo: 'Mulheres'},
                        {id: 1002, sexo: 'Homens'}
                    ]}>
                      <TableHeader name="sexo" tooltip="Qual é a sua preferência?">Mostrar</TableHeader>
                  </DataTable>
                };

                case 1: {
                  return <div>
                    <Slider min={1} max={100} defaultValue={10} onChange={(value) => this.setState({distancia: value})} />
                  </div>
                };
              }
            })()}
        </section>
      </Content>
    );
  }
}

export default Preferencias;
