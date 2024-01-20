import React from 'react'
import Design from './Design.css'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
export default function Header() {
 
  return (
    <div> 
      <div className='Header'>    
      <a className='child'  href='/rect'>rectangular</a>
      <a id='round1' className='child' href='/'>rounded</a>   
      </div>
      <a id='round5' className='child' href='/use'>Why?</a>
    </div>
  )
}
