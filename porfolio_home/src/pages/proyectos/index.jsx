import CardTetris from "../../components/proyectos_components/tetris_proyect_components/card_tetris";
import './style.css';
import Stack from '@mui/material/Stack';
import MoodIcon from '@mui/icons-material/Mood';




export default function Proyectos(){

    return(
 
           <Stack sx={{ gap:'1rem', pt:'3rem'}}>
  
                  
                        {/* <div className='proyectos_title' >  */}
                        <Stack sx={{ borderRadius:'25px', pt:'1rem', pb:'1rem', pl:'1rem',pr:'1rem', bgcolor : 'secondary.main' }}>
                        <p className="title-top"> <MoodIcon sx={{ fontSize:'3rem' }} /> HOLA SOY NILTON MEDINA SAYAN</p>
                        <p> y aqui te presento algunos de mismo proyectos </p>
                        <p> para que sepas cuales son algunas de mis habilidades </p>
                        </Stack>
                          

                        {/* <div className="cardContainer1">
                                
                                <CardTetris></CardTetris>
                                <CardTetris></CardTetris>
                                
                        </div>

                        <div className="cardContainer2">
                                <CardTetris></CardTetris>
                                <CardTetris></CardTetris>
                        </div> */}


                        {/* <div className="proyects_container"> */}
                        
                        <Stack sx={{ justifyContent:'center', borderRadius:'25px', pt:'1rem', pb:'1rem', pl:'1rem',pr:'1rem', bgcolor : 'secondary.main' }}>
                                <CardTetris/>
                        </Stack> 


                        <Stack sx={{ borderRadius:'25px', pt:'1rem', pb:'1rem', pl:'1rem',pr:'1rem', bgcolor : 'secondary.main' }}>             
                                <CardTetris/>
                        </Stack>
                        

                        <Stack sx={{ borderRadius:'25px', pt:'1rem', pb:'1rem', pl:'1rem',pr:'1rem', bgcolor : 'secondary.main' }}>
                                <CardTetris/>
                        </Stack>


                        <Stack sx={{ borderRadius:'25px', pt:'1rem', pb:'1rem', pl:'1rem',pr:'1rem', bgcolor : 'secondary.main' }}>
                                <CardTetris/>
                        </Stack>


                        {/* </div> */}

            </Stack>
            
    )
}