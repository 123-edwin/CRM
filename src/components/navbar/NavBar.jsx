import React from 'react';
//import './NavBar.css';
import { Link } from 'wouter';

import Badge from '@mui/joy/Badge';
import Box from '@mui/joy/Box';
import Dropdown from '@mui/joy/Dropdown';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import ModalClose from '@mui/joy/ModalClose';

//import Button from '@mui/joy/Button';

import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';

export function NavBar() {
  const color = 'primary';
  const [open, setOpen] = React.useState(false);

  return (
    <>



<Sheet
  variant="solid"
  color={color}
  invertedColors
  sx={[
    {
      display: 'flex',
      alignItems: 'center',
      flexGrow: 1,
      p: 2,
      borderRadius: { xs: 0, sm: 'sm' },
      minWidth: 'min-content',
    },
    color !== 'warning' && ((theme) => ({
      background: `linear-gradient(to top, ${theme.vars.palette[color][600]}, ${theme.vars.palette[color][500]})`,
    })),
  ]}
>


        {/* Botón del Drawer */}
        <IconButton variant="outlined" color="neutral" onClick={() => setOpen(true)}>
          <MenuIcon/>
        </IconButton>


        {/* Dropdown */}
        <Box sx={{ flex: 1, display: 'flex', gap: 1, px: 2,}}>

          <Dropdown>

            <MenuButton
              sx={{ '--Button-radius': '1.5rem' }}
              variant="outlined"
              endDecorator={<KeyboardArrowDownIcon />}>
            </MenuButton>

            <Menu
              variant="outlined"
              placement="bottom-start"
              disablePortal
              size="sm"
              sx={{'--ListItemDecorator-size': '24px', '--ListItem-minHeight': '40px', '--ListDivider-gap': '4px', minWidth: 200,}}>

              <MenuItem>Factura</MenuItem>
              <MenuItem>Presupuesto</MenuItem>
              <MenuItem>Propuesta</MenuItem>
              <MenuItem>Nota de crédito</MenuItem>
              <MenuItem>Cliente</MenuItem>
              <MenuItem>Proyecto</MenuItem>
              <MenuItem>Tarea</MenuItem>
              <MenuItem>Gastos</MenuItem>
              <MenuItem>Contrato</MenuItem>
              <MenuItem>Artículo</MenuItem>
              <MenuItem>Ticket</MenuItem>
              <MenuItem>Miembro del equipo</MenuItem>
              <MenuItem>Evento</MenuItem>
            </Menu>

          </Dropdown>

        </Box>



        {/* Buscador, notificaciones y perfil */}

        <Box sx={{ display: 'flex', flexShrink: 0, gap: 2, alignItems: 'center' }}>

          {/*Buscar*/} 
          <Input
            placeholder="Search"
            variant="soft"
            size="sm"
            sx={{'--Input-paddingInline': '12px', width: 160, display: { xs: 'none', lg: 'flex' },}}/>

          {/*Notificación*/} 
          <Badge badgeContent={1} variant="solid" color="danger">
            <IconButton variant="soft" sx={{ borderRadius: '50%' }}>
              <NotificationsIcon />
            </IconButton>
          </Badge>

          {/*Menú de perfil*/}
          <Dropdown>
            <MenuButton
              variant="plain"
              size="sm"
              sx={{ borderRadius: '50%', minWidth: 0, padding: 0 }}>

              <img
                src="https://img.freepik.com/vector-premium/icono-imagen-perfil-avatar-fondo-azul-estilo-diseno-plano-recursos-diseno-elementos-graficos_991720-653.jpg?semt=ais_hybrid&w=740"
                alt="Perfil"
                style={{ width: 32, height: 32, borderRadius: '50%' }}/>
            </MenuButton>

            <Menu placement="bottom-end" size="sm" sx={{ minWidth: 180 }}>
              
              <Link href="/perfil"><MenuItem>Mi perfil</MenuItem></Link>
              <MenuItem>Mis tiempos</MenuItem>
              <MenuItem>Editar perfil</MenuItem>
              <MenuItem color="danger">Cerrar sesión</MenuItem>
            </Menu>
          </Dropdown>
          
        </Box>
      </Sheet>


      {/* Drawer lateral */}


<Drawer open={open} onClose={() => setOpen(false)} sx={{ '& .MuiDrawer-content': { backgroundColor: '#0d47a1', // azul fuerte width: 300,
},}}>
  
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, ml: 'auto', mt: 1, mr: 2,}}>

    <Typography component="label" htmlFor="close-icon" sx={{ fontSize: 'sm', fontWeight: 'lg', cursor: 'pointer', color: 'white' }}>
      Close
    </Typography>

    <ModalClose id="close-icon" sx={{ position: 'initial', color: 'white' }} />

  </Box>
  
  <List size="lg" component="nav" sx={{ flex: 'none', fontSize: 'xl', '& > div': { justifyContent: 'center', color: 'white' },}}>
    
    <Link href="/table"><ListItemButton sx={{color: '#ffffff'}}>Tablero</ListItemButton></Link>
    <Link href="/"><ListItemButton sx={{color: '#ffffff'}}>Cliente</ListItemButton></Link>
    <Link href="/factura"><ListItemButton sx={{color: '#ffffff'}}>Facturación</ListItemButton></Link>
    <Link href="/"><ListItemButton sx={{color: '#ffffff'}}>Ventas</ListItemButton></Link>
    <Link href="/"><ListItemButton sx={{color: '#ffffff'}}>Gastos</ListItemButton></Link>
    <Link href="/"><ListItemButton sx={{color: '#ffffff'}}>Contratos</ListItemButton></Link>
    <Link href="/"><ListItemButton sx={{color: '#ffffff'}}>Proyectos</ListItemButton></Link>
    <Link href="/"><ListItemButton sx={{color: '#ffffff'}}>Tareas</ListItemButton></Link>
    <Link href="/"><ListItemButton sx={{color: '#ffffff'}}>Soporte</ListItemButton></Link>
    <Link href="/"><ListItemButton sx={{color: '#ffffff'}}>Clientes potenciales</ListItemButton></Link>
    <Link href="/"><ListItemButton sx={{color: '#ffffff'}}>Utilidades</ListItemButton></Link>

  </List>
</Drawer>

    </>
  );
}



