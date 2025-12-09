import { useState } from 'react'
import Componente1 from './assets/componentes/Mycomponent';

import './App.css'



function App() {
  const n = 10;

  return (
    <>
    {/* 1 - css global */}
    <h1>CSS REACT</h1>
    {/* 2- CSS DE COMPONENTE */}
    <Componente1/>
    <p>Pegou a cor do Mycomponente.css (vazou)</p>
    {/* 3 - inline style */}
    <p style={{color: 'blue', padding:'25px'}}>Este elemento tem estilo inline</p>
    {/* 4 - INLINE STYLE DINAMICO */}
    <h2 style={n > 10 ? {color:'lightskyblue'}: {color:'purple'}}> ADD FLAVORS OVER MY SONG</h2>
    {/* 4 - INLINE STYLE DINAMICO */}
    





    </>
  )
}

export default App;
