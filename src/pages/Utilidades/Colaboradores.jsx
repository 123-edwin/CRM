import { useState } from "react";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import Input from "@mui/joy/Input";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";

export function Colaboradores() {
  const [openModal, setOpenModal] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [indexEdicion, setIndexEdicion] = useState(null);

  const [colaboradores, setColaboradores] = useState([]);
  const [nuevoColab, setNuevoColab] = useState({
    nombre: "",
    area: "",
    nacimiento: "",
    curp: "",
    rfc: "",
    domicilio: "",
    telefono: "",
    correo: "",
  });

  const abrirModalAgregar = () => {
    setModoEdicion(false);
    setNuevoColab({
      nombre: "",
      area: "",
      nacimiento: "",
      curp: "",
      rfc: "",
      domicilio: "",
      telefono: "",
      correo: "",
    });
    setOpenModal(true);
  };

  const abrirModalEditar = (colab, index) => {
    setModoEdicion(true);
    setIndexEdicion(index);
    setNuevoColab(colab);
    setOpenModal(true);
  };

  const handleGuardar = async () => {
    if (modoEdicion) {
      const actualizados = [...colaboradores];
      actualizados[indexEdicion] = nuevoColab;
      setColaboradores(actualizados);
    } else {
      setColaboradores([...colaboradores, nuevoColab]);
    }

    try {
      const resp = await fetch(
        "http://localhost:8080/employees/createColaborator",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre: nuevoColab.nombre,
            area_trabajo: nuevoColab.area, // igual al backend
            fecha_nacimiento: nuevoColab.nacimiento, // igual al backend
            curp: nuevoColab.curp,
            rfc: nuevoColab.rfc,
            domicilio: nuevoColab.domicilio,
            telefono: nuevoColab.telefono,
            correo_personal: nuevoColab.correo, // igual al backend
          }),
        }
      );

      if (!resp.ok) {
        throw new Error(
          `Error en la petición: ${resp.status} - ${resp.statusText}`
        );
      }

      const data = await resp.json();
      console.log("Colaborador creado:", data);

      // Aquí puedes hacer algo más con la respuesta, por ejemplo, actualizar la UI o mostrar un mensaje
    } catch (error) {
      console.error("Error al crear colaborador:", error);
      alert("No se pudo crear el colaborador.");
    }

    // Limpiar y cerrar
    setNuevoColab({
      nombre: "",
      area: "",
      nacimiento: "",
      curp: "",
      rfc: "",
      domicilio: "",
      telefono: "",
      correo: "",
    });
    setOpenModal(false);
    setModoEdicion(false);
    setIndexEdicion(null);
  };

  const handleEliminar = (index) => {
    const nuevos = [...colaboradores];
    nuevos.splice(index, 1);
    setColaboradores(nuevos);
  };

  return (
    <>
      {/* Título y Botón en la misma línea */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
          mb: 3,
          px: 2, // padding horizontal opcional
        }}
      >
        <Typography level="h1">Colaboradores</Typography>
        <Button onClick={abrirModalAgregar} variant="outlined">
          + Nuevo colaborador
        </Button>
      </Box>

      {/* Tabla */}
      <Card
        sx={{
          width: "99%",
          mx: "auto",
          p: 2,
          borderRadius: "md",
          boxShadow: "md",
          overflowX: "auto",
          mt: 3,
        }}
      >
        <table className="custom-table">
          <thead>
            <tr>
              <th>Nombre completo</th>
              <th>Área de trabajo</th>
              <th>Fecha de nacimiento</th>
              <th>CURP</th>
              <th>RFC</th>
              <th>Domicilio</th>
              <th>Teléfono</th>
              <th>Correo personal</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {colaboradores.map((colab, index) => (
              <tr key={index}>
                <td>{colab.nombre}</td>
                <td>{colab.area}</td>
                <td>{colab.nacimiento}</td>
                <td>{colab.curp}</td>
                <td>{colab.rfc}</td>
                <td>{colab.domicilio}</td>
                <td>{colab.telefono}</td>
                <td>{colab.correo}</td>
                <td>
                  <Button
                    size="sm"
                    onClick={() => abrirModalEditar(colab, index)}
                  >
                    Editar
                  </Button>{" "}
                  <Button
                    size="sm"
                    color="danger"
                    onClick={() => handleEliminar(index)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
            {colaboradores.length === 0 && (
              <tr>
                <td colSpan="9" style={{ textAlign: "center" }}>
                  No hay colaboradores registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>

      {/* Modal de Colaborador */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Sheet
          sx={{
            maxWidth: 500,
            mx: "auto",
            my: "5vh",
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
            backgroundColor: "#fff",
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          <ModalClose />
          <Typography level="h4" mb={2}>
            {modoEdicion ? "Editar colaborador" : "Nuevo colaborador"}
          </Typography>

          <Box display="flex" flexDirection="column" gap={2}>
            {[
              { label: "Nombre completo", key: "nombre" },
              { label: "Área de trabajo", key: "area" },
              { label: "Fecha de nacimiento", key: "nacimiento", type: "date" },
              { label: "CURP", key: "curp" },
              { label: "RFC", key: "rfc" },
              { label: "Domicilio", key: "domicilio" },
              { label: "Teléfono", key: "telefono", type: "number" },
              { label: "Correo personal", key: "correo", type: "text" },
            ].map(({ label, key, type = "text" }) => (
              <FormControl key={key}>
                <FormLabel>{label}</FormLabel>
                <Input
                  type={type}
                  value={nuevoColab[key]}
                  onChange={(e) =>
                    setNuevoColab({ ...nuevoColab, [key]: e.target.value })
                  }
                />
              </FormControl>
            ))}

            <Button onClick={handleGuardar} sx={{ mt: 2 }}>
              Guardar
            </Button>
          </Box>
        </Sheet>
      </Modal>
    </>
  );
}
