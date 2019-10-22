import React, { Component } from 'react';
import Rodape from '../../components/Rodape/Rodape';
import Nav from '../../components/Nav/Nav';

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