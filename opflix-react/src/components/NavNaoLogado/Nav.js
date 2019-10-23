import React,{Component} from 'react';
import Logo from '../../assets/img/Logo.png';
import { Link } from 'react-router-dom';

class Nav extends Component{

    render(){
        return(
            <div>
                <nav id="nav">
            <div className="flex">
                    <img src={Logo} className="logo"></img>
                    <h4>Opflix</h4>
                <Link to="/" className="linkNav">Home</Link>
            </div>
            <div className="flex">
                <Link to="/cadastro" className="linkNav">Cadastrar</Link>
                <Link to="/login" className="linkNav">Login</Link>
            </div>
                </nav>
            </div>
        );
    }
}

export default Nav;