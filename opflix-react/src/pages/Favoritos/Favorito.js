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

class Favorito extends Component {

  constructor() {
      super();
      this.state = {
          categoria: ""
      }
  }

  atualizaEstadoEmail = (event) => {
      this.setState({ email: event.target.value });
  }

  atualizaEstadoSenha = (event) => {
      this.setState({ senha: event.target.value });
  }

  render() {
      return (
          <div>
              <Nav />
           
              <Rodape />
          </div>
      );
  }

}

export default Favorito;