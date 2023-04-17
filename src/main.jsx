import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavImg from './img-presentation/NavImg'
import './index.css'
import NavBarFirst from './NavBar-1/NavBarFirst'
import NavBarSecond from './NavBar-2/NavBarSecond'
import AboutMe from './Routers/AboutMe'
import Contact from './Routers/Contact'
import OurService from './Routers/OurService'
import Studies from './Routers/Studies'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <>
        <NavBarFirst />
        <NavBarSecond />
        <Routes>
        <Route path='aboutMe' element={<AboutMe />} />
        <Route path='studies' element={<Studies />} />
        <Route path='OurService' element={<OurService />} />
        <Route path='Contact' element={<Contact />} />
        
        <Route path='/' element={ <NavImg /> }/>                        
        </Routes>
    </>
  </BrowserRouter>
)
