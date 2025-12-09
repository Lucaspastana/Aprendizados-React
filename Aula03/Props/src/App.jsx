import React from 'react'
import { useState } from 'react'
import Data from './assets/components/Data'
// 4- renderização da lista
import ListRender1 from './assets/components/ListRender'
import ConditionalRender from './assets/components/ConditionalRender'
import Teste from './assets/components/props';
import Desus from './assets/components/Desusprops';
import Container from './assets/components/container';
import './App.css'
import ExecuteFunction from './assets/components/FunctionProps';
import Message from './assets/components/statelift';

import ChangeMessage from './assets/components/ChangeMessage';




const cars = [
  {id:1,brand:"Ferrari",color:"Amarelo",km:0},
  {id:2,brand:"Lamboghini",color:"Azul",km:0},
  {id:3,brand:"Bugatti",color:"Roxo",km:0},
];




function App() {
  const [count, setCount] = useState(0);


  const nome = "Pedro";

  {/*Função prop */}
   function showMessage() {
        console.log("Evento do componente pai")
        
      }

    const [message,setmessage]= useState("");

    const handleMessage=(msg)=>{
      setmessage(msg);
    };


  return (
    <>
      <Data/>
      <h1>oii</h1>
      <ListRender1/>

      <ConditionalRender/>
      {/*Props definição */}
      <Teste name = "Fabão"/>
      <Teste name = "Lucas"/> 
      <Teste name = "Vini"/>
  <Teste nome={nome}/> {/* Podemos também passar como variavel. */}

      {/*Desestruturação de props */}
      <Desus marca="Nissan" km={1000} cor="azul"/>
      {/* PODEMOS TAMBÉM FAZER O REAPROVEITAMENTO DAS PROPS (REUTILIZAÇÃO) */}
      <Desus marca="Audi" km={5210} cor="VERMELHO"/>
      <Desus marca="BMW" km={0} cor="azul"/>
      <Desus marca="BMW" km={0} cor="azul" id={5}/>
      {/*Reutilização com loop em array */}
      {cars.map((car) => (
        <Desus
          
          marca={car.brand}
          cor={car.color}
          km={car.km}
        />
      ))}

      {/*Utilizando o children */}

      <Container>
        <div>
          <h2>Olá esse é o children</h2>
          <p>Aprendi em 5 min </p>
        </div>
      </Container>

     {/*Função criada no App la em cima ^  */}
      <ExecuteFunction myFunction={showMessage}/>

      {/*state lift  */}
      <Message msg={message}/>

      <ChangeMessage handleMessage={handleMessage}/>

     
      
    </>
  )
}

export default App
