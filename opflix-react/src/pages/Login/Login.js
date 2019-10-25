import React, { Component } from 'react';
import '../../assets/css/index.css';

//axios
import Axios from 'axios';

import Rodape from '../../components/Rodape/Rodape'
import Nav from '../../components/NavNaoLogado/Nav';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            senha: "",
            erro: ""
        }
    }

    atualizaEstadoEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    atualizaEstadoSenha = (event) => {
        this.setState({ senha: event.target.value });
    }

    efetuarLogin = (event) => {
        event.preventDefault();

        Axios.post("http://localhost:52798/api/login", {
            email: this.state.email,
            senha: this.state.senha
        })
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data.token);
                    localStorage.setItem("usuario-opflix", response.data.token);
                    this.props.history.push('/selecao');
                } else {
                    console.log('vish deu ruim');
                }
            })
            .catch(erro => {
                this.setState({ erro: "Usuário ou senha inválidos" });
                console.log(erro);
            });
    }

    render() {
        return (
            <div>
                <Nav />
                <div>

                    <form onSubmit={this.efetuarLogin} className="centralizarForm">
                    <h1>Login</h1>
                        <div className="item">
                            <label>E-mail</label><br />
                            <input
                                className="input__login"
                                onInput={this.atualizaEstadoEmail}
                                type="text"
                                name="username"
                                id="login__email"
                            />
                            <p className="text__login" style={{ color: "red", textAlign: "center" }}>
                                {this.state.erro}
                            </p>
                        </div>
                        <div className="item">
                            <label>Senha</label><br />
                            <input
                                className="input__login"
                                onInput={this.atualizaEstadoSenha}
                                type="password"
                                name="password"
                                id="login__password"
                            />
                        </div>
                        <div className="item">
                            <button className="btn btn__login" id="btn__login">
                                Fazer Login
                    </button>
                        </div>
                    </form>
                </div>
                <Rodape />
            </div>
        );
    }

}

export default Login;