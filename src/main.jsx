import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import FinalSection from './FinalSection/FinalSection'
import { initFirestoreApp } from './firestore/config'
import Footer from './Footer/Footer'
import AutoPlaySwipeableViews from './Gallery/AutoPlaySwipeableViews'
import NavImg from './img-presentation/NavImg'
import './index.css'
import NavBarFirst from './NavBar-1/NavBarFirst'
import NavBarSecond from './NavBar-2/NavBarSecond'
import SecctionOne from './section-1/SecctionOne'
import SectionTwo from './section-2/SectionTwo'
import SectionThree from './section-3/SectionThree'

// initFirestoreApp()


ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <>
    <NavBarFirst />
    <NavBarSecond />
    <NavImg />
    <SecctionOne />
    <SectionTwo />
    <SectionThree />
    <AutoPlaySwipeableViews />
    <FinalSection />
    <Footer />
  </>,
  </BrowserRouter>
)
