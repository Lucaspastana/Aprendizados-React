import { useState } from 'react'
import {data} from './data/data.js';
import './App.css'
import IMCTable from './components/imcTable.jsx';

import IMCcalcu from './components/imcCalc.jsx';

function App() {
  const calcImc = (e,height,weight)=>{ //Essa função está sendo criado aqui e chamada lá na imcCalc
    e.preventDefault();

    if(!height || !weight)return 

    const weightFloat = +weight.replace(',','.'); //O + na frente da variável é um operador chamado unary plus (mais unário) em JavaScript.Ele serve para converter um valor para número.
    const heightFloat = +height.replace(',','.');

    const imcResultado = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    setImc(imcResultado);
    
    
    
  }

  const [imc,setImc]=useState("")
  const [info,setInfo]=useState("")
  const [infoClass,setInfoClass]=useState("")
  

  return (
    <>
    <div className='container'>
      {!imc? <IMCcalcu calcImc={calcImc}/>: (<IMCTable data={data}/>)}
    </div>
    

   
    </>
  )
}

export default App
