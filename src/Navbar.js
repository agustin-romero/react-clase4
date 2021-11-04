import React from 'react';
import Navitem from '.src/Navitem.js';
import ".src/Navbar.css";
import Navcart from './Navcart';


const Navbar = ({titulo}) => {

    return (
        <>
            <nav>
                <div className="container"> 
                    <h1> {titulo} </h1>
                    <ul>
                        <Navitem text='Inicio' />
                        <Navitem text='Nosotros' />
                        <Navitem text='Productos' />
                        <Navitem text='Medios de pago' />
                        <Navitem text='Contacto' />
                    </ul>
                </div>
            </nav>
            <Navcart />
        </>
    );
};

export default Navbar;