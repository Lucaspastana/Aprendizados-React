import React from "react";

/* No React, a desestruturação é amplamente utilizada para simplificar o processo de acesso e uso de propriedades e 
estados em componentes. Desestruturando Props em Componentes Funcionais: */

//Neste exemplo, as propriedades namee agesão desestruturadas diretamente dos parâmetros da função, 
// Tornando-as acessíveis dentro do corpo do componente.

function Desus({marca,km,cor,id}){
    return (
        <div>
            <ul className="Carro">
                <li>ID:{id}</li>
                <li>Marca:{marca}</li>
                <li>Kilometragem:{km}</li>
                <li>pintura:{cor}</li>
            </ul>
        </div>
    )
}

export default Desus;

//Desestruturação de props permite acessar e manipular mais facil as propriedades entre os componentes.