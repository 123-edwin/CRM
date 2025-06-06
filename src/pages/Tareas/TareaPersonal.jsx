import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import Stack from "@mui/joy/Stack";
import Add from "@mui/icons-material/Add";
import Chip from "@mui/joy/Chip";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Divider from "@mui/joy/Divider";
import { useState } from "react";

export function TareaPersonal() {
  const [open, setOpen] = useState(false);
  const [tareas, setTareas] = useState([]);

  // Estado para el formulario
  const [form, setForm] = useState({
    titulo: "",
    texto: "",
    fecha: "",
    estado: "Pendiente",
  });

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Guardar nueva tarea
  const handleSubmit = (event) => {
    event.preventDefault();
    setTareas((prev) => [
      ...prev,
      {
        titulo: form.titulo,
        texto: form.texto,
        fecha: form.fecha,
        estado: form.estado,
        color:
          form.estado === "Completada"
            ? "success"
            : form.estado === "En proceso"
            ? "primary"
            : "danger",
        tachado: form.estado === "Completada",
      },
    ]);
    setForm({
      titulo: "",
      texto: "",
      fecha: "",
      estado: "Pendiente",
    });
    setOpen(false);
  };

  // Contadores
  const total = tareas.length;
  const completadas = tareas.filter((t) => t.estado === "Completada").length;
  const enProceso = tareas.filter((t) => t.estado === "En proceso").length;
  const pendientes = tareas.filter((t) => t.estado === "Pendiente").length;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          mt: 4,
          px: 2,
          flexWrap: "nowrap",
          overflowX: "auto",
        }}
      >
        {/* ESTADOS DE LAS TAREAS */}
        <Card
          sx={{
            width: "350px",
            minWidth: 200,
            height: "400px",
            p: 2,
            borderRadius: "md",
            boxShadow: "md",
          }}
        >
          {/* TITULO DE TO DO */}
          <Box
            sx={{
              backgroundColor: "#387fc0 ",
              p: 1,
              borderRadius: "8px 8px 0 0",
            }}
          >
            <Typography level="h3" sx={{ color: "#fff" }}>
              TO DO LIST
            </Typography>
          </Box>

          <Box sx={{ backgroundColor: "#d7edff" }}>
            <List>
              {/* BOTÓN NUEVA TAREA */}
              <Button
                variant="plain"
                color="neutral"
                startDecorator={<Add />}
                onClick={() => setOpen(true)}
                sx={{
                  justifyContent: "flex-start",
                  width: "200px",
                  pl: 1.5,
                }}
              >
                Nueva tarea
              </Button>

              <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog>
                  <DialogTitle>Agregar tarea</DialogTitle>
                  <form onSubmit={handleSubmit}>
                    <Stack spacing={2}>
                      <FormControl>
                        <FormLabel>Título de la tarea</FormLabel>
                        <Input
                          name="titulo"
                          value={form.titulo}
                          onChange={handleChange}
                          autoFocus
                          required
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Descripción</FormLabel>
                        <Input
                          name="texto"
                          value={form.texto}
                          onChange={handleChange}
                          required
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Fecha</FormLabel>
                        <Input
                          name="fecha"
                          type="date"
                          value={form.fecha}
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Estado</FormLabel>
                        <select
                          name="estado"
                          value={form.estado}
                          onChange={handleChange}
                          style={{
                            padding: "8px",
                            borderRadius: "6px",
                            border: "1px solid #ccc",
                          }}
                        >
                          <option value="Pendiente">Pendiente</option>
                          <option value="En proceso">En proceso</option>
                          <option value="Completada">Completada</option>
                        </select>
                      </FormControl>
                      <Box sx={{ display: "flex", gap: 2 }}>
                        <Button type="submit" variant="solid" color="primary">
                          Guardar
                        </Button>
                        <Button
                          variant="outlined"
                          color="neutral"
                          onClick={() => setOpen(false)}
                        >
                          Cerrar
                        </Button>
                      </Box>
                    </Stack>
                  </form>
                </ModalDialog>
              </Modal>

              <Divider component="li" />

              {/* Todas mis tareas */}
              <ListItem>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Typography level="body-md">
                    <strong>Todas mis tareas</strong>
                  </Typography>
                  <Box
                    sx={{
                      backgroundColor: "#7e57c2",
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{ color: "#fff", fontSize: 14, fontWeight: "bold" }}
                    >
                      {total}
                    </Typography>
                  </Box>
                </Box>
              </ListItem>

              <Divider component="li" />

              {/* Completadas */}
              <ListItem>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Typography level="body-md">Completadas</Typography>
                  <Box
                    sx={{
                      backgroundColor: "#4caf50",
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{ color: "#fff", fontSize: 14, fontWeight: "bold" }}
                    >
                      {completadas}
                    </Typography>
                  </Box>
                </Box>
              </ListItem>

              <Divider component="li" />

              {/* En proceso */}
              <ListItem>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Typography level="body-md">En proceso</Typography>
                  <Box
                    sx={{
                      backgroundColor: "#3f51b5",
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{ color: "#fff", fontSize: 14, fontWeight: "bold" }}
                    >
                      {enProceso}
                    </Typography>
                  </Box>
                </Box>
              </ListItem>

              <Divider component="li" />

              {/* Pendiente */}
              <ListItem>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Typography level="body-md">Pendiente</Typography>
                  <Box
                    sx={{
                      backgroundColor: "#f44336",
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{ color: "#fff", fontSize: 14, fontWeight: "bold" }}
                    >
                      {pendientes}
                    </Typography>
                  </Box>
                </Box>
              </ListItem>

              <Divider component="li" />

              {/* Basura */}
              <ListItem>
                <Typography level="body-md">Basura</Typography>
              </ListItem>
            </List>
          </Box>
        </Card>

        {/* TODAS MIS TAREAS */}
        <Card
          sx={{
            width: "1300px",
            minWidth: 400,
            p: 2,
            borderRadius: "md",
            boxShadow: "md",
          }}
        >
          <Typography level="h3" sx={{ mt: 1 }}>
            Todas mis tareas
          </Typography>
          <Divider />

          {tareas.map(({ estado, color, texto, fecha, tachado, titulo }, i) => (
            <Box key={i}>
              <ListItem alignItems="flex-start">
                <Box>
                  <Typography level="body-md">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <strong>{titulo}</strong>
                      <Chip size="sm" color={color} variant="soft">
                        {estado}
                      </Chip>
                    </Box>
                    {tachado ? <s>{texto}</s> : <p>{texto}</p>}
                  </Typography>
                  <Typography level="body-sm" color="neutral">
                    {fecha}
                  </Typography>
                </Box>
              </ListItem>
              <Divider />
            </Box>
          ))}
        </Card>
      </Box>
    </>
  );
}
