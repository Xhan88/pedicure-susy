import { useEffect, useState } from 'react'
import Loading from '../../Loading/Loading';
import '../OurService/OurService.css'
import Cards from './cards/Cards';

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
          <div style={{
                marginLeft: 110,
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                  <Cards title='Pedicure Clinico'/>
                  <Cards title='Masaje Terapeutico'/>
                  <Cards title='Limar cayocidades'/>
                  <Cards title='Reparar uñas enterradas'/>
                  <Cards title='Tratamiento de la onicomicosis'/>
                  <Cards title='Gelish en uñas'/>
            
          </div>

          
        </div>
        }
    </>
  )
}

export default OurService
