import { HashRouter, Route, Routes } from 'react-router'
import { Client } from '@p/Client/Client'
import { MultiSectionForm } from '@p/Client/MultiSectionForm'
import BillForm from '@p/Bill/BillForm'

export function Rutas() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Client />} />
                <Route path="/form" element={<MultiSectionForm />} />
                
                <Route path="/factura" element={<BillForm />} />
            </Routes>
        </HashRouter>
    )

}