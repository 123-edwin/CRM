import { Route } from 'wouter'; // Importar solo Route
import { Client } from '@p/Client/Client';
import { MultiSectionForm } from '@p/Client/MultiSectionForm';
import { ImportacionCliente } from '@p/Client/ImportacionCliente';
import {Bill} from '@p/Bill/Bill';
import { Tabla } from '@p/Tablero/Tabla';
import { Miperfil } from '@p/Perfil/Miperfil';
import { EditarPerfil } from '@p/Perfil/EditarPerfil';
import { Tarea } from '@p/Tareas/Tarea';
import { Contrato } from '@p/Contratos/Contrato';
import { NuevoContrato } from '@p/Contratos/NuevoContrato';
import { Proyecto } from '@p/Proyectos/Proyecto';
import { NuevoProyecto } from '@p/Proyectos/NuevoProyecto';
import { ContactosActivos } from '@p/Client/ContactosActivos';


export function Rutas() {
    return (
        <>
            <Route path="/" component={Client} />
            <Route path="/form" component={MultiSectionForm} />
            <Route path="/contactos" component={ContactosActivos} />
            <Route path="/table" component={Tabla} />
            <Route path="/perfil" component={Miperfil} />
            <Route path="/importacion" component={ImportacionCliente} />
            <Route path="/factura" component={Bill} />
            <Route path="/editarp" component={EditarPerfil} />
            <Route path="/tareass" component={Tarea} />
            <Route path="/contratoss" component={Contrato} />
            <Route path="/nuevocontra" component={NuevoContrato} />
            <Route path="/proyectoss" component={Proyecto} />
            <Route path="/nuevoproye" component={NuevoProyecto} />
        </>
    );
}