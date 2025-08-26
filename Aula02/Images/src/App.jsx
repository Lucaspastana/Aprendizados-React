import './App.css'

// 2° Imagem em assets
import qualquercoisa from "./assets/night.jpg";

function App() {
  

  return (
    <>
     <h1>Oláaa</h1>
     {/*1° Imagen em public */}
     <img src='/img.jpg' alt='Algo'></img>
     {/*2° Imagen em assets
      */}
     <img src={qualquercoisa} alt='Algo'></img>
        
    </>
  )
}

export default App
