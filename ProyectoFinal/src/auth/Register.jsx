import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dni, setDni] = useState('');
    const [telephone, setTelephone] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://equip12.insjoaquimmir.cat/api/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password, dni, telephone })
            });

            if (response.ok) {
                const data = await response.json();
                const authToken = data.authToken;

                // Guardar el authToken en el local storage
                localStorage.setItem('authToken', authToken);

                // Realizar las acciones adicionales después de registrar exitosamente

                // Por ejemplo, redirigir a otra página
                navigate('/');
                window.location.reload(); // Recargamos la página
            } else {
                // Manejar el caso cuando el registro falla
                console.log('Error de registro');
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
                        <form onSubmit={handleRegister}>
                            <h1 className="titulo-login">Registra't</h1>
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
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
                            <input
                                type="text"
                                placeholder="DNI"
                                value={dni}
                                onChange={(e) => setDni(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Telefón"
                                value={telephone}
                                onChange={(e) => setTelephone(e.target.value)}
                            />

                            <button className="boto">Registrar-se</button>
                            <div className="desaparecer">
                                Si ja tens compta inicia sessió
                                <Link className="link-desaparecer" to="/login">
                                    aquí
                                </Link>
                            </div>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-right">
                                <h1>Tens compta?</h1>
                                <p>Inicia sessió amb les teves dades aquí!</p>
                                <button className="boto2">
                                    <Link className="ghost" to="/login">
                                        Login
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

export default Register;
