import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Rodape from '../../components/Rodape/Rodape';
import Nav from '../../components/NavComum/Nav';

class Localizacoes extends Component {

  constructor() {
    super();
    this.state = {
      Localizacoes: [],
      selecionado: ""
    }
  }

  _adicionarLocalizacoes = () => {
    fetch("http://192.168.4.96:5000/api/localizacao/", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + localStorage.getItem('usuario-opflix')
      },
    })
      .then(res => res.json())
      .then(data => this.setState({ Localizacoes: data }))
      .catch(error => console.log(error));
  }

  marcadores = () => {
    let marcadores = [];

    this.state.Localizacoes.forEach(item => {
      marcadores.push(
        <Marker position={{ lat: item.latitude, lng: item.longitude }} title={item.midia.titulo} />
      )
    })
    return marcadores;
  }
  


  componentWillMount() {
    this._adicionarLocalizacoes();
  }
  render() {
    return (
      <div>

        <Nav />
        <h1 style={{ marginTop: "8vh", marginBottom: "3vh" }}>Localização</h1>


        <Map google={this.props.google}
          style={{ width: '100%', height: '85vh', marginTop: "0vh", marginBottom: "-20vh", position: "fixed", top: 0 }}
          zoom={11}
          initialCenter={{
            lat: -23.5345442,
            lng: -46.6493879
          }}
        >
          {this.marcadores()}
        </Map>

        <footer className="fixar" style={{ backgroundColor: "#ffffff" }}>
          <p>OPFLIX</p>
          <div className="flexSpaceAround">
            <div>
              <p>Opflix@gmail.com</p>
            </div>
            <div>
              <p>(11) 9XXXX - XXXX</p>
            </div>
            <div>
              <p>@OpFlix</p>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBSzVh-P1he1vUWXeShZ1Q2M1sD8NGqONs")
})(Localizacoes)