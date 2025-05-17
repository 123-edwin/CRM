import "./ContactosActivos.css";

import Switch from '@mui/joy/Switch';

import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import refreshIcon from '/refresh.svg'; // Import the refresh icon
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Card from '@mui/joy/Card';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

export function ContactosActivos() {

    return (

        <>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Typography level="h3">Contactos activos</Typography>
        </Box>

<Card sx={{width:'70%', mx: 'auto', p: 2, borderRadius: 'md', boxShadow: 'md', overflowX: 'auto', mt: 3 }}>

{/*SELECT, BOTON Y ACTUALIZAR*/}

        <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2, mb: 2 }}>
          <Select defaultValue="10" sx={{ width: 110 }}>
            <Option value="10">10</Option>
            <Option value="25">25</Option>
            <Option value="50">50</Option>
            <Option value="100">100</Option>
            <Option value="todo">Todo</Option>
          </Select>

          <ButtonGroup>
            <Dropdown>
            <MenuButton variant="outlined" color="neutral"
            sx={{ width: 100,height: 48,borderRadius: '50%'}}> <p>Exportar</p>
            </MenuButton>

            <Menu
              variant="outlined" placement="bottom-start" disablePortalsize="sm"
              sx={{'--ListItemDecorator-size': '24px', '--ListItem-minHeight': '40px', '--ListDivider-gap': '4px', minWidth: 100,}}>
              <MenuItem>Excel</MenuItem>
              <MenuItem>CSV</MenuItem>
              <MenuItem>PDF</MenuItem>
              <MenuItem>Imprimir</MenuItem>
            </Menu>
          </Dropdown>
            <Button>
              <img src={refreshIcon} alt="Refresh" className="refresh-icon" />
            </Button>
          </ButtonGroup>
        </Box>

                    <table className="custom-table">

                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Correo</th>
                                <th>Empresa</th>
                                <th>Teléfono</th>
                                <th>Posición/Cargo</th>
                                <th>Último acceso</th>
                                <th>Activo</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Juan</td>
                                <td>Perez</td>
                                <td>JuanPerez@gmail.com</td>
                                <td>JL Marketing</td>
                                <td>312 159 7894</td>
                                <td>Jefe</td>
                                <td></td>
                                <td><Switch defaultChecked /></td>
                            </tr>
                            <tr>
                                <td>José</td>
                                <td>Ortiz</td>
                                <td>JoseOrtizz@gmail.com</td>
                                <td>JL Marketing</td>
                                <td>312 357 4569</td>
                                <td>Administrador</td>
                                <td></td>
                                <td><Switch defaultChecked /></td>
                            </tr>
                        </tbody>

                    </table>
</Card>
</>
        )
};
