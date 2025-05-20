import { Route } from "wouter"; // Importar solo Route

import { Tabla } from "@p/Tablero/Tabla";
import { Tarea } from "@p/Tareas/Tarea";

import { Client } from "@p/Client/Client";
import { ContactosActivos } from "@p/Client/ContactosActivos";
import { MultiSectionForm } from "@p/Client/MultiSectionForm";
import { ImportacionCliente } from "@p/Client/ImportacionCliente";

import BillForm from "@p/Bill/BillForm";

import { Gasto } from "@p/Gastos/Gasto";
import { RegistrarGastos } from "@p/Gastos/RegistrarGastos";
import { ImportExp } from "@p/Gastos/ImportExp";
import { Exportar } from "@p/Gastos/Exportar";

import { Contrato } from "@p/Contratos/Contrato";
import { NuevoContrato } from "@p/Contratos/NuevoContrato";

import { Proyecto } from "@p/Proyectos/Proyecto";
import { NuevoProyecto } from "@p/Proyectos/NuevoProyecto";

import { ClientesPotenciales } from "@p/ClientesPoten/ClientesPotenciales";

import { Miperfil } from "@p/Perfil/Miperfil";
import { EditarPerfil } from "@p/Perfil/EditarPerfil";

import { TareaPersonal } from "@p/Tareas/TareaPersonal";

export function Rutas() {
  return (
    <>
      <Route path="/" component={Client} />
      <Route path="/form" component={MultiSectionForm} />
      <Route path="/contactos" component={ContactosActivos} />
      <Route path="/table" component={Tabla} />
      <Route path="/perfil" component={Miperfil} />
      <Route path="/importacion" component={ImportacionCliente} />
      <Route path="/factura" component={BillForm} />
      <Route path="/editarp" component={EditarPerfil} />
      <Route path="/tareaper" component={TareaPersonal} />
      <Route path="/contratoss" component={Contrato} />
      <Route path="/nuevocontra" component={NuevoContrato} />
      <Route path="/proyectoss" component={Proyecto} />
      <Route path="/nuevoproye" component={NuevoProyecto} />
      <Route path="/tareass" component={Tarea} />
      <Route path="/gastoss" component={Gasto} />
      <Route path="/gastosreg" component={RegistrarGastos} />
      <Route path="/importgastos" component={ImportExp} />
      <Route path="/exportarr" component={Exportar} />
      <Route path="/clientpoten" component={ClientesPotenciales} />
    </>
  );
}
