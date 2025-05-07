import React from 'react';
import './NavBar.css';

import Badge from '@mui/joy/Badge';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Dropdown from '@mui/joy/Dropdown';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import ListDivider from '@mui/joy/ListDivider';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Chip from '@mui/joy/Chip';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import ModalClose from '@mui/joy/ModalClose';

import AddIcon from '@mui/icons-material/Add';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

export function NavBar() {
  const color = 'primary'; // Color azul fijo
  const [open, setOpen] = React.useState(false); // Estado del Drawer

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
          color !== 'warning' &&
            ((theme) => ({
              background: `linear-gradient(to top, ${theme.vars.palette[color][600]}, ${theme.vars.palette[color][500]})`,
            })),
        ]}
      >
        {/* Drawer */}
        <IconButton variant="outlined" color="neutral" onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>

        <Box sx={{ flex: 1, display: 'flex', gap: 1, px: 2 }}>
          <Dropdown>
            <MenuButton
              sx={{ '--Button-radius': '1.5rem' }}
              variant="outlined"
              endDecorator={<KeyboardArrowDownIcon />}
            >
              Main
            </MenuButton>
            <Menu
              variant="outlined"
              placement="bottom-start"
              disablePortal
              size="sm"
              sx={{
                '--ListItemDecorator-size': '24px',
                '--ListItem-minHeight': '40px',
                '--ListDivider-gap': '4px',
                minWidth: 200,
              }}
            >
              <MenuItem>
                <ListItemDecorator>
                  <BubbleChartIcon />
                </ListItemDecorator>
                Products
              </MenuItem>
              <ListDivider />
              <MenuItem>Pricing</MenuItem>
              <MenuItem>
                Case studies{' '}
                <Chip
                  variant="outlined"
                  size="sm"
                  sx={(theme) => ({
                    ml: 'auto',
                    bgcolor: `rgba(${theme.vars.palette[color].mainChannel} / 0.4)`,
                  })}
                >
                  Beta
                </Chip>
              </MenuItem>
            </Menu>
          </Dropdown>
        </Box>

        <Box sx={{ display: 'flex', flexShrink: 0, gap: 2 }}>
          <Button
            startDecorator={<AddIcon />}
            sx={{ display: { xs: 'none', md: 'inline-flex' } }}
          >
            New invoice
          </Button>
          <Input
            placeholder="Search"
            variant="soft"
            size="sm"
            endDecorator={
              <Typography
                component="span"
                variant="outlined"
                level="body-xs"
                sx={{ bgcolor: 'background.surface', mx: 0 }}
              >
                ⌘K
              </Typography>
            }
            sx={{
              '--Input-paddingInline': '12px',
              width: 160,
              display: { xs: 'none', lg: 'flex' },
            }}
          />
          <Badge badgeContent={2} variant="solid" color="danger">
            <IconButton variant="soft" sx={{ borderRadius: '50%' }}>
              <NotificationsIcon />
            </IconButton>
          </Badge>
        </Box>
      </Sheet>

      {/* Drawer que se abre al hacer clic en el ícono del menú */}
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            ml: 'auto',
            mt: 1,
            mr: 2,
          }}
        >
          <Typography
            component="label"
            htmlFor="close-icon"
            sx={{ fontSize: 'sm', fontWeight: 'lg', cursor: 'pointer' }}
          >
            Close
          </Typography>
          <ModalClose id="close-icon" sx={{ position: 'initial' }} />
        </Box>
        <Input
          size="sm"
          placeholder="Search"
          variant="plain"
          endDecorator={<SearchIcon />}
          slotProps={{
            input: {
              'aria-label': 'Search anything',
            },
          }}
          sx={{
            m: 3,
            borderRadius: 0,
            borderBottom: '2px solid',
            borderColor: 'neutral.outlinedBorder',
            '&:hover': {
              borderColor: 'neutral.outlinedHoverBorder',
            },
            '&::before': {
              border: '1px solid var(--Input-focusedHighlight)',
              transform: 'scaleX(0)',
              left: 0,
              right: 0,
              bottom: '-2px',
              top: 'unset',
              transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
              borderRadius: 0,
            },
            '&:focus-within::before': {
              transform: 'scaleX(1)',
            },
          }}
        />
        <List
          size="lg"
          component="nav"
          sx={{
            flex: 'none',
            fontSize: 'xl',
            '& > div': { justifyContent: 'center' },
          }}
        >
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

      {/* Otro contenido si deseas */}
      <div>HOlA</div>
    </>
  );
}
