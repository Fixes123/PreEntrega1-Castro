import { useState } from 'react'
import Titulo from './components/Titulo/Titulo'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/Footer/Footer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'






function App() {
  const [estado, funcionCambiarEstado] = useState(0)
  const titulo = 'Bienvenidos a pepito technology'
  const subtitulo = 'Tecnología de calidad'
  

  const addCount = () => {
   funcionCambiarEstado(estado + 1)
  }


  return (
    <div>
      
      <NavBar/>
      
      <Titulo titulo={titulo} subtitulo={subtitulo} />
      
    <label>
      <strong>{ estado }</strong>
      <button onClick={addCount}> +1 </button>
    </label> 
      <ItemListContainer greeting='Soy un footer'></ItemListContainer>
       
    </div>
  )
}

export default App
