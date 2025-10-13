import React from "react";
//Renderização condicional em React funciona da mesma forma que condições funcionam em JavaScript. Use operadores de JavaScript como if ou operador condicional para criar elementos representando o estado atual, e deixe o React atualizar a UI para corresponde-los.
const ConditionalRender=()=>{
  const x =false;
  const name =  'lucas'

  return(
    <div>
      <h3>Isso sera exibido ?</h3>
      {x && <p>Se X for true simm </p>}
      <h3>TERNARIOS</h3>
      {name == 'lucas' ? (
        <div>
          <p>Sim</p>
        </div>
      ):(
        <div>
          <p>não</p>
        </div>

      )}
    </div>
  )
}

export default ConditionalRender;