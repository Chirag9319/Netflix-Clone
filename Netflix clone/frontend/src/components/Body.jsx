import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from './Page1';
import Login from './Login';
import Browse from './Browse';
import SearchMovie from './SearchMovie';
const Body = () => {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
            <Route path="/" element={<Page1/>}/>
            <Route path="/signin" element={<Login/>}/>
            <Route path="/browse" element={<Browse/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Body
