import { Route } from "wouter";

import { Miperfil } from "@p/Perfil/Miperfil";
import { EditarPerfil } from "@p/Perfil/EditarPerfil";
import { TareaPersonal } from "@p/Tareas/TareaPersonal";

import { Tabla } from "@p/Tablero/Tabla";

import { Client } from "@p/Client/Client";
import { ContactosActivos } from "@p/Client/ContactosActivos";
import { MultiSectionForm } from "@p/Client/MultiSectionForm";
import { ImportacionCliente } from "@p/Client/ImportacionCliente";

import { Tarea } from "@p/Tareas/Tarea";
{/*import { TareaSemanal } from "@p/Tareas/TareaSemanal";*/}

import { Propuestas } from "@p/Ventas/Propuestas";

import { Presupuestos } from "@p/Ventas/Presupuestos";
import { Facturas } from "@p/Ventas/Facturas";
import { Bill } from "@p/Bill/Bill"; // Facturación
import { Pagos } from "@p/Ventas/Pagos";
import { Notascredito } from "@p/Ventas/Notascredito";

{
  /*import { Gasto } from "@p/Gastos/Gasto";
import { RegistrarGastos } from "@p/Gastos/RegistrarGastos";
import { ImportExp } from "@p/Gastos/ImportExp";
import { Exportar } from "@p/Gastos/Exportar";

import { Contrato } from "@p/Contratos/Contrato";
import { NuevoContrato } from "@p/Contratos/NuevoContrato";

import { Proyecto } from "@p/Proyectos/Proyecto";
import { NuevoProyecto } from "@p/Proyectos/NuevoProyecto";*/
}

import { ClientesPotenciales } from "@p/ClientesPoten/ClientesPotenciales";
 /*import { Soporte } from "@p/Soport/Soporte";
import { NuevoTicket } from "@p/Soport/NuevoTicket";*/
import { Calendario } from "@p/Utilidades/Calendario";
import { Colaboradores } from "@p/Utilidades/Colaboradores";

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
      <Route path="/tareaper" component={TareaPersonal} />
      <Route path="/tareass" component={Tarea} />
      {/*<Route path="/contratoss" component={Contrato} />
      <Route path="/nuevocontra" component={NuevoContrato} />
      <Route path="/proyectoss" component={Proyecto} />
      <Route path="/nuevoproye" component={NuevoProyecto} />

     <Route path="/gastoss" component={Gasto} />
      <Route path="/gastosreg" component={RegistrarGastos} />
      <Route path="/importgastos" component={ImportExp} />
      <Route path="/exportarr" component={Exportar} />*/}
      <Route path="/clientpoten" component={ClientesPotenciales} />
      <Route path="/prop" component={Propuestas} />

      <Route path="/pres" component={Presupuestos} />
      <Route path="/fact" component={Facturas} />
      <Route path="/pag" component={Pagos} />
      <Route path="/notascred" component={Notascredito} />
      {/*<Route path="/sop" component={Soporte} />
      <Route path="/nuevotick" component={NuevoTicket} />*/}
      <Route path="/calen" component={Calendario} />
      
      <Route path="/colab" component={Colaboradores} />
    </>
  );
}
