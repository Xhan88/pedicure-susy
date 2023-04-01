import { Grid } from "@mui/material";
import '../section-1/SecctionOne.css'

const SecctionOne = () => {
  return (
   <Grid container spacing={2}> 
   <Grid item xs={13}>
    <div className="grid-container">
      <div>
      <h4>Lorem ipsum dolor sit amet consectetur</h4>
      <h1>adipisicing elit. Iusto nisi amet accusamus perspiciatis,</h1>
      <p>
         adipisicing elit. Iusto nisi amet accusamus perspiciatis,
          molestiae placeat ullam! Possimus assumenda quibusdam tempora distinctio,
          eveniet exercitationem nam blanditiis ratione cumque 
          cum voluptates quas aspernatur fugiat aperiam officiis voluptate repudiandae, 
          rerum magni eligendi fuga amet.
           </p>
           </div>
            <div>
              <img className="img-seccion" src="/logo-susy.jpeg" alt="" />
            </div>
    </div>
    </Grid>
    </Grid>
  )
}

export default SecctionOne
