import React from 'react'
import {DefaultPlayer as video} from 'react-html5video'
import introVideo from './Short Film For Save Water.mp4'

export default function Vdo() {
    let isPlaying=true;
const OnClick=()=>{

    let video=document.getElementById('video')
    if(isPlaying){
        isPlaying=false;
        video.pause()
    }else{
        video.play();
        isPlaying=true;
    }
    
}
  return (
    <>
    
     <button className='videoBtn' onClick={OnClick}>START/STOP</button>
   
     <div className='newDiv'>
    <div >
       <video id='video' width="750" height="500" autoPlay loop >
      <source src={introVideo} type="video/mp4"/>
     </video>
     </div>
    <div className='newName'>
        <h1 className='savewater2'>Save water, Our aim is to save every drop of water for mankind with the help of technologies....There are many families who dont get proper drinking water </h1>
        <h1 className='savewater'>SAVE WATER SAVE LIFE</h1>
    </div>
   
    </div>
    </>
  )
}
