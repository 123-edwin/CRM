import { HashRouter, Route, Routes } from 'react-router'
import { Client } from '@p/Client/Client'
import { MultiSectionForm } from '@p/Client/MultiSectionForm'
import BillForm from '@p/Bill/BillForm'
import {Tabla} from '@p/Tablero/Tabla'
import {Miperfil} from '@p/Perfil/Miperfil'
import {ImportacionCliente} from '@p/Client/ImportacionCliente'


export function Rutas() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Client />} />
                <Route path="/form" element={<MultiSectionForm />} />
                <Route path="/table" element={<Tabla />} />
                <Route path="/perfil" element={<Miperfil />} />
                <Route path="/importacion" element={<ImportacionCliente/>} />

                <Route path="/factura" element={<BillForm />} />
            </Routes>
        </HashRouter>
    )

}