
import './style.css';
import Stack from '@mui/material/Stack';
import MoodIcon from '@mui/icons-material/Mood';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


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
import { Avatar, ListItemAvatar } from '@mui/material';

import ImagenPorfolio1 from '../../components/imagenes/reactImagenPorfolio.png'





export default function Proyectos(){

        // PROYECTO 1 .- Informacion Card WebResposiveAnimada

                // Imagenes y Etiquetas de las Imagenes
                        const webResponsiveEtiqueta1 = 'Cards giratorios';
                        const webResponsive_Imagen1 = webResponsiveImagen1;
                
                        const webResponsiveEtiqueta2 = 'Tablero giratorio';
                        const webResponsive_Imagen2 = webResponsiveImagen2;
                
                        const webResponsiveEtiqueta3 = 'Formulario con responsive';
                        const webResponsive_Imagen3 = webResponsiveImagen3;


                // Card Informacióntt
                        const webResponsiveCardTitulo = 'WebResponsiveAnimada';

                        function webResponsiveCardInfo(){
                                return(
                                        <Stack sx={{ gap:'0.8rem' }}>
                                                <Typography sx={{ fontSize:{ xs:'x-small', sm:'medium' }  }}> Desarrollo de una web responsive utilizando unicamente <b className='palabra_resaltada'>HTML</b> y <b className='palabra_resaltada'>CSS</b>  </Typography>
                                                <Typography sx={{ fontSize:{ xs:'x-small', sm:'medium' }  }}> -<b className='palabra_resaltada'> HTML</b>.- Clases, estructura de los elementos. </Typography>
                                                <Typography sx={{ fontSize:{ xs:'x-small', sm:'medium' }  }}> -<b className='palabra_resaltada'> CSS </b>.- Box model, especificidad, cascada, herencia, selectores, animaciones, transformaciones, flexbox.</Typography>
                                        </Stack>
                                )
                        }


                // Enlace al proyecto
                        const EnlaceAlProyectoWebResponsive = 'https://webresponsiveanimada.herokuapp.com/';


// ---------------------------------------------------------------------------------------------


        // PROYECTO 2 .- Informacion Card El Tetris

                // Imagenes y Etiquetas de las Imagenes
                        const TetrisEtiqueta1 = 'Pantalla Principal';
                        const TetrisImagen1 = tetrisImagen1;
                
                        const TetrisEtiqueta2 = 'Score';
                        const TetrisImagen2 = tetrisImagen2;
                
                        const TetrisEtiqueta3 = 'Game Over';
                        const TetrisImagen3 = tetrisImagen3;



                // Card Informacióntt
                        const TetrisCardTitulo = 'El Tetris';

                        function TetrisCardInfo(){
                                return(
                                        <Stack sx={{ gap:'0.8rem' }}>
                                                <Typography sx={{ fontSize:{ xs:'x-small', sm:'medium' }  }}> Juego clásico utilizando <b className='palabra_resaltada'>HTML</b>, <b className='palabra_resaltada'>CSS</b> y <b className='palabra_resaltada'>Vanilla JS</b> </Typography>
                                                <Typography sx={{ fontSize:{ xs:'x-small', sm:'medium' }  }}> -<b className='palabra_resaltada'> HTML</b> </Typography>
                                                <Typography sx={{ fontSize:{ xs:'x-small', sm:'medium' }  }}> -<b className='palabra_resaltada'> CSS </b> .- Box model, herencia, selectores, transformaciones, estilos, colores. </Typography>
                                                <Typography sx={{ fontSize:{ xs:'x-small', sm:'medium' }  }}> -<b className='palabra_resaltada'> JS </b> .- Bom y gestión del DOM </Typography>
                                                <Typography sx={{ fontSize:{ xs:'x-small', sm:'medium' }  }}> - No tiene responsive </Typography>
                                        </Stack>
                                )
                        }


                // Enlace al proyecto
                        const EnlaceAlProyectoTetris = 'https://webtetris.herokuapp.com/';     
                
                
// ---------------------------------------------------------------------------------------------


        // PROYECTO 3 .- Informacion Card Kanban

                // Imagenes y Etiquetas de las Imagenes
                        const KanbanEtiqueta1 = 'Columnas y Tasks';
                        const KanbanImagen1 = kanbanImagen1;
                
                        const KanbanEtiqueta2 = 'Filtro de Tasks';
                        const KanbanImagen2 = kanbanImagen2;
                
                        const KanbanEtiqueta3 = 'Drag And Drop';
                        const KanbanImagen3 = kanbanImagen3;


                // Card Informacióntt
                        const KanbanCardTitulo = 'Tablero Kanban';

                        function KanbanCardInfo(){
                                return(
                                        <Stack sx={{ gap:'0.8rem' }}>
                                                <Typography sx={{ fontSize:{ xs:'x-small', sm:'medium' }  }}> Aplicación web para gestionar proyectos con la metodología <b className='palabra_resaltada'>KANBAN</b> utilizando <b className='palabra_resaltada'>HTML</b>, <b className='palabra_resaltada'>CSS</b>, <b className='palabra_resaltada'>JS</b> Y <b className='palabra_resaltada'>REACT</b></Typography>
                                                <Typography sx={{ fontSize:{ xs:'x-small', sm:'medium' }  }}> -<b className='palabra_resaltada'> HTML</b> </Typography>
                                                <Typography sx={{ fontSize:{ xs:'x-small', sm:'medium' }  }}> -<b className='palabra_resaltada'> CSS </b> .- Box model, display, herencia, color, estilo. </Typography>
                                                <Typography sx={{ fontSize:{ xs:'x-small', sm:'medium' }  }}> -<b className='palabra_resaltada'> JS </b> .- Condicionales, arrays, gestion de arrays. </Typography>
                                                <Typography sx={{ fontSize:{ xs:'x-small', sm:'medium' }  }}> -<b className='palabra_resaltada'> REACT JS </b> .- Creación, consumición y gestion de componentes, paso de informacion de un <b className='palabra_resaltada'>padre al hijo</b> y de un <b className='palabra_resaltada'>hijo al padre</b> </Typography>
                                        </Stack>
                                )
                        }


                // Enlace al proyecto
                        const EnlaceAlProyectoKanban = 'https://tablerokanbannil.herokuapp.com/';                           
       

// ---------------------------------------------------------------------------------------------


        // PROYECTO 4 .- Informacion Card WeatherApp

                // Imagenes y Etiquetas de las Imagenes
                        const weatherAppEtiqueta1 = 'Pantalla Principal';
                        const weatherApp_Imagen1 = weatherAppImagen1;
                
                        const weatherAppEtiqueta2 = 'Clima de una Ciudad';
                        const weatherApp_Imagen2 = weatherAppImagen2;
                
                        const weatherAppEtiqueta3 = 'Celcius a Farentheit y viceversa';
                        const weatherApp_Imagen3 = weatherAppImagen3;


                // Card Informacióntt
                        const weatherAppCardTitulo = 'WeatherApp';

                        function weatherAppCardInfo(){
                                return(
                                        <Stack sx={{ gap:'0.8rem' }}>
                                                <Typography sx={{ fontSize:{ xs:'x-small', sm:'medium' }  }}> Aplicación web para poder vizualizar el clima en tiempo real de una ciudad determinada usando una <b className='palabra_resaltada'>API</b> </Typography>
                                                <Typography sx={{ fontSize:{ xs:'x-small', sm:'medium' }  }}> -<b className='palabra_resaltada'> HTML</b>.- Clases, estructura de los elementos. </Typography>
                                                <Typography sx={{ fontSize:{ xs:'x-small', sm:'medium' }  }}> -<b className='palabra_resaltada'> CSS </b> </Typography>
                                                <Typography sx={{ fontSize:{ xs:'x-small', sm:'medium' }  }}> -<b className='palabra_resaltada'> JS </b> .- Condicionales, arrays, gestion de arrays. </Typography>
                                                <Typography sx={{ fontSize:{ xs:'x-small', sm:'medium' }  }}> -<b className='palabra_resaltada'> REACT JS </b> .- Creación de componentes de clase y de función, consumición y gestion de componentes
                                                                                                                                                                 dentro de otro componente, pasar información de un componente <b className='palabra_resaltada'>padre al hijo</b>
                                                                                                                                                                 , gestion del ciclo de vida de un componente, utilización de <b className='palabra_resaltada'>Hooks (useState, useEffect)</b> </Typography>
                                        </Stack>
                                )
                        }


                // Enlace al proyecto
                        const EnlaceAlProyectoweatherApp = 'https://weatherappnil.herokuapp.com/';                     




    return(
 
           <Stack sx={{ gap:'1rem', pt:'2rem', pb:'2rem' }}>
  
                  
                        <Stack sx={{ alignItems:'center', gap:'1rem', borderRadius:'25px', pt:'0.5rem', pb:'1rem', pl:'1rem',pr:'1rem', bgcolor : 'secondary.main' }}>

                                {/* <p className="title-top"> */}
                                <Stack sx={{ flexDirection:{ xs:'column', sm:'row' }, alignItems:'center', gap:'1rem' }} >

                                        <Typography sx={{ fontWeight:'bold', fontSize:'xx-large' }}> NILTON MEDINA SAYAN </Typography>
                                        {/* <MoodIcon sx={{ fontSize:'3rem' }} />  */}

                                        <Avatar sx={{ width:'7rem', height:'7rem' }} alt="Remy Sharp" src={ImagenPorfolio1}></Avatar>
 
                                </Stack>
                                {/* </p> */}

                                        {/* -------------------------------------------- */}

                                <Typography sx={{ fontSize:{ xs:'small', sm:'x-large' }, flexDirection: 'row' }} >
                                        Soy un 
                                        <b> WEB DEVELOPER FULL STACK JUNIOR </b>
                                </Typography>

                                        {/* -------------------------------------------- */}

                                <Typography sx={{ fontSize:{ xs:'small', sm:'x-large' },  gap:'0.4rem', diplay:'flex', flexDirection: 'row' }} >     
                                        Con mis conocimientos soy capaz de desarrollar páginas web
                                        <b> End to End </b>
                                        , es decir el
                                        <b> Front End </b> 
                                        hasta el
                                        <b> Back End </b>
                                        , aqui presento algunos de mis proyectos para que se pueda apreciar algunas de mis habilidades. 
                                        
                                </Typography>
                        
                        </Stack>


                        <Stack sx={{ gap:'1rem', flexDirection:'row', justifyContent:'center', fontSize:'x-large', borderRadius:'25px', pt:'0.5rem', pb:'1rem', pl:'1rem',pr:'1rem', bgcolor : 'secondary.main' }}>

                                <Stack sx={{ display:'flex', alignSelf:'center' }}> Proyectos </Stack>
                                <ArrowDownwardIcon sx={{ fontSize:'3rem' }}/>

                        </Stack>
                          
                        
                {/* Card Proyecto WebResponsiveAnimada */}
                        <Stack sx={{ justifyContent:'center', borderRadius:'25px', pt:'1rem', pb:'1rem', pl:'1rem',pr:'1rem', bgcolor : 'secondary.main' }}>
                                
                                <CardProyecto
                                        label_1 = {webResponsiveEtiqueta1}
                                        imagen_1 = {webResponsive_Imagen1}

                                        label_2 = {webResponsiveEtiqueta2}
                                        imagen_2 = {webResponsive_Imagen2}
                                        
                                        label_3 = {webResponsiveEtiqueta3}
                                        imagen_3 = {webResponsive_Imagen3}  
                                        
                                        
                                        cardTitle = {webResponsiveCardTitulo}

                                        cardLineInfo= {webResponsiveCardInfo()}
                                        // cardLine2= {webResponsiveCardInfoLinea2}
                                        // cardLine3= {webResponsiveCardInfoLinea3}
                                        // cardLine4= {webResponsiveCardInfoLinea4}

                                        linkProyect = {EnlaceAlProyectoWebResponsive}  />

                        </Stack> 



                {/* Card Proyecto El Tetris */}
                        <Stack sx={{ borderRadius:'25px', pt:'1rem', pb:'1rem', pl:'1rem',pr:'1rem', bgcolor : 'secondary.main' }}>             
                                <CardProyecto
                                        label_1 = {TetrisEtiqueta1}
                                        imagen_1 = {TetrisImagen1}

                                        label_2 = {TetrisEtiqueta2}
                                        imagen_2 = {TetrisImagen2}
                                        
                                        label_3 = {TetrisEtiqueta3}
                                        imagen_3 = {TetrisImagen3}  
                                        
                                        
                                        cardTitle = {TetrisCardTitulo}

                                        cardLineInfo= {TetrisCardInfo()}
                                        // cardLine2= {TetrisCardInfoLinea2}
                                        // cardLine3= {TetrisCardInfoLinea3}
                                        // cardLine4= {TetrisCardInfoLinea4}

                                        linkProyect = {EnlaceAlProyectoTetris}  />                                
                        </Stack>


                        
                {/* Card Proyecto Kanban */}
                        <Stack sx={{ borderRadius:'25px', pt:'1rem', pb:'1rem', pl:'1rem',pr:'1rem', bgcolor : 'secondary.main' }}>
                                <CardProyecto
                                        label_1 = {KanbanEtiqueta1}
                                        imagen_1 = {KanbanImagen1}

                                        label_2 = {KanbanEtiqueta2}
                                        imagen_2 = {KanbanImagen2}
                                        
                                        label_3 = {KanbanEtiqueta3}
                                        imagen_3 = {KanbanImagen3}  
                                        
                                        
                                        cardTitle = {KanbanCardTitulo}

                                        cardLineInfo= {KanbanCardInfo()}
                                        // cardLine2= {KanbanCardInfoLinea2}
                                        // cardLine3= {KanbanCardInfoLinea3}
                                        // cardLine4= {KanbanCardInfoLinea4}

                                        linkProyect = {EnlaceAlProyectoKanban}  />                                
                        </Stack>



                {/* Card Proyecto WeatherApp */}
                        <Stack sx={{ borderRadius:'25px', pt:'1rem', pb:'1rem', pl:'1rem',pr:'1rem', bgcolor : 'secondary.main' }}>
                                <CardProyecto
                                        label_1 = {weatherAppEtiqueta1}
                                        imagen_1 = {weatherApp_Imagen1}

                                        label_2 = {weatherAppEtiqueta2}
                                        imagen_2 = {weatherApp_Imagen2}
                                        
                                        label_3 = {weatherAppEtiqueta3}
                                        imagen_3 = {weatherApp_Imagen3}  
                                        
                                        
                                        cardTitle = {weatherAppCardTitulo}

                                        cardLineInfo= {weatherAppCardInfo()}
                                        // cardLine2= {weatherAppCardInfoLinea2}
                                        // cardLine3= {weatherAppCardInfoLinea3}
                                        // cardLine4= {weatherAppCardInfoLinea4}

                                        linkProyect = {EnlaceAlProyectoweatherApp}  />                               
                        </Stack>



            </Stack>
            
    )
}