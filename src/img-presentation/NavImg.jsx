import '../img-presentation/NavImg.css'

const NavImg = () => {
  return (
    <div className='container'>
      <img className='img-header' src="/header2.jpg" alt="" />
      <div className='presentation-text'></div>
      <div className='center'>
        <h1>Pedicure Clinico</h1>
        <p>Atendidos por su propietaria y experta
           en cuidado para los pies <spam className='susy-name'>Susy Sanchez</spam></p>
           <button className='btn-contact'>
            CONTACTAME
           </button>
        </div>
    </div>
  )
}

export default NavImg
