import "./ContactosActivos.css";

import Switch from '@mui/joy/Switch';
import Typography from '@mui/joy/Typography';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import refreshIcon from '/refresh.svg'; // Import the refresh icon

export function ContactosActivos() {
    return (
        <div>
            <Typography level="h2" sx={{ mt: 2 }}>Contactos</Typography>

            <section className="form-section">
                <div className="form-container">

                    {/* Contenedor centrado para el Select */}
                    <div style={{ marginBottom: '1rem' }}>
                        <Select defaultValue="10" sx={{ width: 110 }}>
                            <Option value="10">10</Option>
                            <Option value="25">25</Option>
                            <Option value="50">50</Option>
                            <Option value="100">100</Option>
                            <Option value="todo">Todo</Option>
                        </Select>
                    </div> 

<div>
    <ButtonGroup aria-label="outlined primary button group">
    <Button>Exportar</Button>
    <Button><img src={refreshIcon} alt="Refresh" className='refresh-icon' /></Button>
    </ButtonGroup>
</div>
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

                </div>
            </section>
        </div>
    );
}
