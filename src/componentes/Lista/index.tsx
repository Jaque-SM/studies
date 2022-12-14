import React from "react";
import Item from "./Item";
import lista from "./lista.module.scss"

function Lista(){
    const tarefas =[{
        tarefa: "React",
        tempo: " 02:00:00"
    },
    {
        tarefa: "Javascript",
        tempo: "01:00:00"
    },
    {
        tarefa: "TypeScript",
        tempo: "03:00:00"
    }
    ]
    return (
        <aside className={lista.listaTarefas}>
        <h2>
            Estudos do dia  </h2>
        <ul>
            {tarefas.map((idx, index) => (
                <Item key={index}
                {...idx}
                />

            ))}
        </ul>
        </aside>

)
}
export default Lista;