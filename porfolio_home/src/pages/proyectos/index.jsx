
import './style.css';
import Stack from '@mui/material/Stack';
import MoodIcon from '@mui/icons-material/Mood';



import webResponsiveImagen1 from "../../components/imagenes/proyecto_webresponsiveanimada/cards_giratorios.jpg"
import webResponsiveImagen2 from "../../components/imagenes/proyecto_webresponsiveanimada/tablero_giratorio.jpg"
import webResponsiveImagen3 from "../../components/imagenes/proyecto_webresponsiveanimada/formulario_responsive.jpg"

import tetrisImagen1 from "../../components/imagenes/proyecto_tetris/tetris_pantalla_principal.jpg"
import tetrisImagen2 from "../../components/imagenes/proyecto_tetris/tetris_score.jpg"
import tetrisImagen3 from "../../components/imagenes/proyecto_tetris/tetris_gameOver.jpg"


import kanbanImagen1 from "../../components/imagenes/proyecto_kanban/kanban_columnas_tasks.jpg"
import kanbanImagen2 from "../../components/imagenes/proyecto_kanban/kanban_filtro.jpg"
import kanbanImagen3 from "../../components/imagenes/proyecto_kanban/kanban_dragAndDrop.jpg"

import weatherAppImagen1 from "../../components/imagenes/proyecto_weatherapp/weather_principal.jpg"
import weatherAppImagen2 from "../../components/imagenes/proyecto_weatherapp/weather_CiudadClima.jpg"
import weatherAppImagen3 from "../../components/imagenes/proyecto_weatherapp/weather_CelciusFarentheit.jpg"
import CardProyecto from '../../components/card_proyecto';





export default function Proyectos(){

        // PROYECTO 1 .- Informacion Card WebResposiveAnimada

                // Imagenes y Etiquetas de las Imagenes
                        const etiqueta1 = '1';
                        const imagen1 = webResponsiveImagen1;
                
                        const etiqueta2 = '2';
                        const imagen2 = webResponsiveImagen2;
                
                        const etiqueta3 = '3';
                        const imagen3 = webResponsiveImagen3;



                // Card Informacióntt
                        const cardTitulo = 'WebResponsiveAnimada';

                        const cardInfoLinea1 = '-1';
                        const cardInfoLinea2 = '-2';
                        const cardInfoLinea3 = '-3';
                        const cardInfoLinea4 = '-4';


                // Enlace al proyecto
                        const EnlaceAlProyecto = 'https://webresponsiveanimada.herokuapp.com/'
                        
       


    return(
 
           <Stack sx={{ gap:'1rem', pt:'3rem'}}>
  
                  
                        <Stack sx={{ borderRadius:'25px', pt:'1rem', pb:'1rem', pl:'1rem',pr:'1rem', bgcolor : 'secondary.main' }}>
                        <p className="title-top"> <MoodIcon sx={{ fontSize:'3rem' }} /> HOLA SOY NILTON MEDINA SAYAN</p>
                        <p> y aqui te presento algunos de mismo proyectos </p>
                        <p> para que sepas cuales son algunas de mis habilidades </p>
                        </Stack>
                          
                        

                        <Stack sx={{ justifyContent:'center', borderRadius:'25px', pt:'1rem', pb:'1rem', pl:'1rem',pr:'1rem', bgcolor : 'secondary.main' }}>
                                
                                
                                <CardProyecto
                                        label_1 = {etiqueta1}
                                        imagen_1 = {imagen1}

                                        label_2 = {etiqueta2}
                                        imagen_2 = {imagen2}
                                        
                                        label_3 = {etiqueta3}
                                        imagen_3 = {imagen3}  
                                        
                                        
                                        cardTitle = {cardTitulo}

                                        cardLine1= {cardInfoLinea1}
                                        cardLine2= {cardInfoLinea2}
                                        cardLine3= {cardInfoLinea3}
                                        cardLine4= {cardInfoLinea4}

                                        linkProyect = {EnlaceAlProyecto}
                                        
                                        />
                        </Stack> 


                        <Stack sx={{ borderRadius:'25px', pt:'1rem', pb:'1rem', pl:'1rem',pr:'1rem', bgcolor : 'secondary.main' }}>             
                                {/* <CardTetris/> */}
                        </Stack>
                        

                        <Stack sx={{ borderRadius:'25px', pt:'1rem', pb:'1rem', pl:'1rem',pr:'1rem', bgcolor : 'secondary.main' }}>
                                {/* <CardKanban/> */}
                        </Stack>


                        <Stack sx={{ borderRadius:'25px', pt:'1rem', pb:'1rem', pl:'1rem',pr:'1rem', bgcolor : 'secondary.main' }}>
                                {/* <CardWeather/> */}
                        </Stack>


            </Stack>
            
    )
}