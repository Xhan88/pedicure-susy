import { useEffect, useState } from 'react'
import '../AboutMe/AboutMe.css'
import Loading from '../../Loading/Loading'

const AboutMe = () => {
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
         
         
    <div className='aboutMe'>
        
      <div className='text-about-me'>
        <span className='decoration'>Soy una mujer emprendedora, con fuertes habilidades en Pedicure Clinico</span>
        <p>
        Con una tenacidad inquebrantable amor a mi familia y a Dios, creo en mi misma y en mis capacidades, soy una mujer emprendedora no para competir con otras sino para sacar la mejor vercion de mi.</p>
      </div>

      <img className='susy-pick' src="https://firebasestorage.googleapis.com/v0/b/pedicure-susy.appspot.com/o/pictures-feet%2Fsusy-description_preview_rev_1.png?alt=media&token=12514974-1e1f-40a8-806f-839fd9acc71b" alt="" />
 
    </div>
         }   
    </>
  )
       
}


export default AboutMe
