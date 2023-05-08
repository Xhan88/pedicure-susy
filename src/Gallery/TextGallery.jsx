import React from 'react'
import '../Gallery/TextGallery.css'

const TextGallery = () => {
  return (
    <div className='gallery-text'>
      <h1><span className='decoration'>"</span>Cada vez son mas los clientes satisfechos</h1>
      <p>
        Que se suman a un <span className='decoration2'>Pedicure Clinico</span>  y quedan satisfechos, 
        Dia a dia exponemos a nuestros pies a una gran carga, ya sea nuestro calzado un poco apretado, practica de deporte de alto impacto, largas caminatas, jornadas extensas de trabajo de pie y en el transporte público, por ello mantener y mejorar el estado de salud de nuestros pies es sumamente beneficioso, adicional a la sensación de bienestar y de brindarle una barrera contra infecciones. 
      </p>
      <hr style={{marginTop: 50, marginLeft: -550 }}/>
    </div>
  )
}

export default TextGallery
