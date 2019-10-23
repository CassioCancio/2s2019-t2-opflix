import React, { Component } from 'react';
import Rodape from '../../components/Rodape/Rodape';
import Nav from '../../components/NavNaoLogado/Nav';
import '../../assets/css/index.css';

class NaoEncontrado extends Component {
    render() {
        return (
            <div>
            <Nav />
            <h1>404</h1>
            <Rodape />
            </div>
        )
    }
}

export default NaoEncontrado;