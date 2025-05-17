
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Checkbox from '@mui/joy/Checkbox';

export function NuevoContrato() {

  return (
    <>

<Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
  <Typography level="h3">Información de contrato</Typography>
</Box>

<Card sx={{width:'50%', mx: 'auto', p: 2, borderRadius: 'md', boxShadow: 'md', overflowX: 'auto', mt: 3 }}>

<Checkbox label="Esconder de los clientes" size="md" variant="outlined"/>

<FormControl>
    <FormLabel required>Cliente</FormLabel>
    <Input required type="text"></Input>
</FormControl>

<FormControl>
    <FormLabel required>Tema</FormLabel>
    <Input required type="text"></Input>
</FormControl>

<FormControl>
    <FormLabel>Importe del contrato</FormLabel>
    <Input required type="number" startDecorator="$" placeholder="0.00" />
</FormControl>

 <FormControl>
    <FormLabel>Tipo de contrato</FormLabel>
    <Select 
    onChange={(event, newValue) => {({ newValue });}} placeholder="Seleccione un tipo de contrato">
            <Option value="one">Anual</Option>
            <Option value="two">Mensual</Option>
            </Select>
</FormControl>

<FormControl>
    <FormLabel required>Fecha inicio</FormLabel>
    <Input required type="date"></Input>
</FormControl>

<FormControl>
    <FormLabel>Fecha termino</FormLabel>
    <Input required type="date"></Input>
</FormControl>

<FormControl>
    <FormLabel>Descripción</FormLabel>
    <Textarea minRows={2} />
</FormControl>


<Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 3 }}>
    <Button>Guardar</Button>
</Box>

</Card>

    </>
  );
}

