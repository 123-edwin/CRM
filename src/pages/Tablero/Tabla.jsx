import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';

export function Tabla() {
  return (

<Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', justifyContent: 'center', mt: 4 }}>
      
      <Card variant="outlined" sx={{ maxWidth: 300, minWidth: 300 }}>
      <Typography>
          Facturas por cobrar
        </Typography>
      </Card>

      <Card variant="outlined" sx={{ maxWidth: 300, minWidth: 300 }}>
      <Typography>
          Clientes potenciales
        </Typography>
      </Card>

      <Card variant="outlined" sx={{ maxWidth: 300, minWidth: 300 }}>
      <Typography>
          Proyectos en desarrollo
        </Typography>
      </Card>

      <Card variant="outlined" sx={{ maxWidth: 300, minWidth: 300 }}>
      <Typography>
          Tareas sin completar
        </Typography>
      </Card>

    </Stack>


  );
}