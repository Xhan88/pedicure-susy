import { Link, NavLink } from 'react-router-dom'
import '../NavBar-2/NavBarSecond.css'
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';

const NavBarSecond = () => {
  return (
    <div className='second-navbar'>
      <button>
        <ViewHeadlineIcon className='despl-button'/>
      </button>
      <NavLink to='/'>
      <img className="img-logo" src="/logo-susy.jpeg" alt="" />
      </NavLink>

      <ol className='list-navbar'>

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
    </div>
  )
}

export default NavBarSecond
