import React from 'react'
import Design from './Design.css'
import { Link } from 'react-router-dom';
import {BrowserRouter,Routes,Route} from "react-router-dom";
export default function Header() {
 
  return (
    <div> 
      <div className='Header'>    
      <a className='child'  href='/waterfill/rect'>rectangular</a>
      <a id='round1' className='child' href='/'>rounded</a>   
      </div>
      <a id='round5' className='child' href='/waterfill/use'>Why?</a>
    </div>
  )
}
