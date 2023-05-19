import React from 'react'
import './Contact.css'
import { FaEnvelope, FaInfoCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';



function Contact() {


  return (
    <>
      <div className="fondo-contacte">
        <h1 className="titulo-contacte">Contacta'ns</h1>
      </div>
      <div className="fondo-contacte-total">
        <div class="background">
          <div class="container-contact">
            <div class="screen">
              <div class="screen-header">
                <div class="screen-header-left">
                  <div class="screen-header-button close"></div>
                  <div class="screen-header-button maximize"></div>
                  <div class="screen-header-button minimize"></div>
                </div>
                <div class="screen-header-right">
                  <div class="screen-header-ellipsis"></div>
                  <div class="screen-header-ellipsis"></div>
                  <div class="screen-header-ellipsis"></div>
                </div>
              </div>
              <div class="screen-body">
                <div class="screen-body-item left">
                  <div className="item-contact"><FaEnvelope /></div>
                  <div class="app-contact">CONTACTA'NS AQUÍ: info@musictix.com</div>
                  <br></br>
                  <div className="item-contact"><FaInfoCircle /></div>
                  <div class="app-contact">POTS SABER MÉS <Link class="app-contact link" to={"/nosaltres"}>AQUÍ</Link></div>
                </div>
                <div class="screen-body-item">
                  <div class="app-form">
                    <div class="app-form-group">
                      <input class="app-form-control" placeholder="NOM" />
                    </div>
                    <div class="app-form-group">
                      <input class="app-form-control" placeholder="EMAIL" />
                    </div>
                    <div class="app-form-group message">
                      <input class="app-form-control" placeholder="MISSATGE" />
                    </div>
                    <div class="app-form-group buttons">
                      <button class="app-form-button">ENVIAR</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
    </>
  )
}

export default Contact