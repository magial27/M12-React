import React from 'react'
import './Artista.css'
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
import { FaFacebookF, FaSpotify, FaYoutube, FaSoundcloud } from "react-icons/fa";



function Artista() {
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
    return (
        <>
            <div className="fondo-artistes">
                <div className="contenido-cajas">
                    <div class="artist-card">
                        <div class="artist-photo1"></div>
                        <div class="artist-details">
                            <h1>Chris Stussy</h1>
                            <span class="artist-genre">house</span>

                            <div class="music-meta">
                                <div class="album">
                                    <h4>Nacionalitat</h4>
                                    <ul>
                                        <li>Holandès</li>
                                    </ul>
                                </div>
                                <div class="song">
                                    <h4>Edat</h4>
                                    <ul>
                                        <li>21 anys</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="social-links">
                                <h4>Aquí podràs trobar la seva música</h4>

                                <ul>
                                    <li><a target="_blank" href="https://open.spotify.com/artist/3BxjasMelf9pKaE4f7Y0So?autoplay=true"><FaSpotify /></a></li>
                                    <li><a target="_blank" href="https://www.youtube.com/channel/UCahebwHFZhAarCTx3wRh74w"><FaYoutube /></a></li>
                                    <li><a target="_blank" href="https://music.apple.com/es/artist/chris-stussy/746159191"><FaSoundcloud /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="artist-card">
                        <div class="artist-photo2"></div>
                        <div class="artist-details">
                            <h1>Boris Brejcha</h1>
                            <span class="artist-genre">house</span>

                            <div class="music-meta">
                                <div class="album">
                                    <h4>Nacionalitat</h4>
                                    <ul>
                                        <li>Alemà</li>
                                    </ul>
                                </div>
                                <div class="song">
                                    <h4>Edat</h4>
                                    <ul>
                                        <li>41 anys</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="social-links">
                                <h4>Aquí podràs trobar la seva música</h4>

                                <ul>
                                    <li><a target="_blank" href="https://open.spotify.com/artist/6caPJFLv1wesmM7gwK1ACy?autoplay=true"><FaSpotify /></a></li>
                                    <li><a target="_blank" href="https://www.youtube.com/channel/UCukezONa4veoJBeK9UuVZew"><FaYoutube /></a></li>
                                    <li><a target="_blank" href="https://music.apple.com/es/artist/boris-brejcha/202970860"><FaSoundcloud /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="artist-card">
                        <div class="artist-photo3"></div>
                        <div class="artist-details">
                            <h1>Oliver Heldens</h1>
                            <span class="artist-genre">house</span>

                            <div class="music-meta">
                                <div class="album">
                                    <h4>Nacionalitat</h4>
                                    <ul>
                                        <li>Holandès</li>
                                    </ul>
                                </div>
                                <div class="song">
                                    <h4>Edat</h4>
                                    <ul>
                                        <li>28 anys</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="social-links">
                                <h4>Aquí podràs trobar la seva música</h4>

                                <ul>
                                    <li><a target="_blank" href="https://open.spotify.com/artist/5nki7yRhxgM509M5ADlN1p?autoplay=true"><FaSpotify /></a></li>
                                    <li><a target="_blank" href="https://www.youtube.com/channel/UC-EVnno6x6-aAG6g1ZVoN3A"><FaYoutube /></a></li>
                                    <li><a target="_blank" href="https://music.apple.com/es/artist/oliver-heldens/608826395"><FaSoundcloud /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="artist-card">
                        <div class="artist-photo4"></div>
                        <div class="artist-details">
                            <h1>Skrillex</h1>
                            <span class="artist-genre">Deep House</span>

                            <div class="music-meta">
                                <div class="album">
                                    <h4>Nacionalitat</h4>
                                    <ul>
                                        <li>Americà</li>
                                    </ul>
                                </div>
                                <div class="song">
                                    <h4>Edat</h4>
                                    <ul>
                                        <li>35 anys</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="social-links">
                                <h4>Aquí podràs trobar la seva música</h4>

                                <ul>
                                    <li><a target="_blank" href="https://open.spotify.com/artist/5he5w2lnU9x7JFhnwcekXX?autoplay=true"><FaSpotify /></a></li>
                                    <li><a target="_blank" href="https://www.youtube.com/channel/UC_TVqp_SyG6j5hG-xVRy95A"><FaYoutube /></a></li>
                                    <li><a target="_blank" href="https://music.apple.com/es/artist/skrillex/356545647"><FaSoundcloud /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="artist-card">
                        <div class="artist-photo5"></div>
                        <div class="artist-details">
                            <h1>Carl Cox</h1>
                            <span class="artist-genre">house</span>

                            <div class="music-meta">
                                <div class="album">
                                    <h4>Nacionalitat</h4>
                                    <ul>
                                        <li>Anglès</li>
                                    </ul>
                                </div>
                                <div class="song">
                                    <h4>Edat</h4>
                                    <ul>
                                        <li>60 anys</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="social-links">
                                <h4>Aquí podràs trobar la seva música</h4>

                                <ul>
                                    <li><a target="_blank" href="https://open.spotify.com/artist/19SmlbABtI4bXz864MLqOS?autoplay=true"><FaSpotify /></a></li>
                                    <li><a target="_blank" href="https://www.youtube.com/channel/UCCrHGOX6Uoj5PndNIoRkoFw"><FaYoutube /></a></li>
                                    <li><a target="_blank" href="https://music.apple.com/es/artist/carl-cox/2811492"><FaSoundcloud /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="artist-card">
                        <div class="artist-photo6"></div>
                        <div class="artist-details">
                            <h1>Martin Garrix</h1>
                            <span class="artist-genre">house</span>

                            <div class="music-meta">
                                <div class="album">
                                    <h4>Nacionalitat</h4>
                                    <ul>
                                        <li>Holandès</li>
                                    </ul>
                                </div>
                                <div class="song">
                                    <h4>Edat</h4>
                                    <ul>
                                        <li>27 anys</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="social-links">
                                <h4>Aquí podràs trobar la seva música</h4>

                                <ul>
                                    <li><a target="_blank" href="https://open.spotify.com/artist/60d24wfXkVzDSfLS6hyCjZ?autoplay=true"><FaSpotify /></a></li>
                                    <li><a target="_blank" href="https://www.youtube.com/channel/UC5H_KXkPbEsGs0tFt8R35mA"><FaYoutube /></a></li>
                                    <li><a target="_blank" href="https://music.apple.com/es/artist/martin-garrix/430932944"><FaSoundcloud /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </>
    )
}

export default Artista