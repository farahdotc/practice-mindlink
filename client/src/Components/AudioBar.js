import React from 'react'
import AudioPlayer from 'react-modular-audio-player';

let playlist = [
  { src: "/music.mp3",
    title: "Song",
    artist: "Singer" },
  { src: "/moreMusic.mp3",
    title: "Another Song",
    artist: "Another Singer" }
];
const AudioBar = () => {
  let rearrangedPlayer = [
    {
      className: "tier-bottom",
      style: {marginTop: "4rem" },
      innerComponents: [
        // {
        //   type: "time",
        //   style: {width: "40vw"}
        // },
        {
          type: "seek",
          style: {width: "40vw", margin: "auto"
        }
        
          
        }
      ]
    },
    {
      className: "tier-top",
      style: {margin: "0rem 0.3rem 0.3rem 0.3rem"},
      innerComponents: [
        {
          type: "rewind",
          // style: {width: "fit-content"}
        },
        { 
          type: "play",
          // style: {width: "fit-content"}
        },
        {
          type: "forward",
          // style: {width: "fit-content"}
        },
        {
          type: "volume",
          style: {width: "30vw"}
        }
      ]
    }
  ]
  return (
    <div>
      
      <AudioPlayer
  rearrange={rearrangedPlayer}
  audioFiles={playlist}
  playerWidth="100vw"
  fontSize="1.5rem"
  iconSize="1.5rem"
  playIcon="https://cdn0.iconfinder.com/data/icons/large-black-icons/512/Play_next_music_movie_film.png"
/>
    </div>
  )
}

export default AudioBar




