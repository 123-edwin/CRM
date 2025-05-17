import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
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
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemText from '@mui/joy/ListItemText';
import Divider from '@mui/joy/Divider';

import { useState } from 'react';

export function Tarea() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box sx={{ display: 'flex', gap: 3, mt: 4, px: 2, flexWrap: 'nowrap', overflowX: 'auto' }}>
        {/* ESTADOS DE LAS TAREAS */}
        <Card sx={{ width: '350px', minWidth: 200, height: '480px', p: 2, borderRadius: 'md', boxShadow: 'md' }}>
          {/* TITULO DE TO DO */}
          <Box sx={{ backgroundColor: '#42a5f5', p: 1, borderRadius: '8px 8px 0 0' }}>
            <Typography level="h3" sx={{ color: '#fff' }}>TO DO LIST</Typography>
          </Box>

          <Box sx={{ backgroundColor: '#cce7f6', p: 2 }}>
            <List>

              {/* BOTON NUEVA TAREA */}
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

              <Divider component="li" />

              <ListItem 
                secondaryAction={
                  <Box sx={{ backgroundColor: '#7e57c2', width: 24, height: 24, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography sx={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>6</Typography>
                  </Box>
                }>
                <ListItemText primary={<strong>Todas mis tareas</strong>} />
              </ListItem>

              <Divider component="li" />

              <ListItem
                secondaryAction={
                  <Box sx={{ backgroundColor: '#4caf50', width: 24, height: 24, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography sx={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>2</Typography>
                  </Box>
                }>
                <ListItemText primary="Completadas" />
              </ListItem>

              <Divider component="li" />

              <ListItem
                secondaryAction={
                  <Box sx={{ backgroundColor: '#3f51b5', width: 24, height: 24, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography sx={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>2</Typography>
                  </Box>
                }>
                <ListItemText primary="En proceso" />
              </ListItem>

              <Divider component="li" />

              <ListItem
                secondaryAction={
                  <Box sx={{ backgroundColor: '#f44336', width: 24, height: 24, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography sx={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>2</Typography>
                  </Box>
                }>
                <ListItemText primary="Pendiente" />
              </ListItem>

              <Divider component="li" />

              <ListItem alignItems="flex-start">
                <ListItemText primary="Basura" />
              </ListItem>

            </List>
          </Box>
        </Card>

        {/* TODAS MIS TAREAS */}
        <Card sx={{ width: '1300px', minWidth: 400, p: 2, borderRadius: 'md', boxShadow: 'md' }}>
          <Typography level="h3" sx={{ mt: 1 }}>Todas mis tareas</Typography>
          <Divider />

          {/* Las tareas se podrían mapear desde un array si luego las vuelves dinámicas */}
          {[{
            estado: "En proceso",
            color: "primary",
            texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit dictum,",
            fecha: "10/02/2025"
          },
          {
            estado: "Pendiente",
            color: "danger",
            texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit dictum.",
            fecha: "17/02/2025"
          },
          {
            estado: "Completada",
            color: "success",
            texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit dictum,",
            fecha: "25/02/2025",
            tachado: true
          },
          {
            estado: "Completada",
            color: "success",
            texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit dictum,",
            fecha: "26/02/2025",
            tachado: true
          },
          {
            estado: "En proceso",
            color: "primary",
            texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit dictum,",
            fecha: "27/02/2025"
          },
          {
            estado: "Pendiente",
            color: "danger",
            texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit dictum.",
            fecha: "28/02/2025"
          }].map(({ estado, color, texto, fecha, tachado }, i) => (
            <Box key={i}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={<Typography variant="body1">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <strong>Lorem ipsum</strong>
                      <Chip size="sm" color={color} variant="soft">{estado}</Chip>
                    </Box>
                    {tachado ? <s>{texto}</s> : <p>{texto}</p>}
                  </Typography>}
                  secondary={<Typography variant="body2" color="text.secondary">{fecha}</Typography>}
                />
              </ListItem>
              <Divider />
            </Box>
          ))}
        </Card>
      </Box>
    </>
  );
}
