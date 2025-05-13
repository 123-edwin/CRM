import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';

export function Tarea() {
  
    return (
        <>

<Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', justifyContent: 'center', mt: 4 }}>
      
      <Card variant="outlined" sx={{ maxWidth: 300, minWidth: 200}}>
      <Typography>
          Lunes
        </Typography>
      </Card>

      <Card variant="outlined" sx={{ maxWidth: 300, minWidth: 250 }}>
      <Typography>
          Martes
        </Typography>
      </Card>

      <Card variant="outlined" sx={{ maxWidth: 300, minWidth: 250 }}>
      <Typography>
          Miercoles
        </Typography>
      </Card>

      <Card variant="outlined" sx={{ maxWidth: 300, minWidth: 250 }}>
      <Typography>
          Jueves
        </Typography>
      </Card>

      <Card variant="outlined" sx={{ maxWidth: 300, minWidth: 250 }}>
      <Typography>
          Viernes
        </Typography>
      </Card>

      <Card variant="outlined" sx={{ maxWidth: 300, minWidth: 250 }}>
      <Typography>
          Sabado
        </Typography>
      </Card>

    </Stack>
        </>
    )};