import { useEffect, useState } from 'react';
import Footer from '../../Footer/Footer';
import Loading from '../../Loading/Loading';
import '../Contact/Contact.css'

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },500)
  })
  
  return (
    <>
    {loading ? 
         <Loading /> :
        <div>
          <Footer />
          <img 
            className='img-footer' 
            src="https://firebasestorage.googleapis.com/v0/b/pedicure-susy.appspot.com/o/pictures-feet%2Fpngwing.com.png?alt=media&token=2860392d-c9be-42d8-a6bd-1d4d518a9756" alt="" />
        </div>
    }
      </>
    )   
  }

export default Contact
