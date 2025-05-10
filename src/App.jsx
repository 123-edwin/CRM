import './App.css'
import { NavBar } from '@c/navbar/NavBar'
import { Rutas } from '@c/Rutas/Rutas'
import { Router } from 'wouter' // Importar Router

function App() {
  return (
    <Router base="/CRM"> {/* Envolver la aplicación con Router y configurar el base */}
      <NavBar />
      <Rutas />
    </Router>
  )
}

export default App
