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

class Usuario extends Component {

    constructor() {
        super();
        this.state = {
            lista: [
            ],
            nome: ''
        };
    }

    componentDidMount() {
        this.listaAtualizada();
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
                </div>
                <Rodape />
            </div>
        );
    }
}

export default Usuario;