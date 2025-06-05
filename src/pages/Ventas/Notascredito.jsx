import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import Card from "@mui/joy/Card";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { useState } from "react";

export function Notascredito() {
  const [open, setOpen] = useState(false);
  const [notas, setNotas] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const [form, setForm] = useState({
    numero: "",
    fecha: "",
    cliente: "",
    estado: "",
    proyecto: "",
    referencia: "",
    importe: "",
    importePendiente: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const nuevasNotas = [...notas];
      nuevasNotas[editIndex] = form;
      setNotas(nuevasNotas);
    } else {
      setNotas([...notas, form]);
    }
    setForm({
      numero: "",
      fecha: "",
      cliente: "",
      estado: "",
      proyecto: "",
      referencia: "",
      importe: "",
      importePendiente: "",
    });
    setEditIndex(null);
    setOpen(false);
  };

  const handleEdit = (index) => {
    setForm(notas[index]);
    setEditIndex(index);
    setOpen(true);
  };

  const handleDelete = (index) => {
    const nuevasNotas = [...notas];
    nuevasNotas.splice(index, 1);
    setNotas(nuevasNotas);
  };

  return (
    <>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center", mt: 2 }}>
        <Typography level="h1" sx={{ ml: 1 }}>
          Notas de crédito
        </Typography>
        <Button
          startDecorator={<Add />}
          variant="outlined"
          size="sm"
          onClick={() => {
            setForm({
              numero: "",
              fecha: "",
              cliente: "",
              estado: "",
              proyecto: "",
              referencia: "",
              importe: "",
              importePendiente: "",
            });
            setEditIndex(null);
            setOpen(true);
          }}
        >
          Nueva nota de crédito
        </Button>
      </Box>

      {/* Modal para agregar/editar nota */}
      <Modal open={open} onClose={() => setOpen(false)} scroll="body">
        <ModalDialog sx={{ maxHeight: "90vh", overflowY: "auto" }}>
          <ModalClose />
          <Typography level="h4">
            {editIndex !== null
              ? "Editar nota de crédito"
              : "Nueva nota de crédito"}
          </Typography>
          <form onSubmit={handleSubmit}>
            {[
              { label: "#Nota de crédito", name: "numero", type: "number" },
              { label: "Fecha de la nota", name: "fecha", type: "date" },
              { label: "Cliente", name: "cliente" },
              { label: "Proyecto", name: "proyecto" },
              { label: "Referencia #", name: "referencia" },
              { label: "Importe", name: "importe", type: "number" },
              {
                label: "Importe pendiente",
                name: "importePendiente",
                type: "number",
              },
            ].map(({ label, name, type = "text" }) => (
              <FormControl sx={{ mt: 2 }} key={name}>
                <FormLabel>{label}</FormLabel>
                <Input
                  type={type}
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                />
              </FormControl>
            ))}

            <FormControl sx={{ mt: 2 }}>
              <FormLabel>Estado</FormLabel>
              <Select
                name="estado"
                value={form.estado}
                onChange={(e, value) => handleSelectChange("estado", value)}
              >
                <Option value="Pendiente">Pendiente</Option>
                <Option value="Pagado">Pagado</Option>
                <Option value="Cancelado">Cancelado</Option>
              </Select>
            </FormControl>

            <Button type="submit" sx={{ mt: 3 }}>
              {editIndex !== null ? "Actualizar" : "Guardar"}
            </Button>
          </form>
        </ModalDialog>
      </Modal>

      {/* TABLA */}
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
              <th>#Nota</th>
              <th>Fecha</th>
              <th>Cliente</th>
              <th>Estado</th>
              <th>Proyecto</th>
              <th>Referencia</th>
              <th>Importe</th>
              <th>Pendiente</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {notas.length === 0 ? (
              <tr>
                <td colSpan={9} style={{ textAlign: "center" }}>
                  No hay notas aún.
                </td>
              </tr>
            ) : (
              notas.map((nota, i) => (
                <tr key={i}>
                  <td>{nota.numero}</td>
                  <td>{nota.fecha}</td>
                  <td>{nota.cliente}</td>
                  <td>{nota.estado}</td>
                  <td>{nota.proyecto}</td>
                  <td>{nota.referencia}</td>
                  <td>{nota.importe}</td>
                  <td>{nota.importePendiente}</td>
                  <td>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Button
                        size="sm"
                        variant="soft"
                        onClick={() => handleEdit(i)}
                      >
                        <Edit fontSize="small" />
                      </Button>
                      <Button
                        size="sm"
                        variant="soft"
                        color="danger"
                        onClick={() => handleDelete(i)}
                      >
                        <Delete fontSize="small" />
                      </Button>
                    </Box>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </Card>
    </>
  );
}
