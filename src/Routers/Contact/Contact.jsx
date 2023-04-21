import { useEffect, useState } from 'react';
import Loading from '../../Loading/Loading';
import '../Contact/Contact.css'

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },1000)
  })
  
  return (
    <>
    {loading ? 
         <Loading /> :
        <div>
          <h1>Contact</h1>
        </div>
    }
      </>
    )   
  }

export default Contact
