import React, {Component} from 'react';

import {Text, TextInput, View, TouchableOpacity, AsyncStorage, Image} from 'react-native';

class SignIn extends Component{

    static navigationOptions = {
        header: null
    }
    
    constructor() {
        super();
        this.state = {
            email: 'erik@email.com',
            senha: '123456'
        }
    }

    _realizarLogin = async () => {
        fetch('http://192.168.4.96:5000/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                senha: this.state.senha
            })
        })
            .then(resposta => resposta.json())
            .then(data => this._irParaHome(data.token))
        }
        
    _irParaHome = async (tokenRecebido) => {
        if(tokenRecebido != null) {
            try {
                await AsyncStorage.setItem('opflix-token', tokenRecebido);
                this.props.navigation.navigate('MainNavigator')
            } catch (error) {
            }
        }
    }

    render () {
        return(
            <View style={{
                backgroundColor: "#005DFF"
              }}>
            <View style={{
                width: "80%",
                marginLeft: "10%",
                paddingTop: "10%",
                paddingLeft: "5%",
                paddingRight: "5%",
                marginRight: "10%",
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
              resizeMode: 'contain'
            }}
          />
                <TextInput placeholder="email" onChangeText={email => this.setState({email})}/>
                <TextInput placeholder="senha" onChangeText={senha => this.setState({senha})}/>
                <TouchableOpacity onPress={this._realizarLogin}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
}

export default SignIn