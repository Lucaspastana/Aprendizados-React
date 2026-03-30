import { useState } from 'react';
import Button from './Button'
import './imcCalc.css'
const IMCcalcu = ({calcImc}) =>{

    const [height,setHeight]=useState("");
    const [weight,setWeight]=useState("");
    //Nessa função é bom porque consigo manipular a ação dela acima do componente, tendo uma visão macro
    const LimpaForm=(e)=>{
      e.preventDefault();
      setWeight("");
      setHeight("");
    }

    const validDigits = (text)=>{
      return text.replace(/[^0-9,]/g,""); // EXPRESSÃO REGULAR OU REGEX
    }


    const onlynumber=(e)=>{
      const update = validDigits(e.target.value);

      setHeight (update)
    }

    const onlynumberWeight=(e)=>{
      const update = validDigits(e.target.value);

      setWeight (update)
    }




    return (
    <div>
      <div id="calc-container">
        <h2>Calculadora de IMC</h2>
        <form id="imc-form">
          <div className="form-inputs">
            <div className="form-control">
              <label htmlFor="height">Altura:</label>
              <input
                type="text"
                name="height"
                id="height"
                placeholder="Exemplo 1,75"
                onChange={(e)=> onlynumber(e)}
                value={height}
              />
            </div>
            <div className="form-control">
              <label htmlFor="weight">Peso:</label>
              <input
                type="text"
                name="weight"
                id="weight"
                placeholder="Exemplo 70,5"
                onChange={(e)=> onlynumberWeight(e)}
                value={weight}
           
              />
            </div>
          </div>
          <div className="action-control">
            <Button id="calc-btn" text="Calcular" action={(e)=>calcImc(e,height,weight)}/>
            <Button id="clear-btn" text="Limpar"action={LimpaForm}/>
          </div>
        </form>
      </div>   
    </div>
    
  );
};

export default IMCcalcu;