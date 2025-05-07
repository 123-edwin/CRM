import { useState } from "react";
import "./NavBar.css";
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import MenuIcon from '@mui/icons-material/Menu';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';


const theme = extendTheme({
  components: {
    JoySelect: {
      defaultProps: {
        indicator: '↕',
      },
    },
  },
});

// IconButtonMenu como componente interno
function IconButtonMenu() {

  return (

    <Dropdown>
      <MenuButton sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
    <Avatar variant="outlined" />

      </MenuButton>
      <Menu>
        <MenuItem>Mi perfil</MenuItem>
        <MenuItem>Mis tiempos</MenuItem>
        <MenuItem>Editar perfil</MenuItem>
        <MenuItem>Cerrar sesión</MenuItem>
      </Menu>
    </Dropdown>

  );
}

export function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <CssVarsProvider theme={theme}>

      <div className="navbar">

        {/* Botón del menú (Drawer) */}
        <IconButton
          variant="outlined"
          color="neutral"
          onClick={() => setDrawerOpen(true)}>
          <MenuIcon />
        </IconButton>

        {/* Input, Select y el IconButtonMenu */}
        <div className="nav-actions">
          <Input
            className="search-box"
            placeholder="Buscar"
            variant="outlined"
            color="primary"/>

          <Select defaultValue="opcion1" className="select-box">
            <Option value="opcion1">Factura</Option>
            <Option value="opcion2">Presupuesto</Option>
            <Option value="opcion3">Propuesta</Option>
            <Option value="opcion4">Nota de crédito</Option>
            <Option value="opcion5">Cliente</Option>
            <Option value="opcion6">Proyecto</Option>
            <Option value="opcion7">Tarea</Option>
            <Option value="opcion8">Gastos</Option>
            <Option value="opcion9">Contrato</Option>
            <Option value="opcion10">Artículo</Option>
            <Option value="opcion11">Ticket</Option>
            <Option value="opcion12">Miembro del equipo</Option>
            <Option value="opcion13">Evento</Option>
          </Select>

          {/* Menú con tres puntos */}
          <IconButtonMenu />
        </div>

        {/* Drawer lateral */}
        <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              ml: 'auto',
              mt: 1,
              mr: 2,
            }}>

            <Typography
              component="label"
              htmlFor="close-icon"
              sx={{ fontSize: 'sm', fontWeight: 'lg', cursor: 'pointer' }}>
              Cerrar
            </Typography>
            <ModalClose id="close-icon" sx={{ position: 'initial' }} />
          </Box>

          <List
            size="lg"
            component="nav"
            sx={{
              flex: 'none',
              fontSize: 'xl',
              '& > div': { justifyContent: 'center' },
            }}>

            <ListItemButton sx={{ fontWeight: 'lg' }}>Home</ListItemButton>
            <ListItemButton>Tablero</ListItemButton>
            <ListItemButton>Clientes</ListItemButton>
            <ListItemButton>Ventas</ListItemButton>
            <ListItemButton>Gastos</ListItemButton>
            <ListItemButton>Contratos</ListItemButton>
            <ListItemButton>Proyectos</ListItemButton>
            <ListItemButton>Tareas</ListItemButton>
            <ListItemButton>Soporte</ListItemButton>
            <ListItemButton>Clientes potenciales</ListItemButton>
            <ListItemButton>Utilidades</ListItemButton>
          </List>
        </Drawer>
      </div>

    </CssVarsProvider>
  );
}