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

class Categoria extends Component {

    constructor() {
        super();
        this.state = {
            lista: [
                // {idCategoria: 1, nome: "Design"},
                // {idCategoria: 2, nome: "Jogos"},
                // {idCategoria: 3, nome: "Meetup"}
            ],
            nome: ''
        };
    }

    componentDidMount() {
        this.listaAtualizada();
    }

    listaAtualizada = () => {
        fetch('http://localhost:52798/api/categorias', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + localStorage.getItem('usuario-opflix')
            },
        })
            .then(response => response.json())
            .then(data => this.setState({ lista: data }));
    }

    adicionaItem = (event) => {
        console.log(this.state.nome);
        fetch('http://localhost:52798/api/categorias', {
            method: "POST",
            body: JSON.stringify({ nomeCategoria: this.state.nome }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + localStorage.getItem('usuario-opflix')
            },
        })
            .then(this.listaAtualizada())
            .catch(error => console.log(error))
    }

    adicionaCategoria = () => {
        let valores_lista = this.state.lista;
        let categoria = { nome: this.state.nome }

        valores_lista.push(categoria);

        this.setState({ lista: valores_lista });
    }

    atualizarNome = (event) => {
        this.setState({ nome: event.target.value })
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <Nav />
                <h1>Categorias Cadastradas</h1>

                <div className="container" id="conteudoPrincipal-lista">
                    <table id="tabela-lista">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Título</th>
                            </tr>
                        </thead>

                        <tbody id="tabela-lista-corpo">
                            {this.state.lista.map(element => {
                                return (
                                    <tr key={element.idCategoria}>
                                        <td>{element.idCategoria}</td>
                                        <td>{element.nomeCategoria}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                <div className="container" id="conteudoPrincipal-cadastro">
                    <h2 className="conteudoPrincipal-cadastro-titulo">
                        Cadastrar Categoria
                        </h2>
                    <form>
                        <div className="container">
                            <input
                                type="text"
                                className="className__categoria"
                                id="input__categoria"
                                placeholder="tipo do evento"
                                value={this.state.nome}
                                onInput={this.atualizarNome}
                            />
                            <button
                                id="btn__cadastrar"
                                onClick={this.adicionaItem}
                                className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                            >
                                Cadastrar
                            </button>
                        </div>
                    </form>
                </div>

                <Rodape />
            </div>
        );
    }
}

export default Categoria;
