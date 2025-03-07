import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import {Client} from '@p/Client/Client'
import {NavBar} from '@c/navbar/NavBar'
import { MultiSectionForm } from './pages/Client/MultiSectionForm'

function App() {
  

  return (
   
    <>
    <NavBar> </NavBar>

    <BrowserRouter basename='/CRM'>
      <Routes>
        <Route path="/" element={<Client/>} />
        <Route path="/Form" element={<MultiSectionForm/>} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
