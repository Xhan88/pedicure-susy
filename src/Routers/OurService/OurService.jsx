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
                marginLeft: 10,
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                  <Cards 
                        title='Pedicure Clinico'
                        text='Un pedicure clínico además de limpiar tus pies de una manera profunda ayuda a detectar patologías o problemas tales como micosis, hongos, uñas encarnadas, pie de atleta, deformidades, callosidades y fascitis plantar debido a alteraciones de la biomecánica del pie.'
                        img='https://firebasestorage.googleapis.com/v0/b/pedicure-susy.appspot.com/o/pictures-feet%2Fcard-1.jpeg?alt=media&token=8cfb7b43-4f6a-40a9-a165-27f723a83dc5'
                  />
                  <Cards 
                        title='Masaje Terapeutico'
                        text='Este masaje ayuda a terminar con las tensiones, aliviar dolores, reducir estrés y, sobre todo, restablecer el equilibrio general del cuerpo.'
                        img='https://firebasestorage.googleapis.com/v0/b/pedicure-susy.appspot.com/o/pictures-feet%2Fcard-2.jpeg?alt=media&token=51796dc9-5434-4452-878f-004e8b934d1c'
                  />
                  <Cards 
                        title='Limar cayocidades'
                        text='Para evitarlos debemos limar el callo una vez a la semana, rebajando su tamaño pero sin pasarnos. Se debes prestar especial atención a suavizar los bordes del callo para formar una suave transición con el resto de tu piel.'
                        img='https://firebasestorage.googleapis.com/v0/b/pedicure-susy.appspot.com/o/pictures-feet%2Fcard-3.webp?alt=media&token=8dd0f187-4cb2-4c55-8fd0-f0d07f9bde4b'
                  />
                  <Cards 
                        title='Reparar uñas enterradas'
                        text='El Pedicurista jalará la uña y cortará a lo largo del borde que está creciendo dentro de la piel. Se puede usar un producto químico para evitar que la uña vuelva a crecer en la misma área.'
                        img='https://firebasestorage.googleapis.com/v0/b/pedicure-susy.appspot.com/o/pictures-feet%2Fcard-4.jpeg?alt=media&token=77d8995f-3030-4d24-8521-4a1ecf12c7a2'
                  />
                  <Cards 
                        title='Tratamiento de la onicomicosis'
                        text='El tratamiento consiste en antimicóticos
                        Los tratamientos incluyen fármacos antimicóticos orales, crema o esmalte para uñas con medicamentos, o la extracción de la uña.'
                        img='https://firebasestorage.googleapis.com/v0/b/pedicure-susy.appspot.com/o/pictures-feet%2Fcard-5.jpeg?alt=media&token=48eb67b3-8ce8-44b8-bf1d-380a8c603121'
                  />
                  <Cards 
                        title='Gelish en uñas'
                        text='El gelish es un esmalte semipermanente para las uñas que no solo garantiza una larga durabilidad, sino que además ni se resquebraja ni se raya. El gelish es ideal para los que quieran lucir unas uñas perfectas durante semanas, ya que al actuar como un gel, mantiene su brillo intacto durante más de 20 días.'
                        img='https://firebasestorage.googleapis.com/v0/b/pedicure-susy.appspot.com/o/pictures-feet%2Fcard-6.jpeg?alt=media&token=6f41100d-0faf-45b9-950a-978ab38c1276'
                  />      
          </div>          
        </div>
        }
    </>
  )
}

export default OurService
