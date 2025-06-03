import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

import { useState } from "react";

export function TareaSemanal() {
  const [openCard1, setOpenCard1] = useState(false);
  const [openCard2, setOpenCard2] = useState(false);
  const [openCard3, setOpenCard3] = useState(false);
  const [openCard4, setOpenCard4] = useState(false);
  const [openCard5, setOpenCard5] = useState(false);

  const [estado1, setEstado1] = useState("Por iniciar");
  const [estado2, setEstado2] = useState("En progreso");
  const [estado3, setEstado3] = useState("En espera");
  const [estado4, setEstado4] = useState("Completo");

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

    const colorMap4 = {
    "Por iniciar": "#484848",
    "En progreso": "#0049a2",
    "En espera": "#489200",
    Completo: "#bb8a00",
  };

  return (
    <>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center", mt: 2 }}>
        <Typography level="h1" sx={{ ml: 1 }}>
          Tareas
        </Typography>
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
        {/*POR INICIAR*/}
        <Card
          sx={{
            width: "395px",
            minWidth: 200,
            height: "500px",
            p: 2,
            borderRadius: "md",
            boxShadow: "md",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#5d5d5d",
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
                Por iniciar
              </Typography>
              <Typography level="h3" sx={{ color: "#fff" }}>
                1
              </Typography>
            </Box>
          </Box>

          {/*TARJETA DE TAREA 0 */}
          <Box sx={{ backgroundColor: "#dfdfdf", p: 2, height: "100%" }}>
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
                  <strong>Estado:</strong>{" "}
                  <Typography
                    component="span"
                    level="body-xs"
                    sx={{ color: "#484848" }}
                  >
                    Por iniciar
                  </Typography>
                </Typography>

                <Typography level="body-xs">
                  <strong>Prioridad:</strong>{" "}
                  <Typography
                    component="span"
                    level="body-xs"
                    sx={{ color: "green" }}
                  >
                    Medio
                  </Typography>
                </Typography>

                <Typography level="body-xs">
                  <strong>Asignado:</strong>{" "}
                  <Typography component="span" level="body-xs">
                    P1, P2, P3
                  </Typography>
                </Typography>

                <Typography level="body-xs">
                  <strong>Fecha vencimiento:</strong>{" "}
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
                    </div>
                  </Box>
                </Sheet>
              </Modal>
            </>
          </Box>
        </Card>

        {/*EN PROGRESO*/}

        <Card
          sx={{
            width: "395px",
            minWidth: 200,
            height: "500px",
            p: 2,
            borderRadius: "md",
            boxShadow: "md",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#0049a2", //color de en progreso
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
                En progreso
              </Typography>
              <Typography level="h3" sx={{ color: "#fff" }}>
                1
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "#cde3ff",
              p: 2,
              flex: 1,
              overflowY: "auto",
              maxHeight: "750px",
            }}
          >
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
                  <strong>Estado:</strong>{" "}
                  <Typography
                    component="span"
                    level="body-xs"
                    sx={{ color: "#0049a2" }}
                  >
                    En progreso
                  </Typography>
                </Typography>

                <Typography level="body-xs">
                  <strong>Prioridad:</strong>{" "}
                  <Typography
                    component="span"
                    level="body-xs"
                    sx={{ color: "red" }}
                  >
                    Alto
                  </Typography>
                </Typography>

                <Typography level="body-xs">
                  <strong>Asignado:</strong>{" "}
                  <Typography component="span" level="body-xs">
                    P2
                  </Typography>
                </Typography>

                <Typography level="body-xs">
                  <strong>Fecha vencimiento:</strong>{" "}
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
                    </div>
                  </Box>
                </Sheet>
              </Modal>
            </>
          </Box>
        </Card>

        {/*EN ESPERA*/}
        <Card
          sx={{
            width: "395px",
            minWidth: 200,
            height: "500px",
            p: 2,
            borderRadius: "md",
            boxShadow: "md",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#489200 ", //color de espera
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
              <Typography level="h4" sx={{ color: "#fff" }}>
                Espera de respuesta
              </Typography>
              <Typography level="h3" sx={{ color: "#fff" }}>
                1
              </Typography>
            </Box>
          </Box>
          <Box sx={{ backgroundColor: "#d5ffab", p: 2, height: "100%" }}>
            {/*TARJETA DE TAREA 2 */}

            <>
              <Card
                variant="outlined"
                color="neutral"
                onClick={() => setOpenCard3(true)}
              >
                <Typography level="body-sm" color="black">
                  <strong>#2 - Campaña de empresa1</strong>
                </Typography>

                <Typography level="body-xs">
                  <strong>Estado:</strong>{" "}
                  <Typography
                    component="span"
                    level="body-xs"
                    sx={{ color: "#489200" }}
                  >
                    En espera
                  </Typography>
                </Typography>

                <Typography level="body-xs">
                  <strong>Prioridad:</strong>{" "}
                  <Typography
                    component="span"
                    level="body-xs"
                    sx={{ color: "#0049a2" }}
                  >
                    Bajo
                  </Typography>
                </Typography>

                <Typography level="body-xs">
                  <strong>Asignado:</strong>{" "}
                  <Typography component="span" level="body-xs">
                    P1, P2, P3, P4
                  </Typography>
                </Typography>

                <Typography level="body-xs">
                  <strong>Fecha vencimiento:</strong>{" "}
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
                    </div>
                  </Box>
                </Sheet>
              </Modal>
            </>
          </Box>
        </Card>

        {/*COMPLETO*/}
        <Card
          sx={{
            width: "395px",
            minWidth: 200,
            height: "500px",
            p: 2,
            borderRadius: "md",
            boxShadow: "md",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#ccbf00",
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
                Completo
              </Typography>
              <Typography level="h3" sx={{ color: "#fff" }}>
                2
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#cde3ff",
              p: 2,
              flex: 1,
              overflowY: "auto",
              maxHeight: "750px",
            }}
          >
            <>
              <Card
                variant="outlined"
                color="neutral"
                onClick={() => setOpenCard4(true)}
              >
                <Typography level="body-sm" color="black">
                  <strong>#3 - Campaña emp2</strong>
                </Typography>

                <Typography level="body-xs">
                  <strong>Estado:</strong>{" "}
                  <Typography
                    component="span"
                    level="body-xs"
                    sx={{ color: "#bb8a00" }}
                  >
                    Completo
                  </Typography>
                </Typography>

                <Typography level="body-xs">
                  <strong>Prioridad:</strong>{" "}
                  <Typography
                    component="span"
                    level="body-xs"
                    sx={{ color: "#0049a2" }}
                  >
                    Bajo
                  </Typography>
                </Typography>

                <Typography level="body-xs">
                  <strong>Asignado:</strong>{" "}
                  <Typography component="span" level="body-xs">
                    P1, P4
                  </Typography>
                </Typography>

                <Typography level="body-xs">
                  <strong>Fecha vencimiento:</strong>{" "}
                  <Typography component="span" level="body-xs">
                    06/02/2025
                  </Typography>
                </Typography>
              </Card>

              <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={openCard4}
                onClose={() => setOpenCard4(false)}
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
                    onClick={() => setOpenCard4(false)}
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
                    #3 - Campaña emp2
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
                          value={estado4}
                          onChange={(e, newValue) => setEstado4(newValue)}
                          size="sm"
                          sx={{
                            "--Select-radius": "6px",
                            "--Select-paddingInline": "0.5rem",
                            "--Select-decoratorChildHeight": "1.5rem",
                            color: colorMap4[estado4] || "inherit",
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
                        <strong>Fecha vencimiento:</strong>06/02/2025
                      </p>
                      <p>
                        <strong>Asignado:</strong>P1,P4
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
                    </div>
                  </Box>
                </Sheet>
              </Modal>
            </>
            <br />
 <>
              <Card
                variant="outlined"
                color="neutral"
                onClick={() => setOpenCard5(true)}
              >
                <Typography level="body-sm" color="black">
                  <strong>#4 - Campaña emp3</strong>
                </Typography>

                <Typography level="body-xs">
                  <strong>Estado:</strong>{" "}
                  <Typography
                    component="span"
                    level="body-xs"
                    sx={{ color: "#bb8a00" }}
                  >
                    Completo
                  </Typography>
                </Typography>

                <Typography level="body-xs">
                  <strong>Prioridad:</strong>{" "}
                  <Typography
                    component="span"
                    level="body-xs"
                    sx={{ color: "red" }}
                  >
                    Alto
                  </Typography>
                </Typography>

                <Typography level="body-xs">
                  <strong>Asignado:</strong>{" "}
                  <Typography component="span" level="body-xs">
                    P3
                  </Typography>
                </Typography>

                <Typography level="body-xs">
                  <strong>Fecha vencimiento:</strong>{" "}
                  <Typography component="span" level="body-xs">
                    04/02/2025
                  </Typography>
                </Typography>
              </Card>

              <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={openCard5}
                onClose={() => setOpenCard5(false)}
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
                    onClick={() => setOpenCard5(false)}
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
                    #4 - Campaña emp3
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
                          value={estado4}
                          onChange={(e, newValue) => setEstado4(newValue)}
                          size="sm"
                          sx={{
                            "--Select-radius": "6px",
                            "--Select-paddingInline": "0.5rem",
                            "--Select-decoratorChildHeight": "1.5rem",
                            color: colorMap4[estado4] || "inherit",
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
                        <strong>Asignado:</strong>P3
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
                    </div>
                  </Box>
                </Sheet>
              </Modal>
            </>
          </Box>
        </Card>
      </Box>
    </>
  );
}
