import React, { Component } from 'react';
import './index.css';
import Rodape from '../../components/Rodape/Rodape';
import Nav from '../../components/Nav/Nav';

//realizar import dos estilos
//import '../../assets/css/flexbox.css';
//import '../../assets/css/login.css';
//import '../../assets/css/style.css';
//import '../../assets/css/reset.css';

//imagem 
//import logo from '../../assets/img/icon-login.png';

import { Link } from 'react-router-dom';

import Axios from 'axios';

class EditorLancamento extends Component {

    constructor() {
        super();
        this.state = {
            lista: [],
            listaClassificacao: [],
            listaCategoria: [],
            listaVeiculo: [],
            listaTipo: [],
            titulo: '',
            sinopse: '',
            tempoDuracao: '',
            Datalancamento: '',
            idClassificacao: '',
            idCategoria: '',
            idVeiculo: '',
            idTipo: '',
        }
    }

    adicionaItem = (event) => {
        console.log(this.state.nome);
        fetch('http://localhost:52798/api/midias', {
            method: "POST",
            body: JSON.stringify({
                titulo: this.state.nome
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + localStorage.getItem('usuario-opflix')
            },
        })
            .then(this.tabelaAtualizada())
            .catch(error => console.log(error))
    }

    atualizarNome = (event) => {
        this.setState({ nome: event.target.value })
        console.log(this.state);
    }

    componentDidMount() {
        this.tabelaAtualizada();
        this.listaCategoria();
        this.listaClassificacao();
        this.listaTipo();
        this.listaVeiculo();
    }

    tabelaAtualizada = () => {
        fetch('http://localhost:52798/api/midias', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + localStorage.getItem('usuario-opflix')
            },
        })
            .then(response => response.json())
            .then(data => this.setState({ lista: data }));
    }

    listaCategoria = () => {
        fetch('http://localhost:52798/api/categorias', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + localStorage.getItem('usuario-opflix')
            },
        })
            .then(response => response.json())
            .then(data => this.setState({ listaCategoria: data }));
    }

    listaClassificacao = () => {
        fetch('http://localhost:52798/api/classificacoes', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + localStorage.getItem('usuario-opflix')
            },
        })
            .then(response => response.json())
            .then(data => this.setState({ listaClassificacao: data }));
    }

    listaVeiculo = () => {
        fetch('http://localhost:52798/api/veiculos', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + localStorage.getItem('usuario-opflix')
            },
        })
            .then(response => response.json())
            .then(data => this.setState({ listaVeiculo: data }));
    }

    listaTipo = () => {
        fetch('http://localhost:52798/api/tipos', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + localStorage.getItem('usuario-opflix')
            },
        })
            .then(response => response.json())
            .then(data => this.setState({ listaTipo: data }));
            console.log(this.listaTipo)
    }

    efetuarCadastro = (event) => {
        Axios.post("http://localhost:52798/api/midias", {
            titulo: this.state.titulo,
            sinopse: this.state.sinopse,
            tempoDuracao: this.state.tempoDuracao,
            Datalancamento: this.state.Datalancamento,
            idClassificacao: this.idClassificacao,
            idCategoria: this.state.idCategoria,
            idVeiculo: this.state.idVeiculo,
            idTipo: this.state.idTipo
        })
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data.token);
                    localStorage.setItem("usuario-opflix", response.data.token);
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
                <h1>Lançamentos</h1>
                <table id="tabela-lista">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Título</th>
                            <th>Sinopse</th>
                            <th>Tempo de duração</th>
                            <th>Classificação indicativa</th>
                            <th>Categoria</th>
                            <th>Veículo</th>
                        </tr>
                    </thead>

                    <tbody id="tabela-lista-corpo">
                        {this.state.lista.map(element => {
                            return (
                                <tr key={element.idMidia}>
                                    <td>{element.idMidia}</td>
                                    <td>{element.titulo}</td>
                                    <td>{element.sinopse}</td>
                                    <td>{element.tempoDuracao}</td>
                                    <td>{(element.idClassificacaoNavigation === undefined) ? '' : element.idClassificacaoNavigation.nomeClassificacao} </td>
                                    <td>{(element.idCategoriaNavigation === undefined) ? '' : element.idCategoriaNavigation.nomeCategoria}</td>
                                    <td>{(element.idVeiculoNavigation === undefined) ? '' : element.idVeiculoNavigation.nomeVeiculo}</td>
                                    <td>{(element.idTipoNavigation === undefined) ? '' : element.idTipoNavigation.nomeTipo}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <h1>Cadastro de Lançamentos</h1>
                <form onSubmit={this.efetuarCadastro}>
                    <div className="item">
                        <input
                            className="input__login"
                            onInput={this.atualizaEstadoNome}
                            type="text"
                            name="username"
                            id="login__email"
                        />
                    </div>
                    <div className="item">
                        <input
                            className="input__login"
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
                            type="password"
                            name="password"
                            id="login__password"
                        />
                    </div>
                    <div className="item">
                        <input
                            className="input__login"
                            onInput={this.atualizaEstadoSenha}
                            type="password"
                            name="password"
                            id="login__password"
                        />
                    </div>
                    <div>
                        <select>
                        {this.state.listaCategoria.map(element => {
                            return (
                                <option value={element.idCategoria}>{element.nomeCategoria}</option>
                            )
                        })}
                        </select>
                    </div>
                    <div>
                        <select>
                        {this.state.listaClassificacao.map(element => {
                            return (
                                <option value={element.idClassificacao}>{element.nomeClassificacao}</option>
                            )
                        })}
                        </select>
                    </div>
                    <div>
                        <select>
                        {this.state.listaVeiculo.map(element => {
                            return (
                                <option value={element.idVeiculo}>{element.nomeVeiculo}</option>
                            )
                        })}
                        </select>
                    </div>
                    <div>
                        <select>
                        {this.state.listaTipo.map(element => {
                            return (
                                <option value={element.idTipo}>{element.nomeTipo}</option>
                            )
                        })}
                        </select>
                    </div>
                    <div className="item">
                        <button className="btn btn__login" id="btn__login">
                            Fazer Cadastro
                    </button>
                    </div>
                </form>
                <Rodape />
            </div>
        );
    }
}

export default EditorLancamento;

