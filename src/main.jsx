import React from 'react'
import ReactDOM from 'react-dom/client'
import NavImg from './img-presentation/NavImg'
import './index.css'
import NavBarFirst from './NavBar-1/NavBarFirst'
import NavBarSecond from './NavBar-2/NavBarSecond'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBarFirst />
    <NavBarSecond />
    <NavImg />
  </React.StrictMode>,
)
