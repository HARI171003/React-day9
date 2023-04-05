import React from 'react'
import Home from './Component/Home';
import NavBar from './Component/Navbar';
import Singers from './Component/Singers';
import Albums from './Component/Albums';

import { Route,Routes } from 'react-router-dom';


export default function App() {
  return (
    <> 
      <div>
      <NavBar/>
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/singers' element={<Singers />}></Route>
            <Route path='/albums' element={<Albums />}></Route>
        </Routes>
      </div>
    </>
  )
}