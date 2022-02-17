import { Fragment } from "react";
import CardTetris from "../../components/proyectos_components/tetris_proyect_components/card_tetris";
import './style.css';
import Stack from '@mui/material/Stack';

export default function Proyectos(){

    return(
 
           <Stack sx={{ bgcolor : 'secondary.main' }}>
            <div className="cardContainer">
                  
                <div className="cardContainer1">
                        
                        <CardTetris></CardTetris>
                        <CardTetris></CardTetris>
                        
                </div>

                <div className="cardContainer2">
                        <CardTetris></CardTetris>
                        <CardTetris></CardTetris>
                </div>

            </div>
            </Stack>
    )
}