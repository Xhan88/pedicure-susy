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
        <span className='decoration'>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, consectetur?</span>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit iure aliquid facere autem architecto? Animi, accusantium! Sequi consequatur modi repellat dicta minus exercitationem iste numquam harum repellendus ducimus, qui sint accusamus sed velit itaque vel placeat necessitatibus doloremque eum autem ad voluptatum eveniet! Cumque autem doloribus molestiae hic, possimus assumenda.</p>
      </div>

      <img className='susy-pick' src="https://firebasestorage.googleapis.com/v0/b/pedicure-susy.appspot.com/o/pictures-feet%2Fsusy-description_preview_rev_1.png?alt=media&token=12514974-1e1f-40a8-806f-839fd9acc71b" alt="" />
 
    </div>
         }   
    </>
  )
       
}


export default AboutMe
