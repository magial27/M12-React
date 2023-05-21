import React, { useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Configurar los parámetros necesarios para enviar el correo
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    // Enviar el correo utilizando EmailJS
    emailjs
      .send('service_dhm7ks9', 'template_f7tw2nj', templateParams, 'WiYr5TKdCgv2h467x')
      .then(() => {
        // Marcar el formulario como enviado
        setSent(true);
      })
      .catch((error) => {
        console.error('Error al enviar el formulario:', error);
      });
  };

  return (
    <>
      <div className="fondo-contacte">
        <h1 className="titulo-contacte">Contacta'ns</h1>
      </div>
      <div className="fondo-contacte-total">
        <div className="background">
          <div className="container-contact">
            <div className="screen">
              <div className="screen-body">
                <div className="screen-body-item left">
                  <div className="item-contact"><FaEnvelope /></div>
                  <div className="app-contact">CONTACTA'NS AQUÍ: info@musictix.com</div>
                  <br />
                  <div className="item-contact"><FaInfoCircle /></div>
                  <div className="app-contact">POTS SABER MÉS <Link className="app-contact link" to={"/nosaltres"}>AQUÍ</Link></div>
                </div>
                <div className="screen-body-item">
                  {sent ? (
                    <div className="success-message">¡Mensaje enviado con éxito!</div>
                  ) : (
                    <div className="app-form">
                      <div className="app-form-group">
                        <input
                          className="app-form-control"
                          placeholder="NOM"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="app-form-group">
                        <input
                          className="app-form-control"
                          placeholder="EMAIL"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="app-form-group message">
                        <input
                          className="app-form-control"
                          placeholder="MISSATGE"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </div>
                      <div className="app-form-group buttons">
                        <button className="app-form-button" onClick={handleFormSubmit}>
                          ENVIAR
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;