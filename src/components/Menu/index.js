import React from 'react';
import Logo from '../../assets/img/logo.png'
import './Menu.css'
import Button from '../Button';
import { Link }from 'react-router-dom';


function Menu(){

        return ( 
           <nav className="Menu">
               <Link to="/">
                <img className="Logo" src={Logo} alt="wanflix logo" />
               </Link>

               <Button  as={Link} className="ButtonLink" to="/cadastro/video" >
                    Novo video
               </Button>
           </nav>
         );

}
 
export default Menu;