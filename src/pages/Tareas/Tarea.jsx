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
} from "@mui/joy";
import { Link } from "wouter";
import { useState, useEffect } from "react";

export function Tarea() {
  const dias = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  const [openAddModal, setOpenAddModal] = useState(false);
  const [openViewModal, setOpenViewModal] = useState(false);
  const [tareaSeleccionada, setTareaSeleccionada] = useState(null);

  const [modoEdicion, setModoEdicion] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [tareaEnEdicion, setTareaEnEdicion] = useState(null);

  useEffect(() => {
    if (!openViewModal && modoEdicion && tareaEnEdicion) {
      setOpenEditModal(true);
    }
  }, [openViewModal, modoEdicion, tareaEnEdicion]);

  const actualizarTarea = (tareaActualizada) => {
    setTareas((prevTareas) =>
      prevTareas.map((tarea) =>
        tarea.numTarea === tareaActualizada.numTarea ? tareaActualizada : tarea
      )
    );
  };

  const [tareas, setTareas] = useState([]);

  const [titulo, setTitulo] = useState("");
  const [numTarea, setNumTarea] = useState("");
  const [estado, setEstado] = useState("");
  const [prioridad, setPrioridad] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaVencimiento, setFechaVencimiento] = useState("");
  const [asignado, setAsignado] = useState("");
  const [creador, setCreador] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [etiqueta, setEtiqueta] = useState([]);
  const [controlCambio, setControlCambio] = useState("");
  const [finalidad, setFinalidad] = useState("");
  const [tipoTarea, setTipoTarea] = useState("");
  const [diaSeleccionado, setDiaSeleccionado] = useState("");

  const handleSaveTask = () => {
    const nuevaTarea = {
      titulo,
      numTarea,
      estado,
      prioridad,
      fechaInicio,
      fechaVencimiento,
      asignado,
      creador,
      descripcion,
      etiqueta,
      finalidad,
      controlCambio,
      tipoTarea,
      diaSeleccionado,
    };

    setTareas((prev) => [...prev, nuevaTarea]);
    console.log("Tarea guardada:", nuevaTarea);

    setTitulo("");
    setNumTarea("");
    setEstado("");
    setPrioridad("");
    setFechaInicio("");
    setFechaVencimiento("");
    setAsignado("");
    setCreador("");
    setDescripcion("");
    setEtiqueta([]);
    setFinalidad("");
    setControlCambio("");
    setTipoTarea("");
    setDiaSeleccionado("");

    setOpenAddModal(false);
  };

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
          onClick={() => setOpenAddModal(true)}
        >
          Agregar tarea
        </Button>
      </Box>

      <Box sx={{ mt: 1, ml: 1 }}>
        <Link href="/tareasem">
          <Button type="button" variant="outlined" size="sm">
            Ver estatus de las tareas
          </Button>
        </Link>
      </Box>

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
        {dias.map((dia) => {
          const tareasDelDia = tareas.filter(
            (tarea) => tarea.diaSeleccionado === dia
          );

          return (
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
                  backgroundColor: "#f58d01",
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
                  backgroundColor: "#fbdeb7",
                  p: 2,
                  height: "100%",
                  overflowY: "auto",
                  flexGrow: 1,
                }}
              >
                {tareasDelDia.length === 0 && (
                  <Typography sx={{ color: "#666" }}>
                    No hay tareas para este día.
                  </Typography>
                )}
                {tareasDelDia.map((tarea, index) => (
                  <Card
                    key={index}
                    sx={{
                      mb: 1,
                      p: 1,
                      borderRadius: 10,
                      backgroundColor: "#f0f0f0",
                      boxShadow: "sm",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setTareaSeleccionada(tarea);
                      setOpenViewModal(true);
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "12px",
                      }}
                    >
                      <Typography
                        level="body2"
                        sx={{
                          fontSize: "18px",
                          mb: 0.5,
                          wordBreak: "break-word",
                        }}
                      >
                        <Box component="span" fontWeight="bold">
                          #{tarea.numTarea} -
                        </Box>{" "}
                        {tarea.titulo}
                      </Typography>
                    </Box>

                    <Typography
                      level="body2"
                      sx={{ fontSize: "15px", mb: 0.3 }}
                    >
                      <Box component="span" fontWeight="bold">
                        Estado:
                      </Box>{" "}
                      {tarea.estado}
                    </Typography>
                    <Typography
                      level="body2"
                      sx={{ fontSize: "15px", mb: 0.3 }}
                    >
                      <Box component="span" fontWeight="bold">
                        Prioridad:
                      </Box>{" "}
                      {tarea.prioridad}
                    </Typography>
                    <Typography
                      level="body2"
                      sx={{ fontSize: "15px", mb: 0.3 }}
                    >
                      <Box component="span" fontWeight="bold">
                        Asignado:
                      </Box>{" "}
                      {tarea.asignado}
                    </Typography>
                    <Typography
                      level="body2"
                      sx={{ fontSize: "15px", mb: 0.3 }}
                    >
                      <Box component="span" fontWeight="bold">
                        Fecha vencimiento:
                      </Box>{" "}
                      {tarea.fechaVencimiento}
                    </Typography>
                  </Card>
                ))}
              </Box>
            </Card>
          );
        })}
      </Box>

      <Modal open={openViewModal} onClose={() => setOpenViewModal(false)}>
        <Sheet
          sx={{
            maxWidth: 500,
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
                Detalles de la Tarea
              </Typography>
              <Typography>
                <strong>Núm:</strong> {tareaSeleccionada.numTarea}
              </Typography>
              <Typography>
                <strong>Título:</strong> {tareaSeleccionada.titulo}
              </Typography>
              <Typography>
                <strong>Estado:</strong> {tareaSeleccionada.estado}
              </Typography>
              <Typography>
                <strong>Prioridad:</strong> {tareaSeleccionada.prioridad}
              </Typography>
              <Typography>
                <strong>Inicio:</strong> {tareaSeleccionada.fechaInicio}
              </Typography>
              <Typography>
                <strong>Vencimiento:</strong>{" "}
                {tareaSeleccionada.fechaVencimiento}
              </Typography>
              <Typography>
                <strong>Asignado:</strong> {tareaSeleccionada.asignado}
              </Typography>
              <Typography>
                <strong>Creador:</strong> {tareaSeleccionada.creador}
              </Typography>
              <Typography>
                <strong>Finalidad:</strong> {tareaSeleccionada.finalidad}
              </Typography>
              <Typography>
                <strong>Control de Cambio:</strong>{" "}
                {tareaSeleccionada.controlCambio}
              </Typography>
              <Typography>
                <strong>Tipo:</strong> {tareaSeleccionada.tipoTarea}
              </Typography>
              <Typography>
                <strong>Etiqueta:</strong>{" "}
                {tareaSeleccionada.etiqueta.join(", ")}
              </Typography>
              <Typography>
                <strong>Descripción:</strong> {tareaSeleccionada.descripcion}
              </Typography>

              <Button
                variant="outlined"
                color="primary"
                sx={{ mt: 2 }}
                onClick={() => {
                  setTareaEnEdicion({ ...tareaSeleccionada }); // Copia segura
                  setModoEdicion(true);
                  setOpenViewModal(false); // Cerramos este primero
                }}
              >
                Editar
              </Button>
            </>
          )}
        </Sheet>
      </Modal>

      <Modal open={openEditModal} onClose={() => setOpenEditModal(false)}>
        <Sheet
          sx={{
            maxWidth: 500,
            mx: "auto",
            my: "5vh",
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
            backgroundColor: "#fff",
            maxHeight: "90vh", // Limita la altura
            overflowY: "auto", // Habilita scroll vertical
          }}
        >
          <ModalClose />
          <Typography level="h4" mb={2}>
            Editar Tarea
          </Typography>
          {tareaEnEdicion && (
            <Box display="flex" flexDirection="column" gap={2}>
              <FormControl>
                <FormLabel>Núm</FormLabel>
                <Input
                  type="number"
                  value={tareaEnEdicion.numTarea}
                  onChange={(e) =>
                    setTareaEnEdicion({
                      ...tareaEnEdicion,
                      numTarea: e.target.value,
                    })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Título</FormLabel>
                <Input
                  value={tareaEnEdicion.titulo}
                  onChange={(e) =>
                    setTareaEnEdicion({
                      ...tareaEnEdicion,
                      titulo: e.target.value,
                    })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Estado</FormLabel>
                <Input
                  value={tareaEnEdicion.estado}
                  onChange={(e) =>
                    setTareaEnEdicion({
                      ...tareaEnEdicion,
                      estado: e.target.value,
                    })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Prioridad</FormLabel>
                <Input
                  value={tareaEnEdicion.prioridad}
                  onChange={(e) =>
                    setTareaEnEdicion({
                      ...tareaEnEdicion,
                      prioridad: e.target.value,
                    })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Inicio</FormLabel>
                <Input
                  type="date"
                  value={tareaEnEdicion.fechaInicio}
                  onChange={(e) =>
                    setTareaEnEdicion({
                      ...tareaEnEdicion,
                      fechaInicio: e.target.value,
                    })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Vencimiento</FormLabel>
                <Input
                  type="date"
                  value={tareaEnEdicion.fechaVencimiento}
                  onChange={(e) =>
                    setTareaEnEdicion({
                      ...tareaEnEdicion,
                      fechaVencimiento: e.target.value,
                    })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Asignado</FormLabel>
                <Input
                  value={tareaEnEdicion.asignado}
                  onChange={(e) =>
                    setTareaEnEdicion({
                      ...tareaEnEdicion,
                      asignado: e.target.value,
                    })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Creador</FormLabel>
                <Input
                  value={tareaEnEdicion.creador}
                  onChange={(e) =>
                    setTareaEnEdicion({
                      ...tareaEnEdicion,
                      creador: e.target.value,
                    })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Finalidad</FormLabel>
                <Input
                  value={tareaEnEdicion.finalidad}
                  onChange={(e) =>
                    setTareaEnEdicion({
                      ...tareaEnEdicion,
                      finalidad: e.target.value,
                    })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Control de Cambio</FormLabel>
                <Input
                  value={tareaEnEdicion.controlCambio}
                  onChange={(e) =>
                    setTareaEnEdicion({
                      ...tareaEnEdicion,
                      controlCambio: e.target.value,
                    })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Tipo</FormLabel>
                <Input
                  value={tareaEnEdicion.tipoTarea}
                  onChange={(e) =>
                    setTareaEnEdicion({
                      ...tareaEnEdicion,
                      tipoTarea: e.target.value,
                    })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Etiqueta (separadas por coma)</FormLabel>
                <Input
                  value={tareaEnEdicion.etiqueta.join(", ")}
                  onChange={(e) =>
                    setTareaEnEdicion({
                      ...tareaEnEdicion,
                      etiqueta: e.target.value
                        .split(",")
                        .map((tag) => tag.trim()),
                    })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Descripción</FormLabel>
                <Textarea
                  minRows={3}
                  value={tareaEnEdicion.descripcion}
                  onChange={(e) =>
                    setTareaEnEdicion({
                      ...tareaEnEdicion,
                      descripcion: e.target.value,
                    })
                  }
                />
              </FormControl>

              <Button
                sx={{ mt: 2 }}
                onClick={() => {
                  actualizarTarea(tareaEnEdicion);
                  setOpenEditModal(false);
                  setModoEdicion(false); // Limpiar modo edición
                  setTareaEnEdicion(null); // Por si acaso
                }}
              >
                Guardar Cambios
              </Button>
            </Box>
          )}
        </Sheet>
      </Modal>

      {/* Modal Agregar Tarea */}
      <Modal open={openAddModal} onClose={() => setOpenAddModal(false)}>
        <Sheet
          sx={{
            maxWidth: 800,
            mx: "auto",
            my: "5vh",
            maxHeight: "90vh",
            overflow: "auto",
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
            backgroundColor: "#fff",
          }}
        >
          <ModalClose />
          <Typography level="h4" textAlign="center" mb={2}>
            Agregar Nueva Tarea
          </Typography>

          {/* Día en fila completa */}
          <Box sx={{ mb: 3 }}>
            <FormControl required sx={{ width: "100%" }}>
              <FormLabel>Día</FormLabel>
              <Select
                value={diaSeleccionado}
                onChange={(e, val) => setDiaSeleccionado(val)}
              >
                {dias.map((dia) => (
                  <Option key={dia} value={dia}>
                    {dia}
                  </Option>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 4,
              maxWidth: 800,
            }}
          >
            {/* Título */}
            <FormControl required>
              <FormLabel>Título de la tarea</FormLabel>
              <Input
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </FormControl>

            {/* Núm de la tarea */}
            <FormControl required>
              <FormLabel>Núm de la tarea</FormLabel>
              <Input
                type="number"
                inputProps={{ min: 0, step: 1 }}
                value={numTarea}
                onChange={(e) => setNumTarea(e.target.value)}
              />
            </FormControl>

            {/* Estado */}
            <FormControl required>
              <FormLabel>Estado</FormLabel>
              <Select value={estado} onChange={(e, val) => setEstado(val)}>
                <Option value="Por iniciar">Por iniciar</Option>
                <Option value="En progreso">En progreso</Option>
                <Option value="En espera">En espera</Option>
                <Option value="Completo">Completo</Option>
              </Select>
            </FormControl>

            {/* Prioridad */}
            <FormControl required>
              <FormLabel>Prioridad</FormLabel>
              <Select
                value={prioridad}
                onChange={(e, val) => setPrioridad(val)}
              >
                <Option value="Alto">Alto</Option>
                <Option value="Medio">Medio</Option>
                <Option value="Bajo">Bajo</Option>
              </Select>
            </FormControl>

            {/* Fecha inicio */}
            <FormControl required>
              <FormLabel>Fecha inicio</FormLabel>
              <Input
                type="date"
                value={fechaInicio}
                onChange={(e) => setFechaInicio(e.target.value)}
              />
            </FormControl>

            {/* Fecha vencimiento */}
            <FormControl required>
              <FormLabel>Fecha vencimiento</FormLabel>
              <Input
                type="date"
                value={fechaVencimiento}
                onChange={(e) => setFechaVencimiento(e.target.value)}
              />
            </FormControl>

            {/* Asignado */}
            <FormControl required>
              <FormLabel>Asignado</FormLabel>
              <Select value={asignado} onChange={(e, val) => setAsignado(val)}>
                <Option value="P1">P1</Option>
                <Option value="P2">P2</Option>
                <Option value="P3">P3</Option>
                <Option value="P4">P4</Option>
                <Option value="P5">P5</Option>
              </Select>
            </FormControl>

            {/* Creador */}
            <FormControl required>
              <FormLabel>Creador</FormLabel>
              <Select value={creador} onChange={(e, val) => setCreador(val)}>
                <Option value="P1">P1</Option>
                <Option value="P2">P2</Option>
                <Option value="P3">P3</Option>
                <Option value="P4">P4</Option>
                <Option value="P5">P5</Option>
              </Select>
            </FormControl>

            {/* Etiqueta (multiple) */}
            <FormControl required>
              <FormLabel>Etiqueta</FormLabel>
              <Select
                multiple
                value={etiqueta}
                onChange={(event, newValue) => setEtiqueta(newValue)}
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

            {/* Finalidad */}
            <FormControl required>
              <FormLabel>Finalidad</FormLabel>
              <Select
                value={finalidad}
                onChange={(e, val) => setFinalidad(val)}
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

            {/* Control de cambio */}
            <FormControl required>
              <FormLabel>Control de cambio</FormLabel>
              <Select
                value={controlCambio}
                onChange={(e, val) => setControlCambio(val)}
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

            {/* Tipo de tarea */}
            <FormControl required>
              <FormLabel>Tipo de tarea</FormLabel>
              <Select
                value={tipoTarea}
                onChange={(e, val) => setTipoTarea(val)}
              >
                <Option value="Diaria">Diaria</Option>
                <Option value="Semanal">Semanal</Option>
                <Option value="Mensual">Mensual</Option>
              </Select>
            </FormControl>

            {/* Descripción - ocupa 2 columnas */}
            <FormControl required sx={{ gridColumn: "1 / span 2" }}>
              <FormLabel>Descripción</FormLabel>
              <Textarea
                minRows={3}
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </FormControl>
          </Box>

          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Button
              variant="solid"
              size="lg"
              type="button"
              onClick={handleSaveTask}
            >
              Guardar tarea
            </Button>
          </Box>
        </Sheet>
      </Modal>
    </>
  );
}
