import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'




export const Home = () => {
    return (
        <>
            <div className="home">
                <div className="caja-inicio">
                    <video src="../fotos/video_home.mp4" class="video-home" autoplay="true" muted="true" loop="true"></video>
                    <div className="div_titulo">
                        <h1 className="titulo_caja">Bienvinguts a MusicTix</h1>
                        <p className="texto_caja">Benvingut a la nostra aplicació web de venda d'entrades
                            musicals. Si ets un amant de la música i t'encanta assistir a concerts en directe, has arribat al lloc
                            correcte! A la nostra plataforma, podràs trobar una gran varietat d'entrades per als millors esdeveniments
                            musicals, des dels més grans festivals fins als concerts més íntims dels teus artistes preferits. A més,
                            el nostre procés de compra és senzill i segur, perquè puguis reservar les teves entrades amb total confiança
                            i comoditat des de la comoditat del teu propi habitatge. Uneix-te a la nostra comunitat i no et perdis cap espectacle musical!</p>
                    </div>
                    <div class="page-content">
                        <div class="card">
                            <div class="content">
                                <h2 class="title">Entrades</h2>
                                <p class="copy">Aqui podràs trobar tots els festivals posibles del sector. Ja sigui música electrònica, tecno, hardstyle i molt més!!!</p><Link class="btn" to={"/esdeveniments"}>Tickets</Link>
                            </div>
                        </div>
                        <div class="card">
                            <div class="content">
                                <h2 class="title">To The Beach</h2>
                                <p class="copy">Plan your next beach trip with these fabulous destinations</p><button class="btn">View Trips</button>
                            </div>
                        </div>
                    </div>
                </div>
               









            </div>
        </>
    )
}
{/* <div className="cajas_informacion">
                        <div>
                            <img src="../fotos/et.jpeg" alt="" />
                        </div> 
                        <div>
                            
                            
                        </div>  
                    </div> */}