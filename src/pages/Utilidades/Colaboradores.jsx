import { useState, useEffect } from "react";
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

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { getEmployees } from "@s/employeesServices";

export function Colaboradores() {
  const [openModal, setOpenModal] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [indexEdicion, setIndexEdicion] = useState(null);

  const [colaboradores, setColaboradores] = useState([]);

  useEffect(() => {
    const fetchColab = async () => {
      try {
        const fetchData = await getEmployees();
        setColaboradores(fetchData);
      } catch (error) {
        console.error("Error obteniendo empleados", error);
      }
    };
    fetchColab();
  }, []);

  const [nuevoColab, setNuevoColab] = useState({
    id: null,
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
      id: null,
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

  const abrirModalEditar = async (colab, index) => {
    try {
      const resp = await fetch(
        `http://localhost:8080/employees/getColaborator/${colab.id}`
      );
      if (!resp.ok) throw new Error("Error al obtener colaborador");

      const data = await resp.json();

      setNuevoColab({
        id: data.id,
        nombre: data.nombre,
        area: data.area_trabajo,
        nacimiento: data.fecha_nacimiento,
        curp: data.curp,
        rfc: data.rfc,
        domicilio: data.domicilio,
        telefono: data.telefono,
        correo: data.correo_personal,
      });

      setModoEdicion(true);
      setIndexEdicion(index);
      setOpenModal(true);
    } catch (error) {
      console.error("Error al cargar datos del colaborador:", error);
      alert("No se pudo cargar el colaborador para editar.");
    }
  };

  const handleGuardar = async () => {
    const url = modoEdicion
      ? `http://localhost:8080/employees/updateColaborator/${nuevoColab.id}`
      : "http://localhost:8080/employees/createColaborator";

    const method = modoEdicion ? "PUT" : "POST";

    try {
      const resp = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: nuevoColab.nombre,
          area_trabajo: nuevoColab.area,
          fecha_nacimiento: nuevoColab.nacimiento,
          curp: nuevoColab.curp,
          rfc: nuevoColab.rfc,
          domicilio: nuevoColab.domicilio,
          telefono: nuevoColab.telefono,
          correo_personal: nuevoColab.correo,
        }),
      });

      if (!resp.ok) {
        throw new Error(
          `Error en la petición: ${resp.status} - ${resp.statusText}`
        );
      }

      const data = await resp.json();
      const nuevo = {
        id: data.employee.id,
        nombre: data.employee.nombre,
        area: data.employee.area_trabajo,
        nacimiento: data.employee.fecha_nacimiento,
        curp: data.employee.curp,
        rfc: data.employee.rfc,
        domicilio: data.employee.domicilio,
        telefono: data.employee.telefono,
        correo: data.employee.correo_personal,
      };

      if (modoEdicion) {
        const actualizados = [...colaboradores];
        actualizados[indexEdicion] = nuevo;
        setColaboradores(actualizados);
      } else {
        setColaboradores([...colaboradores, nuevo]);
      }
    } catch (error) {
      console.error("Error al guardar colaborador:", error);
      alert("No se pudo guardar el colaborador.");
    }

    setNuevoColab({
      id: null,
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

  const handleEliminar = async (index) => {
    const colaborador = colaboradores[index];

    const confirmar = window.confirm(
      `¿Seguro que deseas eliminar a ${colaborador.nombre}?`
    );
    if (!confirmar) return;

    try {
      const resp = await fetch(
        `http://localhost:8080/employees/deleteColaborator/${colaborador.id}`,
        {
          method: "DELETE",
        }
      );

      if (!resp.ok) {
        throw new Error("Error al eliminar colaborador");
      }

      const data = await resp.json();
      console.log("Colaborador eliminado:", data);

      // Eliminar de la UI
      const nuevos = [...colaboradores];
      nuevos.splice(index, 1);
      setColaboradores(nuevos);
    } catch (error) {
      console.error("Error al eliminar colaborador:", error);
      alert("No se pudo eliminar el colaborador.");
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
          mb: 3,
          px: 2,
        }}
      >
        <Typography level="h1">Colaboradores</Typography>
        <Button onClick={abrirModalAgregar} variant="outlined">
          + Nuevo colaborador
        </Button>
      </Box>

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
              <tr key={colab.id || index}>
                <td>{colab.nombre}</td>
                <td>{colab.area_trabajo}</td>
                <td>{colab.fecha_nacimiento}</td>
                <td>{colab.curp}</td>
                <td>{colab.rfc}</td>
                <td>{colab.domicilio}</td>
                <td>{colab.telefono}</td>
                <td>{colab.correo_personal}</td>
                <td>
                  <Box display="flex" gap={1}>
                    <Tooltip title="Editar">
                      <IconButton
                        size="small"
                        onClick={() => abrirModalEditar(colab, index)}
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Eliminar">
                      <IconButton
                        size="small"
                        color="error"
                        onClick={() => handleEliminar(index)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
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
