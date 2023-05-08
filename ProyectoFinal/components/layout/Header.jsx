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
                    <h1>
                        <Link className='titulo' to='/'>MusicTix</Link>
                    </h1>
                    <img src="../fotos/logo.png"  className='logo-header' alt="logo"/>
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
                            <Link className='titulo' to='/esdeveniments'>Esdeveniments</Link>
                        </li>
                        <li>
                            <Link className='titulo' to='/nosotros'>Sobre nosaltres</Link>
                        </li>
                        <li>
                            <Link className='titulo' to='/contacta'>Contacta</Link>
                        </li>
                        <li>
                            <Link className='titulo' to='/login'>Iniciar Sessió</Link>
                        </li>
                        <li>
                            <Link className='titulo' to='/register'>Registrar-se</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </>
    )
}
