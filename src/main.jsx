import React from 'react'
import ReactDOM from 'react-dom/client'
import AutoPlaySwipeableViews from './Gallery/AutoPlaySwipeableViews'
import NavImg from './img-presentation/NavImg'
import './index.css'
import NavBarFirst from './NavBar-1/NavBarFirst'
import NavBarSecond from './NavBar-2/NavBarSecond'
import SecctionOne from './section-1/SecctionOne'
import SectionTwo from './section-2/SectionTwo'
import SectionThree from './section-3/SectionThree'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBarFirst />
    <NavBarSecond />
    <NavImg />
    <SecctionOne />
    <SectionTwo />
    <SectionThree />
    <AutoPlaySwipeableViews />
  </React.StrictMode>,
)
