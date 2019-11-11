import React, { Component, Fragment } from 'react';
import { Text, View, AsyncStorage, Picker, TouchableOpacity, Image } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

class Main extends Component {

    static navigationOptions = {
        tabBarIcon: () => (
            <Image
                source={require('../img/058-512.png')}
                style={{ width: 25, height: 25, tintColor: 'white' }}
            />
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            midias: [],
            categorias: [],
            valorSelecionado: "",
        };
    }

    componentDidMount() {
        this._carregarCategorias();
        this._carregarProjetos();
        console.warn(this.state.categorias)
    }

    _carregarProjetos = async () => {
        try {
            let token = await AsyncStorage.getItem('opflix-token');

            await fetch('http://192.168.4.96:5000/api/midias/filtrarCategoria/' + this.state.valorSelecionado, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + token
                },
            })
                .then(resposta => resposta.json())
                .then(data => this.setState({ midias: data }))
        } catch (error) {
            console.warn(error)
        }
    };

    _carregarCategorias = async () => {
        await fetch('http://192.168.4.96:5000/api/categorias', {
            headers: {
                "Accept": "application/json",
                "Authorization": "Bearer " + await AsyncStorage.getItem('opflix-token')
            },
        })
            .then(resposta => resposta.json())
            .then(data => this.setState({ categorias: data }))
            .catch(erro => console.warn(erro));
    }
    render() {
        return (
            <ScrollView>


                <Text></Text>
                <Text>Filtrar por Categoria</Text>

                <Picker
                    selectedValue={this.state.valorSelecionado}
                    onValueChange={(itemValue, itemIndex) => {
                        this.setState({ valorSelecionado: itemValue })
                        this._carregarProjetos()
                    }}  >
                    <Picker.item label="Todas categorias" value="" selectedValue />
                    {this.state.categorias.map((item, idCategoria) => (
                        <Picker.Item label={item.nomeCategoria} value={item.idCategoria} key={idCategoria} />)
                    )}
                </Picker>

                <Text></Text>

                <View>
                    {this.state.midias.map((item, idMidia) => (        
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
                ))}
                </View>
                
            </ScrollView >
        );
    }
}
export default Main;