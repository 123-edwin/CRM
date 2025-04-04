import './App.css'
import { HashRouter, Route, Routes } from 'react-router'
import {Client} from '@p/Client/Client'
import {NavBar} from '@c/navbar/NavBar'
import { MultiSectionForm } from '@p/Client/MultiSectionForm'
import BillForm from '@p/Bill/BillForm'

function App() {
  

  return (
   
    <>
    <NavBar> </NavBar>

    <HashRouter basename='/CRM'>
      <Routes>
        <Route path="/" element={<Client/>} />
        <Route path="/Form" element={<MultiSectionForm/>} />
        <Route path="/Factura" element={<BillForm/>} />
      </Routes>
    </HashRouter>

    </>
  )
}

export default App
