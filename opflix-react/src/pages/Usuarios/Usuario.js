import React, { Component } from 'react';
import '../../assets/css/index.css';
import Rodape from '../../components/Rodape/Rodape';
import Nav from '../../components/NavADM/Nav';

//realizar import dos estilos
//import '../../assets/css/flexbox.css';
//import '../../assets/css/login.css';
//import '../../assets/css/style.css';
//import '../../assets/css/reset.css';

//imagem 
//import logo from '../../assets/img/icon-login.png';

import { Link } from 'react-router-dom';

import Axios from 'axios';

class Usuario extends Component {

    constructor() {
        super();
        this.state = {
            lista: [
            ],
            email: "",
            nome: "",
            tipousuario: "",
            senha: "",
            erro: ""
        };
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

    atualizaEstadoTipo = (event) => {
        this.setState({ tipousuario: event.target.value });
        console.log(this.state.tipousuario)
    }

    componentDidMount() {
        this.listaAtualizada();
    }

    efetuarCadastro = (event) => {
        Axios.post("http://localhost:52798/api/usuarios", {
            email: this.state.email,
            nome: this.state.nome,
            TipoUsuario: this.state.tipousuario,
            senha: this.state.senha
        },
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + localStorage.getItem('usuario-opflix')
            }
        }
        )
            .then(response => {
                if (response.status === 200) {
                    console.log('ok');
                } else {
                    console.log('vish deu ruim');
                }
            })
            .catch(erro => {
                this.setState({ erro: "E-mail ou senha inválidos" });
                console.log(erro);
            });
    }

    listaAtualizada = () => {
        fetch('http://localhost:52798/api/usuarios', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + localStorage.getItem('usuario-opflix')
            },
        })
            .then(response => response.json())
            .then(data => this.setState({ lista: data }));
    }

    render() {
        return (
            <div>
                <Nav />
                <h1>Usuários Cadastrados</h1>
                <div className="container" id="conteudoPrincipal-lista">
                    <table id="tabela-lista">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th>Tipo de Usuário</th>
                            </tr>
                        </thead>

                        <tbody id="tabela-lista-corpo">
                            {this.state.lista.map(element => {
                                return (
                                    <tr key={element.idUsuario}>
                                        <td>{element.idUsuario}</td>
                                        <td>{element.nome}</td>
                                        <td>{element.email}</td>
                                        <td>{element.tipoUsuario}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    
                    <h1>Cadastro de usuários</h1>

                    <form method="" onSubmit={this.efetuarCadastro}>
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
                        
                        <select onInput={this.atualizaEstadoTipo}>
                                <option value="CLIENTE">Cliente</option>
                                <option value="ADMINISTRADOR">Administrador</option>
                        </select>

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

export default Usuario;