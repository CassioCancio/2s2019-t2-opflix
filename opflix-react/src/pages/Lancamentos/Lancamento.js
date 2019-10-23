import React, { Component } from 'react';
import '../../assets/css/index.css';
import Rodape from '../../components/Rodape/Rodape';
import Nav from '../../components/NavComum/Nav';

//realizar import dos estilos
//import '../../assets/css/flexbox.css';
//import '../../assets/css/login.css';
//import '../../assets/css/style.css';
//import '../../assets/css/reset.css';

//imagem 
//import logo from '../../assets/img/icon-login.png';

import { Link } from 'react-router-dom';

class Lancamento extends Component {

    constructor() {
        super();
        this.state = {
            lista: [
            ]
        };
    }

    componentDidMount() {
        this.listaAtualizada();
    }

    listaAtualizada = () => {
        fetch('http://localhost:52798/api/midias', {
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
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                <Rodape />
            </div>
        );
    }
}

export default Lancamento;
