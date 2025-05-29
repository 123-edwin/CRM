import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Divider from "@mui/joy/Divider";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import ButtonGroup from "@mui/joy/ButtonGroup";
import refreshIcon from "/refresh.svg"; // Import the refresh icon
import Button from "@mui/joy/Button";
import { Link } from "wouter";
import { useState } from "react";

export function Tabla() {
  const [fechaActual, setFechaActual] = useState(new Date());
  const [seccionActiva, setSeccionActiva] = useState("Home");

  const avanzarMes = () => {
    const nuevoMes = new Date(
      fechaActual.getFullYear(),
      fechaActual.getMonth() + 1,
      1
    );
    setFechaActual(nuevoMes);
  };

  const retrocederMes = () => {
    const nuevoMes = new Date(
      fechaActual.getFullYear(),
      fechaActual.getMonth() - 1,
      1
    );
    setFechaActual(nuevoMes);
  };

  const obtenerDiasDelMes = () => {
    const year = fechaActual.getFullYear();
    const month = fechaActual.getMonth();
    const diasEnMes = new Date(year, month + 1, 0).getDate();
    const primerDiaSemana = new Date(year, month, 1).getDay();
    const dias = [];

    for (let i = 0; i < primerDiaSemana; i++) {
      dias.push("");
    }

    for (let d = 1; d <= diasEnMes; d++) {
      dias.push(d);
    }

    return dias;
  };

  const dias = obtenerDiasDelMes();
  const nombreMes = fechaActual.toLocaleString("es-ES", {
    month: "long",
    year: "numeric",
  });

  //tabla de varios
  const renderContenidoSeccion = () => {
    switch (seccionActiva) {
      case "Tareas":
        return (
          <>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 3 }}>
              <Link href="/tareass">
                <Button onClick={function () {}} variant="outlined">
                  Ir a tareas
                </Button>
              </Link>
            </Box>

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
              {/* SELECT, BOTÓN Y ACTUALIZAR */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: 2,
                  mb: 2,
                }}
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
                  <Button>
                    <img
                      src={refreshIcon}
                      alt="Refresh"
                      className="refresh-icon"
                    />
                  </Button>
                </ButtonGroup>
              </Box>

              <table className="custom-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Estado</th>
                    <th>Fecha inicio</th>
                    <th>Etiquetas</th>
                    <th>Prioridad</th>
                    <th>Control de cambios</th>
                    <th>Finalidad</th>
                    <th>Tipo de tarea</th>
                    <th>Creardor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </>
        );

      case "Proyectos":
        return (
          <>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 3 }}>
              <Link href="/proyectoss">
                <Button onClick={function () {}} variant="outlined">
                  Ir a proyectos
                </Button>
              </Link>
            </Box>

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
              {/* SELECT, BOTÓN Y ACTUALIZAR */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: 2,
                  mb: 2,
                }}
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
                  <Button>
                    <img
                      src={refreshIcon}
                      alt="Refresh"
                      className="refresh-icon"
                    />
                  </Button>
                </ButtonGroup>
              </Box>

              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Nombre del proyecto</th>
                    <th>Fecha inicio</th>
                    <th>Fecha entrega</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </>
        );

      case "Recordatorios":
        return (
          <>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 3 }}>
              <Button onClick={function () {}} variant="outlined">
                Ver más
              </Button>
            </Box>

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
              {/* SELECT, BOTÓN Y ACTUALIZAR */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: 2,
                  mb: 2,
                }}
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
                  <Button>
                    <img
                      src={refreshIcon}
                      alt="Refresh"
                      className="refresh-icon"
                    />
                  </Button>
                </ButtonGroup>
              </Box>

              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Relacionado con</th>
                    <th>Descripción</th>
                    <th>Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </>
        );

      case "Tickets":
        return (
          <>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 3 }}>
              <Link href="/sop">
                <Button onClick={function () {}} variant="outlined">
                  Ir a soporte
                </Button>
              </Link>
            </Box>
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
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: 2,
                  mb: 2,
                }}
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
                  <Button>
                    <img
                      src={refreshIcon}
                      alt="Refresh"
                      className="refresh-icon"
                    />
                  </Button>
                </ButtonGroup>
              </Box>

              <table className="custom-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Tema</th>
                    <th>Etiquetas</th>
                    <th>Estado</th>
                    <th>Prioridad</th>
                    <th>Última respuesta</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Lorem ipsum</td>
                    <td>-</td>
                    <td>
                      <Typography
                        level="body-xs"
                        sx={{
                          fontWeight: "lg",
                          color: "#b40202",
                          fontSize: "0.75rem",
                          border: "1px solid #b40202",
                          borderRadius: "6px",
                          px: 1,
                          py: 0.3,
                          display: "inline-block",
                        }}
                      >
                        Abierto
                      </Typography>
                    </td>
                    <td>Medio</td>
                    <td>Sin respuesta, todavía</td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>Lorem ipsum</td>
                    <td>-</td>
                    <td>
                      <Typography
                        level="body-xs"
                        sx={{
                          fontWeight: "lg",
                          color: "#b40202",
                          fontSize: "0.75rem",
                          border: "1px solid #b40202",
                          borderRadius: "6px",
                          px: 1,
                          py: 0.3,
                          display: "inline-block",
                        }}
                      >
                        Abierto
                      </Typography>
                    </td>
                    <td>Medio</td>
                    <td>Sin respuesta, todavía</td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>Lorem ipsum</td>
                    <td>-</td>
                    <td>
                      <Typography
                        level="body-xs"
                        sx={{
                          fontWeight: "lg",
                          color: "#239d02",
                          fontSize: "0.75rem",
                          border: "1px solid rgb(2, 180, 2)",
                          borderRadius: "6px",
                          px: 1,
                          py: 0.3,
                          display: "inline-block",
                        }}
                      >
                        En progreso
                      </Typography>
                    </td>
                    <td>Medio</td>
                    <td>18/09/2024 12:04:12</td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td>Lorem ipsum</td>
                    <td>-</td>
                    <td>
                      <Typography
                        level="body-xs"
                        sx={{
                          fontWeight: "lg",
                          color: "#0378ac",
                          fontSize: "0.75rem",
                          border: "1px solid rgb(2, 91, 180)",
                          borderRadius: "6px",
                          px: 1,
                          py: 0.3,
                          display: "inline-block",
                        }}
                      >
                        Contestado
                      </Typography>
                    </td>
                    <td>Alto</td>
                    <td>18/02/2023 17:08:42</td>
                  </tr>

                  <tr>
                    <td>5</td>
                    <td>Lorem ipsum</td>
                    <td>-</td>
                    <td>
                      <Typography
                        level="body-xs"
                        sx={{
                          fontWeight: "lg",

                          fontSize: "0.75rem",
                          border: "1px solid rgb(60, 68, 75)",
                          borderRadius: "6px",
                          px: 1,
                          py: 0.3,
                          display: "inline-block",
                        }}
                      >
                        Cerrado
                      </Typography>
                    </td>
                    <td>Bajo</td>
                    <td>20/02/2023 17:08:42</td>
                  </tr>

                  <tr>
                    <td>6</td>
                    <td>Lorem ipsum</td>
                    <td>-</td>
                    <td>
                      <Typography
                        level="body-xs"
                        sx={{
                          fontWeight: "lg",

                          fontSize: "0.75rem",
                          border: "1px solid rgb(60, 68, 75)",
                          borderRadius: "6px",
                          px: 1,
                          py: 0.3,
                          display: "inline-block",
                        }}
                      >
                        Cerrado
                      </Typography>
                    </td>
                    <td>Bajo</td>
                    <td>25/02/2023 13:08:42</td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </>
        );

      case "Anuncios":
        return (
          <>
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
              {/* SELECT, BOTÓN Y ACTUALIZAR */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: 2,
                  mb: 2,
                }}
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
                  <Button>
                    <img
                      src={refreshIcon}
                      alt="Refresh"
                      className="refresh-icon"
                    />
                  </Button>
                </ButtonGroup>
              </Box>

              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Nombre del anuncio</th>
                    <th>Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* Tarjetas 1 */}
      <Box display="flex" gap={2} sx={{ ml: 2, mt: 3 }}>
        <Card variant="outlined" sx={{ width: 200, p: 2 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box>
              <Link href="/fact">
                <Typography>Facturas por cobrar</Typography>
              </Link>
              <strong>0 / 0</strong>
            </Box>

            <Box>
              <Link href="/clientpoten">
                <Typography>Cliente potenciales</Typography>
              </Link>
              <strong>0 / 0</strong>
            </Box>

            <Box>
              <Link href="/proyectoss">
                <Typography>Proyectos en desarrollo</Typography>
              </Link>
              <strong>0 / 0</strong>
            </Box>

            <Box>
              <Typography>Tareas sin completar</Typography>
              <strong>0 / 0</strong>
            </Box>
          </Box>
        </Card>

        <Card variant="outlined" sx={{ width: 920 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Facturas */}
            <Box>
              <Typography fontWeight="lg">Resumen de facturas</Typography>
              <Divider sx={{ my: 4 }} />
              <Link href="/fact">
                <Typography>0 Borrador </Typography>
              </Link>
              <Link href="/fact">
                <Typography>0 No enviado </Typography>
              </Link>
              <Link href="/fact">
                <Typography sx={{ color: "#b40202" }}>0 Por pagar </Typography>
              </Link>
              <Link href="/fact">
                <Typography sx={{ color: "#e67001" }}>
                  0 Pagada parcialmente{" "}
                </Typography>
              </Link>
              <Link href="/fact">
                <Typography sx={{ color: "#bb8a00" }}>0 Retrasada </Typography>
              </Link>
              <Link href="/fact">
                <Typography sx={{ color: "#239d02" }}>0 Pagada </Typography>
              </Link>
              <Divider sx={{ my: 4 }} />
              <Typography>
                <span style={{ color: "#808080" }}>$0.00</span>{" "}
                <span style={{ color: "#bb8a00" }}>Facturas pendientes</span>
              </Typography>
            </Box>

            {/* Presupuestos */}
            <Box>
              <Typography fontWeight="lg">Resumen de presupuestos</Typography>
              <Divider sx={{ my: 4 }} />
              <Link href="/pres">
                <Typography>0 Borrador </Typography>
              </Link>
              <Link href="/pres">
                <Typography>0 No enviado </Typography>
              </Link>
              <Link href="/pres">
                <Typography sx={{ color: "#0378ac" }}>0 Enviado </Typography>
              </Link>
              <Link href="/pres">
                <Typography sx={{ color: "#e67001" }}>0 Expirado </Typography>
              </Link>
              <Link href="/pres">
                <Typography sx={{ color: "#b40202" }}>0 Rechazado </Typography>
              </Link>
              <Link href="/pres">
                <Typography sx={{ color: "#239d02" }}>0 Aceptado </Typography>
              </Link>
              <Divider sx={{ my: 4 }} />
              <Typography>
                <span style={{ color: "#808080" }}>$0.00</span>{" "}
                <span>Facturas vencidas</span>
              </Typography>
            </Box>

            {/* Propuestas */}
            <Box>
              <Typography fontWeight="lg">Resumen de propuestas</Typography>
              <Divider sx={{ my: 4 }} />
              <Link href="/prop">
                <Typography>0 Borrador </Typography>
              </Link>
              <Link href="/prop">
                <Typography sx={{ color: "#0378ac" }}>0 Enviada </Typography>
              </Link>
              <Link href="/prop">
                <Typography sx={{ color: "#e67001" }}>0 Abierta </Typography>
              </Link>
              <Link href="/prop">
                <Typography sx={{ color: "#bb8a00" }}>0 En estudio </Typography>
              </Link>
              <Link href="/prop">
                <Typography sx={{ color: "#b40202" }}>0 Rechazada </Typography>
              </Link>
              <Link href="/prop">
                <Typography sx={{ color: "#239d02" }}>0 Aceptada </Typography>
              </Link>
              <Divider sx={{ my: 4 }} />
              <Typography>
                <span style={{ color: "#808080" }}>$0.00</span>{" "}
                <span style={{ color: "#239d02" }}>Facturas pagadas</span>
              </Typography>
            </Box>
          </Box>
        </Card>

        <Card variant="outlined" sx={{ width: 500 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography fontWeight="lg" sx={{ flexGrow: 1 }}>
              Resumen de tareas
            </Typography>
            <Link href="/tareaper">
              <Typography sx={{ fontSize: "0.8rem" }}>
                Ir a tareas personales
              </Typography>
            </Link>
          </Box>

          <Divider sx={{ my: 1 }} />
          <Typography sx={{ color: "#e67001" }}>Últimas tareas</Typography>
          <Typography sx={{ color: "#8b8b8b" }}>No existen tareas</Typography>
          <Typography sx={{ color: "#b40202" }}>
            Tareas no completadas{" "}
          </Typography>
          <Typography sx={{ color: "#8b8b8b" }}>No existen tareas</Typography>
          <Typography sx={{ color: "#239d02" }}>Tareas completadas </Typography>
          <Typography sx={{ color: "#8b8b8b" }}>No existen tareas</Typography>
        </Card>
      </Box>

      <br />

      {/* Tarjetas 2 */}
      <Box display="flex" gap={2} sx={{ ml: 2 }}>
        <Card variant="outlined" sx={{ width: 820 }}>
          <Breadcrumbs aria-label="breadcrumbs">
            {[
              "Tareas",
              "Proyectos",
              "Recordatorios",
              "Tickets",
              "Anuncios",
            ].map((item) => (
              <Typography
                key={item}
                color="neutral"
                sx={{ cursor: "pointer" }}
                onClick={() => setSeccionActiva(item)}
              >
                {item}
              </Typography>
            ))}
          </Breadcrumbs>

          <Divider />

          <Box>{renderContenidoSeccion()}</Box>
        </Card>

        <Card variant="outlined" sx={{ width: 820 }}>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Typography level="h1" sx={{ mt: 2 }}>
              C A L E N D A R I O
            </Typography>
          </Box>

          <div className="calendario-contenedor">
            <div className="calendario-header">
              <button onClick={retrocederMes}>◀</button>
              <span>
                {nombreMes.charAt(0).toUpperCase() + nombreMes.slice(1)}
              </span>
              <button onClick={avanzarMes}>▶</button>
            </div>

            <div className="calendario-grid">
              {["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].map((dia) => (
                <div key={dia} className="calendario-dia">
                  {dia}
                </div>
              ))}
              {dias.map((dia, i) => (
                <div key={i} className="calendario-celda">
                  {dia}
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Box>
    </>
  );
}
