import '../NavBar-1/NavBarFirst.css'
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { grey } from '@mui/material/colors';

const NavBarFirst = () => {
  return (
    <div className='nav-bar-first' >
     
     <section className="phone-number-mail">
       <p> <LocalPhoneIcon /> +52 378 142 6360</p>
       
       <p> <EmailIcon />  susysanchez851@gmail.com</p>
     </section>
      
      <section className="social-networks">
        
      <FacebookIcon  style={{ color: grey[700] }} />
      <InstagramIcon style={{ color: grey[700] }}/>
      <WhatsAppIcon style={{ color: grey[700] }}/>
      </section>
      
      
      
     
    </div>
  )
}

export default NavBarFirst;
