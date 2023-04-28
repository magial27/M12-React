import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'



export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
        <div className='header'>
            <div className='top-header'>
                <div className='logo'>
                    {/* Aquí puedes poner tu logo */}
                </div>
            </div>
            <div className='bottom-header'>
                <button className='menu-toggle' onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav className={`menu ${isOpen ? 'open' : ''}`}>
                    <ul className='flex-menu-header'>
                        <li>
                            <Link to='/esdeveniments'>Eventos</Link>
                        </li>
                        <li>
                            <Link to='/nosotros'>Sobre nosotros</Link>
                        </li>
                        <li>
                            <Link to='/contacta'>Contacta</Link>
                        </li>
                        <li>
                            <Link to='/iniciar-sesion'>Iniciar sesión</Link>
                        </li>
                        <li>
                            <Link to='/registrarse'>Registrarse</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </>
    )
}
