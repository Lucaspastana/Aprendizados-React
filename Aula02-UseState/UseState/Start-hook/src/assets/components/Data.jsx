 import { useState } from "react";

const Data =()=>{
  let somaData = 10;
  const [anotherNumber, setAnotherNumber]=useState(15)

  return(
    <div>
      <div>
        <p>Valor: {somaData}</p>
        <button onClick={()=>(somaData = 15)}>Mudr</button>
      </div>
      <div>
        <p>Valor: {anotherNumber}</p>
        <button onClick={()=> setAnotherNumber(20)}>Mudar state </button>
      </div>
    </div>
  )
};


export default Data;