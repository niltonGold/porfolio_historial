
import CardTetris from "../../components/proyectos_components/tetris_proyect_components/card_tetris";
import './style.css';
import Stack from '@mui/material/Stack';

export default function Proyectos(){

    return(
 
           <Stack sx={{ pt:'1rem', justifyContent: 'center', alignItems: 'center', bgcolor : 'secondary.main' }}>
  
                  
                <div className='proyectos_title' > PROYECTOS</div> 

                <div className="cardContainer1">
                        
                        <CardTetris></CardTetris>
                        <CardTetris></CardTetris>
                        
                </div>

                <div className="cardContainer2">
                        <CardTetris></CardTetris>
                        <CardTetris></CardTetris>
                </div>


            </Stack>
    )
}