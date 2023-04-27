import '../Footer/Footer.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


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
        <a className='facebook' target='_blank' href='https://www.facebook.com/susy.sanchez.7923'  > 
              <FacebookIcon className='iconFaceboock'  />
              </a>
            <a target='_blank' href="https://www.instagram.com/susy.sanchez.7923/">
              <InstagramIcon className='instaIcon'/>
              </a>
            <a target='_blank' href="https://api.whatsapp.com/send?phone=3781151949&text=%22Hola%20Susy%20estoy%20interesad@%20en%20tus%20servicios%20de%20pedicurista%22">
              <WhatsAppIcon className='whatsIcon'/>
              </a> 
      </div>
    </div>
    
  )
}

export default Footer
