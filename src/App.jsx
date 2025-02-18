import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import {Client} from '@p/Client/Client'

function App() {
  

  return (
    <BrowserRouter basename='/CRM'>
      <Routes>
        <Route path="/" element={<Client/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
