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

    <HashRouter>
      <Routes>
        <Route path="/" element={<Client/>} />
        <Route path="/form" element={<MultiSectionForm/>} />
        <Route path="/factura" element={<BillForm/>} />
      </Routes>
    </HashRouter>

    </>
  )
}

export default App
