import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import Sheet from "@mui/joy/Sheet";
import Card from "@mui/joy/Card";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import ButtonGroup from "@mui/joy/ButtonGroup";
import refreshIcon from "/refresh.svg"; // Import the refresh icon
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Checkbox from "@mui/joy/Checkbox";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Divider from "@mui/joy/Divider";
import { Link } from "wouter";

import { useState } from "react";

export function Soporte() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center", mt: 2 }}>
        <Typography level="h1" sx={{ ml: 1 }}>
          Soporte
        </Typography>
        <Link href="/nuevotick">
          <Button
            startDecorator={<Add />}
            type="button"
            variant="outlined"
            size="sm"
          >
            Nuevo ticket
          </Button>
        </Link>
      </Box>

      {/*RECUADRO*/}

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
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography sx={{ fontWeight: "lg", fontSize: "0.9rem" }}>
            2
          </Typography>
          <Typography
            level="body-xs"
            sx={{ fontWeight: "lg", color: "#b40202", fontSize: "0.9rem" }} //rojo
          >
            Abierto
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography sx={{ fontWeight: "lg", fontSize: "0.9rem" }}>
            1
          </Typography>
          <Typography
            level="body-xs"
            sx={{ fontWeight: "lg", color: "#239d02", fontSize: "0.9rem" }} //verde
          >
            En progeso
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography sx={{ fontWeight: "lg", fontSize: "0.9rem" }}>
            1
          </Typography>
          <Typography
            level="body-xs"
            sx={{ fontWeight: "lg", color: "#0378ac", fontSize: "0.9rem" }} //azul
          >
            Contestado
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography sx={{ fontWeight: "lg", fontSize: "0.9rem" }}>
            0
          </Typography>
          <Typography
            level="body-xs"
            sx={{ fontWeight: "lg", color: "#bb8a00", fontSize: "0.9rem" }} //amarillo
          >
            En espera
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography sx={{ fontWeight: "lg", fontSize: "0.9rem" }}>
            2
          </Typography>
          <Typography
            level="body-xs"
            sx={{ fontWeight: "lg", fontSize: "0.9rem" }}
          >
            Cerrado
          </Typography>
        </Box>
      </Sheet>

      {/*TABLA*/}

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
        {/*SELECT, BOTON Y ACTUALIZAR*/}

        <Box
          sx={{ display: "flex", justifyContent: "flex-start", gap: 2, mb: 2 }}
        >
          <Select defaultValue="10" sx={{ width: 110 }}>
            <Option value="10">10</Option>
            <Option value="25">25</Option>
            <Option value="50">50</Option>
            <Option value="100">100</Option>
            <Option value="todo">Todo</Option>
          </Select>

          <ButtonGroup>
            <Button>Exportar</Button>
            <>
              <Button
                variant="outlined"
                color="neutral"
                onClick={() => setOpen(true)}
              >
                {" "}
                Acciones masivas
              </Button>

              <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog
                  aria-labelledby="nested-modal-title"
                  aria-describedby="nested-modal-description"
                  sx={(theme) => ({
                    [theme.breakpoints.only("xs")]: {
                      top: "unset",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      borderRadius: 0,
                      transform: "none",
                      maxWidth: "unset",
                    },
                  })}
                >
                  <Typography id="nested-modal-title" level="h2">
                    Acciones masivas
                  </Typography>
                  <Typography
                    id="nested-modal-description"
                    textColor="text.tertiary"
                  >
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                    >
                      <Checkbox label="Merge Tickets" />
                      <Checkbox label="Eliminación masiva" />
                    </Box>
                    <br></br>
                    <Divider></Divider>
                    <br></br>
                    <FormControl>
                      <FormLabel>Cambiar estado</FormLabel>
                      <Select>
                        <Option value="one">Abierto</Option>
                        <Option value="two">En progreso</Option>
                        <Option value="three">Contestado</Option>
                        <Option value="four">En espera</Option>
                        <Option value="five">Cerrado</Option>
                      </Select>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Departamento</FormLabel>
                      <Select>
                        <Option value="one">Ticket</Option>
                      </Select>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Prioridad de tickets</FormLabel>
                      <Select>
                        <Option value="one">Baja</Option>
                        <Option value="two">Media</Option>
                        <Option value="three">Alta</Option>
                      </Select>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Etiquetas</FormLabel>
                      <Select
                        multiple
                        onChange={(event, newValue) => {
                          console.log(newValue);
                        }}
                      >
                        <Option value="one">Diseño de logo</Option>
                        <Option value="two">Diseño gráfico</Option>
                        <Option value="three">Diseño web</Option>
                        <Option value="four">Plan SEM</Option>
                        <Option value="five">Redes sociales</Option>
                        <Option value="six">Sesión fotográfica</Option>
                      </Select>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Servicio</FormLabel>
                      <Select>
                        <Option value="one">Correo electrónico</Option>
                        <Option value="two">Soporte técnico</Option>
                      </Select>
                    </FormControl>
                  </Typography>

                  <Box
                    sx={{
                      mt: 1,
                      display: "flex",
                      gap: 1,
                      flexDirection: { xs: "column", sm: "row-reverse" },
                    }}
                  >
                    <Button
                      variant="solid"
                      color="primary"
                      onClick={() => setOpen(false)}
                    >
                      Confirmar
                    </Button>
                    <Button
                      variant="outlined"
                      color="neutral"
                      onClick={() => setOpen(false)}
                    >
                      Cerrar
                    </Button>
                  </Box>
                </ModalDialog>
              </Modal>
            </>

            <Button>
              <img src={refreshIcon} alt="Refresh" className="refresh-icon" />
            </Button>
          </ButtonGroup>
        </Box>

        <table className="custom-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Tema</th>
              <th>Etiquetas</th>
              <th>Departamento</th>
              <th>Servicio</th>
              <th>Cliente</th>
              <th>Estado</th>
              <th>Prioridad</th>
              <th>Última respuesta</th>
              <th>Fecha de creación</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Lorem ipsum</td>
              <td>-</td>
              <td>Ticket</td>
              <td>-</td>
              <td>María Luisa Gonzalez Andre (Centro Albatros)</td>
              <td>
                <Select
                  defaultValue="Abierto"
                  size="sm"
                  sx={{
                    "--Select-radius": "6px",
                    "--Select-paddingInline": "0.5rem",
                    "--Select-decoratorChildHeight": "1.5rem",
                    border: "1px solid",
                    borderColor: "#b40202",
                    color: "#b40202",
                  }}
                >
                  <Option value="Abierto" sx={{ color: "#b40202" }}>
                    Abierto
                  </Option>
                  <Option value="En progreso" sx={{ color: "#239d02" }}>
                    En progreso
                  </Option>
                  <Option value="Contestado" sx={{ color: "#0378ac" }}>
                    Contestado
                  </Option>
                  <Option value="En espera" sx={{ color: "#bb8a00" }}>
                    En espera
                  </Option>
                  <Option value="Cerrado" sx={{ color: "#3c444b" }}>
                    Cerrado
                  </Option>
                </Select>
              </td>
              <td>Medio</td>
              <td>Sin respuesta, todavía</td>
              <td>
                <td>12/02/2023 12:31:04</td>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Lorem ipsum</td>
              <td>-</td>
              <td>Ticket</td>
              <td>-</td>
              <td>Monserrat Vargas (Alva Papeleria SA de CV)</td>
              <td>
                <Select
                  defaultValue="Abierto"
                  size="sm"
                  sx={{
                    "--Select-radius": "6px",
                    "--Select-paddingInline": "0.5rem",
                    "--Select-decoratorChildHeight": "1.5rem",
                    border: "1px solid",
                    borderColor: "#b40202",
                    color: "#b40202",
                  }}
                >
                  <Option value="Abierto" sx={{ color: "#b40202" }}>
                    Abierto
                  </Option>
                  <Option value="En progreso" sx={{ color: "#239d02" }}>
                    En progreso
                  </Option>
                  <Option value="Contestado" sx={{ color: "#0378ac" }}>
                    Contestado
                  </Option>
                  <Option value="En espera" sx={{ color: "#bb8a00" }}>
                    En espera
                  </Option>
                  <Option value="Cerrado" sx={{ color: "#3c444b" }}>
                    Cerrado
                  </Option>
                </Select>
              </td>
              <td>Medio</td>
              <td>Sin respuesta, todavía</td>
              <td>15/02/2023 12:31:04</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Lorem ipsum</td>
              <td>-</td>
              <td>Ticket</td>
              <td>-</td>
              <td>Monserrat Vargas (Alva Papeleria SA de CV)</td>

              <td>
                <Select
                  defaultValue="En progreso"
                  size="sm"
                  sx={{
                    "--Select-radius": "6px",
                    "--Select-paddingInline": "0.5rem",
                    "--Select-decoratorChildHeight": "1.5rem",
                    border: "1px solid rgb(2, 180, 2)",
                    color: "#239d02",
                  }}
                >
                  <Option value="Abierto" sx={{ color: "#b40202" }}>
                    Abierto
                  </Option>
                  <Option value="En progreso" sx={{ color: "#239d02" }}>
                    En progreso
                  </Option>
                  <Option value="Contestado" sx={{ color: "#0378ac" }}>
                    Contestado
                  </Option>
                  <Option value="En espera" sx={{ color: "#bb8a00" }}>
                    En espera
                  </Option>
                  <Option value="Cerrado" sx={{ color: "#3c444b" }}>
                    Cerrado
                  </Option>
                </Select>
              </td>

              <td>Medio</td>
              <td>18/09/2024 12:04:12</td>
              <td>17/02/2023 12:31:04</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Lorem ipsum</td>
              <td>-</td>
              <td>Ticket</td>
              <td>-</td>
              <td>ROBERTO NAHUM AMAYA ZAMORA (Tara)</td>
              <td>
                <Select
                  defaultValue="Contestado"
                  size="sm"
                  sx={{
                    "--Select-radius": "6px",
                    "--Select-paddingInline": "0.5rem",
                    "--Select-decoratorChildHeight": "1.5rem",
                    border: "1px solid rgb(2, 91, 180)",
                    color: "#0378ac",
                  }}
                >
                  <Option value="Abierto" sx={{ color: "#b40202" }}>
                    Abierto
                  </Option>
                  <Option value="En progreso" sx={{ color: "#239d02" }}>
                    En progreso
                  </Option>
                  <Option value="Contestado" sx={{ color: "#0378ac" }}>
                    Contestado
                  </Option>
                  <Option value="En espera" sx={{ color: "#bb8a00" }}>
                    En espera
                  </Option>
                  <Option value="Cerrado" sx={{ color: "#3c444b" }}>
                    Cerrado
                  </Option>
                </Select>
              </td>
              <td>Alto</td>
              <td>18/02/2023 17:08:42</td>
              <td>20/02/2023 12:31:04</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Lorem ipsum</td>
              <td>-</td>
              <td>Ticket</td>
              <td>-</td>
              <td>Hugo Alejandro castillo (Central HACSA )</td>
              <td>
                <Select
                  defaultValue="Cerrado"
                  size="sm"
                  sx={{
                    "--Select-radius": "6px",
                    "--Select-paddingInline": "0.5rem",
                    "--Select-decoratorChildHeight": "1.5rem",
                    border: "1px solid rgb(60, 68, 75)",
                  }}
                >
                  <Option value="Abierto" sx={{ color: "#b40202" }}>
                    Abierto
                  </Option>
                  <Option value="En progreso" sx={{ color: "#239d02" }}>
                    En progreso
                  </Option>
                  <Option value="Contestado" sx={{ color: "#0378ac" }}>
                    Contestado
                  </Option>
                  <Option value="En espera" sx={{ color: "#bb8a00" }}>
                    En espera
                  </Option>
                  <Option value="Cerrado" sx={{ color: "#3c444b" }}>
                    Cerrado
                  </Option>
                </Select>
              </td>
              <td>Bajo</td>
              <td>20/02/2023 17:08:42</td>
              <td>21/02/2023 12:31:04</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Lorem ipsum</td>
              <td>-</td>
              <td>Ticket</td>
              <td>-</td>
              <td>Gina Paola Calixto Pedraza (Hemoterapia) </td>
              <td>
                <Select
                  defaultValue="Cerrado"
                  size="sm"
                  sx={{
                    "--Select-radius": "6px",
                    "--Select-paddingInline": "0.5rem",
                    "--Select-decoratorChildHeight": "1.5rem",
                    border: "1px solid rgb(60, 68, 75)",
                  }}
                >
                  <Option value="Abierto" sx={{ color: "#b40202" }}>
                    Abierto
                  </Option>
                  <Option value="En progreso" sx={{ color: "#239d02" }}>
                    En progreso
                  </Option>
                  <Option value="Contestado" sx={{ color: "#0378ac" }}>
                    Contestado
                  </Option>
                  <Option value="En espera" sx={{ color: "#bb8a00" }}>
                    En espera
                  </Option>
                  <Option value="Cerrado" sx={{ color: "#3c444b" }}>
                    Cerrado
                  </Option>
                </Select>
              </td>
              <td>Bajo</td>
              <td>25/02/2023 13:08:42</td>
              <td>25/02/2023 17:31:04</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </>
  );
}
