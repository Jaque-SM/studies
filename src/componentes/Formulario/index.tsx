import React  from "react";
import Botao from "../Botao";
import formulario from "./formulario.module.scss"

class Formulario extends React.Component {
    render(): React.ReactNode {
        return(
            <form action="" className={formulario.novaTarefa}>
                <div className={formulario.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione uma nova tarefa  </label>
                    <input 
                    className=""
                     type="text"
                         name="tarefa" 
                         id="tarefa" 
                         placeholder="O que voce quer estudar?..."
                         required/>
                </div>

                <div className={formulario.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input type="time" 
                    step="1" 
                    name="tempo"
                    id="tempo"
                    min="00:00:00" 
                    max="01:30:00"
                    required/>

                </div>
                <Botao children="Adicionar"/>
            </form>
        )


    }
}
export default Formulario;