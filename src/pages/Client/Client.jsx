
import './Client.css';
import refreshIcon from '/refresh.svg'; // Import the refresh icon
import { Link } from 'wouter';
import Typography from '@mui/joy/Typography';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Sheet from '@mui/joy/Sheet';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Box from '@mui/joy/Box';

export function Client() {

    return (
    <>

{/*TITULO*/}

<Typography level="h2" sx={{mt:2}}>Clientes</Typography>   

{/*RECUADRO DEL TIEMPO*/}

<Sheet

sx={{bgcolor: 'background.level1',borderRadius: 'sm',p: 2,my: 1.5,display: 'flex',gap: 2,'& > div': { flex: 1 },}}>

    <div>
        <Typography level="body-xs" sx={{ fontWeight: 'lg' }}>Total de clientes</Typography>
        <Typography sx={{ fontWeight: 'lg' }}>1</Typography>
    </div>

    <div>
        <Typography level="body-xs" sx={{ fontWeight: 'lg', color: '#239d02'}}>Clientes activos</Typography>
        <Typography sx={{ fontWeight: 'lg' }}>1</Typography>
    </div>

    <div>
        <Typography level="body-xs" sx={{ fontWeight: 'lg', color: '#b40202' }}>Clientes desactivados</Typography>
        <Typography sx={{ fontWeight: 'lg' }}>0</Typography>
    </div>

    <div>
        <Link to='/contactos'>
        <Typography level="body-xs" sx={{ fontWeight: 'lg', color: '#0378ac' }}>Contactos activos</Typography>
        <Typography sx={{ fontWeight: 'lg' }}>1</Typography>
        </Link>
    </div>

    <div>
        <Typography level="body-xs" sx={{ fontWeight: 'lg', color: '#b40202' }}>Contactos desactivados</Typography>
        <Typography sx={{ fontWeight: 'lg' }}>0</Typography>
    </div>
    
    <div>
        <Typography level="body-xs" sx={{ fontWeight: 'lg' }}>Conectados actualmente</Typography>
        <Typography sx={{ fontWeight: 'lg' }}>0</Typography>
    </div>
  
</Sheet>

{/*BOTONES*/}

<Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap',  mb: 3 }}>
    <Link href="/form">
    <Button onClick={function(){}} variant="outlined">+ Nuevo Cliente</Button>
    </Link>

    <Link href="/importacion">
    <Button onClick={function(){}} variant="outlined">Importación De Clientes</Button>
    </Link>
</Box>

{/*TABLA DE CLIENTES*/}

<section className='table-section'>
    
    <div className="table-container">
        
        <div className='table-options'>
            
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
            <Button>Acciones masivas</Button>
            <Button><img src={refreshIcon} alt="Refresh" className="refresh-icon" /></Button>
          </ButtonGroup>
        </Box>

        </div>



        
        <div className='only-table'>
            
            <table className="custom-table">
                
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Empresa</th>
                        <th>Contacto principal</th>
                        <th>Email principal</th>
                        <th>Teléfono</th>
                        <th>Activo</th>
                        <th>Tipo de cliente</th>
                        <th>Fecha de creación</th>
                        <th>Dominio</th>
                        <th>Respaldo y renovación de sitio web</th>
                        <th>Plan de diseño web</th>
                        <th>Plan de redes sociales</th>
                        <th>Fecha inicio de redes sociales</th>
                        <th>Fecha renovación de redes sociales</th>
                        <th>Servidor ubicación</th>
                        <th>Fecha inicio servidor</th>
                        <th>Fecha termino servidor</th>
                        <th>Dominio ubicación</th>
                        <th>Fecha inicio dominio</th>
                        <th>Fecha termino dominio</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Empresa Ejemplo</td>
                        <td>Contacto Ejemplo</td>
                        <td>email@ejemplo.com</td>
                        <td>123-456-7890</td>
                        <td>Sí</td>
                        <td>Tipo Ejemplo</td>
                        <td>2023-01-01</td>
                        <td>ejemplo.com</td>
                        <td>Regulador Ejemplo</td>
                        <td>Para Ejemplo</td>
                        <td>Pista Ejemplo</td>
                        <td>2023-01-01</td>
                        <td>2024-01-01</td>
                        <td>Ubicación Ejemplo</td>
                        <td>2023-01-01</td>
                        <td>2024-01-01</td>
                        <td>dominio.com</td>
                        <td>2023-01-01</td>
                        <td>2023-01-01</td>
                    </tr>
                </tbody>

            </table>

        </div>

    </div>
    
</section>
        </>
    );
}