import { useState } from "react";
import "./NavBar.css";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para mostrar/ocultar el menú

  return (
    <>
      <div className="rectangle">
        <input type="text" className="search-box" placeholder="Buscar..." />

        {/* Botón con el icono "+" */}
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          +
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
      </div>
      <br></br>
    </>
  );
}
