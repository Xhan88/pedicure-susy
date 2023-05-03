import { NavLink } from 'react-router-dom'
import '../NavBar-2/NavBarSecond.css'
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { useState } from 'react';
// import Hamburge from '../Hamburge';

const NavBarSecond = () => {
  const [ menu, setMenu ] = useState(false);
  const toggleMenu = () => {
    setMenu( !menu )
  }

  return (
    <div className='second-navbar'>
      
      <button onClick={ toggleMenu }>
        {/* <Hamburge className='despl-button'/> */}
        <ViewHeadlineIcon className='despl-button'/>
      </button>
      <nav className={ `init-nav  ${ menu ? 'is-Active' : ''}` }>
      

      <ol className='list-navbar'>
      <NavLink to='/'>
      <img className="img-logo" src="/logo-susy.jpeg" alt="" />
      </NavLink>


      <NavLink to='/aboutMe'>
        <li>Susy Sanchez</li>
      </NavLink>

      <NavLink to='studies'>
        <li>Estudios</li>
        </NavLink>

        <NavLink to='/OurService'>
        <li>Nuestros servicios</li>
        </NavLink>

        <NavLink to='contact'>
        <li>Contactanos</li>
        </NavLink>
      </ol>
      </nav>
    </div>
  )
}

export default NavBarSecond
