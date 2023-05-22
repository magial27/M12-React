import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import EsdevenimentsGrid from '../../paginas/EsdevenimentsGrid'
import EsdevenimentGrid from '../../paginas/EsdevenimentGrid'

import './Home.css'




export const Home = (esdeveniment) => {
    return (
        <>
            <div className="home">
                <div className="caja-inicio">
                    <video src="https://dl.dropboxusercontent.com/s/e7nmfu4hc8d49rr/video_home.mp4?dl=0" class="video-home" autoplay="true" muted="true" loop="true"></video>
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
                        <div class="carta">
                            <div class="content">
                                <h2 class="title">Entrades</h2>
                                <p class="copy">Aqui podràs trobar tots els festivals posibles del sector. Ja sigui música electrònica, tecno, hardstyle i molt més!!!</p><Link class="boton-home" to={"/esdeveniments"}>Tickets</Link>
                            </div>
                        </div>
                        <div class="carta">
                            <div class="content">
                                <h2 class="title">Els millors artistes </h2>
                                <p class="copy">Podràs disfrutar dels millors artistes. Artises a nivell mundial. David Guetta, Oliver Heldens, Boris Brechja i molts més!!! </p><Link class="boton-home" to={"/esdeveniments"}>Tickets</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="caja-abajo">
                    <div class="container-artistas">
                        <div class="card-artista card-artista0">
                            <div class="border">
                                <h2 class="titulo_carta">Boris Brejcha</h2>
                            </div>
                        </div>
                        <div class="card-artista card-artista1">
                            <div class="border">
                                <h2 class="titulo_carta">Oliver Heldens</h2>
                            </div>
                        </div>
                        <div class="card-artista card-artista2">
                            <div class="border">
                                <h2 class="titulo_carta">Skrillex</h2>   
                            </div>
                        </div>
                        
                    </div>
                    <div class="container-artistas2">
                        <div class="card-artista card-artista3">
                            <div class="border">
                                <h2 class="titulo_carta">Carl Cox</h2>
                            </div>
                        </div>
                        <div class="card-artista card-artista4">
                            <div class="border">
                                <h2 class="titulo_carta">Martin Garrix</h2>
                            </div>
                        </div>
                        <div class="card-artista card-artista5">
                            <div class="border">
                                <h2 class="titulo_carta">Chris Stussy</h2>   
                            </div>
                        </div>
                        
                    </div>
                    




                </div>
            </div>
        </>
    )
}
