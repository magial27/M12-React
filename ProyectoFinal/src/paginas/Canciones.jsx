import React from 'react'
import './Canciones.css'
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";

function Musica() {
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
    {
      url: "https://dl.dropboxusercontent.com/s/l4zoyxuqdhitrzq/onlymp3.to%20-%20Martin%20Garrix%20-%20Animals%20%28Official%20Video%29-gCYcHz2k5x0-256k-1654105383032.mp3?raw=1",
      title: "Martin Garrix - Animals",
      tags: [""],
    },
    {
      url: "https://dl.dropboxusercontent.com/s/l1gmog24ffop72f/onlymp3.to%20-%20Martin%20Garrix%20feat.%20Bonn%20-%20High%20On%20Life%20%28Official%20Video%29-Lpjcm1F8tY8-256k-1656793780744.mp3?raw=1",
      title: "Martin Garrix - High on Life",
      tags: [""],
    },
    {
      url: "https://dl.dropboxusercontent.com/s/kuibbjpfcg6muih/onlymp3.to%20-%20Oliver%20Heldens%20-%20Aquarius%20%28Official%20Audio%29-WK4F9LbT6i0-256k-1659975254238.mp3?raw=1",
      title: "Oliver Heldens - Aquarius",
      tags: [""],
    },
    {
      url: "https://dl.dropboxusercontent.com/s/oxd8ltihp0wqezc/onlymp3.to%20-%20Riton%20x%20Oliver%20Heldens%20-%20Turn%20Me%20On%20ft.%20Vula-cdNgo-E95f0-256k-1656429993472.mp3?raw=1",
      title: "Oliver Heldens - Turn Me On",
      tags: [""],
    },
    {
      url: "https://dl.dropboxusercontent.com/s/b2eym74sxlj8kkw/onlymp3.to%20-%20SKRILLEX%20-%20Bangarang%20feat.%20Sirah%20%5BOfficial%20Music%20Video%5D-YJVmu6yttiw-256k-1658781816585.mp3?raw=1",
      title: "Skrillex - Bangarang",
      tags: [""],
    },
    {
      url: "https://dl.dropboxusercontent.com/s/frpvuurti7xy8sm/onlymp3.to%20-%20Skrillex%20%26%20Damian%20Jr.%20Gong%20Marley%20-%20Make%20It%20Bun%20Dem%20%5BOFFICIAL%20VIDEO%5D-BGpzGu9Yp6Y-256k-1654803968567.mp3?raw=1",
      title: "Skrillex - Make It Bum Dem",
      tags: [""],
    },
    {
      url: "https://dl.dropboxusercontent.com/s/41w06gkuw8wrmhz/onlymp3.to%20-%20Skrillex%20%26%20Rick%20Ross%20-%20Purple%20Lamborghini%20%5BOfficial%20Video%5D-ZkqyIoYAXV8-256k-1656796579460.mp3?raw=1",
      title: "Skrillex - Purple Lamborghini",
      tags: [""],
    },
    {
      url: "https://dl.dropboxusercontent.com/s/15eo2ytemwptl7f/onlymp3.to%20-%20Space%20Diver-fE28T8u0GjU-256k-1656854715334.mp3?raw=1",
      title: "Boris Brejcha - Space Diver",
      tags: [""],
    },

  ];
  const colors = `html {
    --tagsBackground: #9440f3;
    --tagsText: #ffffff;
    --tagsBackgroundHoverActive: #2cc0a0;
    --tagsTextHoverActive: #ffffff;
    --searchBackground: #18191f;
    --searchText: #ffffff;
    --searchPlaceHolder: #ffffff;
    --playerBackground: #18191f;
    --titleColor: #ffffff; 
    --timeColor: #ffffff;
    --progressSlider: #9440f3;
    --progressUsed: #151616;
    --progressLeft: #151616;
    --volumeSlider: #9440f3;
    --volumeUsed: #151616;
    --volumeLeft:  #151616;
    --playlistBackground: #18191f;
    --playlistText: #575a77;
    --playlistBackgroundHoverActive:  #18191f;
    --playlistTextHoverActive: #ffffff;
    }`;
  return (
    <>
      <div className="fondo-canciones">
        <h1 className="titulo-canciones">Les cançons més escoltades</h1>
        <div className="reproductor">
          <Player
            trackList={tracks}
            includeTags={false}
            includeSearch={true}
            showPlaylist={true}
            autoPlayNextTrack={true}
            customColorScheme={colors}
          />
        </div>
      </div>
    </>
  )
}

export default Musica