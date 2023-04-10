import '../img-presentation/NavImg.css'

const NavImg = () => {
  return (
    <div className='container'>
      <img className='img-header' src="/header2.jpg" alt="" />
      <div className='presentation-text'></div>
      <div className='center'>
        <h1 className='animate__animated animate__bounce'>Pedicure Clinico</h1>
        <p className='animate__animated animate__bounce'>Atendidos por su propietaria y experta
           en cuidado para los pies <span className='susy-name'>Susy Sanchez</span></p>
           <button className='btn-contact'>
            CONTACTAME
           </button>
        </div>
    </div>
  )
}

export default NavImg
