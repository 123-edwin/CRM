import { useState } from "react";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import Sheet from "@mui/joy/Sheet";
import Card from "@mui/joy/Card";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";

export function Presupuestos() {
  const [openModal, setOpenModal] = useState(false);
  const [presupuestos, setPresupuestos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const estados = ["Borrador", "Enviado", "Expirado", "Rechazado", "Aceptado"];

  const initialForm = {
    presupuesto: "",
    importe: "",
    impuesto: "",
    cliente: "",
    proyecto: "",
    etiquetas: [],
    fecha: "",
    fechaCaducidad: "",
    referencia: "",
    estado: "",
  };

  const [formData, setFormData] = useState(initialForm);

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const countByEstado = (estado) =>
    presupuestos.filter((p) => p.estado === estado).length;

  const handleGuardar = (e) => {
    e.preventDefault();

    if (
      formData.importe === "" ||
      isNaN(formData.importe) ||
      formData.fecha === "" ||
      formData.fechaCaducidad === ""
    ) {
      alert("Por favor completa correctamente importe y fechas.");
      return;
    }

    if (editIndex !== null) {
      const actualizados = [...presupuestos];
      actualizados[editIndex] = formData;
      setPresupuestos(actualizados);
      setEditIndex(null);
    } else {
      setPresupuestos((prev) => [...prev, formData]);
    }

    setFormData(initialForm);
    setOpenModal(false);
  };

  const handleEditar = (index) => {
    setFormData(presupuestos[index]);
    setEditIndex(index);
    setOpenModal(true);
  };

  const handleEliminar = (index) => {
    const confirm = window.confirm(
      "¿Estás seguro de eliminar este presupuesto?"
    );
    if (confirm) {
      setPresupuestos((prev) => prev.filter((_, i) => i !== index));
    }
  };

  return (
    <>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center", mt: 2 }}>
        <Typography level="h1" sx={{ ml: 1 }}>
          Presupuestos
        </Typography>

        <Button
          startDecorator={<Add />}
          type="button"
          variant="outlined"
          size="sm"
          onClick={() => {
            setFormData(initialForm);
            setEditIndex(null);
            setOpenModal(true);
          }}
        >
          Nuevo presupuesto
        </Button>
      </Box>

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
        {estados.map((estado, i) => {
          const colors = {
            Borrador: "body-xs",
            Enviado: "#0378ac",
            Expirado: "#e67001",
            Rechazado: "#b40202",
            Aceptado: "#239d02",
          };
          return (
            <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Typography sx={{ fontWeight: "lg", fontSize: "0.9rem" }}>
                {countByEstado(estado)}
              </Typography>
              <Typography
                level="body-xs"
                sx={{
                  fontWeight: "lg",
                  color: colors[estado] || "inherit",
                  fontSize: "0.9rem",
                }}
              >
                {estado}
              </Typography>
            </Box>
          );
        })}
      </Sheet>

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
        <table className="custom-table" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>#Presupuesto</th>
              <th>Importe</th>
              <th>Impuesto total</th>
              <th>Cliente</th>
              <th>Proyecto</th>
              <th>Etiquetas</th>
              <th>Fecha</th>
              <th>Fecha de caducidad</th>
              <th>Referencia #</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {presupuestos.length === 0 ? (
              <tr>
                <td colSpan={11} style={{ textAlign: "center" }}>
                  No hay presupuestos
                </td>
              </tr>
            ) : (
              presupuestos.map((p, i) => (
                <tr key={i}>
                  <td>{p.presupuesto || "-"}</td>
                  <td>{p.importe || "-"}</td>
                  <td>{p.impuesto || "-"}</td>
                  <td>{p.cliente || "-"}</td>
                  <td>{p.proyecto || "-"}</td>
                  <td>
                    {p.etiquetas.length > 0 ? p.etiquetas.join(", ") : "-"}
                  </td>
                  <td>{p.fecha || "-"}</td>
                  <td>{p.fechaCaducidad || "-"}</td>
                  <td>{p.referencia || "-"}</td>
                  <td>{p.estado || "-"}</td>
                  <td>
                    <IconButton
                      onClick={() => handleEditar(i)}
                      size="sm"
                      variant="soft"
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      onClick={() => handleEliminar(i)}
                      size="sm"
                      variant="soft"
                      color="danger"
                    >
                      <Delete />
                    </IconButton>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </Card>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <ModalDialog
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          sx={{ maxHeight: "80vh", overflowY: "auto", width: 500 }}
        >
          <ModalClose />

          <Typography id="modal-title" component="h2" level="h2" mb={2}>
            {editIndex !== null ? "Editar Presupuesto" : "Nuevo Presupuesto"}
          </Typography>

          <form onSubmit={handleGuardar}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box>
                <Typography level="body-sm" fontWeight="lg" color="black">
                  #Presupuesto
                </Typography>
                <Input
                  type="num"
                  name="presupuesto"
                  value={formData.presupuesto}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  fullWidth
                  required
                />
              </Box>

              <Box>
                <Typography level="body-sm" fontWeight="lg" color="black">
                  Importe
                </Typography>
                <Input
                  type="number"
                  name="importe"
                  value={formData.importe}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  fullWidth
                  required
                />
              </Box>

              <Box>
                <Typography level="body-sm" fontWeight="lg" color="black">
                  Impuesto total
                </Typography>
                <Input
                  type="number"
                  name="impuesto"
                  value={formData.impuesto}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  fullWidth
                />
              </Box>

              <Box>
                <Typography level="body-sm" fontWeight="lg" color="black">
                  Cliente
                </Typography>
                <Input
                  type="text"
                  name="cliente"
                  value={formData.cliente}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  fullWidth
                  required
                />
              </Box>

              <Box>
                <Typography level="body-sm" fontWeight="lg" color="black">
                  Proyecto
                </Typography>
                <Input
                  type="text"
                  name="proyecto"
                  value={formData.proyecto}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  fullWidth
                />
              </Box>

              <Box>
                <Typography level="body-sm" fontWeight="lg" color="black">
                  Etiquetas
                </Typography>
                <Select
                  multiple
                  name="etiquetas"
                  value={formData.etiquetas}
                  onChange={(event, newValue) =>
                    handleChange("etiquetas", newValue)
                  }
                  fullWidth
                >
                  <Option value="Diseño de logo">Diseño de logo</Option>
                  <Option value="Diseño gráfico">Diseño gráfico</Option>
                  <Option value="Diseño web">Diseño web</Option>
                  <Option value="Plan SEM">Plan SEM</Option>
                  <Option value="Redes sociales">Redes sociales</Option>
                  <Option value="Sesión fotográfica">Sesión fotográfica</Option>
                  <Option value="Video">Video</Option>
                </Select>
              </Box>

              <Box>
                <Typography level="body-sm" fontWeight="lg" color="black">
                  Fecha
                </Typography>
                <Input
                  type="date"
                  name="fecha"
                  value={formData.fecha}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  fullWidth
                  required
                />
              </Box>

              <Box>
                <Typography level="body-sm" fontWeight="lg" color="black">
                  Fecha de caducidad
                </Typography>
                <Input
                  type="date"
                  name="fechaCaducidad"
                  value={formData.fechaCaducidad}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  fullWidth
                  required
                />
              </Box>

              <Box>
                <Typography level="body-sm" fontWeight="lg" color="black">
                  Referencia #
                </Typography>
                <Input
                  type="text"
                  name="referencia"
                  value={formData.referencia}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  fullWidth
                />
              </Box>

              <Box>
                <Typography level="body-sm" fontWeight="lg" color="black">
                  Estado
                </Typography>
                <Select
                  name="estado"
                  value={formData.estado}
                  onChange={(event, newValue) =>
                    handleChange("estado", newValue)
                  }
                  fullWidth
                  required
                >
                  {estados.map((estado) => (
                    <Option key={estado} value={estado}>
                      {estado}
                    </Option>
                  ))}
                </Select>
              </Box>

              <Button type="submit" variant="solid" color="primary" fullWidth>
                Guardar
              </Button>
            </Box>
          </form>
        </ModalDialog>
      </Modal>
    </>
  );
}
