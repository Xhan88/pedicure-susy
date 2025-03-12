// import FinalSection from '../FinalSection/FinalSection'
// import Footer from '../Footer/Footer'
// import SecctionOne from '../section-1/SecctionOne'
// import SectionTwo from '../section-2/SectionTwo'
// import SectionThree from '../section-3/SectionThree'
// import AutoPlaySwipeableViews from '../Gallery/AutoPlaySwipeableViews'
// import AOS from "aos";
// import '../img-presentation/NavImg.css'
// import { NavLink } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import Loading from '../Loading/Loading'

// const NavImg = () => {
//   const [loading, setLoading ] = useState(true);
//   useEffect(() => {
//     setTimeout(() =>{
//       setLoading(false)
//     },500)
//   })
//   return (
//     <>
//     {loading ? 
//     <Loading /> :
//     AOS.init(
//     <div className='container'>
//        <img className='img-header' src="https://firebasestorage.googleapis.com/v0/b/pedicure-susy.appspot.com/o/pictures-feet%2Fheader.jpg?alt=media&token=ed9a66be-8713-466c-87ea-9952f20c4d53" alt="" loading='lazy'/>
//         <div className='presentation-text' data-aos="fade-down">
//          <div className='center' >
//           <h1>Pedicure Clinico</h1>
//            <p>Atendidos por su propietaria y experta
//             en cuidado para los pies <span className='susy-name'>Susy Sanchez</span></p>
 
//            <NavLink to='/contact'>
//              <button className='btn-contact'>
//             CONTACTAME
//             </button>
//            </NavLink>
           
//         </div>
//         </div>
//                             <SecctionOne />
//                             <SectionTwo />
//                             <SectionThree />
//                             <AutoPlaySwipeableViews />
//                             <FinalSection />
//                             <Footer />

//     </div>
//     )
//     } 
//     </>
//   )
// }

// export default NavImg


import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS

import FinalSection from "../FinalSection/FinalSection";
import Footer from "../Footer/Footer";
import SecctionOne from "../section-1/SecctionOne";
import SectionTwo from "../section-2/SectionTwo";
import SectionThree from "../section-3/SectionThree";
import AutoPlaySwipeableViews from "../Gallery/AutoPlaySwipeableViews";
import "../img-presentation/NavImg.css";
import Loading from "../Loading/Loading";

const NavImg = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en ms
      easing: "ease-in-out", // Tipo de animación
      once: true, // La animación ocurre solo una vez
    });
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <img
            className="img-header"
            src="https://firebasestorage.googleapis.com/v0/b/pedicure-susy.appspot.com/o/pictures-feet%2Fheader.jpg?alt=media&token=ed9a66be-8713-466c-87ea-9952f20c4d53"
            alt=""
            loading="lazy"
          />
          <div className="presentation-text" data-aos="fade-down">
            <div className="center">
              <h1>Pedicure Clínico</h1>
              <p>
                Atendidos por su propietaria y experta en cuidado para los pies{" "}
                <span className="susy-name">Susy Sánchez</span>
              </p>

              <NavLink to="/contact">
                <button className="btn-contact">CONTACTAME</button>
              </NavLink>
            </div>
          </div>
          <SecctionOne />
          <SectionTwo />
          <SectionThree />
          <AutoPlaySwipeableViews />
          <FinalSection />
          <Footer />
        </div>
      )}
    </>
  );
};

export default NavImg;
