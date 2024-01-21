import Body from "./components/Body";
import Header from "./components/Header";
import React from 'react'
import {HashRouter,Routes,Route} from "react-router-dom";
import Rectank from './components/Rectank';
import Vdo from './components/Vdo'


function App() {
  return (
 <>
 <Header/>
 <HashRouter >
      <Routes>
        <Route path="/rect" element={<Rectank/>}/>
        <Route path="/" element={<Body/>}/>
        <Route path="/use" element={<Vdo/>}/>
      </Routes>
    </HashRouter>
 </>
  );
}

export default App;
