import { Fragment } from "react";
import CardTetris from "../../components/proyectos_components/card_tetris";
import './style.css';

export default function Proyectos(){

    return(
 
           
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

    )
}