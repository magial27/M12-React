import React from 'react'
import './Canciones.css'
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";

function Musica() {
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
      title: "Persistence",
      tags: ["dubstep"],
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
      title: "Late Night Drive",
      tags: ["dnb"],
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
      title: "Ismael",
      tags: ["dubstep"],
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
      title: "Isma",
      tags: ["dnb"],
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
      title: "LLL",
      tags: ["dubstep"],
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
      title: "ES",
      tags: ["dnb"],
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
      title: "MMMMM",
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
    </>
  )
}

export default Musica