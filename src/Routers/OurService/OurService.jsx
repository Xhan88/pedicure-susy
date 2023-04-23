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
    <div>
      <h3>En Pedicure Clinico Susy Sanchez Les Ofrecemos</h3>
      <ul>
        <li>pedicure clinico</li>
        <li>aplicacion de color </li>
        <li>Gelish</li>
        <li>Corte de Uñas </li>
        <li>Pedicure Clinico Completo</li>
      </ul>
      
    </div>
    }
    </>
  )
}

export default OurService
