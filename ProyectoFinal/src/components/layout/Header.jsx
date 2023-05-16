import React, { useContext, useEffect, useState } from 'react'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../userContext';

export const Header = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    let { usuari, setUsuari } = useContext(UserContext);

    const authToken = localStorage.getItem('authToken'); // Verificamos si el usuario está autenticado

    const logout = () => {
        localStorage.removeItem('authToken'); // Al hacer logout, eliminamos el token
        navigate('/'); // Redirigimos al usuario a la ruta '/'
        window.location.reload(); // Recargamos la página
    }


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    useEffect(() => {

        fetch("http://127.0.0.1:8000/api/user/", {

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authToken,
                //"Access-Control-Allow-Origin": "*" 

            },
            method: "GET",
            //body: JSON.stringify({email: email, password: password})
        })
            .then(data => data.json())
            .then(resposta => {


                if (resposta.success == true) {
                    console.log(resposta);
                    setUsuari(resposta.user.name);
                    console.log(resposta.user.name);
                    //    setRoles(resposta.roles)

                }

            })
            .catch((data) => {

            })



    }, [])

    return (
        <>
            <div className='header'>
                <div className='top-header'>
                    <div className='logo'>
                        <h1>
                            <Link className='titulo' to='/'>MusicTix</Link>
                        </h1>
                        <img src="../fotos/logo.png" className='logo-header' alt="logo" />
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
                                <Link className='titulo-link' to='/esdeveniments'>Esdeveniments</Link>
                            </li>
                            <li>
                                <Link className='titulo-link' to='/artistes'>Artistes</Link>
                            </li>
                            <li>
                                <Link className='titulo-link' to='/nosotros'>Sobre nosaltres</Link>
                            </li>
                            <li>
                                <Link className='titulo-link' to='/contacta'>Contacta</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="login">{authToken ? (

                        // Si el usuario está autenticado, mostramos el enlace de Logout
                        <>
                            <li className='titulo-link' onClick={logout}>Logout</li>
                            <li className='titulo-link'>{usuari}</li>
                        </>
                    ) : (
                        // Si el usuario no está autenticado, mostramos los enlaces de Login y Register
                        <>
                            <li>
                                <Link className='titulo-link' to='/login'>Iniciar Sessió</Link>
                            </li>
                            <li>
                                <Link className='titulo-link' to='/register'>Registrar-se</Link>
                            </li>
                        </>
                    )}
                    </div>

                </div>
            </div>
        </>
    )
}
