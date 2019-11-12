import React, { Component, Fragment } from 'react';
import { Text, View, AsyncStorage, Picker, TouchableOpacity, Image } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

class Main extends Component {

  constructor() {
    super();
    this.state = {
      midias: [],
      temas: [],
      MesEscolhido: ""
    };
  }

  static navigationOptions = {
    tabBarIcon: () => (
      <Image
        source={require('../img/calendar-filter-512.png')}
        style={{ width: 25, height: 25, tintColor: '#005DFF' }}
      />
    )
  }


  componentDidMount() {
    this._carregarProjetos();
  }

  _carregarProjetos = async () => {
    try {
      let token = await AsyncStorage.getItem('opflix-token');

      await fetch('http://192.168.4.96:5000/api/midias/BuscarPorMes/' + this.state.MesEscolhido, {
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
        <View style={{ backgroundColor: 'white', paddingTop: 8.75, paddingBottom: 8.75, height: 50, shadowColor: "black", borderBottomWidth: 0.9, borderBottomColor: "#000" }}>
          <Image fadeDuration={0} source={require('../img/titulologo.png')}
            style={{
              width: 205,
              height: 32.5,
              resizeMode: 'contain'
            }}
          />
        </View>

        <ScrollView>
          <Text>Filtrar por Mês</Text>
          <Picker selectedValue={this.state.MesEscolhido} onValueChange={(itemValue, itemIndex) => {
            this.setState({ MesEscolhido: itemValue })
            this._carregarProjetos()
          }}>
            <Picker.item label="Escolha o mês desejado" value="0" selectedValue />
            <Picker.item label="Janeiro" value="1" />
            <Picker.item label="Fevereiro" value="2" />
            <Picker.item label="Março" value="3" />
            <Picker.item label="Abril" value="4" />
            <Picker.item label="Maio" value="5" />
            <Picker.item label="Junho" value="6" />
            <Picker.item label="Julho" value="7" />
            <Picker.item label="Agosto" value="8" />
            <Picker.item label="Setembro" value="9" />
            <Picker.item label="Outubro" value="10" />
            <Picker.item label="Novembro" value="11" />
            <Picker.item label="Dezembro" value="12" />
          </Picker>

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
        </ScrollView>
      </Fragment>
    );
  }
}

export default Main;