import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import { List, ListItem, ListItemText, Divider } from "@mui/material";

import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';
import Chip from '@mui/joy/Chip'; 

export function Tarea() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Box sx={{ display: 'flex', gap: 3, mt: 4, px: 2, flexWrap: 'nowrap', overflowX: 'auto' }}>

        {/* ESTADOS DE LAS TAREAS */}

        <Card sx={{ width: '350px', minWidth: 200, height: '480px', p: 2, borderRadius: 'md', boxShadow: 'md' }}>{/* AQUI EMPIEZA EL CARD DEL TO DO */}

          {/* TITULO DE TO DO */}
          
          <Box sx={{ backgroundColor: '#42a5f5', p: 1, borderRadius: '8px 8px 0 0' }}>
            <Typography level="h3" sx={{ color: '#fff' }}>TO DO LIST</Typography>
          </Box>

          <Box sx={{ backgroundColor: '#cce7f6', p: 2 }}>{/* BOX PARA AGRUPAR LAS TAREAS */}

            <List>

              {/* BOTON NUEVA TAREA */}
              <React.Fragment>
                <Button variant="plain" color="neutral" startDecorator={<Add />} onClick={() => setOpen(true)}>
                  Nueva tarea
                </Button>

                <Modal open={open} onClose={() => setOpen(false)}>
                  <ModalDialog>
                    <DialogTitle>Agregar tarea</DialogTitle>
                    <form onSubmit={(event) => { event.preventDefault(); setOpen(false); }}>
                      <Stack spacing={2}>
                        <FormControl>
                          <FormLabel>Título de la tarea</FormLabel>
                          <Input autoFocus required />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Descripción</FormLabel>
                          <Input required />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Fecha</FormLabel>
                          <Input type="date" />
                        </FormControl>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                          <Button variant="solid" color="primary">Guardar</Button>
                          <Button variant="outlined" color="neutral">Cerrar</Button>
                        </Box>
                      </Stack>
                    </form>
                  </ModalDialog>
                </Modal>
              </React.Fragment>

             <Divider component="li" />

             <ListItem 
             secondaryAction={
             <Box sx={{ backgroundColor: '#7e57c2', width: 24, height: 24, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography sx={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>6</Typography>
             </Box>}>
             <ListItemText primary={<strong>Todas mis tareas</strong>} />
             </ListItem>
             
             <Divider component="li" />

            <ListItem
             secondaryAction={
            <Box sx={{ backgroundColor: '#4caf50', width: 24, height: 24, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography sx={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>2</Typography>
            </Box>}>
            <ListItemText primary="Completadas" />
            </ListItem>

            <Divider component="li" />
            
            <ListItem
            secondaryAction={
            <Box sx={{ backgroundColor: '#3f51b5', width: 24, height: 24, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography sx={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>2</Typography>
            </Box>}>
            <ListItemText primary="En proceso" />
            </ListItem>
            
            <Divider component="li" />
            
            <ListItem
            secondaryAction={
            <Box sx={{ backgroundColor: '#f44336', width: 24, height: 24, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography sx={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>2</Typography>
            </Box>}>
            <ListItemText primary="Pendiente" />
            </ListItem>
            
            <Divider component="li" />

            <ListItem alignItems="flex-start">
              <ListItemText primary="Basura" />
            </ListItem>

            </List>

          </Box>{/* BOX PARA AGRUPAR LAS TAREAS */}

        </Card>{/* AQUI TERMINA EL CARD DEL TO DO */}


        {/* TODAS MIS TAREAS */}

        <Card sx={{ width: '1300px', minWidth: 400, p: 2, borderRadius: 'md', boxShadow: 'md' }}>

          <Typography level="h3" sx={{ mt: 1 }}>Todas mis tareas</Typography>

          <Divider />

          <ListItem alignItems="flex-start">
            <ListItemText
              primary={<Typography variant="body1">
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong>Lorem ipsum</strong>
                    <Chip size="sm" color="primary" variant="soft">En proceso</Chip>
                  </Box>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dictum,</p>
                </Typography>}
              secondary={<Typography variant="body2" color="text.secondary">10/02/2025</Typography>}/>
          </ListItem>

          <Divider />

          <ListItem alignItems="flex-start">
            <ListItemText
              primary={<Typography variant="body1">
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong>Lorem ipsum</strong>
                    <Chip size="sm" color="danger" variant="soft">Pendiente</Chip>
                  </Box>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dictum.</p>
                </Typography>}
              secondary={<Typography variant="body2" color="text.secondary">17/02/2025</Typography>}/>
          </ListItem>

          <Divider />

          <ListItem alignItems="flex-start">
            <ListItemText
              primary={<Typography variant="body1">
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong>Lorem ipsum</strong>
                    <Chip size="sm" color="success" variant="soft">Completada</Chip>
                  </Box>
                  <s>Lorem ipsum dolor sit amet consectetur adipiscing elit dictum,</s>
                </Typography>}
              secondary={<Typography variant="body2" color="text.secondary">25/02/2025</Typography>}/>
          </ListItem>

          <Divider />
          
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={<Typography variant="body1">
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong>Lorem ipsum</strong>
                    <Chip size="sm" color="success" variant="soft">Completada</Chip>
                  </Box>
                  <s>Lorem ipsum dolor sit amet consectetur adipiscing elit dictum,</s>
                </Typography>}
              secondary={<Typography variant="body2" color="text.secondary">26/02/2025</Typography>}/>
          </ListItem>

          <Divider />

          <ListItem alignItems="flex-start">
            <ListItemText
              primary={<Typography variant="body1">
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong>Lorem ipsum </strong>
                    <Chip size="sm" color="primary" variant="soft">En proceso</Chip>
                  </Box>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dictum,</p>
                </Typography>}
              secondary={<Typography variant="body2" color="text.secondary">27/02/2025</Typography>}/>
          </ListItem>

          <Divider />

          <ListItem alignItems="flex-start">
            <ListItemText
              primary={<Typography variant="body1">
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong>Lorem ipsum </strong>
                    <Chip size="sm" color="danger" variant="soft">Pendiente</Chip>
                  </Box>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dictum.</p>
                </Typography>}
              secondary={<Typography variant="body2" color="text.secondary">28/02/2025</Typography>}/>
          </ListItem>

        </Card>

      </Box>
    </>
  );
}
