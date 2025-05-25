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
import Textarea from "@mui/joy/Textarea";
import Checkbox from "@mui/joy/Checkbox";
import SvgIcon from "@mui/joy/SvgIcon";
import { styled } from "@mui/joy";

import { useState } from "react";

export function Tarea() {
  const [open, setOpen] = useState(false);
  const [repeticion, setRepeticion] = useState("");
  const VisuallyHiddenInput = styled("input")`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    white-space: nowrap;
    width: 1px;
  `;
  return (
    <>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center", mt: 2 }}>
        <Typography level="h1" sx={{ ml: 1 }}>
          Tareas
        </Typography>
        <>
          <Button
            startDecorator={<Add />}
            type="button"
            variant="outlined"
            onClick={() => setOpen(true)}
            size="sm"
          >
            Nueva tarea
          </Button>
          <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={open}
            onClose={() => setOpen(false)}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Sheet
              variant="outlined"
              sx={{
                maxWidth: 1100,
                maxHeight: "90vh", // Limita la altura del modal al 90% de la ventana
                overflowY: "auto", // Habilita el scroll vertical
                borderRadius: "md",
                p: 3,
                boxShadow: "lg",
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
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 4,
                  maxWidth: 700,
                }}
              >
                <Checkbox label="Público" />
                <Checkbox label="Facturable" />
                <Button
                  component="label"
                  role={undefined}
                  tabIndex={-1}
                  variant="outlined"
                  color="neutral"
                  startDecorator={
                    <SvgIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                        />
                      </svg>
                    </SvgIcon>
                  }
                >
                  Upload a file
                  <VisuallyHiddenInput type="file" />
                </Button>
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
                  <FormLabel>Tema</FormLabel>
                  <Input required type="text"></Input>
                </FormControl>
                <FormControl>
                  <FormLabel>Descripción</FormLabel>
                  <Textarea minRows={2} />
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
                  <FormLabel>Categoría</FormLabel>
                  <Select>
                    <Option value="1">Por iniciar</Option>
                    <Option value="2">En progreso</Option>
                    <Option value="3">Testear</Option>
                    <Option value="4">Espera de respuesta</Option>
                    <Option value="5">Completo</Option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel>Precio por hora</FormLabel>
                  <Input
                    required
                    type="number"
                    startDecorator="$"
                    placeholder="0.00"
                  />
                </FormControl>
              </Box>
              {/*BOX 4*/}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 4,
                  maxWidth: 800,
                }}
              >
                <FormControl>
                  <FormLabel>Prioridad</FormLabel>
                  <Select defaultValue="Bajo">
                    <Option value="1">Bajo</Option>
                    <Option value="2">Medio</Option>
                    <Option value="3">Alto</Option>
                    <Option value="4">Urgente</Option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Repetir cada</FormLabel>
                  <Select
                    value={repeticion}
                    onChange={(e, newValue) => setRepeticion(newValue)}
                  >
                    <Option value="1">Semanal</Option>
                    <Option value="2">2 semanas</Option>
                    <Option value="3">1 mes</Option>
                    <Option value="4">2 meses</Option>
                    <Option value="5">3 meses</Option>
                    <Option value="6">6 meses</Option>
                    <Option value="7">1 año</Option>
                    <Option value="8">Personalizado</Option>
                  </Select>
                </FormControl>

                {repeticion === "8" && (
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: 2,
                      mt: 2,
                    }}
                  >
                    <FormControl>
                      <Input type="number" placeholder="Ej. 3" />
                    </FormControl>

                    <FormControl>
                      <Select defaultValue="Día(s)" placeholder="Ej. Días(s)">
                        <Option value="dias">Día(s)</Option>
                        <Option value="semanas">Semana(s)</Option>
                        <Option value="meses">Mese(s)</Option>
                        <Option value="años">Año(s)</Option>
                      </Select>
                    </FormControl>
                  </Box>
                )}
              </Box>
              {/*form*/}
              <FormControl>
                <FormLabel>Relacionado con</FormLabel>
                <Select>
                  <Option value="1">Proyecto</Option>
                  <Option value="2">Factura</Option>
                  <Option value="3">Cliente</Option>
                  <Option value="4">Presupuesto</Option>
                  <Option value="5">Contrato</Option>
                  <Option value="6">Ticket</Option>
                  <Option value="7">Gastos</Option>
                  <Option value="8">Clientes potenciales</Option>
                  <Option value="9">Propuesta</Option>
                </Select>
              </FormControl>
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
                  <FormLabel>Comercial</FormLabel>
                  <Input required type="text" />
                </FormControl>
                <FormControl>
                  <FormLabel>Seguidores</FormLabel>
                  <Input required type="text" />
                </FormControl>
              </Box>
              {/*form*/}
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

              {/*BOX 6*/}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 4,
                  maxWidth: 800,
                }}
              >
                <FormControl required>
                  <FormLabel>Tipo de tarea</FormLabel>
                  <Select>
                    <Option value="1">Diaria</Option>
                    <Option value="2">Adicional</Option>
                    <Option value="3">Pro evento</Option>
                  </Select>
                </FormControl>
                <FormControl required>
                  <FormLabel>Finalidad</FormLabel>
                  <Select>
                    <Option value="1">Publicación</Option>
                    <Option value="2">Diseño gráfico</Option>
                    <Option value="3">Diseño web</Option>
                    <Option value="4">Paln SEM</Option>
                    <Option value="5">Redes sociales</Option>
                    <Option value="6">Sesión fotografica</Option>
                    <Option value="7">Video</Option>
                    <Option value="8">Diseño de logo</Option>
                    <Option value="9">Diseño gráfico</Option>
                    <Option value="10">Diseño web</Option>
                    <Option value="11">Plan SEM</Option>
                    <Option value="12">Redes sociales</Option>
                    <Option value="13">Sesión fotografica</Option>
                    <Option value="14">Video</Option>
                  </Select>
                </FormControl>
              </Box>
              {/*BOX 7*/}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 4,
                  maxWidth: 800,
                }}
              >
                <FormControl>
                  <FormLabel>Contorl de cambio</FormLabel>
                  <Select>
                    <Option value="1">Publicación</Option>
                    <Option value="2">Historia</Option>
                    <Option value="3">Portada</Option>
                    <Option value="4">Perfil</Option>
                    <Option value="5">Logo</Option>
                    <Option value="6">Icono</Option>
                    <Option value="7">Campaña Facebooks Ads</Option>
                    <Option value="8">Blog</Option>
                    <Option value="9">Manual de identidad</Option>
                    <Option value="10">Díptico</Option>
                    <Option value="11">Tríptico</Option>
                    <Option value="12">Volante</Option>
                    <Option value="13">Impresión</Option>
                    <Option value="14">Brochure</Option>
                    <Option value="15">Firma electrónica</Option>
                    <Option value="16">Tarjeta de presentación</Option>
                    <Option value="17">Etiqueta</Option>
                    <Option value="18">Horario</Option>
                    <Option value="19">Nota</Option>
                    <Option value="20">Proyecto cofepris</Option>
                    <Option value="21">Calcomanía</Option>
                    <Option value="22">Pantalla</Option>
                    <Option value="23">Lona</Option>
                    <Option value="24">Espectacular</Option>
                    <Option value="25">Edición y retoque de fotos</Option>
                    <Option value="26">Camioneta/Carro</Option>
                    <Option value="27">Reel</Option>
                    <Option value="28">Grabación de video</Option>
                    <Option value="29">Sesión fotografica</Option>
                    <Option value="30">Edición de video</Option>
                    <Option value="31">Scouting</Option>
                    <Option value="32">GIF</Option>
                    <Option value="33">Diseño web (comienza)</Option>
                    <Option value="34">Diseño web (crece)</Option>
                    <Option value="35">Diseño web (corporativo)</Option>
                    <Option value="36">Shopify</Option>
                    <Option value="37">Banner</Option>
                    <Option value="38">Productos promocionales</Option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Creador</FormLabel>
                  <Input required type="text" />
                </FormControl>
              </Box>

              <Box sx={{ display: "flex", flexWrap: "wrap", mt: 3 }}>
                <Button>Guardar</Button>
              </Box>
            </Sheet>
          </Modal>
        </>
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
        {/* Tarjeta 1 */}
        <Card
          sx={{
            width: "350px",
            minWidth: 200,
            height: "600px",
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
                2
              </Typography>
            </Box>
          </Box>

          <Box sx={{ backgroundColor: "#dfdfdf", p: 2, height: "100%" }}>
            <Card>
              <Typography level="body-sm">#0000 - Lorem ipsum </Typography>
              <Typography level="body-xs">Estado: Por iniciar</Typography>
              <Typography level="body-xs">Prioridad: Alto</Typography>
              <Typography level="body-xs">Fecha inicio: 01/02/2025</Typography>
              <Typography level="body-xs">Fecha termino: 05/02/2025</Typography>
            </Card>
            <br></br>
            <Card>
              <Typography level="body-sm">#0001 - Lorem ipsum </Typography>
              <Typography level="body-xs">Estado: Por iniciar</Typography>
              <Typography level="body-xs">Prioridad: Alto</Typography>
              <Typography level="body-xs">Fecha inicio: 01/02/2025</Typography>
              <Typography level="body-xs">Fecha termino: 05/02/2025</Typography>
            </Card>
          </Box>
        </Card>

        {/* Tarjeta 2 */}
        <Card
          sx={{
            width: "350px",
            minWidth: 200,
            height: "600px",
            p: 2,
            borderRadius: "md",
            boxShadow: "md",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#0049a2",
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
                3
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "#cde3ff",
              p: 2,
              flex: 1,
              overflowY: "auto",
              maxHeight: "750px", // ajusta según el alto total del Card
            }}
          >
            <Card>
              <Typography level="body-sm">#0002 - Lorem ipsum </Typography>
              <Typography level="body-xs">Estado: En progreso</Typography>
              <Typography level="body-xs">Prioridad: Alto</Typography>
              <Typography level="body-xs">Fecha inicio: 01/02/2025</Typography>
              <Typography level="body-xs">Fecha termino: 05/02/2025</Typography>
            </Card>
            <br />
            <Card>
              <Typography level="body-sm">#0003 - Lorem ipsum </Typography>
              <Typography level="body-xs">Estado: En progreso</Typography>
              <Typography level="body-xs">Prioridad: Alto</Typography>
              <Typography level="body-xs">Fecha inicio: 01/02/2025</Typography>
              <Typography level="body-xs">Fecha termino: 05/02/2025</Typography>
            </Card>
            <br />
            <Card>
              <Typography level="body-sm">#0004 - Lorem ipsum </Typography>
              <Typography level="body-xs">Estado: En progreso</Typography>
              <Typography level="body-xs">Prioridad: Alto</Typography>
              <Typography level="body-xs">Fecha inicio: 01/02/2025</Typography>
              <Typography level="body-xs">Fecha termino: 05/02/2025</Typography>
            </Card>
          </Box>
        </Card>

        {/* Tarjeta 3 */}
        <Card
          sx={{
            width: "350px",
            minWidth: 200,
            height: "600px",
            p: 2,
            borderRadius: "md",
            boxShadow: "md",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#009578",
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
                Testear
              </Typography>
              <Typography level="h3" sx={{ color: "#fff" }}>
                0
              </Typography>
            </Box>
          </Box>

          <Box sx={{ backgroundColor: "#bffff2", p: 2, height: "100%" }}>
            <Typography level="body-sm">No hay tareas</Typography>
          </Box>
        </Card>

        {/* Tarjeta 4 */}
        <Card
          sx={{
            width: "350px",
            minWidth: 200,
            height: "600px",
            p: 2,
            borderRadius: "md",
            boxShadow: "md",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#489200 ",
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
                0
              </Typography>
            </Box>
          </Box>
          <Box sx={{ backgroundColor: "#d5ffab", p: 2, height: "100%" }}>
            <Typography level="body-sm">No hay tareas</Typography>
          </Box>
        </Card>

        {/* Tarjeta 5 */}
        <Card
          sx={{
            width: "350px",
            minWidth: 200,
            height: "600px",
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
                5
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#cde3ff",
              p: 2,
              flex: 1,
              overflowY: "auto",
              maxHeight: "750px", // ajusta según el alto total del Card
            }}
          >
            <Card>
              <Typography level="body-sm">#0005 - Lorem ipsum </Typography>
              <Typography level="body-xs">Estado: Completo</Typography>
              <Typography level="body-xs">Prioridad: Medio</Typography>
              <Typography level="body-xs">Fecha inicio: 01/02/2025</Typography>
              <Typography level="body-xs">Fecha termino: 05/02/2025</Typography>
            </Card>
            <br />
            <Card>
              <Typography level="body-sm">#0006 - Lorem ipsum </Typography>
              <Typography level="body-xs">Estado: Completo</Typography>
              <Typography level="body-xs">Prioridad: Medio</Typography>
              <Typography level="body-xs">Fecha inicio: 01/02/2025</Typography>
              <Typography level="body-xs">Fecha termino: 05/02/2025</Typography>
            </Card>
            <br />
            <Card>
              <Typography level="body-sm">#0007 - Lorem ipsum </Typography>
              <Typography level="body-xs">Estado: Completo</Typography>
              <Typography level="body-xs">Prioridad: Medio</Typography>
              <Typography level="body-xs">Fecha inicio: 01/02/2025</Typography>
              <Typography level="body-xs">Fecha termino: 05/02/2025</Typography>
            </Card>
            <br />
            <Card>
              <Typography level="body-sm">#0008 - Lorem ipsum </Typography>
              <Typography level="body-xs">Estado: Completo</Typography>
              <Typography level="body-xs">Prioridad: Medio</Typography>
              <Typography level="body-xs">Fecha inicio: 01/02/2025</Typography>
              <Typography level="body-xs">Fecha termino: 05/02/2025</Typography>
            </Card>
            <br />
            <Card>
              <Typography level="body-sm">#0009 - Lorem ipsum </Typography>
              <Typography level="body-xs">Estado: Completo</Typography>
              <Typography level="body-xs">Prioridad: Medio</Typography>
              <Typography level="body-xs">Fecha inicio: 01/02/2025</Typography>
              <Typography level="body-xs">Fecha termino: 05/02/2025</Typography>
            </Card>
          </Box>
        </Card>
      </Box>
    </>
  );
}
