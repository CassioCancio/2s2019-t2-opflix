import React, { Component } from 'react';
import './App.css';
import Rodape from '../../components/Rodape/Rodape';
import Nav from '../../components/Nav/Nav';

//imagem 
import computador from '../../assets/img/Computador.png';
import coracao from '../../assets/img/25424.png';
import sino from '../../assets/img/1157051.png'
import filme from '../../assets/img/Filme.png';

//import {Link} from 'react-router-dom';

class Home extends Component {

  render() {
      return (
          <div>
              <Nav />
              <h1>Opflix</h1>
              <div>
                <div>
                  <h2>Acompanhe os lançamentos do cinema de modo prático e intuitivo.</h2>
                  <h3>O cadastro é gratuito e te permite criar listas de filmes que deseja ver, para que você nunca mais fique por fora de nenhum lançamento</h3>
                </div>
              <img src={computador} />
              </div>
              <div>
                <div>
                  <img src={coracao}/>
                  <h2>Favorite</h2>
                </div>
                <div>
                  <img src={sino}/>
                  <h2>Seja Avisado</h2>
                </div>
                <div>
                  <img src={filme}/>
                  <h2>Esteja Interado</h2>
                </div>
              </div>
              <Rodape />
          </div>
      );
  }

}

export default Home;