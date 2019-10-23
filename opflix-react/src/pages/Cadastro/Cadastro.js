import Rodape from '../../components/Rodape/Rodape'
import Nav from '../../components/NavNaoLogado/Nav';
import '../../assets/css/index.css';

import React, { Component } from 'react';

//axios
import Axios from 'axios';

class Cadastro extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            nome: "",
            tipousuario: "CLIENTE",
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

    atualizaEstadoNome = (event) => {
        this.setState({ nome: event.target.value });
    }

    efetuarCadastro = (event) => {
        event.preventDefault();

        Axios.post("http://localhost:52798/api/usuarios", {
            email: this.state.email,
            nome: this.state.nome,
            TipoUsuario: this.state.tipousuario,
            senha: this.state.senha
        })
            .then(response => {
                if (response.status === 200) {
                    console.log("ok");
                    this.props.history.push('/');
                } else {
                    console.log('vish deu ruim');
                }
            })
            .catch(erro => {
                this.setState({ erro: "E-mail ou senha inválidos" });
                console.log(erro);
            });
    }

    render() {
        return (
            <div>
                <Nav />
                <div>
                    <h1>Cadastro</h1>
                    <form onSubmit={this.efetuarCadastro}>
                        <div className="item">
                            <input
                                className="input__login"
                                placeholder="Nome"
                                onInput={this.atualizaEstadoNome}
                                type="text"
                                name="username"
                                id="login__email"
                            />
                        </div>
                        <div className="item">
                            <input
                                className="input__login"
                                placeholder="E-mail"
                                onInput={this.atualizaEstadoEmail}
                                type="text"
                                name="username"
                                id="login__email"
                            />
                        </div>
                        <div className="item">
                            <input
                                className="input__login"
                                onInput={this.atualizaEstadoSenha}
                                placeholder="Senha"
                                type="password"
                                name="password"
                                id="login__password"
                            />
                        </div>
                        
                        <div className="item">
                            <button className="btn btn__login" id="btn__login">
                                Fazer Cadastro
                    </button>
                        </div>
                    </form>
                </div>
                <Rodape />
            </div>
        );
    }
}
export default Cadastro;
