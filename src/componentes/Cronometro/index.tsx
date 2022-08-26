import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./cronometro.module.scss";
import React from "react";


export default function Cronometro (){
    return (
    <div className={style.cronometro}>
          <p className={style.titulo}>
            Escolha o card e inicie o cronomêtro
        </p>
     <div className={style.relogioWrapper}>
     <Relogio/>

     </div> 
     <div>

     </div>
     <Botao>Começar</Botao>
     </div>


    )



}