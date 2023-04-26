import '../NavBar-1/NavBarFirst.css'
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { blue, grey, red } from '@mui/material/colors';

const NavBarFirst = () => {
  return (
    <div className='nav-bar-first' >
     
     <section className="phone-number-mail">
       <p> <LocalPhoneIcon /> +52 378 142 6360</p>
       
       <p className='email'> <EmailIcon />  susysanchez851@gmail.com</p>
     </section>
      
      <section className="social-networks">
            <a className='facebook' target='_blank' href='https://www.facebook.com/susy.sanchez.7923'  > 
              <FacebookIcon className='iconFaceboock'  />
              </a>
            <a target='_blank' href="https://www.instagram.com/susy.sanchez.7923/">
              <InstagramIcon className='instaIcon'/>
              </a>
            <a target='_blank' href="https://api.whatsapp.com/send?phone=3781151949&text=%22Hola%20Susy%20estoy%20interesad@%20en%20tus%20servicios%20de%20pedicurista%22">
              <WhatsAppIcon className='whatsIcon'/>
              </a>
          
      </section>    
    </div>
  )
}

export default NavBarFirst;
