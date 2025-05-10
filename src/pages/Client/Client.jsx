import './Client.css';
import refreshIcon from '/refresh.svg'; // Import the refresh icon
import { Link } from 'react-router';

import Typography from '@mui/joy/Typography';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';


export function Client() {
    return (
    <>

<Typography level="h2" sx={{mt:2}}>Clientes</Typography>   

{/* <List orientation="horizontal" variant="outlined" */}
<List orientation="horizontal" variant="outlined"
sx={{flexGrow: 0, mx: 'auto','--ListItemDecorator-size': '48px', '--ListItem-paddingY': '1rem', borderRadius: 'sm', mt: 2, mb: 3, }}>

<ListItem sx={{flexDirection: 'column', alignItems: 'center' }}>
Total de clientes
<Typography level="body2" sx={{ fontSize: '0.75rem', color: '#888' }}> 1 </Typography>
</ListItem>
<ListDivider inset="gutter" />

<ListItem sx={{color: '#239d02', flexDirection: 'column', alignItems: 'center' }}>
Clientes activos
<Typography level="body2" sx={{ fontSize: '0.75rem', color: '#888' }}> 1 </Typography>
</ListItem>
<ListDivider inset="gutter" />

<ListItem sx={{color: '#b40202', flexDirection: 'column', alignItems: 'center' }}>
Clientes desactivados
<Typography level="body2" sx={{ fontSize: '0.75rem', color: '#888' }}> 0 </Typography>
</ListItem>
<ListDivider inset="gutter" />

<Link to='/form'>
<ListItem sx={{color: '#0378ac', flexDirection: 'column', alignItems: 'center' }}>
Contactos activos
<Typography level="body2" sx={{ fontSize: '0.75rem', color: '#888' }}> 1 </Typography>
</ListItem>
</Link>
<ListDivider inset="gutter" />

<ListItem sx={{color: '#b40202', flexDirection: 'column', alignItems: 'center' }}>
Contactos desactivados
<Typography level="body2" sx={{ fontSize: '0.75rem', color: '#888' }}> 0 </Typography>
</ListItem>
<ListDivider inset="gutter" />

<ListItem sx={{flexDirection: 'column', alignItems: 'center' }}>
Conectados actualmente
<Typography level="body2" sx={{ fontSize: '0.75rem', color: '#888' }}> 0 </Typography>
</ListItem>
<ListDivider inset="gutter" />

</List>



            <div className="options">
                <Link to='/form'>
                    <button className="btn-primary">+ Nuevo Cliente</button>
                </Link>
                <Link to='/importacion'>
                <button className="btn-secondary">Importación De Clientes</button>
                </Link>
            </div >

            <section className='table-section'>

                <div className="table-container">

                    <div className='table-options'>

                        <select name="select" defaultValue="value2"> {/* Use defaultValue instead of selected */}
                            <option className='select-option' value="value2">25</option>
                            <option className='select-option' value="value3">30</option>
                        </select>

                        <section className='table-options-buttons'>
                            <button className="btn-option">Exportar</button>
                            <button className="btn-option">Acciones Masivas</button>
                            <button className="btn-icon"><img src={refreshIcon} alt="Refresh" className='refresh-icon' /></button> {/* Use the imported icon */}
                        </section>
                        
                    </div>



                    <div className='only-table'>
                        <table className="styled-table">
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
                                {/* Puedes añadir más filas según sea necesario */}
                            </tbody>
                        </table>
                    </div>


                    
                </div>
            </section>
        </>
    );
}