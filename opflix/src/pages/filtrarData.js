import React, { Component, Fragment } from 'react';
import { Text, View, AsyncStorage, Picker, TouchableOpacity, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Main extends Component {

  constructor() {
    super();
    this.state = {
      midias: [],
      temas: [],
    };
  }

  static navigationOptions = {
    tabBarIcon: () => (
      <Image 
        source = {require('../img/calendar-filter-512.png')}
        style={{width: 25, height: 25, tintColor: 'white'}}
      />
    )
  }

  componentDidMount() {
    this._carregarProjetos();
  }

  _carregarProjetos = async () => {
    try {
      let token = await AsyncStorage.getItem('opflix-token');

      await fetch('http://192.168.4.96:5000/api/midias/', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": 'Bearer ' + token
        },
      })
      .then(resposta => resposta.json())
      .then(data => this.setState({ midias: data }))
    } catch (error) {
    }
    
};

render() {
    return (
        <Fragment>

            
        {/* <Picker
          selectedValue={this.state.PickerValueHolder}
          onValueChange={(itemValue, itemIndex) => this.setState({ PickerValueHolder: itemValue })} >
          {this.state.temas.map((item, idProjeto) => (
            <Picker.Item label={item.nome} value={item.nome} key={idProjeto} />)
          )}
        </Picker>
        <TouchableOpacity onPress={this._carregarProjetos}>
          <Text>Filtrar</Text>
        </TouchableOpacity> */}


        <Text></Text>
        <Text>Filtrar por mês</Text>
        <Text></Text>
        <FlatList
          data={this.state.midias}
          keyExtractor={item => item.idMidia}
          renderItem={({ item }) => (
            <View>
              <Text>Título: {item.titulo}</Text>
              <Text>Tipo: {item.idTipoNavigation.tipoNome}</Text>
              <Text>Veiculo: {item.idVeiculoNavigation.nomeVeiculo}</Text>
              <Text>Id: {item.idMidia}</Text>
              <Text>Sinopse: {item.sinopse}</Text>
              <Text>Data de Lançamento: {item.dataLancamento}</Text>
              <Text>Categoria: {item.idCategoriaNavigation.nomeCategoria}</Text>
              <Text>Classificação Indicativa: {item.idClassificacaoNavigation.nomeClassificacao}</Text>
              <Text></Text>
              <Text></Text>
            </View>
          )}
        />
      </Fragment>
    );
  }
}

export default Main;