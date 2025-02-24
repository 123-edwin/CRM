
import { useState } from "react";
import { FaUserCircle,FaTachometerAlt, FaUsers, FaShoppingCart, FaFileAlt, FaFileInvoiceDollar, FaCreditCard, FaReceipt, FaDollarSign, FaFile, FaFolder, FaTasks, FaLifeRing, FaUserPlus, FaCog, FaAngleDown} from "react-icons/fa";
import "./sidebar.css";

const Sidebar = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  
  return (
    //logo 
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="/logo.png" alt="Logo" className="logo" />
        <span className="brand">JL Marketing</span>
      </div>
      
      <div className="user-info"> 
        <FaUserCircle className="user-icon"/>
        <div className="user-avatar"></div>
        <div>
          <p className="user-name">Evelin Fernanda</p>
          <p className="user-email">evelynfernanda@g...</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        <SidebarItem icon={<FaTachometerAlt />} text="Tablero" />
        <SidebarItem icon={<FaUsers />} text="Clientes" />

        <SidebarDropdown
          icon={<FaShoppingCart />}
          text="Ventas"
          isOpen={openSection === "ventas"}
          onClick={() => toggleSection("ventas")}
          items={[
            { text: "Propuestas", icon: <FaFileAlt /> },
            { text: "Presupuestos", icon: <FaFileInvoiceDollar /> },
            { text: "Facturas", icon: <FaReceipt /> },
            { text: "Pagos", icon: <FaCreditCard /> },
            { text: "Notas de crédito", icon: <FaDollarSign /> },
          ]}
        />

        <SidebarItem icon={<FaFile />} text="Gastos" />
        <SidebarItem icon={<FaFolder />} text="Contratos" />
        <SidebarItem icon={<FaTasks />} text="Proyectos" />
        <SidebarItem icon={<FaTasks />} text="Tareas" />

        <SidebarDropdown
        icon={<FaLifeRing />}
        text="Soporte"
        isOpen={openSection === "soporte"}
        onClick={() => toggleSection("soporte")}
        items={[
          { text: "Abierto", count: 0, color: "red" },
          { text: "En progreso", count: 0, color: "green" },
          { text: "Contestado", count: 0, color: "blue" },
          { text: "En espera", count: 0, color: "gray" },
          { text: "Cerrado", count: 0, color: "lightblue" },
        ]}
      />
      

        <SidebarItem icon={<FaUserPlus />} text="Clientes potenciales" />

        <SidebarDropdown
          icon={<FaCog />}
          text="Utilidades"
          isOpen={openSection === "utilidades"}
          onClick={() => toggleSection("utilidades")}
          items={[{ text: "Configuraciones", icon: <FaCog /> }]}
        />
      </nav>
    </div>
  );
};

const SidebarItem = ({ icon, text }) => (
  <div className="sidebar-item">
    {icon}
    <span>{text}</span>
  </div>
);

const SidebarDropdown = ({ icon, text, isOpen, onClick, items }) => (
  <div>
    <div className="sidebar-dropdown" onClick={onClick}>
      <div className="dropdown-header">
        {icon}
        <span>{text}</span>
      </div>
      <FaAngleDown className={`dropdown-icon ${isOpen ? "open" : ""}`} />
    </div>
    {isOpen && (
      <div className="dropdown-content">
        {items.map((item, index) => (
          <SidebarItem key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
    )}
  </div>
);

export default Sidebar;

