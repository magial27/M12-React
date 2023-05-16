import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

import { UserContext } from '../userContext';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let { usuari, setUsuari,authToken,setAuthToken } = useContext(UserContext);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/api/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const data = await response.json();
                const authToken = data.authToken;

                // Guardar el authToken en el local storage
                localStorage.setItem('authToken', authToken);

                // Realizar las acciones adicionales después de iniciar sesión exitosamente

                // setUsuari(email);
                // console.log(usuari);

                // Por ejemplo, redirigir a otra página
                navigate('/');
                window.location.reload(); // Recargamos la página
            } else {
                // Manejar el caso cuando la autenticación falla
                console.log('Error de autenticación');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <>
            <div className="fondo">
                <div className="container" id="container">
                    <div className="form-container sign-in-container">
                        <form onSubmit={handleLogin}>
                            <h1 className="titulo-login">Inicia Sessió</h1>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className="boto">Iniciar Sessió</button>
                            <div className="desaparecer">
                                Si encara no tens compta creala{' '}
                                <Link className="link-desaparecer" to="/register">
                                    aquí
                                </Link>
                            </div>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-right">
                                <h1>No tens compta?</h1>
                                <p>Crea la teva compta ingresant les teves dades aquí</p>
                                <button className="boto2">
                                    <Link className="ghost" to="/register">
                                        Registrar-se
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
