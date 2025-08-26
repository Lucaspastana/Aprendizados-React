import './App.css'
// 2- IMPORTANDO COMPONENTE
import FirstComponent from './components/newcomponents';

// 3 - TEMPLATE EXPRESSION
import TemplateExpression from './components/TemplateExpression';


import Events from './components/Events';


function App() {
 
  return (
   <div className='App'>
    <h1>Fundamentos React</h1>
    <FirstComponent/> 
    <TemplateExpression />
    <Events/>
   </div>
        
  )
}

export default App
