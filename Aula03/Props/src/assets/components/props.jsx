import React from "react";
/*Conceitualmente, componentes são como funções JavaScript. 
Eles aceitam entradas arbitrárias (chamadas de "props") e retornam elementos 
React que descrevem o que deve aparecer na tela. */


const Teste =(props)=>{ //A maneira mais simples de definir um componente é escrever uma função JavaScript:
    return(<>
    <h2>Seja bem vindo:{props.name}</h2> //props é um objeto que armazena os valores passados como atributos na chamada do componente
    
    </>)
}

export default Teste;