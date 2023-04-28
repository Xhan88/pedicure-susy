import { Grid } from "@mui/material";
import 'animate.css';
import '../section-1/SecctionOne.css'


const SecctionOne = () => {
  return (
   <Grid container spacing={2}> 
   <Grid item xs={13}>
    <div className="grid-container">
      <div data-aos="fade-down">
      <h4 style={{marginLeft: 80}}>Sobre el cuiado de los pies</h4>
      <h1 style={{marginLeft: 80}}>La mejor <span className='spams-color'>atencion y cuidado para los pies</span></h1>
      <p >
        Es acudiendo con un Pedicurista experto en el tratamiento de los pies,
      Además de limpiar tus pies,
       un pedicure clínico ayuda a detectar patologías como hongos,
        micosis, uñas encarnadas, pie de atleta, deformidades, 
        fascitis plantar y callosidades debido a trastornos de la biomecánica del pie.
           </p>
           <button className='button-more-imformation'>Conoce mas</button>
           </div>
            <div>
              <img className="img-seccion" src="/pies-verano.jpeg" alt="" />
            </div>
    </div>
    </Grid>
    </Grid>
  )
}

export default SecctionOne
