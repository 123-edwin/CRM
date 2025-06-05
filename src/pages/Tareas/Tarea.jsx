import {
  Box,
  Button,
  Card,
  Typography,
  Modal,
  ModalClose,
  Sheet,
  FormControl,
  FormLabel,
  Input,
  Select,
  Option,
  Textarea,
  Stack,
} from "@mui/joy";

import { getTarea } from "@s/tareaServices";

import { useState, useEffect } from "react";

export function Tarea() {
  const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  const [openAgregarModal, setOpenAgregarModal] = useState(false);



useEffect(() => {
  const fetchColab = async () => {
    try {
      const fetchData = await getTarea(); // ← obtiene del backend

      const tareasAgrupadas = {
        Lunes: [],
        Martes: [],
        Miércoles: [],
        Jueves: [],
        Viernes: [],
        Sábado: [],
      };

      fetchData.forEach((tarea) => {
        if (tareasAgrupadas[tarea.dia]) {
          tareasAgrupadas[tarea.dia].push(tarea);
        } else {
          console.warn("Día no reconocido:", tarea.dia);
        }
      });

      setTareasPorDia(tareasAgrupadas);
    } catch (error) {
      console.error("Error obteniendo tareas", error);
    }
  };

  fetchColab();
}, []);




  // Nuevo estado para modal detalle
  const [openDetalleModal, setOpenDetalleModal] = useState(false);
  // Nuevo estado para tarea seleccionada en detalle
  const [tareaSeleccionada, setTareaSeleccionada] = useState(null);

  // Nuevo estado para modo edición
  const [modoEdicion, setModoEdicion] = useState(false);

  const [tareasPorDia, setTareasPorDia] = useState({
    Lunes: [],
    Martes: [],
    Miercoles: [],
    Jueves: [],
    Viernes: [],
    Sabado: [],
  });

  // Estado para tarea nueva o edición (cuando modoEdicion=true)
  const [nuevaTarea, setNuevaTarea] = useState({
    dia: "Lunes",
    titulo: "",
    numero_tarea: "",
    estado: "",
    prioridad: "",
    fecha_inicio: "",
    fecha_vencimiento: "",
    asignado: "",
    creador: "",
    etiqueta: "",
    finalidad: "",
    control_cambio: "",
    tipo_tarea: "",
    descripcion: "",
  });

  // Maneja los cambios en el formulario
  function handleChange(e) {
    const { name, value } = e.target;
    setNuevaTarea((prev) => ({ ...prev, [name]: value }));
  }

  // Guardar tarea nueva o editar
  function guardarTarea() {
    if (
      !nuevaTarea.numero_tarea ||
      !nuevaTarea.titulo ||
      !nuevaTarea.estado ||
      !nuevaTarea.prioridad ||
      !nuevaTarea.fecha_vencimiento ||
      !nuevaTarea.asignado
    ) {
      alert("Favor de llenar los campos marcados con asterisco");
      return;
    }
    if (modoEdicion) {
      // Edición: actualizar la tarea en tareasPorDia
      setTareasPorDia((prev) => {
        const listaDelDia = prev[nuevaTarea.dia];
        const idx = listaDelDia.findIndex(
          (t) =>
            t.numero_tarea === tareaSeleccionada.numero_tarea &&
            t.titulo === tareaSeleccionada.titulo
        );
        if (idx === -1) return prev; // no encontrada, no cambia nada

        // Actualizar lista con la tarea modificada
        const nuevaLista = [...listaDelDia];
        nuevaLista[idx] = nuevaTarea;

        // Si el día cambió, removemos de un día y agregamos en otro
        if (nuevaTarea.dia !== tareaSeleccionada.dia) {
          // Removemos la antigua de su día
          const listaOriginal = prev[tareaSeleccionada.dia].filter(
            (_, i) => i !== idx
          );
          return {
            ...prev,
            [tareaSeleccionada.dia]: listaOriginal,
            [nuevaTarea.dia]: [...prev[nuevaTarea.dia], nuevaTarea],
          };
        }

        return { ...prev, [nuevaTarea.dia]: nuevaLista };
      });
    } else {
      // Nueva tarea
      setTareasPorDia((prev) => ({
        ...prev,
        [nuevaTarea.dia]: [...prev[nuevaTarea.dia], nuevaTarea],
      }));
    }

    // Cerrar modales y resetear estados
    setOpenAgregarModal(false);
    setOpenDetalleModal(false);
    setModoEdicion(false);
    setTareaSeleccionada(null);
    setNuevaTarea({
      dia: "Lunes",
      titulo: "",
      numero_tarea: "",
      estado: "",
      prioridad: "",
      fecha_inicio: "",
      fecha_vencimiento: "",
      asignado: "",
      creador: "",
      etiqueta: "",
      finalidad: "",
      control_cambio: "",
      tipo_tarea: "",
      descripcion: "",
    });
  }

  // Abrir modal detalle con tarea seleccionada
  function abrirDetalle(tarea) {
    setTareaSeleccionada(tarea);
    setOpenDetalleModal(true);
  }

  // Botón Editar: abre modal de agregar en modo edición con datos cargados
  function editarTarea() {
    setModoEdicion(true);
    setNuevaTarea(tareaSeleccionada);
    setOpenAgregarModal(true);
    setOpenDetalleModal(false);
  }

  // Botón eliminar: elimina la tarea del día correspondiente
  function eliminarTarea() {
    setTareasPorDia((prev) => {
      const nuevaLista = prev[tareaSeleccionada.dia].filter(
        (t) =>
          !(
            t.numero_tarea === tareaSeleccionada.numero_tarea &&
            t.titulo === tareaSeleccionada.titulo
          )
      );
      return { ...prev, [tareaSeleccionada.dia]: nuevaLista };
    });
    setOpenDetalleModal(false);
    setTareaSeleccionada(null);
  }

  return (
    <>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center", mt: 2 }}>
        <Typography level="h1" sx={{ ml: 1 }}>
          Tareas
        </Typography>
        <Button
          type="button"
          variant="solid"
          size="sm"
          onClick={() => {
            setModoEdicion(false);
            setNuevaTarea({
              dia: "Lunes",
              titulo: "",
              numero_tarea: "",
              estado: "",
              prioridad: "",
              fecha_inicio: "",
              fecha_vencimiento: "",
              asignado: "",
              creador: "",
              etiqueta: "",
              finalidad: "",
              control_cambio: "",
              tipo_tarea: "",
              descripcion: "",
            });
            setOpenAgregarModal(true);
          }}
        >
          Agregar tarea
        </Button>
      </Box>

      {/* Cards de días */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          mt: 3,
          px: 2,
          flexWrap: "nowrap",
          overflowX: "auto",
        }}
      >
        {dias.map((dia) => (
          <Card
            key={dia}
            sx={{
              width: "350px",
              minWidth: 200,
              height: "500px",
              p: 2,
              borderRadius: "md",
              boxShadow: "md",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#4f7cbd",
                p: 1,
                borderRadius: "8px 8px 0 0",
              }}
            >
              <Typography level="h3" sx={{ color: "#fff" }}>
                {dia}
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "#c8dfff",
                p: 2,
                height: "100%",
                overflowY: "auto",
                flexGrow: 1,
              }}
            >
              {tareasPorDia[dia].length === 0 ? (
                <Typography sx={{ fontStyle: "italic", color: "#555" }}>
                  Sin tareas
                </Typography>
              ) : (
                tareasPorDia[dia].map((tarea, index) => (
                  <Box
                    key={index}
                    sx={{
                      mb: 1,
                      p: 1,
                      borderRadius: "sm",
                      backgroundColor: "#e1e9ff",
                      boxShadow: "sm",
                      cursor: "pointer",
                    }}
                    onClick={() => abrirDetalle(tarea)}
                  >
                    <Box>
                      <Typography
                        fontWeight="bold"
                        sx={{
                          wordBreak: "break-word",
                          overflowWrap: "break-word",
                        }}
                      >
                        #{tarea.numero_tarea} - {tarea.titulo}
                      </Typography>
                      <Typography level="body3">
                        Estado: {tarea.estado}
                      </Typography>
                      <Typography level="body3">
                        Prioridad: {tarea.prioridad}
                      </Typography>
                      <Typography level="body3">
                        Asignado: {tarea.asignado}
                      </Typography>
                      <Typography level="body3">
                        Vence: {tarea.fecha_vencimiento || "Sin fecha"}
                      </Typography>
                    </Box>
                  </Box>
                ))
              )}
            </Box>
          </Card>
        ))}
      </Box>

      {/* Modal para agregar/editar tarea */}
      <Modal open={openAgregarModal} onClose={() => setOpenAgregarModal(false)}>
        <Sheet
          sx={{
            maxWidth: 600,
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
            {modoEdicion ? "Editar tarea" : "Agregar nueva tarea"}
          </Typography>

          {/* Formulario */}
          <Box display="flex" flexDirection="column" gap={2}>
            <FormControl>
              <FormLabel>Día</FormLabel>
              <Select
                name="dia"
                value={nuevaTarea.dia}
                onChange={(e, val) =>
                  setNuevaTarea((prev) => ({ ...prev, dia: val }))
                }
              >
                {dias.map((dia) => (
                  <Option key={dia} value={dia}>
                    {dia}
                  </Option>
                ))}
              </Select>
            </FormControl>

            <FormControl required>
              <FormLabel>Número de tarea</FormLabel>
              <Input
                name="numero_tarea"
                type="number"
                value={nuevaTarea.numero_tarea}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl required>
              <FormLabel>Título</FormLabel>
              <Input
                name="titulo"
                value={nuevaTarea.titulo}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl required>
              <FormLabel>Estado</FormLabel>
              <Select
                name="estado"
                value={nuevaTarea.estado}
                onChange={(e, val) =>
                  setNuevaTarea((prev) => ({ ...prev, estado: val }))
                }
              >
                <Option value="Por iniciar">Por iniciar</Option>
                <Option value="En progreso">En progreso</Option>
                <Option value="En espera">En espera</Option>
                <Option value="Completo">Completo</Option>
              </Select>
            </FormControl>

            <FormControl required>
              <FormLabel>Prioridad</FormLabel>
              <Select
                name="prioridad"
                value={nuevaTarea.prioridad}
                onChange={(e, val) =>
                  setNuevaTarea((prev) => ({ ...prev, prioridad: val }))
                }
              >
                <Option value="Alto">Alto</Option>
                <Option value="Medio">Medio</Option>
                <Option value="Bajo">Bajo</Option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Fecha inicio</FormLabel>
              <Input
                name="fecha_inicio"
                type="date"
                value={nuevaTarea.fecha_inicio}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl required>
              <FormLabel>Fecha vencimiento</FormLabel>
              <Input
                name="fecha_vencimiento"
                type="date"
                value={nuevaTarea.fecha_vencimiento}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl required>
              <FormLabel>Asignado</FormLabel>
              <Input
                name="asignado"
                value={nuevaTarea.asignado}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Creador</FormLabel>
              <Input
                name="creador"
                value={nuevaTarea.creador}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Etiqueta</FormLabel>
              <Select
                name="etiqueta"
                value={nuevaTarea.etiqueta}
                onChange={(e, val) =>
                  handleChange({ target: { name: "etiqueta", value: val } })
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

            <FormControl>
              <FormLabel>Finalidad</FormLabel>
              <Select
                name="finalidad"
                value={nuevaTarea.finalidad}
                onChange={(e, val) =>
                  handleChange({ target: { name: "finalidad", value: val } })
                }
              >
                <Option value="Publicación">Publicación</Option>
                <Option value="Historia">Historia</Option>
                <Option value="Portada">Portada</Option>
                <Option value="Perfil">Perfil</Option>
                <Option value="Logo">Logo</Option>
                <Option value="Icono">Icono</Option>
                <Option value="Campaña Facebook Ads">
                  Campaña Facebook Ads
                </Option>
                <Option value="Blog">Blog</Option>
                <Option value="Manual de identidad">Manual de identidad</Option>
                <Option value="Díptico">Díptico</Option>
                <Option value="Tríptico">Tríptico</Option>
                <Option value="Volante">Volante</Option>
                <Option value="Impresión">Impresión</Option>
                <Option value="Brochure">Brochure</Option>
                <Option value="Firma electrónica">Firma electrónica</Option>
                <Option value="Tarjeta de presentación">
                  Tarjeta de presentación
                </Option>
                <Option value="Etiqueta">Etiqueta</Option>
                <Option value="Horario">Horario</Option>
                <Option value="Nota">Nota</Option>
                <Option value="Proyecto Cofepris">Proyecto Cofepris</Option>
                <Option value="Calcomanía">Calcomanía</Option>
                <Option value="Pantalla">Pantalla</Option>
                <Option value="Lona">Lona</Option>
                <Option value="Espectacular">Espectacular</Option>
                <Option value="Edición y retoque de fotos">
                  Edición y retoque de fotos
                </Option>
                <Option value="Camioneta/Carro">Camioneta/Carro</Option>
                <Option value="Reel">Reel</Option>
                <Option value="Grabación video">Grabación video</Option>
                <Option value="Sesión fotografica">Sesión fotografica</Option>
                <Option value="Edición video">Edición video</Option>
                <Option value="Scouting">Scouting</Option>
                <Option value="GIF">GIF</Option>
                <Option value="Diseño web (comienza)">
                  Diseño web (comienza)
                </Option>
                <Option value="Diseño web (crece)">Diseño web (crece)</Option>
                <Option value="Diseño web (corporativo)">
                  Diseño web (corporativo)
                </Option>
                <Option value="Shopify">Shopify</Option>
                <Option value="Banner">Banner</Option>
                <Option value="Productos promocionales">
                  Productos promocionales
                </Option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Control de cambio</FormLabel>
              <Select
                name="control_cambio"
                value={nuevaTarea.control_cambio}
                onChange={(e, val) =>
                  handleChange({
                    target: { name: "control_cambio", value: val },
                  })
                }
              >
                <Option value="Diseño inicial">Diseño inicial</Option>
                <Option value="Cambio 1">Cambio 1</Option>
                <Option value="Cambio 2">Cambio 2</Option>
                <Option value="Cambio 3">Cambio 3</Option>
                <Option value="Cambio 4">Cambio 4</Option>
                <Option value="Cambio 5">Cambio 5</Option>
                <Option value="Cambio 6">Cambio 6</Option>
                <Option value="Cambio 7">Cambio 7</Option>
                <Option value="Cambio 8">Cambio 8</Option>
                <Option value="Cambio 9">Cambio 9</Option>
                <Option value="Cambio 10">Cambio 10</Option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Tipo de tarea</FormLabel>
              <Select
                name="tipo_tarea"
                value={nuevaTarea.tipo_tarea}
                onChange={(e, val) =>
                  handleChange({ target: { name: "tipo_tarea", value: val } })
                }
              >
                <Option value="Diaria">Diaria</Option>
                <Option value="Semanal">Semanal</Option>
                <Option value="Mensual">Mensual</Option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Descripción</FormLabel>
              <Textarea
                minRows={3}
                name="descripcion"
                value={nuevaTarea.descripcion}
                onChange={handleChange}
              />
            </FormControl>

            <Button sx={{ mt: 2 }} variant="solid" onClick={guardarTarea}>
              Guardar tarea
            </Button>
          </Box>
        </Sheet>
      </Modal>

      {/* Modal detalle de tarea */}
      <Modal open={openDetalleModal} onClose={() => setOpenDetalleModal(false)}>
        <Sheet
          sx={{
            maxWidth: 600,
            mx: "auto",
            my: "5vh",
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
            backgroundColor: "#fff",
          }}
        >
          <ModalClose />
          {tareaSeleccionada && (
            <>
              <Typography level="h4" mb={2}>
                Detalle de tarea
              </Typography>

              <Stack spacing={1}>
                {Object.entries(tareaSeleccionada).map(([key, value]) => (
                  <Typography key={key}>
                    <strong>{key.replace(/_/g, " ")}:</strong> {value || "-"}
                  </Typography>
                ))}
              </Stack>

              <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={editarTarea}
                >
                  Editar
                </Button>
                <Button
                  variant="outlined"
                  color="danger"
                  onClick={eliminarTarea}
                >
                  Eliminar
                </Button>
              </Box>
            </>
          )}
        </Sheet>
      </Modal>
    </>
  );
}
