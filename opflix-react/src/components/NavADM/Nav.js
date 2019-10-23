import React,{Component} from 'react';
import Logo from '../../assets/img/Logo.png';
import { Link } from 'react-router-dom';

class Nav extends Component{

    render(){
        return(
            <div>
                <nav id="nav">
            <div className="flex">
                    <img src={Logo} className="logoADM"></img>
                    <h4>Opflix</h4>
                <Link to="/" className="linkNav">Home</Link>
                <Link to="/categorias" className="linkNav">Categoria</Link>
                <Link to="/editor" className="linkNav">Lançamentos</Link>
                <Link to="/usuarios" className="linkNav">Usuários</Link>
            </div>
            <div className="flex">
            </div>
                </nav>
            </div>
        );
    }
}

export default Nav;