import { Link, NavLink } from 'react-router-dom'
import '../NavBar-2/NavBarSecond.css'

const NavBarSecond = () => {
  return (
    <div className='second-navbar'>
      <NavLink to='/'>
      <img className="img-logo" src="/logo-susy.jpeg" alt="" />
      </NavLink>

      <ol className='list-navbar'>

      <NavLink to='/aboutMe'>
        <li>Quienes somos</li>
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
