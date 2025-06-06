import Badge from "@mui/joy/Badge";
import Box from "@mui/joy/Box";
import Dropdown from "@mui/joy/Dropdown";
import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Drawer from "@mui/joy/Drawer";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import ModalClose from "@mui/joy/ModalClose";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import Add from "@mui/icons-material/Add";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "wouter";

import { useState } from "react";

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [ventasOpen, setVentasOpen] = useState(false);
  const [utilidadesOpen, setUtilidadesOpen] = useState(false);
  return (
    <>
      <Sheet
        variant="solid"
        invertedColors
        sx={{
          display: "flex",
          alignItems: "center",
          flexGrow: 1,
          p: 2,
          minWidth: "min-content",
          background:
            "linear-gradient(to top,rgb(53, 91, 125),hsl(207, 55.10%, 19.20%))", // azul degradado
          color: "white", // asegúrate de que el texto contraste
        }}
      >
        {/* Botón del Drawer */}
        <IconButton
          variant="outlined"
          color="neutral"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Dropdown */}
        <Box sx={{ flex: 1, display: "flex", gap: 1, px: 2 }}>
          <Dropdown>
            <MenuButton
              variant="outlined"
              color="neutral"
              sx={{ width: 48, height: 48, borderRadius: "50%" }}
            >
              <Add sx={{ color: "#fff" }} />
            </MenuButton>

            <Menu
              variant="outlined"
              placement="bottom-start"
              disablePortalsize="sm"
              sx={{
                "--ListItemDecorator-size": "24px",
                "--ListItem-minHeight": "40px",
                "--ListDivider-gap": "4px",
                minWidth: 200,
              }}
            >
              <MenuItem>Factura</MenuItem>
              <MenuItem>Presupuesto</MenuItem>
              <MenuItem>Propuesta</MenuItem>
              {/*<MenuItem>Nota de crédito</MenuItem>/}
              <MenuItem>Cliente</MenuItem>
              <MenuItem>Proyecto</MenuItem>
              <MenuItem>Tarea</MenuItem>
              <MenuItem>Gastos</MenuItem>
              {/*<MenuItem>Contrato</MenuItem>
              <MenuItem>Artículo</MenuItem>
              <MenuItem>Ticket</MenuItem>
              <MenuItem>Miembro del equipo</MenuItem>
              <MenuItem>Evento</MenuItem>*/}
            </Menu>
          </Dropdown>
        </Box>

        {/* Buscador, notificaciones y perfil */}

        <Box
          sx={{ display: "flex", flexShrink: 0, gap: 2, alignItems: "center" }}
        >
          {/Buscar/}
          <Input
            placeholder="Search"
            variant="soft"
            size="sm"
            sx={{
              "--Input-paddingInline": "12px",
              width: 200,
              display: { xs: "none", lg: "flex" },
            }}
          />

          {/Notificación/}
          <Badge badgeContent={1} variant="solid" color="danger">
            <IconButton variant="soft" sx={{ borderRadius: "50%" }}>
              <NotificationsIcon />
            </IconButton>
          </Badge>

          {/Menú de perfil/}
          <Dropdown>
            <MenuButton
              variant="plain"
              size="sm"
              sx={{ borderRadius: "50%", minWidth: 0, padding: 0 }}
            >
              <img
                src="https://img.freepik.com/vector-premium/icono-imagen-perfil-avatar-fondo-azul-estilo-diseno-plano-recursos-diseno-elementos-graficos_991720-653.jpg?semt=ais_hybrid&w=740"
                alt="Perfil"
                style={{ width: 40, height: 40, borderRadius: "50%" }}
              />
            </MenuButton>

            <Menu placement="bottom-end" size="sm" sx={{ minWidth: 180 }}>
              <Link href="/perfil">
                <MenuItem>Mi perfil</MenuItem>
              </Link>
              <Link href="/tareaper">
                <MenuItem>Mis tareas</MenuItem>
              </Link>
              <Link href="/editarp">
                <MenuItem>Editar perfil</MenuItem>
              </Link>
              <MenuItem color="danger">Cerrar sesión</MenuItem>
            </Menu>
          </Dropdown>
        </Box>
      </Sheet>

      {/* Drawer lateral */}

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiDrawer-content": {
            width: 350,
            background:
            "linear-gradient(to top,rgb(29, 59, 86),hsl(207, 55.10%, 19.20%))"
            //backgroundColor: "#576bff ",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            ml: "auto",
            mt: 1,
            mr: 2,
          }}
        >
          <Typography
            component="label"
            htmlFor="close-icon"
            sx={{
              fontSize: "sm",
              fontWeight: "lg",
              cursor: "pointer",
              color: "white",
            }}
          >
            Close
          </Typography>

          <ModalClose
            id="close-icon"
            sx={{ position: "initial", color: "white" }}
          />
        </Box>

        <List
          size="lg"
          component="nav"
          sx={{
            flex: "none",
            fontSize: "x",
            "& > div": { justifyContent: "center" },
          }}
        >
          <Link href="/table">
            <ListItemButton sx={{ color: "#ffffff" }}>Tablero</ListItemButton>
          </Link>
          <Link href="/">
            <ListItemButton sx={{ color: "#ffffff" }}>Clientes</ListItemButton>
          </Link>

          <Link href="/tareass">
            <ListItemButton sx={{ color: "#ffffff" }}>Tareas</ListItemButton>
          </Link>
          <Link href="/">
            <ListItemButton
              onClick={() => setVentasOpen(!ventasOpen)}
              sx={{ color: "#ffffff", justifyContent: "space-between" }}
            >
              <span>Ventas</span>
              <ExpandMoreIcon
                sx={{
                  transform: ventasOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </ListItemButton>
          </Link>
          <Collapse in={ventasOpen}>
            <List sx={{ pl: 2 }}>
              <Link href="/prop">
                <ListItemButton sx={{ color: "#ffffff" }}>
                  Propuestas
                </ListItemButton>
              </Link>
              <Link href="/pres">
                <ListItemButton sx={{ color: "#ffffff" }}>
                  Presupuestos
                </ListItemButton>
              </Link>
              <Link href="/fact">
                <ListItemButton sx={{ color: "#ffffff" }}>
                  Facturas
                </ListItemButton>
              </Link>
              <Link href="/pag">
                <ListItemButton sx={{ color: "#ffffff" }}>Pagos</ListItemButton>
              </Link>
              <Link href="/notascred">
                <ListItemButton sx={{ color: "#ffffff" }}>
                  Notas de crédito
                </ListItemButton>
              </Link>
            </List>
          </Collapse>

          <Link href="/gastoss">
            <ListItemButton sx={{ color: "#ffffff" }}>Gastos</ListItemButton>
          </Link>
          {/*<Link href="/contratoss">
            <ListItemButton sx={{ color: "#ffffff" }}>Contratos</ListItemButton>
          </Link>
          <Link href="/proyectoss">
            <ListItemButton sx={{ color: "#ffffff" }}>Proyectos</ListItemButton>
          </Link>*/}
          <Link href="/sop">
            <ListItemButton sx={{ color: "#ffffff" }}>Soporte</ListItemButton>
          </Link>
          <Link href="/clientpoten">
            <ListItemButton sx={{ color: "#ffffff" }}>
              Clientes potenciales
            </ListItemButton>
          </Link>
          <Link href="/">
            <ListItemButton
              onClick={() => setUtilidadesOpen(!utilidadesOpen)}
              sx={{ color: "#ffffff", justifyContent: "space-between" }}
            >
              <span>Utilidades</span>
              <ExpandMoreIcon
                sx={{
                  transform: utilidadesOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </ListItemButton>
          </Link>
          <Collapse in={utilidadesOpen}>
            <List sx={{ pl: 2 }}>
              <Link href="/">
                {/*<ListItemButton sx={{ color: "#ffffff" }}>
                  Multimedia
                </ListItemButton>*/}
              </Link>
              <Link href="/exportarr">
                <ListItemButton sx={{ color: "#ffffff" }}>
                  Exportador en masa
                </ListItemButton>
              </Link>
              <Link href="/calen">
                <ListItemButton sx={{ color: "#ffffff" }}>
                  Calendario
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
        </List>
      </Drawer>
    </>
  );
}