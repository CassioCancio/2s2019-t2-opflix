import React, { Component } from 'react';

import { Text, TextInput, View, TouchableOpacity, AsyncStorage, Image, StatusBar } from 'react-native';

class SignIn extends Component {

    static navigationOptions = {
        header: null
    }

    constructor() {
        super();
        this.state = {
            email: 'erik@email.com',
            senha: '123456',
        }
    }

    componentDidMount() {
        this._verificacao();
        console.disableYellowBox = true;
    }

    _verificacao = async () => {
        if (await AsyncStorage.getItem('opflix-token') != null) {
            this.props.navigation.navigate('MainNavigator')
        }
    }

    _realizarLogin = async () => {
        fetch('http://192.168.4.96:5000/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                senha: this.state.senha
            })
        })
            .then(resposta => resposta.json())
            .then(data => {
                if (data.token != null) {
                    this._irParaHome(data.token)
                } else {
                    this.setState({ erro: "Usuário ou senha inválidos" })
                }
            })
            .catch(erro => {
                this.setState({ erro: "Usuário ou senha inválidos" })
            })
    }

    _irParaHome = async (tokenRecebido) => {
        if (tokenRecebido != null) {
            try {
                await AsyncStorage.setItem('opflix-token', tokenRecebido);
                this.props.navigation.navigate('MainNavigator')
            } catch (error) {
            }
        }
    }

    render() {
        return (
            <View style={{
                backgroundColor: "#005DFF",
                height: "100%"
            }}>
                <StatusBar
                    barStyle="light-content"
                    hidden={false}
                    backgroundColor="#005DFF"
                    translucent={false}
                    networkActivityIndicatorVisible={true}
                />
                <View style={{
                    width: "80%",
                    marginLeft: "10%",
                    marginRight: "10%",
                    paddingTop: "10%",
                    paddingLeft: "5%",
                    paddingRight: "5%",
                    marginTop: "17.5%",
                    marginBottom: "17.5%",
                    height: "80%",
                    borderRadius: 15,
                    backgroundColor: "#fff",
                    borderWidth: 0.75,
                    borderColor: "#000",
                }}>
                    <Image fadeDuration={0} source={require('../img/icone.png')}
                        style={{
                            width: "100%",
                            height: 82.5,
                            resizeMode: 'contain',
                            marginBottom: 35
                        }}
                    />
                    <Image fadeDuration={0} source={require('../img/Titulo.png')}
                        style={{
                            width: "100%",
                            height: 40,
                            resizeMode: 'contain',
                            marginBottom: 45
                        }}
                    />
                    <TextInput placeholder="Email" onChangeText={email => this.setState({ email })}
                        style={{
                            width: "90%",
                            marginLeft: "5%",
                            marginTop: "10%",
                            marginBottom: "4%",
                            marginRight: "5%",
                            backgroundColor: "#eee",
                            borderRadius: 15,
                            borderColor: "black",
                            borderWidth: 0.5,
                            paddingLeft: 10,
                            fontSize: 20,
                            marginTop: "10%"
                        }} />
                    <TextInput secureTextEntry={true} placeholder="Senha" onChangeText={senha => this.setState({ senha })}
                        style={{
                            width: "90%",
                            marginLeft: "5%",
                            marginTop: "4%",
                            marginBottom: "4%",
                            marginRight: "5%",
                            backgroundColor: "#eee",
                            borderRadius: 15,
                            borderColor: "black",
                            borderWidth: 0.5,
                            paddingLeft: 10,
                            fontSize: 20
                        }} />
                    <TouchableOpacity onPress={this._realizarLogin}
                        style={{
                            width: "90%",
                            marginLeft: "5%",
                            marginTop: "10%",
                            marginBottom: "4%",
                            marginRight: "5%",
                            backgroundColor: "#005DFF",
                            borderRadius: 15,
                            borderColor: "black",
                            borderWidth: 0.5,
                            paddingLeft: 10,
                            paddingTop: "1%",
                            height: 50,
                            marginTop: "20%",
                            fontSize: 20
                        }} >
                        <Text
                            style={{
                                fontSize: 30,
                                textAlign: "center",
                                color: "#fff",
                                fontWeight: "bold"
                            }}>
                            Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default SignIn