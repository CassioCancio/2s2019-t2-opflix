import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './pages/Home/App';
import Categoria from './pages/Categorias/Categoria';
import NaoEncontrado from './pages/NaoEncontrado/NaoEncontrado';
import Login from './pages/Login/Login';
import Lancamentos from './pages/Lancamentos/Lancamento';
import EditorLancamento from './pages/EditorLancamento/EditorLancamento';
import Favorito from './pages/Favoritos/Favorito';
import SelecaoComum from './pages/SelecaoComum/Selecao';
import SelecaoADM from './pages/SelecaoADM/Selecao';
import Usuario from './pages/Usuarios/Usuario';
import Cadastro from './pages/Cadastro/Cadastro';

import * as serviceWorker from './serviceWorker';

import { parseJwt } from './services/auth';

//rotas

const RotaPrivada = ({ component: Component }) => (
    <Route
        render={props =>
            localStorage.getItem('usuario-opflix') !== null ? (
                parseJwt().Permissao === "CLIENTE" ? (
                <SelecaoComum {...props} />
            ) : 
            
            (
                <SelecaoADM {...props} />
                )
            ) : 
            
            (<Redirect
                to={{ pathname: "/login", state: { from: props.location } }}
            />)
        }
    />
);

const PermissaoComum = ({ component: Component }) => (
    <Route
        render={
            props =>
                parseJwt().Permissao === "CLIENTE" ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{ pathname: "/login", state: { from: props.location } }}
                        />
                    )
        }
    />
);

const PermissaoADM = ({ component: Component }) => (
    <Route
        render={
            props =>
                parseJwt().Permissao === "ADMINISTRADOR" ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{ pathname: "/login", state: { from: props.location } }}
                        />
                    )
        }
    />
);


const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <PermissaoADM path='/categorias' component={Categoria} />
                <PermissaoComum path='/lancamentos' component={Lancamentos} />
                <PermissaoADM path='/editor' component={EditorLancamento} />
                <PermissaoComum path='/favorito' component={Favorito} />
                <RotaPrivada path='/selecao' component={SelecaoComum} />
                <PermissaoADM path='/usuarios' component={Usuario} />
                <Route path='/login' component={Login} />
                <Route path='/cadastro' component={Cadastro} />
                <Route component={NaoEncontrado} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
