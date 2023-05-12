import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
function Register() {
  return (
    <>
        <div className="fondo">
            <div class="container" id="container">
                <div class="form-container sign-in-container">
                    <form action="#">
                        <h1 class="titulo-login">Registra't</h1>
                        <input type="name" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="dni" placeholder="DNI" />
                        <input type="telefon" placeholder="Telefón  " />

                        <button className='boto'>Registrar-se</button>
                        <div className="desaparecer">Si ja tens compta inicia sessió<Link className='link-desaparecer'to={"/login"}>aquí</Link></div>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-right">
                            <h1>Tens compta?</h1>
                            <p>Inicia sessió amb les teves dades aquí!</p>
                            <button className='boto2'> 
                                <Link className='ghost' to={"/login"}>Login</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default Register