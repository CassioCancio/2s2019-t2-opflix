import React, { Component } from 'react';
import Logo from '../../assets/img/Logo.png';
import { Link } from 'react-router-dom';

class Nav extends Component {

    render() {
        return (
            <div>
                <nav id="nav">
                    <div className="flex">
                        <img src={Logo} className="logoComum"></img>
                        <h4>Opflix</h4>
                        <Link to="/" className="linkNav">Home</Link>
                        <Link to="/lancamentos" className="linkNav">Lançamentos</Link>
                        {/* <Link to="/favoritos" className="linkNav">Lançamentos</Link> */}
                    </div>
                    <div className="flex">
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;