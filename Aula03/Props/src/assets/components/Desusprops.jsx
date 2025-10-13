import React from "react";

/* No React, a desestruturação é amplamente utilizada para simplificar o processo de acesso e uso de propriedades e 
estados em componentes. Desestruturando Props em Componentes Funcionais: */

//Neste exemplo, as propriedades namee agesão desestruturadas diretamente dos parâmetros da função, 
// ornando-as acessíveis dentro do corpo do componente.

function Desus({name,age}){
    return (
        <div>
            <h1>desestruturação de props {name},{age}</h1>
        </div>
    )
}

export default Desus;