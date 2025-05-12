//import * as React from 'react';

import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import refreshIcon from '/refresh.svg'; // Import the refresh icon
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import {List,ListItem,ListItemAvatar,Avatar,ListItemText,Divider} from "@mui/material";

export function Miperfil() {
  
  return (

    <>
    
  <Box sx={{width: '100%',position: 'relative',overflow: { xs: 'auto', sm: 'initial' },}}>
      
    <Card orientation="horizontal"
      
      sx={{width: '100%',flexWrap: 'wrap',[`& > *`]: {'--stack-point': '500px',
      minWidth:'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',},
      overflow: 'auto',resize: 'horizontal',}}>

        <AspectRatio ratio="0.5" sx={{ width: 100, height: 100 }}>
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
            srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy" alt=""/>
        </AspectRatio>

      <CardContent>
          
          <Typography sx={{ fontSize: 'xl', fontWeight: 'lg' }}>Alex Morrison</Typography>
          <Typography level="body-sm" textColor="text.tertiary" sx={{ fontWeight: 'lg' }}>Senior Journalist</Typography>
          <Typography level="body-sm" textColor="text.tertiary" sx={{ fontWeight: 'lg' }}>alexmor@gmail.com</Typography>

        <Sheet sx={{bgcolor: 'background.level1',borderRadius: 'sm',p: 2,my: 1.5,display: 'flex',gap: 2,'& > div': { flex: 1 },}}>
           
          <div>
            <Typography level="body-xs" sx={{ fontWeight: 'lg' }}>Tiempo total registrado</Typography>
            <Typography sx={{ fontWeight: 'lg' }}>00:00</Typography>
          </div>

          <div>
            <Typography level="body-xs" sx={{ fontWeight: 'lg' }}>Tiempo total registrado mes...</Typography>
            <Typography sx={{ fontWeight: 'lg' }}>00:00</Typography>
          </div>

          <div>
            <Typography level="body-xs" sx={{ fontWeight: 'lg' }}>Tiempo total registrado mes...</Typography>
            <Typography sx={{ fontWeight: 'lg' }}>00:00</Typography>
          </div>

          <div>
            <Typography level="body-xs" sx={{ fontWeight: 'lg' }}>Tiempo total registrado sem...</Typography>
            <Typography sx={{ fontWeight: 'lg' }}>00:00</Typography>
          </div>

          <div>
            <Typography level="body-xs" sx={{ fontWeight: 'lg' }}>Tiempo total registrado sem...</Typography>
            <Typography sx={{ fontWeight: 'lg' }}>00:00</Typography>
          </div>

        </Sheet>

      </CardContent>

    </Card>

  </Box>








<Box sx={{ display: 'flex', gap: 3, mt: 4, px: 2,
        flexWrap: 'nowrap', // <- evita que se apilen
        overflowX: 'auto',   // <- permite scroll horizontal si no hay espacio
      }}>

      {/* NOTIFICACIONES */}
      <Card sx={{ width: '350px',
          //flex: 1, // más pequeño
          minWidth: 200, p: 2, borderRadius: 'md', boxShadow: 'md',
        }}
      >
        <Typography level="h3">Notificaciones</Typography>

        <Box sx={{ p: 2 }}>
          <List>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar src="https://i.pravatar.cc/150?img=1" />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <strong>Ralph Edwards</strong>
                    <p>Factura</p>
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" color="text.secondary">
                    35 min Ago
                  </Typography>
                }
              />
            </ListItem>
            <Divider component="li" />

            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar src="https://i.pravatar.cc/150?img=2" />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <strong>Jenny Wilson</strong>
                    <p>Hay una tarea pendiente</p>
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" color="text.secondary">
                    1w Ago
                  </Typography>
                }
              />
            </ListItem>
            <Divider component="li" />
          </List>
        </Box>
      </Card>



     {/* PROYECTOS */}
      <Card sx={{width: '1300px',
          //flex: 2, // más ancho
          minWidth: 400, p: 2, borderRadius: 'md', boxShadow: 'md', }}>

        <Typography level="h3" sx={{ mt: 1 }}>
          Proyectos
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2, mb: 2 }}>
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
              <img src={refreshIcon} alt="Refresh" className="refresh-icon" />
            </Button>
          </ButtonGroup>
        </Box>

        <table
          className="custom-table"
          style={{ width: '100%', borderCollapse: 'collapse' }}>
            
          <thead>
            <tr>
              <th>Nombre del proyecto</th>
              <th>Fecha de inicio</th>
              <th>Fecha de entrega</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>JL Marketing</td>
              <td>01/12/2025</td>
              <td>01/02/2026</td>
              <td>Pendiente</td>
            </tr>
            <tr>
              <td>JL Marketing</td>
              <td>01/12/2025</td>
              <td>01/02/2026</td>
              <td>Pendiente</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </Box>


    </>
  );
}

