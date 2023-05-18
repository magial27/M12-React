import React, { useContext, useEffect, useState } from 'react';
import '../../auth/Login.css';
import { Link, useNavigate } from 'react-router-dom';

import { UserContext } from '../../userContext';

function UserForm() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dni, setDni] = useState('');
    const [telephone, setTelephone] = useState('');
    const [idUser, setIdUser] = useState('');

    const [todoUser, setTodoUser] = useState('');

    let { usuari, setUsuari } = useContext(UserContext);

    const authToken = localStorage.getItem('authToken'); // Verificamos si el usuario está autenticado

    useEffect(() => {
      
        fetch ("http://127.0.0.1:8000/api/user/",{
        
        headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
           'Authorization': 'Bearer '  + authToken,
           //"Access-Control-Allow-Origin": "*" 
  
       },
       method: "GET",
       //body: JSON.stringify({email: email, password: password})
       })
       .then ( data => data.json() )
       .then (resposta => { 
           
               
               if (resposta.success == true )
               {
                   console.log(resposta);
                   setUsuari(resposta.user.name);
                   setIdUser(resposta.user.id);
                   setTodoUser(resposta.user);
                   console.log(resposta.user.name);
                //    setRoles(resposta.roles)
                 
               }
               
           } ) 
       .catch((data) => {
           
       })
        
      
      
    }, [])

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/api/users/' + idUser, {
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
                // localStorage.setItem('authToken', authToken);

                // Realizar las acciones adicionales después de registrar exitosamente

                // Por ejemplo, redirigir a otra página
                navigate('/');
                window.location.reload(); // Recargamos la página
            } else {
                // Manejar el caso cuando el registro falla
                console.log('Error de modificacion del usuario');
                alert("No se ha modificado el usuario debido a un error.");
                navigate('/');
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
                        <form onSubmit={handleUpdate}>
                            <h1 className="titulo-login">Usuari</h1>
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

                            <button className="boto">Modificar</button>
                            
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-right">
                                <h1>Les teves dades actuals</h1>
                                <p>Nom: {todoUser.name}</p>
                                <p>Correu: {todoUser.email} </p>
                                <p>Contrasenya: Per seguretat no es mostra. </p>
                                <p>Dni: {todoUser.dni} </p>
                                <p>Telefon: {todoUser.telephone} </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserForm;
