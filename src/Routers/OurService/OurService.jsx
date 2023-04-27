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
                  <Cards 
                        title='Pedicure Clinico'
                        text='Un pedicure clínico además de limpiar tus pies de una manera profunda ayuda a detectar patologías o problemas tales como micosis, hongos, uñas encarnadas, pie de atleta, deformidades, callosidades y fascitis plantar debido a alteraciones de la biomecánica del pie.'
                  />
                  <Cards 
                        title='Masaje Terapeutico'
                        text='Este masaje ayuda a terminar con las tensiones, aliviar dolores, reducir estrés y, sobre todo, restablecer el equilibrio general del cuerpo.'
                  />
                  <Cards 
                        title='Limar cayocidades'
                        text='Para evitarlos debemos limar el callo una vez a la semana, rebajando su tamaño pero sin pasarnos. Se debes prestar especial atención a suavizar los bordes del callo para formar una suave transición con el resto de tu piel.'
                  />
                  <Cards 
                        title='Reparar uñas enterradas'
                        text='El Pedicurista jalará la uña y cortará a lo largo del borde que está creciendo dentro de la piel. Se puede usar un producto químico para evitar que la uña vuelva a crecer en la misma área.'
                  />
                  <Cards 
                        title='Tratamiento de la onicomicosis'
                        text='El tratamiento consiste en antimicóticos
                        Los tratamientos incluyen fármacos antimicóticos orales, crema o esmalte para uñas con medicamentos, o la extracción de la uña.'
                  />
                  <Cards 
                        title='Gelish en uñas'
                        text='El gelish es un esmalte semipermanente para las uñas que no solo garantiza una larga durabilidad, sino que además ni se resquebraja ni se raya. El gelish es ideal para los que quieran lucir unas uñas perfectas durante semanas, ya que al actuar como un gel, mantiene su brillo intacto durante más de 20 días.'
                  />
            
          </div>

          
        </div>
        }
    </>
  )
}

export default OurService
