import { Route } from 'wouter'; // Importar solo Route
import { Client } from '@p/Client/Client';
import { MultiSectionForm } from '@p/Client/MultiSectionForm';
import BillForm from '@p/Bill/BillForm';
import { Tabla } from '@p/Tablero/Tabla';
import { Miperfil } from '@p/Perfil/Miperfil';
import { ImportacionCliente } from '@p/Client/ImportacionCliente';

export function Rutas() {
    return (
        <>
            <Route path="/" component={Client} />
            <Route path="/form" component={MultiSectionForm} />
            <Route path="/table" component={Tabla} />
            <Route path="/perfil" component={Miperfil} />
            <Route path="/importacion" component={ImportacionCliente} />
            <Route path="/factura" component={BillForm} />
        </>
    );
}