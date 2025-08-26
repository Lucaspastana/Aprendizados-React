import React from "react";

const Events = () =>{
  const handclick=(e)=>{
    console.log(e);
    console.log('executou');
  };
 // renderizando um componente
  const renderSomething = (x)=>{
    if(x){
      return <h1>Renderizando</h1>
    } else{
      return <h2>Outra coisa</h2>
    }
  };

    return(
      <div>
        <div>
          <button onClick={()=> console.log('Ola')}>Clique here</button>
        </div>
        <div> 
          <button onClick={handclick}>Bora</button>
        </div>
        {renderSomething(true)}
        {renderSomething(false)}
      </div>
    )

  }




export default Events;