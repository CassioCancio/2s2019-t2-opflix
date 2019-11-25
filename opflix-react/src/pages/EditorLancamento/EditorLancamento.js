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

class EditorLancamento extends Component {

    constructor() {
        super();
        this.state = {
            lista: [],
            listaClassificacao: [],
            listaCategoria: [],
            listaVeiculo: [],
            listaTipo: [
                {
                    idTipo: "1",
                    nomeTipo: "Filme"
                },
                {
                    idTipo: "2",
                    nomeTipo: "Série"
                }
            ],
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
    atualizaEstadoTitulo = (event) => {
        this.setState({ titulo: event.target.value })
        console.log(this.state);
    }
    atualizaEstadoSinopse = (event) => {
        this.setState({ sinopse: event.target.value })
        console.log(this.state);
    }
    atualizaEstadoTempo = (event) => {
        this.setState({ tempoDuracao: event.target.value })
        console.log(this.state);
    }
    atualizaEstadoDataLancamento = (event) => {
        this.setState({ Datalancamento: event.target.value })
        console.log(this.state);
    }
    atualizaEstadoCategoria = (event) => {
        this.setState({ idCategoria: event.target.value })
        console.log(this.state);
    }
    atualizaEstadoClassificacao = (event) => {
        this.setState({ idClassificacao: event.target.value })
        console.log(this.state);
    }
    atualizaEstadoTipo = (event) => {
        this.setState({ idTipo: event.target.value })
        console.log(this.state);
    }
    atualizaEstadoVeiculo = (event) => {
        this.setState({ idVeiculo: event.target.value })
        console.log(this.state);
    }
    componentDidMount() {
        this.tabelaAtualizada();
        this.listaCategoria();
        this.listaClassificacao();
        this.listaVeiculo();
    }
    tabelaAtualizada = () => {
        fetch('http://192.168.4.96:5000/api/midias', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + localStorage.getItem('usuario-opflix')
            },
        })
            .then(response => response.json())
            .then(data => this.setState({ lista: data }));
    }
    listaCategoria = () => {
        fetch('http://192.168.4.96:5000/api/categorias', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + localStorage.getItem('usuario-opflix')
            },
        })
            .then(response => response.json())
            .then(data => this.setState({ listaCategoria: data }));
    }
    listaClassificacao = () => {
        fetch('http://192.168.4.96:5000/api/classificacoes', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + localStorage.getItem('usuario-opflix')
            },
        })
            .then(response => response.json())
            .then(data => this.setState({ listaClassificacao: data }));
    }
    listaVeiculo = () => {
        fetch('http://192.168.4.96:5000/api/veiculos', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + localStorage.getItem('usuario-opflix')
            },
        })
            .then(response => response.json())
            .then(data => this.setState({ listaVeiculo: data }));
    }
    efetuarCadastro = (event) => {
        Axios.post("http://192.168.4.96:5000/api/midias", {
            titulo: this.state.titulo,
            sinopse: this.state.sinopse,
            tempoDuracao: this.state.tempoDuracao,
            Datalancamento: this.state.Datalancamento,
            idClassificacao: this.state.idClassificacao,
            idCategoria: this.state.idCategoria,
            idVeiculo: this.state.idVeiculo,
            idTipo: this.state.idTipo,
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
                    console.log('Ok');
                    this.props.history.push('/usuarios');
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
                            <th className="sinopse">Sinopse</th>
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
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <h1>Cadastro de Lançamentos</h1>
                <form method="POST" onSubmit={this.efetuarCadastro} className="arrumarForm">
                    <div className="item">
                        <input
                            className="input__login"
                            onInput={this.atualizaEstadoTitulo}
                            type="text"
                            name="username"
                            placeholder="Título"
                            id="login__email"
                        />
                    </div>
                    <div className="item">
                        <input
                            className="input__login"
                            onInput={this.atualizaEstadoSinopse}
                            type="text"
                            name="username"
                            placeholder="Sinopse"
                            id="login__email"
                        />
                    </div>
                    <div className="item">
                        <input
                            className="input__login"
                            onInput={this.atualizaEstadoTempo}
                            type="number"
                            name="password"
                            placeholder="Tempo de Duração"
                            id="login__password"
                        />
                    </div>
                    <div className="item">
                        <input
                            className="input__login"
                            onInput={this.atualizaEstadoDataLancamento}
                            type="date"
                            name="password"
                            placeholder="Data de lançamento"
                            id="login__password"
                        />
                    </div>
                    <div>
                        <select onInput={this.atualizaEstadoCategoria}>
                        {this.state.listaCategoria.map(element => {
                            return (
                                <option value={element.idCategoria}>{element.nomeCategoria}</option>
                            )
                        })}
                        </select>
                    </div>
                    <div>
                        <select onInput={this.atualizaEstadoClassificacao}>
                        {this.state.listaClassificacao.map(element => {
                            return (
                                <option value={element.idClassificacao}>{element.nomeClassificacao}</option>
                            )
                        })}
                        </select>
                    </div>
                    <div>
                        <select onInput={this.atualizaEstadoVeiculo}>
                        {this.state.listaVeiculo.map(element => {
                            return (
                                <option value={element.idVeiculo}>{element.nomeVeiculo}</option>
                            )
                        })}
                        </select>
                    </div>
                    <div>
                        <select onInput={this.atualizaEstadoTipo}>
                        {this.state.listaTipo.map(element => {
                            return (
                                <option value={element.idTipo}>{element.nomeTipo}</option>
                            )
                        })}
                        </select>
                    </div>
                    <div className="item">
                    <button 
                    className="btn btn__login" 
                    onClick={this.efetuarCadastro}
                    id="btn__login">
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

