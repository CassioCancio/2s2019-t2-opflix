import React, { Component, Fragment } from 'react';
import { Text, View, AsyncStorage, Picker, TouchableOpacity, Image, ActivityIndicator, StatusBar } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

class Main extends Component {

    static navigationOptions = {
        tabBarIcon: () => (
            <Image
                source={require('../img/058-512.png')}
                style={{ width: 25, height: 25, tintColor: '#005DFF' }}
            />
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            midias: [],
            categorias: [],
            valorSelecionado: " ",
            loading: true
        };
    }

    componentDidMount() {
        this._carregarCategorias();
        this._carregarProjetos();
        console.disableYellowBox = true;
    }

    _listaVazia = () => {
        let teste = this.state.valorSelecionado;

        if (teste == " ") {
            return (
                <View>
                    <Text style={{ textAlign: 'center' }}></Text>
                </View>
            );
        } else {
            return (
                <View>
                    <Text style={{ textAlign: 'center' }}>Nenhum filme encontrado nessa categoria.</Text>
                </View>
            );
        }
    };

    getParsedDate(date) {
        date = String(date).split('T');
        var days = String(date[0]).split('-');
        return [parseInt(days[2]), "-", parseInt(days[1]), "-", parseInt(days[0])];
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
                .then(data => this.setState({ loading: false, midias: data }))
        } catch (error) {
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
            .then(data => this.setState({ categorias: data }));
    }

    _Logout = async (event) => {
        AsyncStorage.removeItem('opflix-token');
        this.props.navigation.navigate('AuthStack')
    };

    render() {
        return (
            <Fragment>
                <StatusBar
                    barStyle="dark-content"
                    hidden={false}
                    backgroundColor="#fff"
                    translucent={false}
                    networkActivityIndicatorVisible={true}
                />
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
                    <Text style={{ fontSize: 27.5, textAlign: "center", color: "#005DFF", marginTop: 12 }}>Filtrar por categoria</Text>
                    <View style={{
                        width: "90%",
                        marginLeft: "5%",
                        marginTop: "4%",
                        marginBottom: "4%",
                        marginRight: "5%",
                        backgroundColor: "#eee",
                        borderRadius: 15,
                        borderColor: "black",
                        borderWidth: 0.5,
                    }}>
                        <Picker
                            selectedValue={this.state.valorSelecionado}
                            onValueChange={(itemValue, itemIndex) => {
                                this.setState({ valorSelecionado: itemValue })
                                this.setState({ loading: true })
                                this._carregarProjetos()
                            }}  >
                            <Picker.item label="Todos" value="" />
                            {this.state.categorias.map((item, idCategoria) => (
                                <Picker.Item label={item.nomeCategoria} value={item.idCategoria} key={idCategoria} />)
                            )}
                        </Picker>
                    </View>

                    {this.state.loading ? <ActivityIndicator size="large" color="gray" /> :
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
                                        <Text style={{ fontSize: 20, textAlign: "center", marginTop: 3 }}>{this.getParsedDate(item.dataLancamento)}</Text>
                                        <Text style={{ fontSize: 15, textAlign: "center", marginTop: 5, marginBottom: 7.5 }}>{item.idVeiculoNavigation.nomeVeiculo} - {item.idCategoriaNavigation.nomeCategoria} - {item.idClassificacaoNavigation.nomeClassificacao}</Text>
                                        <Text style={{ fontSize: 15, textAlign: "center" }}>{item.sinopse}</Text>
                                    </View>
                                    <Text></Text>
                                </View>
                            )}
                        />
                    }
                </ScrollView>
            </Fragment>
        );
    }
}
export default Main;