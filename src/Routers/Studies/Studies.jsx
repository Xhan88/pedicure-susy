import { useEffect, useState } from 'react'
import Loading from '../../Loading/Loading';
import '../Studies/Studies.css'

const Studies = () => {
  const [ loading, setLoadin ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadin(false)
    },500)
  })

        return (
          <>
            { loading ? 
              <Loading /> :
                
                <div className='studies-content'>
                  <p><span className='decoration'>
                    "Comence mis estudios hace 10 años</span> de manera autodidacta con practicas en amigos y familiares
                    con una fuerte habilidad de investigacion y de propia formacion logre desarrollar conocimentos y habilidades en 
                    el cuidado y atencion de los pies.
                    Posteriormente tome un curso de Pedicure Clinico en la Academia Araceli en mi natal Tepatitlan de Morelos Jalisco,
                    consiguiendo mi diploma con honores y buenas practicas. 
                    Actualmente cuento con una cartera de clientes muy satisfechos por el cuidado, tratamiento y atencion que les eh brindado a sus pies.
                  </p>
                     <img src="https://firebasestorage.googleapis.com/v0/b/pedicure-susy.appspot.com/o/pictures-feet%2Facademia.webp?alt=media&token=8d5af8ea-71a7-4bc1-b36c-308ad6b3aecb" alt="" />
                </div>
            }
          </>
        )
      }

export default Studies
