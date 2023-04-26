import { useEffect, useState } from 'react'
import Loading from '../../Loading/Loading';
import '../OurService/OurService.css'

const OurService = () => {
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },500)
  })

  return (
    <>
    { loading ?
       <Loading /> :
    <div className='service-pedicure'>
      <h3>En Pedicure Clinico Susy Sanchez Les Ofrecemos</h3>
      <ul>
        <li>pedicure Spa</li>
        <li>Masaje Terapeutico</li>
        <li>Limar cayocidades</li>
        <li>Reparar uñas enterradas </li>
        <li>Tratamiento de la inicomicosis</li>
        <li>Gelish en uñas</li>
      </ul>

      <img src="https://firebasestorage.googleapis.com/v0/b/pedicure-susy.appspot.com/o/pictures-feet%2Fpies-service.png?alt=media&token=daf68914-4896-48dd-b030-17ac4e7b0390" alt="" />
      
    </div>
    }
    </>
  )
}

export default OurService
