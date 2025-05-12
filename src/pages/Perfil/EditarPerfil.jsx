import * as React from 'react';
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
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import SvgIcon from '@mui/joy/SvgIcon';
import { styled } from '@mui/joy';

import Stack from '@mui/joy/Stack';
import Key from '@mui/icons-material/Key';


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

export function EditarPerfil() {

const [password, setPassword] = React.useState('');
const [authOption, setAuthOption] = React.useState('');

  return (
    <>
        
{/*EDITAR PERFIL*/}

<Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
  <Typography level="h3">Editar perfil</Typography>
</Box>

<Card sx={{width:'50%', mx: 'auto', p: 2, borderRadius: 'md', boxShadow: 'md', overflowX: 'auto', mt: 3 }}>


<Button
component="label" role={undefined} tabIndex={-1} variant="outlined" color="neutral"
startDecorator={
<SvgIcon> 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
    <path strokeLinecap="round" strokeLinejoin="round"
    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"/>
    </svg>
</SvgIcon>}>
Seleccionar foto de perfil
<VisuallyHiddenInput type="file" />
</Button>


<FormControl>
    <FormLabel>Nombre</FormLabel>
    <Input required type="text"></Input>
</FormControl>

<FormControl>
    <FormLabel>Apellido</FormLabel>
    <Input required type="text"></Input>
</FormControl>

<FormControl>
    <FormLabel>Correo electrónico</FormLabel>
    <Input required type="text"></Input>
</FormControl>

<FormControl>
    <FormLabel>Teléfono</FormLabel>
    <Input required type="number"></Input>
</FormControl>

 <FormControl>
    <FormLabel>Tipo lectura</FormLabel>
    <Select 
    onChange={(event, newValue) => {({ newValue });}}
        placeholder="Selecciona un tipo de cliente">
            <Option value="one">LTR</Option>
            <Option value="two">RTL</Option>
            </Select>
</FormControl>

<FormControl>
    <FormLabel>Facebook</FormLabel>
    <Input required type="text"></Input>
</FormControl>

<FormControl>
    <FormLabel>LinkedIn</FormLabel>
    <Input required type="text"></Input>
</FormControl>

<FormControl>
    <FormLabel>Firma de email</FormLabel>
    <Textarea minRows={2} />
</FormControl>


<Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 3 }}>
    <Button>Guardar</Button>
</Box>

</Card>

{/*CAMBIAR CONTRASEÑA*/}

<Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
  <Typography level="h3">Cambiar contraseña</Typography>
</Box>

<Card sx={{width:'50%', mx: 'auto', p: 2, borderRadius: 'md', boxShadow: 'md', overflowX: 'auto', mt: 3 }}>

    <Stack spacing={0.5} sx={{ '--hue': Math.min(password.length * 10, 120) }}>
    <FormLabel>Contraseña anterior</FormLabel>
      <Input
        type="password"
        placeholder="Escriba su contraña anterior"
        startDecorator={<Key />}/>
    </Stack>


    <Stack spacing={0.5} sx={{ '--hue': Math.min(password.length * 10, 120) }}>
    <FormLabel>Contraseña nueva</FormLabel>
      <Input
        type="password"
        placeholder="Escriba su contraña nueva"
        startDecorator={<Key />}
        value={password}
        onChange={(event) => setPassword(event.target.value)}/>

      <Typography
        level="body-xs"
        sx={{ alignSelf: 'flex-end', color: 'hsl(var(--hue) 80% 30%)' }}>
        {password.length < 3 && 'Very weak'}
        {password.length >= 3 && password.length < 6 && 'Weak'}
        {password.length >= 6 && password.length < 10 && 'Strong'}
        {password.length >= 10 && 'Very strong'}
      </Typography>
    </Stack>

<Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 3 }}>
    <Button>Guardar</Button>
</Box>

</Card>

{/*AUTENTICACIÓN DE DOS PASO*/}

<Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
  <Typography level="h3">Autenticación de dos pasos</Typography>
</Box>

<Card sx={{width:'50%', mx: 'auto', p: 2, borderRadius: 'md', boxShadow: 'md', overflowX: 'auto', mt: 3 }}>

    <FormControl>
      <RadioGroup
         name="controlled-radio-buttons-group"
  value={authOption}
  onChange={(event) => setAuthOption(event.target.value)}
  sx={{ my: 1 }}>
        <Radio value="deshabilitado" label="Deshabilitado" />
        <Radio value="habilitar" label="Habilitar autenticación de dos pasos" />
        <Radio value="enable" label="Enable Google Authenticator" />
      </RadioGroup>
    </FormControl>

<Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 3 }}>
    <Button>Guardar</Button>
</Box>

</Card>



    </>
  );
}

