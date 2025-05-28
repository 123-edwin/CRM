import "./Calendario.css";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";

import { useState } from "react";

export function Calendario() {
  const [fechaActual, setFechaActual] = useState(new Date());

  const avanzarMes = () => {
    const nuevoMes = new Date(
      fechaActual.getFullYear(),
      fechaActual.getMonth() + 1,
      1
    );
    setFechaActual(nuevoMes);
  };

  const retrocederMes = () => {
    const nuevoMes = new Date(
      fechaActual.getFullYear(),
      fechaActual.getMonth() - 1,
      1
    );
    setFechaActual(nuevoMes);
  };

  const obtenerDiasDelMes = () => {
    const year = fechaActual.getFullYear();
    const month = fechaActual.getMonth();
    const diasEnMes = new Date(year, month + 1, 0).getDate();
    const primerDiaSemana = new Date(year, month, 1).getDay();
    const dias = [];

    // Espacios vacíos antes del 1
    for (let i = 0; i < primerDiaSemana; i++) {
      dias.push("");
    }

    for (let d = 1; d <= diasEnMes; d++) {
      dias.push(d);
    }

    return dias;
  };

  const dias = obtenerDiasDelMes();
  const nombreMes = fechaActual.toLocaleString("es-ES", {
    month: "long",
    year: "numeric",
  });
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Typography level="h1" sx={{ mt: 2 }}>
          C A L E N D A R I O
        </Typography>
      </Box>

      <div className="calendario-contenedor">
        <div className="calendario-header">
          <button onClick={retrocederMes}>◀</button>
          <span>{nombreMes.charAt(0).toUpperCase() + nombreMes.slice(1)}</span>
          <button onClick={avanzarMes}>▶</button>
        </div>

        <div className="calendario-grid">
          {["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].map((dia) => (
            <div key={dia} className="calendario-dia">
              {dia}
            </div>
          ))}
          {dias.map((dia, i) => (
            <div key={i} className="calendario-celda">
              {dia}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
