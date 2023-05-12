import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
function Login() {

    return (
        <>
            <div className="fondo">
                <div class="container" id="container">
                    <div class="form-container sign-in-container">
                        <form action="#">
                            <h1 class="titulo-login">Inicia Sessió</h1>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button className='boto'>Iniciar Sessió </button>
                            <div className="desaparecer">Si encara no tens compta creala <Link className='link-desaparecer'to={"/register"}>aquí</Link></div>
                        </form>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-right">
                                <h1>No tens compta?</h1>
                                <p>Crea la teva compta ingresant les teves dades aquí</p>
                                <button className='boto2'> 
                                    <Link className='ghost' to={"/register"}>Registrar-se</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login