import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Input from "@mui/joy/Input";
import Divider from "@mui/joy/Divider";
import Textarea from "@mui/joy/Textarea";
import { Link } from "wouter";

import { useState } from "react";

export function Tarea() {
  const [openM3, setOpenM3] = useState(false);

  const [tasksMie, setTasksMie] = useState([]);

  // Estados del formulario
  const [titulo, setTitulo] = useState("");
  const [numTarea, setNumTarea] = useState("");
  const [estado, setEstado] = useState("");
  const [prioridad, setPrioridad] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaVencimiento, setFechaVencimiento] = useState("");
  const [asignado, setAsignado] = useState("");
  const [creador, setCreador] = useState("");
  const [descripcion, setDescripcion] = useState("");

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
    };
    setTasksMie([...tasksMie, nuevaTarea]);
    setOpenM1(false);
    setTitulo("");
    setNumTarea("");
    setEstado("");
    setPrioridad("");
    setFechaInicio("");
    setFechaVencimiento("");
    setAsignado("");
    setCreador("");
    setDescripcion("");

    setOpenM3(false);
  };

  const [openCard1, setOpenCard1] = useState(false);
  const [openCard2, setOpenCard2] = useState(false);
  const [openCard3, setOpenCard3] = useState(false);
  const [openM1, setOpenM1] = useState(false);

  const [estado1, setEstado1] = useState("Por iniciar");
  const [estado2, setEstado2] = useState("En progreso");
  const [estado3, setEstado3] = useState("En espera");

  const colorMap1 = {
    "Por iniciar": "#484848",
    "En progreso": "#0049a2",
    "En espera": "#489200",
    Completo: "#bb8a00",
  };

  const colorMap2 = {
    "Por iniciar": "#484848",
    "En progreso": "#0049a2",
    "En espera": "#489200",
    Completo: "#bb8a00",
  };

  const colorMap3 = {
    "Por iniciar": "#484848",
    "En progreso": "#0049a2",
    "En espera": "#489200",
    Completo: "#bb8a00",
  };

  const estadoColors = {
    "Por iniciar": "#484848",
    "En progreso": "#0049a2",
    "En espera": "#489200",
    Completo: "#bb8a00",
  };

  const prioridadColors = {
    Alto: "red", // rojo
    Medio: "green", // verde
    Bajo: "blue", // azul
  };

  return (
    <>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center", mt: 2 }}>
        <Typography level="h1" sx={{ ml: 1 }}>
          Tareas
        </Typography>
        <Link href="/tareasem" sx={{ mr: 2 }}>
          <Button type="button" variant="outlined" size="sm">
            Ver estatus de las tareas
          </Button>
        </Link>
      </Box>

      <Box sx={{ display: "flex", gap: 2, alignItems: "center", mt: 2 }}>
        <Typography level="h4" sx={{ ml: 1 }}>
          Semana del 03/02/2025 al 08/02/2025
        </Typography>
      </Box>

      {/*BOX QUE ENVUELVE A LAS CARD*/}

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
        {/*LUNES*/}

        <Card
          sx={{
            width: "350px",
            minWidth: 200,
            height: "500px",
            p: 2,
            borderRadius: "md",
            boxShadow: "md",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#26afc0" /*COLOR LUNES*/,
              p: 1,
              borderRadius: "8px 8px 0 0",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography level="h3" sx={{ color: "#fff" }}>
                Lunes - 1
              </Typography>

              <>
                <Button
                  variant="outlined"
                  color="neutral"
                  onClick={() => setOpenM1(true)}
                  sx={{ width: 40, height: 40, borderRadius: "50%" }}
                  size="sm"
                >
                  <Add sx={{ color: "#fff" }} />
                </Button>

                <Modal
                  aria-labelledby="modal-title"
                  aria-describedby="modal-desc"
                  open={openM1}
                  onClose={() => setOpenM1(false)}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Sheet
                    variant="outlined"
                    sx={{
                      maxWidth: 700,
                      maxHeight: 600,
                      overflowY: "auto",
                      borderRadius: "md",
                      p: 3,
                      boxShadow: "lg",
                      width: "100%",
                    }}
                  >
                    <ModalClose variant="plain" sx={{ m: 1 }} />

                    <Typography
                      component="h2"
                      id="modal-title"
                      level="h4"
                      textColor="inherit"
                      sx={{ fontWeight: "lg", mb: 1 }}
                    >
                      Añadir tarea 
                    </Typography>

                    {/*BOX 1*/}
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: 4,
                        maxWidth: 800,
                      }}
                    >
                      <FormControl required>
                        <FormLabel>Título de la tarea</FormLabel>
                        <Input required type="text"></Input>
                      </FormControl>

                      <FormControl required>
                        <FormLabel>Núm de la tarea</FormLabel>
                        <Input required type="text"></Input>
                      </FormControl>
                    </Box>

                    {/*BOX 2*/}
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: 4,
                        maxWidth: 800,
                      }}
                    >
                      <FormControl required>
                        <FormLabel>Estado</FormLabel>
                        <Select>
                          <Option value="1">Por iniciar</Option>
                          <Option value="2">En progreso</Option>
                          <Option value="3">En espera</Option>
                          <Option value="4">Completo</Option>
                        </Select>
                      </FormControl>

                      <FormControl required>
                        <FormLabel>Prioridad</FormLabel>
                        <Select>
                          <Option value="1">Alto</Option>
                          <Option value="2">Medio</Option>
                          <Option value="3">Bajo</Option>
                        </Select>
                      </FormControl>
                    </Box>

                    {/*BOX 3*/}
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: 4,
                        maxWidth: 800,
                      }}
                    >
                      <FormControl required>
                        <FormLabel>Fecha inicio</FormLabel>
                        <Input required type="date"></Input>
                      </FormControl>

                      <FormControl required>
                        <FormLabel>Fecha vencimiento</FormLabel>
                        <Input required type="date"></Input>
                      </FormControl>
                    </Box>

                    <br></br>

                    <Divider></Divider>

                    <br></br>

                    {/*BOX 4*/}
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: 4,
                        maxWidth: 800,
                      }}
                    >
                      <FormControl required>
                        <FormLabel>Asignado</FormLabel>
                        <Select>
                          <Option value="1">Persona 1</Option>
                          <Option value="2">Persona 2</Option>
                          <Option value="3">Persona 3</Option>
                          <Option value="4">Persona 4</Option>
                          <Option value="5">Persona 5</Option>
                        </Select>
                      </FormControl>

                      <FormControl required>
                        <FormLabel>Creador</FormLabel>
                        <Select>
                          <Option value="1">Persona 1</Option>
                          <Option value="2">Persona 2</Option>
                          <Option value="3">Persona 3</Option>
                          <Option value="4">Persona 4</Option>
                          <Option value="5">Persona 5</Option>
                        </Select>
                      </FormControl>
                    </Box>

                    {/*BOX 5*/}
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: 4,
                        maxWidth: 800,
                      }}
                    >
                      <FormControl>
                        <FormLabel>Etiquetas</FormLabel>
                        <Select
                          multiple
                          onChange={(event, newValue) => {
                            console.log(newValue);
                          }}
                        >
                          <Option value="1">Diseño de logo</Option>
                          <Option value="2">Diseño gráfico</Option>
                          <Option value="3">Diseño web</Option>
                          <Option value="4">Plan SEM</Option>
                          <Option value="5">Redes sociales</Option>
                          <Option value="6">Seseión fotográfica</Option>
                          <Option value="7">Video</Option>
                        </Select>
                      </FormControl>

                      <FormControl>
                        <FormLabel>Control de cambios</FormLabel>
                        <Select defaultValue="Diseño inicial">
                          <Option value="1">Diseño inicial</Option>
                          <Option value="2">Cambio 1</Option>
                          <Option value="3">Cambio 2</Option>
                          <Option value="4">Cambio 3</Option>
                          <Option value="5">Cambio 4</Option>
                          <Option value="6">Cambio 5</Option>
                          <Option value="7">Cambio 6</Option>
                          <Option value="8">Cambio 7</Option>
                          <Option value="9">Cambio 8</Option>
                          <Option value="10">Cambio 9</Option>
                          <Option value="11">Cambio 10</Option>
                        </Select>
                      </FormControl>
                    </Box>

                    {/*BOX 6*/}
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: 4,
                        maxWidth: 800,
                      }}
                    >
                      <FormControl>
                        <FormLabel>Finalidad</FormLabel>
                        <Select>
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
                          <Option value="Manual de identidad">
                            Manual de identidad
                          </Option>
                          <Option value="Díptico">Díptico</Option>
                          <Option value="Tríptico">Tríptico</Option>
                          <Option value="Volante">Volante</Option>
                          <Option value="Impresión">Impresión</Option>
                          <Option value="Brochure">Brochure</Option>
                          <Option value="Firma electrónica">
                            Firma electrónica
                          </Option>
                          <Option value="Tarjeta de presentación">
                            Tarjeta de presentación
                          </Option>
                          <Option value="Etiqueta">Etiqueta</Option>
                          <Option value="Horario">Horario</Option>
                          <Option value="Nota">Nota</Option>
                          <Option value="Proyecto Cofepris">
                            Proyecto Cofepris
                          </Option>
                          <Option value="Calcomanía">Calcomanía</Option>
                          <Option value="Pantalla">Pantalla</Option>
                          <Option value="Lona">Lona</Option>
                          <Option value="Espectacular">Espectacular</Option>
                          <Option value="Edición y retoque de fotos">
                            Edición y retoque de fotos
                          </Option>
                          <Option value="Camioneta/Carro">
                            Camioneta/Carro
                          </Option>
                          <Option value="Reel">Reel</Option>
                          <Option value="Grabación video">
                            Grabación video
                          </Option>
                          <Option value="Sesión fotografica">
                            Sesión fotografica
                          </Option>
                          <Option value="Edición video">Edición video</Option>
                          <Option value="Scouting">Scouting</Option>
                          <Option value="GIF">GIF</Option>
                          <Option value="Diseño web (comienza)">
                            Diseño web (comienza)
                          </Option>
                          <Option value="Diseño web (crece)">
                            Diseño web (crece)
                          </Option>
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
                        <FormLabel>Tipo de tarea</FormLabel>
                        <Select>
                          <Option value="1">Diaria</Option>
                          <Option value="2">Adicional</Option>
                          <Option value="3">Por evento</Option>
                        </Select>
                      </FormControl>
                    </Box>

                    <FormControl>
                      <FormLabel>Descripción</FormLabel>
                      <Textarea minRows={2} />
                    </FormControl>

                    <Button sx={{ mt: 3 }} variant="solid" color="primary">
                      Guardar tarea
                    </Button>
                  </Sheet>
                </Modal>
              </>
            </Box>
          </Box>

          <Box sx={{ backgroundColor: "#c0e3e7", p: 2, height: "100%" }}>
            <>
              <Card
                variant="outlined"
                color="neutral"
                onClick={() => setOpenCard1(true)}
              >
                <Typography level="body-sm" color="black">
                  <strong>#0 - Hacer poster</strong>
                </Typography>

                <Typography level="body-xs">
                  <strong>Estado:</strong>
                  <br />
                  <Typography component="span" level="body-xs" color="#484848">
                    Por iniciar
                  </Typography>
                </Typography>

                <Typography level="body-xs">
                  <strong>Prioridad:</strong>
                  <br />
                  <Typography
                    component="span"
                    level="body-xs"
                    sx={{ color: "green" }}
                  >
                    Medio
                  </Typography>
                </Typography>

                <Typography level="body-xs">
                  <strong>Asignado:</strong>
                  <br />
                  <Typography component="span" level="body-xs">
                    P1,P2,P3
                  </Typography>
                </Typography>

                <Typography level="body-xs">
                  <strong>Fecha vencimiento:</strong>
                  <br />
                  <Typography component="span" level="body-xs">
                    05/02/2025
                  </Typography>
                </Typography>
              </Card>

              <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={openCard1}
                onClose={() => setOpenCard1(false)}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Sheet
                  variant="outlined"
                  sx={{
                    maxWidth: 900,
                    borderRadius: "md",
                    p: 3,
                    boxShadow: "lg",
                  }}
                >
                  <ModalClose
                    onClick={() => setOpenCard1(false)}
                    variant="plain"
                    sx={{ m: 1 }}
                  />

                  <Typography
                    component="h2"
                    id="modal-title"
                    level="h4"
                    textColor="inherit"
                    sx={{ fontWeight: "lg", mb: 2 }}
                  >
                    #0 - Hacer poster
                  </Typography>

                  <Box sx={{ display: "grid", gap: 4 }}>
                    <div>
                      <Typography level="title-sm" sx={{ mb: 1 }}>
                        Información de la tarea
                      </Typography>

                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <strong>Estado:</strong>
                        <Select
                          value={estado1}
                          onChange={(e, newValue) => setEstado1(newValue)}
                          size="sm"
                          sx={{
                            "--Select-radius": "6px",
                            "--Select-paddingInline": "0.5rem",
                            "--Select-decoratorChildHeight": "1.5rem",
                            color: colorMap1[estado1] || "inherit",
                          }}
                        >
                          <Option value="Por iniciar" sx={{ color: "#484848" }}>
                            Por iniciar
                          </Option>
                          <Option value="En progreso" sx={{ color: "#0049a2" }}>
                            En progreso
                          </Option>
                          <Option value="En espera" sx={{ color: "#489200" }}>
                            En espera
                          </Option>
                          <Option value="Completo" sx={{ color: "#bb8a00" }}>
                            Completo
                          </Option>
                        </Select>
                      </Box>

                      <p>
                        <strong>Prioridad:</strong>{" "}
                        <span style={{ color: "green" }}>Medio</span>
                      </p>
                      <p>
                        <strong>Fecha inicio:</strong>03/02/2025
                      </p>
                      <p>
                        <strong>Fecha vencimiento:</strong>05/02/2025
                      </p>
                      <p>
                        <strong>Asignado:</strong>P1,P2,P3
                      </p>
                      <p>
                        <strong>Creador:</strong>P4
                      </p>
                      <p>
                        <strong>Etiquetas:</strong> -
                      </p>
                      <p>
                        <strong>Control de cambios:</strong> -{" "}
                      </p>
                      <p>
                        <strong>Finalidad:</strong> -
                      </p>
                      <p>
                        <strong>Tipo de tarea:</strong> -
                      </p>
                      <p>
                        <strong>Descripción:</strong>-
                      </p>

                      <Box
                        sx={{
                          display: "flex",
                          gap: 1,
                          mt: 1,
                        }}
                      >
                        <Button size="sm" variant="outlined" color="primary">
                          Editar
                        </Button>
                        <Button size="sm" variant="outlined" color="danger">
                          Eliminar
                        </Button>
                      </Box>
                    </div>
                  </Box>
                </Sheet>
              </Modal>
            </>
          </Box>
        </Card>

        {/*MARTES*/}

        <Card
          sx={{
            width: "350px",
            minWidth: 200,
            height: "500px",
            p: 2,
            borderRadius: "md",
            boxShadow: "md",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#489200",
              /*COLOR MARTES*/ p: 1,
              borderRadius: "8px 8px 0 0",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography level="h3" sx={{ color: "#fff" }}>
                Martes - 2
              </Typography>

              <>
                <Button
                  variant="outlined"
                  color="neutral"
                  onClick={() => setOpenM1(true)}
                  sx={{ width: 40, height: 40, borderRadius: "50%" }}
                  size="sm"
                >
                  <Add sx={{ color: "#fff" }} />
                </Button>
              </>
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "#d5ffab",
              p: 2,
              flex: 1,
              overflowY: "auto",
              maxHeight: "750px",
            }}
          >
            {/*Aquí es para poder scrollear*/}

            {/*TARJETA DE TAREA 1 */}
            <>
              <Card
                variant="outlined"
                color="neutral"
                onClick={() => setOpenCard2(true)}
              >
                <Typography level="body-sm" color="black">
                  <strong>#1 - Llamar a Andrés C.</strong>
                </Typography>

                <Typography level="body-xs">
                  <strong>Estado:</strong>
                  <br />
                  <Typography
                    component="span"
                    level="body-xs"
                    sx={{ color: "#0049a2" }}
                  >
                    En progreso
                  </Typography>
                </Typography>

                <Typography level="body-xs">
                  <strong>Prioridad:</strong>
                  <br />
                  <Typography
                    component="span"
                    level="body-xs"
                    sx={{ color: "red" }}
                  >
                    Alto
                  </Typography>
                </Typography>

                <Typography level="body-xs">
                  <strong>Asignado:</strong>
                  <br />
                  <Typography component="span" level="body-xs">
                    P2
                  </Typography>
                </Typography>

                <Typography level="body-xs">
                  <strong>Fecha vencimiento:</strong>
                  <br />
                  <Typography component="span" level="body-xs">
                    04/02/2025
                  </Typography>
                </Typography>
              </Card>

              <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={openCard2}
                onClose={() => setOpenCard2(false)}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Sheet
                  variant="outlined"
                  sx={{
                    maxWidth: 900,
                    borderRadius: "md",
                    p: 3,
                    boxShadow: "lg",
                  }}
                >
                  <ModalClose
                    onClick={() => setOpenCard2(false)}
                    variant="plain"
                    sx={{ m: 1 }}
                  />

                  <Typography
                    component="h2"
                    id="modal-title"
                    level="h4"
                    textColor="inherit"
                    sx={{ fontWeight: "lg", mb: 2 }}
                  >
                    #1 - Llamar a Andrés C.
                  </Typography>

                  <Box sx={{ display: "grid", gap: 4 }}>
                    <div>
                      <Typography level="title-sm" sx={{ mb: 1 }}>
                        Información de la tarea
                      </Typography>

                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <strong>Estado:</strong>
                        <Select
                          value={estado2}
                          onChange={(e, newValue) => setEstado2(newValue)}
                          size="sm"
                          sx={{
                            "--Select-radius": "6px",
                            "--Select-paddingInline": "0.5rem",
                            "--Select-decoratorChildHeight": "1.5rem",
                            color: colorMap2[estado2] || "inherit",
                          }}
                        >
                          <Option value="Por iniciar" sx={{ color: "#484848" }}>
                            Por iniciar
                          </Option>
                          <Option value="En progreso" sx={{ color: "#0049a2" }}>
                            En progreso
                          </Option>
                          <Option value="En espera" sx={{ color: "#489200" }}>
                            En espera
                          </Option>
                          <Option value="Completo" sx={{ color: "#bb8a00" }}>
                            Completo
                          </Option>
                        </Select>
                      </Box>

                      <p>
                        <strong>Prioridad:</strong>{" "}
                        <span style={{ color: "red" }}>Alto</span>
                      </p>
                      <p>
                        <strong>Fecha inicio:</strong>04/02/2025
                      </p>
                      <p>
                        <strong>Fecha vencimiento:</strong>04/02/2025
                      </p>
                      <p>
                        <strong>Asignado:</strong>P2
                      </p>
                      <p>
                        <strong>Creador:</strong>P4
                      </p>
                      <p>
                        <strong>Etiquetas:</strong> -
                      </p>
                      <p>
                        <strong>Control de cambios:</strong> -{" "}
                      </p>
                      <p>
                        <strong>Finalidad:</strong> -
                      </p>
                      <p>
                        <strong>Tipo de tarea:</strong> -
                      </p>
                      <p>
                        <strong>Descripción:</strong>-
                      </p>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 1,
                          mt: 1,
                        }}
                      >
                        <Button size="sm" variant="outlined" color="primary">
                          Editar
                        </Button>
                        <Button size="sm" variant="outlined" color="danger">
                          Eliminar
                        </Button>
                      </Box>
                    </div>
                  </Box>
                </Sheet>
              </Modal>
            </>
            <br></br>
            {/*TARJETA DE TAREA 2 */}

            <>
              <Card
                variant="outlined"
                color="neutral"
                onClick={() => setOpenCard3(true)}
              >
                <Typography level="body-sm" color="black">
                  <strong>#2 - Campaña emp1</strong>
                </Typography>

                <Typography level="body-xs">
                  <strong>Estado:</strong>
                  <br />
                  <Typography
                    component="span"
                    level="body-xs"
                    sx={{ color: "#489200" }}
                  >
                    En espera
                  </Typography>
                </Typography>

                <Typography level="body-xs">
                  <strong>Prioridad:</strong>
                  <br />
                  <Typography
                    component="span"
                    level="body-xs"
                    sx={{ color: "#0049a2" }}
                  >
                    Bajo
                  </Typography>
                </Typography>

                <Typography level="body-xs">
                  <strong>Asignado:</strong>
                  <br />
                  <Typography component="span" level="body-xs">
                    P1,P2,P3,P4
                  </Typography>
                </Typography>

                <Typography level="body-xs">
                  <strong>Fecha vencimiento:</strong>
                  <br />
                  <Typography component="span" level="body-xs">
                    08/02/2025
                  </Typography>
                </Typography>
              </Card>

              <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={openCard3}
                onClose={() => setOpenCard3(false)}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Sheet
                  variant="outlined"
                  sx={{
                    maxWidth: 900,
                    borderRadius: "md",
                    p: 3,
                    boxShadow: "lg",
                  }}
                >
                  <ModalClose
                    onClick={() => setOpenCard3(false)}
                    variant="plain"
                    sx={{ m: 1 }}
                  />

                  <Typography
                    component="h2"
                    id="modal-title"
                    level="h4"
                    textColor="inherit"
                    sx={{ fontWeight: "lg", mb: 2 }}
                  >
                    #2 - Campaña emp1
                  </Typography>

                  <Box sx={{ display: "grid", gap: 4 }}>
                    <div>
                      <Typography level="title-sm" sx={{ mb: 1 }}>
                        Información de la tarea
                      </Typography>

                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <strong>Estado:</strong>
                        <Select
                          value={estado3}
                          onChange={(e, newValue) => setEstado3(newValue)}
                          size="sm"
                          sx={{
                            "--Select-radius": "6px",
                            "--Select-paddingInline": "0.5rem",
                            "--Select-decoratorChildHeight": "1.5rem",
                            color: colorMap3[estado3] || "inherit",
                          }}
                        >
                          <Option value="Por iniciar" sx={{ color: "#484848" }}>
                            Por iniciar
                          </Option>
                          <Option value="En progreso" sx={{ color: "#0049a2" }}>
                            En progreso
                          </Option>
                          <Option value="En espera" sx={{ color: "#489200" }}>
                            En espera
                          </Option>
                          <Option value="Completo" sx={{ color: "#bb8a00" }}>
                            Completo
                          </Option>
                        </Select>
                      </Box>

                      <p>
                        <strong>Prioridad:</strong>{" "}
                        <span style={{ color: "#0049a2" }}>Bajo</span>
                      </p>
                      <p>
                        <strong>Fecha inicio:</strong>04/02/2025
                      </p>
                      <p>
                        <strong>Fecha vencimiento:</strong>08/02/2025
                      </p>
                      <p>
                        <strong>Asignado:</strong>P1,P2,P3,P4
                      </p>
                      <p>
                        <strong>Creador:</strong>P4
                      </p>
                      <p>
                        <strong>Etiquetas:</strong> -
                      </p>
                      <p>
                        <strong>Control de cambios:</strong> -{" "}
                      </p>
                      <p>
                        <strong>Finalidad:</strong> -
                      </p>
                      <p>
                        <strong>Tipo de tarea:</strong> -
                      </p>
                      <p>
                        <strong>Descripción:</strong>-
                      </p>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 1,
                          mt: 1,
                        }}
                      >
                        <Button size="sm" variant="outlined" color="primary">
                          Editar
                        </Button>
                        <Button size="sm" variant="outlined" color="danger">
                          Eliminar
                        </Button>
                      </Box>
                    </div>
                  </Box>
                </Sheet>
              </Modal>
            </>
          </Box>
        </Card>

        {/* MIERCOLES */}
        <Card
          sx={{
            width: "350px",
            minWidth: 200,
            height: "500px",
            p: 2,
            borderRadius: "md",
            boxShadow: "md",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#f58d01",
              p: 1,
              borderRadius: "8px 8px 0 0",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography level="h3" sx={{ color: "#fff" }}>
                Mie - {tasksMie.length}
              </Typography>

              <Button
                variant="outlined"
                color="neutral"
                onClick={() => setOpenM3(true)}
                sx={{ width: 40, height: 40, borderRadius: "50%" }}
                size="sm"
              >
                <Add sx={{ color: "#fff" }} />
              </Button>
            </Box>
          </Box>

          {/* CONTENEDOR INTERIOR DE TAREAS */}
          <Box
            sx={{
              backgroundColor: "#fbdeb7",
              p: 2,
              height: "100%",
              overflowY: "auto",
            }}
          >
            {tasksMie.length === 0 ? (
              <Typography level="body-sm">No hay tareas</Typography>
            ) : (
              tasksMie.map((task, index) => (
                <Card
                  key={index}
                  variant="outlined"
                  color="neutral"
                  sx={{ mb: 2 }}
                >
                  <Typography level="body-sm" color="black">
                    <strong>
                      #{task.numTarea} - {task.titulo}
                    </strong>
                  </Typography>
                  <Typography level="body-xs">
                    <strong>Estado:</strong>{" "}
                    <span
                      style={{ color: estadoColors[task.estado] || "inherit" }}
                    >
                      {task.estado}
                    </span>
                  </Typography>
                  <Typography level="body-xs">
                    <strong>Prioridad:</strong>{" "}
                    <span
                      style={{
                        color: prioridadColors[task.prioridad] || "inherit",
                      }}
                    >
                      {task.prioridad}
                    </span>
                  </Typography>
                  <Typography level="body-xs">
                    <strong>Asignado:</strong> {task.asignado}
                  </Typography>
                  <Typography level="body-xs">
                    <strong>Fecha vencimiento:</strong> {task.fechaVencimiento}
                  </Typography>
                </Card>
              ))
            )}
          </Box>

          {/* MODAL */}
          <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={openM3}
            onClose={() => setOpenM3(false)}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Sheet
              variant="outlined"
              sx={{
                maxWidth: 700,
                maxHeight: 600,
                overflowY: "auto",
                borderRadius: "md",
                p: 3,
                boxShadow: "lg",
                width: "100%",
              }}
            >
              <ModalClose variant="plain" sx={{ m: 1 }} />

              <Typography
                component="h2"
                id="modal-title"
                level="h4"
                sx={{ fontWeight: "lg", mb: 1 }}
              >
                Añadir tarea 
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 4,
                  maxWidth: 800,
                }}
              >
                <FormControl required>
                  <FormLabel>Título de la tarea</FormLabel>
                  <Input
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                  />
                </FormControl>

                <FormControl required>
                  <FormLabel>Núm de la tarea</FormLabel>
                  <Input
                    value={numTarea}
                    onChange={(e) => setNumTarea(e.target.value)}
                  />
                </FormControl>

                <FormControl required>
                  <FormLabel>Estado</FormLabel>
                  <Select value={estado} onChange={(e, val) => setEstado(val)}>
                    <Option value="Por iniciar">Por iniciar</Option>
                    <Option value="En progreso">En progreso</Option>
                    <Option value="En espera">En espera</Option>
                    <Option value="Completo">Completo</Option>
                  </Select>
                </FormControl>

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

                <FormControl required>
                  <FormLabel>Fecha inicio</FormLabel>
                  <Input
                    type="date"
                    value={fechaInicio}
                    onChange={(e) => setFechaInicio(e.target.value)}
                  />
                </FormControl>

                <FormControl required>
                  <FormLabel>Fecha vencimiento</FormLabel>
                  <Input
                    type="date"
                    value={fechaVencimiento}
                    onChange={(e) => setFechaVencimiento(e.target.value)}
                  />
                </FormControl>

                <FormControl required>
                  <FormLabel>Asignado</FormLabel>
                  <Select
                    value={asignado}
                    onChange={(e, val) => setAsignado(val)}
                  >
                    <Option value="P1">P1</Option>
                    <Option value="P2">P2</Option>
                    <Option value="P3">P3</Option>
                    <Option value="P4">P4</Option>
                    <Option value="P5">P5</Option>
                  </Select>
                </FormControl>

                <FormControl required>
                  <FormLabel>Creador</FormLabel>
                  <Select
                    value={creador}
                    onChange={(e, val) => setCreador(val)}
                  >
                    <Option value="Persona 1">Persona 1</Option>
                    <Option value="Persona 2">Persona 2</Option>
                  </Select>
                </FormControl>
              </Box>

              {/*BOX 5*/}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 4,
                  maxWidth: 800,
                }}
              >
                <FormControl>
                  <FormLabel>Etiquetas</FormLabel>
                  <Select
                    multiple
                    onChange={(event, newValue) => {
                      console.log(newValue);
                    }}
                  >
                    <Option value="1">Diseño de logo</Option>
                    <Option value="2">Diseño gráfico</Option>
                    <Option value="3">Diseño web</Option>
                    <Option value="4">Plan SEM</Option>
                    <Option value="5">Redes sociales</Option>
                    <Option value="6">Seseión fotográfica</Option>
                    <Option value="7">Video</Option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel>Control de cambios</FormLabel>
                  <Select defaultValue="Diseño inicial">
                    <Option value="1">Diseño inicial</Option>
                    <Option value="2">Cambio 1</Option>
                    <Option value="3">Cambio 2</Option>
                    <Option value="4">Cambio 3</Option>
                    <Option value="5">Cambio 4</Option>
                    <Option value="6">Cambio 5</Option>
                    <Option value="7">Cambio 6</Option>
                    <Option value="8">Cambio 7</Option>
                    <Option value="9">Cambio 8</Option>
                    <Option value="10">Cambio 9</Option>
                    <Option value="11">Cambio 10</Option>
                  </Select>
                </FormControl>
              </Box>

              {/*BOX 6*/}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 4,
                  maxWidth: 800,
                }}
              >
                <FormControl>
                  <FormLabel>Finalidad</FormLabel>
                  <Select>
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
                    <Option value="Manual de identidad">
                      Manual de identidad
                    </Option>
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
                    <Option value="Sesión fotografica">
                      Sesión fotografica
                    </Option>
                    <Option value="Edición video">Edición video</Option>
                    <Option value="Scouting">Scouting</Option>
                    <Option value="GIF">GIF</Option>
                    <Option value="Diseño web (comienza)">
                      Diseño web (comienza)
                    </Option>
                    <Option value="Diseño web (crece)">
                      Diseño web (crece)
                    </Option>
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
                  <FormLabel>Tipo de tarea</FormLabel>
                  <Select>
                    <Option value="1">Diaria</Option>
                    <Option value="2">Adicional</Option>
                    <Option value="3">Por evento</Option>
                  </Select>
                </FormControl>
              </Box>

              <FormControl sx={{ mt: 2 }}>
                <FormLabel>Descripción</FormLabel>
                <Textarea
                  minRows={2}
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                />
              </FormControl>

              <Button
                sx={{ mt: 3 }}
                onClick={handleSaveTask}
                variant="solid"
                color="primary"
              >
                Guardar tarea
              </Button>
            </Sheet>
          </Modal>
        </Card>

        {/* JUEVES */}

        <Card
          sx={{
            width: "350px",
            minWidth: 200,
            height: "500px",
            p: 2,
            borderRadius: "md",
            boxShadow: "md",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#d503b1" /*COLOR JUEVES*/,
              p: 1,
              borderRadius: "8px 8px 0 0",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography level="h3" sx={{ color: "#fff" }}>
                Jueves - 0
              </Typography>

              <>
                <Button
                  variant="outlined"
                  color="neutral"
                  onClick={() => setOpenM1(true)}
                  sx={{ width: 40, height: 40, borderRadius: "50%" }}
                  size="sm"
                >
                  <Add sx={{ color: "#fff" }} />
                </Button>
              </>
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "#fdbff2" /*COLOR JUEVES*/,
              p: 2,
              flex: 1,
              overflowY: "auto",
              maxHeight: "750px",
            }}
          >
            <Typography level="body-sm">No hay tareas</Typography>
          </Box>
        </Card>

        {/* VIERNES */}
        <Card
          sx={{
            width: "350px",
            minWidth: 200,
            height: "500px",
            p: 2,
            borderRadius: "md",
            boxShadow: "md",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#6700c0" /*COLOR VIERNES*/,
              p: 1,
              borderRadius: "8px 8px 0 0",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography level="h3" sx={{ color: "#fff" }}>
                Viernes - 0
              </Typography>
              <>
                <Button
                  variant="outlined"
                  color="neutral"
                  onClick={() => setOpenM1(true)}
                  sx={{ width: 40, height: 40, borderRadius: "50%" }}
                  size="sm"
                >
                  <Add sx={{ color: "#fff" }} />
                </Button>
              </>
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "#e4c5fe" /*COLOR VIERNES*/,
              p: 2,
              flex: 1,
              overflowY: "auto",
              maxHeight: "750px",
            }}
          >
            <Typography level="body-sm">No hay tareas</Typography>
          </Box>
        </Card>

        {/*SABADO*/}
        <Card
          sx={{
            width: "350px",
            minWidth: 200,
            height: "500px",
            p: 2,
            borderRadius: "md",
            boxShadow: "md",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#d2ca00 " /*COLOR SABADO*/,
              p: 1,
              borderRadius: "8px 8px 0 0",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography level="h3" sx={{ color: "#fff" }}>
                Sabado - 0
              </Typography>
              <>
                <Button
                  variant="outlined"
                  color="neutral"
                  onClick={() => setOpenM1(true)}
                  sx={{ width: 40, height: 40, borderRadius: "50%" }}
                  size="sm"
                >
                  <Add sx={{ color: "#fff" }} />
                </Button>
              </>
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "#fffcbb" /*COLOR SABADO*/,
              p: 2,
              height: "100%",
            }}
          >
            <Typography level="body-sm">No hay tareas</Typography>
          </Box>
        </Card>
      </Box>
    </>
  );
}
