import React,{Component} from 'react';
import Logo from '../../assets/img/Logo.png';

class Nav extends Component{
    render(){
        return(
            <div>
                <nav>
                    <img src={Logo}></img>
                    <h1>Opflix</h1>
                </nav>
            </div>
        );
    }
}

export default Nav;