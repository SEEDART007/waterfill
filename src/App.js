import Body from "./components/Body";
import Header from "./components/Header";
import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Rectank from './components/Rectank';
import Vdo from './components/Vdo'


function App() {
  return (
 <>
 <Header/>
 <BrowserRouter basename="/waterfill">
      <Routes>
        <Route path="/waterfill/rect" element={<Rectank/>}/>
        <Route path="/" element={<Body/>}/>
        <Route path="/waterfill/use" element={<Vdo/>}/>
      </Routes>
    </BrowserRouter>
 </>
  );
}

export default App;
