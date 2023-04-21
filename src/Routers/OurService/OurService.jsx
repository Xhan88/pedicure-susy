import { useEffect, useState } from 'react'
import Loading from '../../Loading/Loading';
import '../OurService/OurService.css'

const OurService = () => {
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },1000)
  })

  return (
    <>
    { loading ?
       <Loading /> :
    <div>
      
      <h1>Nuestros servicios</h1>
      
    </div>
    }
    </>
  )
}

export default OurService
