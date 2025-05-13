import Card from '@mui/joy/Card';
import SvgIcon from '@mui/joy/SvgIcon';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Select from '@mui/joy/Select';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Input from '@mui/joy/Input';
import { styled } from '@mui/joy';
import Option from '@mui/joy/Option';

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;


export function ImportacionCliente() {
  
    return (
        <>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
  <Typography level="h3">Importación de clientes</Typography>
</Box>

        <Card sx={{width:'70%', mx: 'auto', p: 2, borderRadius: 'md', boxShadow: 'md', overflowX: 'auto', mt: 3 }}>

<Button
component="label" role={undefined} tabIndex={-1} variant="outlined" color="neutral"
startDecorator={
<SvgIcon> 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
    <path strokeLinecap="round" strokeLinejoin="round"
    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"/>
    </svg>
</SvgIcon>}>
 Elija archivo cSV
<VisuallyHiddenInput type="file" />
</Button>



         <FormControl>
  <FormLabel>Tipo de cliente</FormLabel>
  <Select
    multiple
    placeholder="Selecciona cliente"
    onChange={(event, newValue) => {
      console.log(newValue); // newValue será un array de los valores seleccionados
    }}
  >
    <Option value="one">Audiovisual</Option>
    <Option value="two">Correos corporativos</Option>
    <Option value="three">Diseño gráfico</Option>
    <Option value="four">Diseño web</Option>
    <Option value="five">Diseño web-Plan comienza</Option>
    <Option value="six">Diseño web-Plan corporativo</Option>
    <Option value="seven">Diseño web-Plan crece</Option>
    <Option value="eight">Dominio</Option>
    <Option value="nine">eCommerce</Option>
    <Option value="teen">Google Ads</Option>
    <Option value="eleven">Redes sociales</Option>
    <Option value="twelve">Servidor</Option>
    <Option value="thirteen">Sesión de fotos</Option>
    <Option value="fourteen">Shopify</Option>
    <Option value="fifteen">Software</Option>
  </Select>
</FormControl>


<FormControl>
    <FormLabel>Contraseña por defecto para todos los clientes</FormLabel>
    <Input required type="text"></Input>
</FormControl>

<Box
            sx={{
              mt: 1,
              display: 'flex',
              gap: 1,
              flexDirection: { xs: 'column', sm: 'row-reverse' },
            }}
          >
        <Button variant="solid" color="primary">
              Importar
            </Button>
            <Button
              variant="outlined"
              color="neutral"
            >
              Simular importación
            </Button></Box>

        </Card>
        </>
    )};