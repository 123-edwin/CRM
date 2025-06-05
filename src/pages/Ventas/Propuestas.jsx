import { useState } from "react";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import Sheet from "@mui/joy/Sheet";
import Card from "@mui/joy/Card";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

export function Propuestas() {
  const [open, setOpen] = useState(false);
  const [propuestas, setPropuestas] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const [formData, setFormData] = useState({
    tema: "",
    para: "",
    total: "",
    fecha: "",
    validaHasta: "",
    proyecto: "",
    etiquetas: [],
    estado: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleOpenCreate = () => {
    setFormData({
      tema: "",
      para: "",
      total: "",
      fecha: "",
      validaHasta: "",
      proyecto: "",
      etiquetas: [],
      estado: "",
    });
    setEditIndex(null);
    setOpen(true);
  };

  const handleEdit = (index) => {
    setFormData(propuestas[index]);
    setEditIndex(index);
    setOpen(true);
  };

  const handleDelete = (index) => {
    const confirm = window.confirm("¿Estás seguro de eliminar esta propuesta?");
    if (confirm) {
      const nuevasPropuestas = [...propuestas];
      nuevasPropuestas.splice(index, 1);
      setPropuestas(nuevasPropuestas);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaPropuesta = {
      ...formData,
      id: editIndex !== null ? propuestas[editIndex].id : propuestas.length + 1,
      fechaCreacion:
        editIndex !== null
          ? propuestas[editIndex].fechaCreacion
          : new Date().toLocaleDateString(),
    };

    if (editIndex !== null) {
      const actualizadas = [...propuestas];
      actualizadas[editIndex] = nuevaPropuesta;
      setPropuestas(actualizadas);
    } else {
      setPropuestas((prev) => [...prev, nuevaPropuesta]);
    }

    setOpen(false);
    setEditIndex(null);
  };

  return (
    <>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center", mt: 2 }}>
        <Typography level="h1" sx={{ ml: 1 }}>
          Propuestas
        </Typography>
        <Button
          startDecorator={<Add />}
          type="button"
          variant="outlined"
          size="sm"
          onClick={handleOpenCreate}
        >
          Nueva propuesta
        </Button>
      </Box>

      {/* Contador por estado */}
      <Sheet
        sx={{
          bgcolor: "background.level1",
          borderRadius: "sm",
          p: 2,
          my: 1.5,
          display: "flex",
          gap: 2,
          "& > div": { flex: 1 },
        }}
      >
        {["Por iniciar", "En progreso", "En espera", "Completo"].map(
          (estado, i) => (
            <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Typography sx={{ fontWeight: "lg", fontSize: "0.9rem" }}>
                {propuestas.filter((p) => p.estado === estado).length}
              </Typography>
              <Typography
                level="body-xs"
                sx={{
                  fontWeight: "lg",
                  fontSize: "0.9rem",
                }}
              >
                {estado}
              </Typography>
            </Box>
          )
        )}
      </Sheet>

      {/* Tabla de propuestas */}
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
              <th>#Propuesta</th>
              <th>Tema</th>
              <th>Para</th>
              <th>Total</th>
              <th>Fecha</th>
              <th>Valida hasta</th>
              <th>Proyecto</th>
              <th>Etiquetas</th>
              <th>Fecha de creación</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {propuestas.length > 0 ? (
              propuestas.map((p, index) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.tema}</td>
                  <td>{p.para}</td>
                  <td>{p.total}</td>
                  <td>{p.fecha}</td>
                  <td>{p.validaHasta}</td>
                  <td>{p.proyecto}</td>
                  <td>{p.etiquetas.join(", ")}</td>
                  <td>{p.fechaCreacion}</td>
                  <td>{p.estado}</td>
                  <td>
                    <Stack direction="row" spacing={1}>
                      <Button
                        size="sm"
                        variant="soft"
                        onClick={() => handleEdit(index)}
                      >
                        <Edit fontSize="small" />
                      </Button>
                      <Button
                        size="sm"
                        variant="soft"
                        color="danger"
                        onClick={() => handleDelete(index)}
                      >
                        <Delete fontSize="small" />
                      </Button>
                    </Stack>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={11} style={{ textAlign: "center" }}>
                  No hay propuestas registradas
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>

      {/* Modal de creación/edición */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          sx={{
            maxHeight: "80vh",
            overflow: "auto",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Typography level="h4" mb={1}>
              {editIndex !== null ? "Editar propuesta" : "Nueva propuesta"}
            </Typography>

            <FormControl sx={{ mb: 1 }}>
              <FormLabel>Tema</FormLabel>
              <Input
                name="tema"
                value={formData.tema}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl sx={{ mb: 1 }}>
              <FormLabel>Para</FormLabel>
              <Input
                name="para"
                value={formData.para}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl sx={{ mb: 1 }}>
              <FormLabel>Total</FormLabel>
              <Input
                name="total"
                type="number"
                value={formData.total}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl sx={{ mb: 1 }}>
              <FormLabel>Fecha</FormLabel>
              <Input
                name="fecha"
                type="date"
                value={formData.fecha}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl sx={{ mb: 1 }}>
              <FormLabel>Válida hasta</FormLabel>
              <Input
                name="validaHasta"
                type="date"
                value={formData.validaHasta}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl sx={{ mb: 1 }}>
              <FormLabel>Proyecto</FormLabel>
              <Input
                name="proyecto"
                value={formData.proyecto}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl sx={{ mb: 1 }}>
              <FormLabel>Etiquetas</FormLabel>
              <Select
                multiple
                value={formData.etiquetas}
                onChange={(event, newValue) =>
                  setFormData((prev) => ({ ...prev, etiquetas: newValue }))
                }
              >
                <Option value="Diseño de logo">Diseño de logo</Option>
                <Option value="Diseño gráfico">Diseño gráfico</Option>
                <Option value="Diseño web">Diseño web</Option>
                <Option value="Plan SEM">Plan SEM</Option>
                <Option value="Redes sociales">Redes sociales</Option>
                <Option value="Sesión fotográfica">Sesión fotográfica</Option>
                <Option value="Video">Video</Option>
              </Select>
            </FormControl>

            <FormControl sx={{ mb: 2 }}>
              <FormLabel>Estado</FormLabel>
              <Select
                value={formData.estado}
                onChange={(event, newValue) =>
                  setFormData((prev) => ({ ...prev, estado: newValue }))
                }
                required
              >
                <Option value="Por iniciar">Por iniciar</Option>
                <Option value="En progreso">En progreso</Option>
                <Option value="En espera">En espera</Option>
                <Option value="Completo">Completo</Option>
              </Select>
            </FormControl>

            <Button type="submit">
              {editIndex !== null ? "Actualizar" : "Guardar"}
            </Button>
          </form>
        </ModalDialog>
      </Modal>
    </>
  );
}
