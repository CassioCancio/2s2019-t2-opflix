import React, { Component, Fragment } from 'react';
import { Text, View, AsyncStorage, Picker, TouchableOpacity, Image } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import * as moment from 'moment'

class Main extends Component {

  static navigationOptions = {
    tabBarIcon: () => (
      <Image
        source={require('../img/home-512.png')}
        style={{ width: 25, height: 25, tintColor: '#005DFF' }}
      />
    )
  }

  constructor() {
    super();
    this.state = {
      midias: [],
      temas: [],
    };
  }

  componentDidMount() {
    this._carregarProjetos();
  }

  _listaVazia = () => {
    return (
      //View to show when list is empty
      <View>
        <Text style={{ textAlign: 'center' }}>Nenhum filme encontrado nessa categoria.</Text>
      </View>
    );
  };

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

  _Logout = async (event) => {
    AsyncStorage.removeItem('opflix-token');
    this.props.navigation.navigate('AuthStack')
  }

  getParsedDate(date){
    date = String(date).split('T');
    var days = String(date[0]).split('-');
    return [parseInt(days[2]),"-", parseInt(days[1]),"-", parseInt(days[0])];
  }

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
          <TouchableOpacity onPress={this._Logout} style={{ width: "10%", marginLeft: "82.5%", position: "absolute", top: 0 }}><Text style={{ fontSize: 35, color: "#005DFF" }}>Sair</Text></TouchableOpacity>
        </View>
        <ScrollView>
          <Text style={{ fontSize: 27.5, textAlign: "center", color: "#005DFF", marginTop: 12 }}>Projetos cadastrados</Text>
          <Text></Text>
          <FlatList
            data={this.state.midias}
            keyExtractor={item => item.idMidia}
            ListEmptyComponent={this._listaVazia}
            renderItem={({ item }) => (
              <View>
                <View style={{
                  width: "90%",
                  marginLeft: "5%",
                  marginRight: "5%",
                  backgroundColor: "#eee",
                  borderRadius: 20,
                  padding: 10,
                  borderColor: "black",
                  borderWidth: 0.5,
                }}>
                  <Text style={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}>{item.idTipoNavigation.tipoNome} - {item.titulo}</Text>
                  <Text style={{ fontSize: 20, textAlign: "center", marginTop: 3}}>{this.getParsedDate(item.dataLancamento)}</Text>
                  <Text style={{ fontSize: 15, textAlign: "center", marginTop:5, marginBottom:7.5}}>{item.idVeiculoNavigation.nomeVeiculo} - {item.idCategoriaNavigation.nomeCategoria} - {item.idClassificacaoNavigation.nomeClassificacao}</Text>
                  <Text style={{ fontSize: 15, textAlign: "center"}}>{item.sinopse}</Text>
                </View>
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