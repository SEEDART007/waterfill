import React from 'react'
import sound from './weeb-alert-182941.mp3'

export default function Rectank() {
  
  const audio=new Audio(sound)
   
  const handleOnClick=()=>{
    let volume1=document.getElementById('volume1')
    let volumeFinal=volume1.value;
    if(volumeFinal>0){
      let flow=document.getElementById('inFlow');
      let inFlow=flow.value;
      let time=Math.round(volumeFinal/inFlow);
      let renderTime=document.getElementById('calcTime')
      renderTime.innerHTML=time;

    }else{
      let hg=document.getElementById('height')
      let height=hg.value;
      let wd=document.getElementById('width')
      let width=wd.value;
      let lg=document.getElementById('width')
      let length=wd.value;
      let volume=length*width*height;
      let flow=document.getElementById('inFlow');
      let inFlow=flow.value;
      let time=Math.round(volume/inFlow);
      let renderTime=document.getElementById('calcTime')
      renderTime.innerHTML=time;
  }}
  const startTimer=()=>{
      let renderTime=document.getElementById('calcTime')
      let initailTime=renderTime.innerHTML;
      let timeSetting= Math.round(initailTime)
    const interval=  setInterval(()=>{
         timeSetting--;
          renderTime.innerHTML=timeSetting;
          if(timeSetting===0){
            var x = document.getElementsByTagName("BODY")[0];
            x.style.backgroundColor = "red";
              clearInterval(interval)
              audio.play();
              renderTime.innerHTML="water filled !!times up";

          }
      },1000)
    
  }
  const handleOnChange=()=>{
    let newDisp=document.getElementById('volClass')
    newDisp.style.display='none';
  }
  const handleOnChange2=()=>{
    let newDisp=document.getElementById('newId')
    newDisp.style.display='none';
  }
  const handleAlarm=()=>{
    audio.pause();
    var x = document.getElementsByTagName("BODY")[0];
    x.style.backgroundColor = "rgba(170, 234, 22, 0.936)";
  }


  return (
    <div>
      <>
    <h1>For Rectangular Tanks</h1>
    <div className='parent'>
      <div className='hedi'>
        <div id='newId'>
      <span className='heigth'>Height Of Tank(in m):</span><input onChange={handleOnChange} className='diameter1'  id='height' placeholder='Enter height' type='number'/><br/>
      <span className='width'>width Of Tank(in m):</span><input onChange={handleOnChange} className='diameter1' id='width' placeholder='Enter width' type='number'/><br/>
      <span className='length'>length Of Tank(in m):</span><input onChange={handleOnChange} className='diameter1' id='length' placeholder='Enter length' type='number'/><br/>
      </div>
      <button className='alarmstart1' onClick={startTimer}>Start The Timer</button>
      <button className='alarmbtn' onClick={handleAlarm}>stop alarm</button>
      <h1>OR</h1>
      <div>
      <div id='volClass'>
      <span className='volume'>Volume:</span>
      <input onChange={handleOnChange2} id='volume1' className='volume1' placeholder='Enter Vol.' type='number'/>
      </div>
     
      </div>
      </div>
      <span className='para2'>Enter InFlow Rate(in secs)</span><input className='para2' id='inFlow' placeholder='Enter inFlow' type='number'/>
      <button className='btn1' onClick={handleOnClick}>CLICK</button><br/>
      <b className='timer1' id='calcTime'>this is timer</b>
    </div>
      
     
      </>
    </div>
  )
}
