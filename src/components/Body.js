import React from 'react'
import Design from './Design.css'
import sound from './weeb-alert-182941.mp3'

export default function Body() {
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
        let dia=document.getElementById('diameter')
        let diameter=dia.value;
        let radius=diameter/2;
        let volume=3.14*(radius)*(radius)*height;
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
    <>
    <h1>For Round Tanks</h1>
    <div className='parent'>
      <div className='hedi'>
        <div id='newId'>
      <span className='heigth'>Height Of Tank(in m):</span><input onChange={handleOnChange} className='heigth1'  id='height' placeholder='Enter height' type='number'/><br/>
      <span className='diameter'>Diameter Of Tank(in m):</span><input onChange={handleOnChange} className='diameter1' id='diameter' placeholder='Enter diameter' type='number'/><br/></div>
      <h1>OR</h1>
      <div id='volClass'>
      <span className='volume'>Volume:</span>
      <input onChange={handleOnChange2} id='volume1' className='volume1' placeholder='Enter Vol.' type='number'/>
      </div>
      </div>
      <span className='para2'>Enter InFlow Rate(in secs)</span><input className='para2' id='inFlow' placeholder='Enter inFlow' type='number'/>
      <button className='btn1' onClick={handleOnClick}>CLICK</button><br/>
    </div>
      <b className='timer' id='calcTime'>this is timer</b><button className='alarmbtn' onClick={handleAlarm}>stop alarm</button>
      <button className='alarmstart' onClick={startTimer}>Start The Timer</button>
     
      </>
  )
}
