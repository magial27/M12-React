import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import '../paginas/Esdeveniment.css'
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";

function Esdeveniment() {
    const esdeveniment =
    {
        id: 1, image: '../fotos/festival5.jpg',
        nombre: 'TomorrowLand', artista: 'Chris Stussy', descripcio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        preu: 20, data_inici: '17 de Juny', data_final: '23 de Juny', lloc: 'Bèlgica', aforo: 5000000
    };
    const tracks = [
        {
            url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
            title: "Madza - Chords of Life",
            tags: ["house"],
        },
        {
            url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
            title: "Madza - Late Night Drive",
            tags: ["dnb"],
        },
        {
            url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
            title: "Madza - Persistence",
            tags: ["dubstep"],
        },
    ];
    const colors = `html {
        --playerBackground: #ffa400;
        --titleColor: #ffffff; 
        --timeColor: #ffffff;
        --progressSlider: #080042;
        --progressUsed: #000000;
        --progressLeft: #ffffff;
        --volumeSlider: #080042;
        --volumeUsed: #000000;
        --volumeLeft:  #ffffff;
        --playlistBackground: #ffa400;
        --playlistText: #000000;
        --playlistBackgroundHoverActive:  #18191f;
        --playlistTextHoverActive: #ffffff;
    }`;
    const { id } = useParams();

    return (
        <>
            <div className="show">
                <div class="section-fluid-main">
                    <div class="section">
                        <div class="info-wrap mob-margin">
                            <p class="title-up">{esdeveniment.lloc}</p>
                            <h2>{esdeveniment.nombre}</h2>
                            <h4>{esdeveniment.preu} €<span></span></h4>
                            <div class="section-fluid">
                                <input class="desc-btn" type="radio" id="desc-2" name="desc-btn" checked/>
                                <label for="desc-2">Details</label>
                                <input class="desc-btn" type="radio" id="desc-1" name="desc-btn"  />
                                <label for="desc-1">Description</label>

                                <div class="section-fluid desc-sec accor-1">
                                    <p>{esdeveniment.descripcio}</p>
                                </div>
                                <div class="section-fluid desc-sec accor-2">
                                    <div class="section-inline">
                                        <p>DJ's: <span>{esdeveniment.artista}</span></p>
                                        <p><span>{esdeveniment.aforo}</span> Pers MÁX</p>
                                        <p>Data Inici: <span>{esdeveniment.data_inici}</span></p>
                                        <p>Data Final: <span>{esdeveniment.data_final}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="info-wrap">
                            <a href="#" class="btn"><span class="icon">🛒</span> Comprar Entrades</a>
                        </div>
                        <div class="img-wrap"><img class="imagen_show" src={esdeveniment.image} alt="" /></div>

                    </div>
                </div>
                <div className="segunda-parte">
                    <h1>Llista reprodcucció - {esdeveniment.artista}</h1>
                    <br></br>
                    <div className="reproductor">
                        <Player
                            trackList={tracks}
                            includeTags={false}
                            includeSearch={false}
                            showPlaylist={true}
                            autoPlayNextTrack={true}
                            customColorScheme={colors}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Esdeveniment