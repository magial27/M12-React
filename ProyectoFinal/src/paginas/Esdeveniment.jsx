import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import './Esdeveniment.css'
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
import { UserContext } from '../userContext';

function Esdeveniment() {

  const [imageExists, setImageExists] = useState(false);

  const authToken = localStorage.getItem('authToken'); // Verificamos si el usuario está autenticado


  function checkImageExists(imageUrl) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = imageUrl;
    });
  }

  const [esdeveniment, setEsdeveniment] = useState([]);
  const [artist, setArtist] = useState([]);
  const [artistId, setArtistId] = useState(null);

  const { id } = useParams();
  const getEvents = async (e) => {
    try {

      const data = await fetch("http://equip12.insjoaquimmir.cat/api/events/" + id, {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": 'Bearer ',

        },
        method: "GET",
      })
      const resposta = await data.json();
      console.log(resposta);
      if (resposta.success === true) {
        setEsdeveniment(resposta.data);
        setArtistId(resposta.data.artist_id);
        console.log(resposta.data);
      } else {
        console.log("La respuesta no ha triomfat");
      }


    } catch {
      console.log("Error");
      console.log("catch");
    }
  };

  const getArtists = async (e) => {
    try {
      const data = await fetch("http://equip12.insjoaquimmir.cat/api/artists/" + artistId, {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": 'Bearer ',
        },
        method: "GET",
      });

      const resposta = await data.json();
      console.log(resposta);
      if (resposta.success === true) {
        setArtist(resposta.data);
        console.log(resposta.data);
      } else {
        console.log("La resposta no ha triomfat");
      }
    } catch {
      console.log("Error");
    }
  };


  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    if (artistId !== null) {
      getArtists();
    }
  }, [artistId]);

  useEffect(() => {
    checkImageExists(esdeveniment.filepath)
      .then(exists => setImageExists(exists));
  }, [esdeveniment.filepath]);

  const tracks = [

    {
      url: "https://dl.dropboxusercontent.com/s/oazrig6nvtsxed0/onlymp3.to%20-%20Avicii%20-%20Levels-_ovdm2yX4MA-256k-1654109259131.mp3?raw=1",
      title: "Avicii - Levels",
      tags: [""],
    },
    {
      url: "https://dl.dropboxusercontent.com/s/tg2mkfmm7ysygv4/onlymp3.to%20-%20Avicii%20-%20Wake%20Me%20Up%20%28Official%20Video%29-IcrbM1l_BoI-256k-1655618485900.mp3?raw=1",
      title: "Avicii - Wake Me Up ",
      tags: [""],
    },
    {
      url: "https://dl.dropboxusercontent.com/s/c6oxj3pxqduhdol/onlymp3.to%20-%20Boris%20Brejcha%20-%20Gravity%20feat.%20Laura%20Korinth%20%28Visualizer%20Video%29%20%5BUltra%20Music%5D-TAxXRmwA40o-256k-1656962620793.mp3?raw=1",
      title: "Boris Brejcha - Gravity",
      tags: [""],
    },
    {
      url: "https://dl.dropboxusercontent.com/s/p00lzpwtvtmuudr/onlymp3.to%20-%20Calypso%20%28Original%20Mix%29-OhWqfZPrQ9c-256k-1654371767255.mp3?raw=1",
      title: "Carl Cox - Calypso",
      tags: [""],
    },
    {
      url: "https://dl.dropboxusercontent.com/s/ysm7f5y3bcsb1eu/onlymp3.to%20-%20Chris%20Stussy%20%20%20All%20day%20All%20night%20Unreleased-qk44UUMfwCc-256k-1656536577654.mp3?raw=1",
      title: "Chris Stussy - All the day",
      tags: [""],
    },
    {
      url: "https://dl.dropboxusercontent.com/s/6takp8168ke7qia/onlymp3.to%20-%20Chris%20Stussy%20-%20Flow%20Distinction%20%28RB194%29-f0K1tKcJfKg-256k-1660323115111.mp3?raw=1",
      title: "Chris Stussy - Flow Distinction",
      tags: [""],
    },
    {
      url: "https://dl.dropboxusercontent.com/s/cgnjr4hcerm8as2/onlymp3.to%20-%20Conducta%20%26%20Sammy%20Virji%20-%20Whippet-1NXmpUrp5W8-256k-1657155625207.mp3?raw=1",
      title: "Conducta & Sammy Virgil - Whippet",
      tags: [""],
    },
    {
      url: "https://dl.dropboxusercontent.com/s/cbgq6weamwbnxmf/onlymp3.to%20-%20David%20Guetta%20Feat.%20Kid%20Cudi%20-%20Memories%20%28Official%20Video%29-NUVCQXMUVnI-256k-1656618165052.mp3?raw=1",
      title: "David Guetta - Memories",
      tags: [""],
    },

  ];
  const colors = `html {
        --playerBackground: #ffa400;
        --titleColor: #ffffff; 
        --timeColor: #ffffff;
        --progressSlider: #080042;
        --progressUsed: #ffffff;
        --progressLeft: #ffffff;
        --volumeSlider: #080042;
        --volumeUsed: #ffffff;
        --volumeLeft:  #ffffff;
        --playlistBackground: #ffa400;
        --playlistText: #000000;
        --playlistBackgroundHoverActive:  #18191f;
        --playlistTextHoverActive: #ffffff;
        --searchBackground: #18191f;
        --searchText: #ffffff;
        --searchPlaceHolder: #ffffff;
    }`;


  return (
    <>
      <div className="show">
        <div class="section-fluid-main">
          <div class="section">
            <div class="info-wrap mob-margin">
              <p class="title-up">{esdeveniment.place}</p>
              <h2>{esdeveniment.name}</h2>
              <h4>{esdeveniment.price} €<span></span></h4>
              <div class="section-fluid">
                <input class="desc-btn" type="radio" id="desc-2" name="desc-btn" checked />
                <label for="desc-2">Details</label>
                <input class="desc-btn" type="radio" id="desc-1" name="desc-btn" />
                <label for="desc-1">Description</label>

                <div class="section-fluid desc-sec accor-1">
                  <p>{esdeveniment.description}</p>
                </div>
                <div class="section-fluid desc-sec accor-2">
                  <div class="section-inline">
                    <p>DJ: <span>{artist.name}</span></p>
                    <p><span>{esdeveniment.capacity}</span> Pers MÁX</p>
                    <p>Data Inici: <span>{esdeveniment.start_date}</span></p>
                    <p>Data Final: <span>{esdeveniment.end_date}</span></p>
                  </div>
                </div>
              </div>
            </div>
                        {authToken && (
              <div class="info-wrap">
                <a href={esdeveniment.stripe} target='_blank' class="btn">
                  <span class="icon">🛒</span> Comprar Entrades
                </a>
              </div>
            )}

            {!authToken && (
              <div class="info-wrap">
                <Link to="/login" class="btn">
                  <span class="icon">🛒</span> Comprar Entrades
                </Link>
              </div>
            )}

              {imageExists ? (
                <img className="imagen-show"src={esdeveniment.filepath} alt="Event" />
              ) : (
                <img className="imagen-show"
                  src="https://ined21.com/wp-content/uploads/2020/11/Eventos-musicales.jpg"
                  alt="Alternative Event"
                />
              )}
          </div>
        </div>
        <div className="segunda-parte">
          <h1>Llista reprodcucció de les cançons més escoltades</h1>
          <br></br>
          <div className="jordi">
          <Player className="reproductor"
            trackList={tracks}
            includeTags={false}
            includeSearch={true}
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