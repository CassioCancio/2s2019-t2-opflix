import React, { Component } from 'react';
import '../../assets/css/index.css';

//realizar import dos estilos
//import '../../assets/css/flexbox.css';
//import '../../assets/css/login.css';
//import '../../assets/css/style.css';
//import '../../assets/css/reset.css';

//imagem 
//import logo from '../../assets/img/icon-login.png';

import { Link } from 'react-router-dom';

class Selecao extends Component {

    constructor() {
        super();
        this.state = {
            categoria: ""
        }
    }


    render() {
        return (
            <div>
                <h1>Administrador</h1>
                <div>
                    <Link to="/categorias">Categorias</Link>
                    <Link to="/editor">Editor de Lançamentos</Link>
                    <Link to="/usuarios">Usuários</Link>
                </div>
            </div>
        );
    }

}

export default Selecao;
