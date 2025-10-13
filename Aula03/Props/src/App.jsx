import { useState } from 'react'
import Data from './assets/components/Data'
// 4- renderização da lista
import ListRender1 from './assets/components/ListRender'
import ConditionalRender from './assets/components/ConditionalRender'
import Teste from './assets/components/props';
import Desus from './assets/components/Desusprops';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Data/>
      
      <ListRender1/>

      <ConditionalRender/>
      {/*Props definição */}
      <Teste name = "Fabão"/>
      <Teste name = "Lucas"/> 
      <Teste name = "Vini"/>
      <Teste nome ={nome}/> // Podemos também passar como variavel.

      {/*Desestruturação de props */}
      <Desus name ="Otsukare Sama" age = {150}/>
    </>
  )
}

export default App
