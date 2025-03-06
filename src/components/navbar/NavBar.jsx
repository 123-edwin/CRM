import { useState } from "react";
import "./NavBar.css";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para mostrar/ocultar el menú
  const [secondMenuOpen, setSecondMenuOpen] = useState(false); // Estado para el segundo menú

  return (
    <>
      <div className="navbar">

        <input type="text" className="search-box" placeholder="Buscar..." />
        
        {/* Botón con el icono "+" */}
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          +
        </button>
        
        
        {/* Segundo botón al lado */}
        <button className="menu-button1" onClick={() => setSecondMenuOpen(!secondMenuOpen)}>
        👤
        </button>


        {/* Menú desplegable */}
        {menuOpen && (
          <div className="dropdown-menu">
            <ul>
              <li>Factura</li>
              <li>Presupuesto</li>
              <li>Propuesta</li>
              <li>Nota de crédito</li>
              <li>Cliente</li>
              <li>Proyecto</li>
              <li>Tarea</li>
              <li>Gastos</li>
              <li>Contrato</li>
              <li>Artículo</li>
              <li>Ticket</li>
              <li>Miembro del equipo</li>
              <li>Evento</li>
            </ul>
          </div>
        )}


        {/* Menú del segundo botón */}
        {secondMenuOpen && (
          <div className="dropdown-menu1 second-menu">
            <ul>
              <li>Mi perfil</li>
              <li>Mis tiempos</li>
              <li>Editar perfil</li>
              <li>Cerrar sesión</li>
            </ul>
          </div>
        )}

      </div>

      <br></br>

    </>
  );
}
