import '../Footer/Footer.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Footer = () => {
  return (
    <div className='footer-style'>
      <ul>
      
        <h2>CONTACTANOS</h2>
        <li><LocationOnIcon />  Circuito Presidentes #229. col. Los Adobes Tepatitlan Jalisco</li>
        <li><EmailIcon />  correo@correo.com</li>
        <li><LocalPhoneIcon />  +52 378 115 1949</li>
 
      </ul>

      <div style={{marginLeft: 100}}>
        <h2>Horario</h2>
        <h3>De lunes a viernes de 9:00am a 6:00pm 
          previa cita
        </h3>
        <p>Domingos cerrado</p>
      </div>
    </div>
    
  )
}

export default Footer
