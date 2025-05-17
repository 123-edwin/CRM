import './Client.css';

import refreshIcon from '/refresh.svg'; 
import Typography from '@mui/joy/Typography';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Sheet from '@mui/joy/Sheet';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Box from '@mui/joy/Box';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import { Link } from 'wouter';

import {useState} from 'react';

export function Client() {

    const [open, setOpen] = useState(false);

    return (
        <>

            {/*TITULO*/}

            <Typography level="h2" sx={{ mt: 2 }}>Clientes</Typography>

            {/*RECUADRO DEL TIEMPO*/}

            <Sheet

                sx={{ bgcolor: 'background.level1', borderRadius: 'sm', p: 2, my: 1.5, display: 'flex', gap: 2, '& > div': { flex: 1 }, }}>

                <div>
                    <Typography level="body-xs" sx={{ fontWeight: 'lg' }}>Total de clientes</Typography>
                    <Typography sx={{ fontWeight: 'lg' }}>1</Typography>
                </div>

                <div>
                    <Typography level="body-xs" sx={{ fontWeight: 'lg', color: '#239d02' }}>Clientes activos</Typography>
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

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
                <Link href="/form">
                    <Button onClick={function () { }} variant="outlined">+ Nuevo Cliente</Button>
                </Link>

                <Link href="/importacion">
                    <Button onClick={function () { }} variant="outlined">Importación De Clientes</Button>
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
                                <Dropdown>
                                    <MenuButton variant="outlined" color="neutral"
                                        sx={{ width: 100, height: 48, borderRadius: '50%' }}> <p>Exportar</p>
                                    </MenuButton>

                                    <Menu
                                        variant="outlined" placement="bottom-start" disablePortalsize="sm"
                                        sx={{ '--ListItemDecorator-size': '24px', '--ListItem-minHeight': '40px', '--ListDivider-gap': '4px', minWidth: 100, }}>
                                        <MenuItem>Excel</MenuItem>
                                        <MenuItem>CSV</MenuItem>
                                        <MenuItem>PDF</MenuItem>
                                        <MenuItem>Imprimir</MenuItem>
                                    </Menu>
                                </Dropdown>

                                <>
                                    <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}> Acciones masivas</Button>

                                    <Modal open={open} onClose={() => setOpen(false)}>

                                        <ModalDialog aria-labelledby="nested-modal-title" aria-describedby="nested-modal-description"
                                            sx={(theme) => ({
                                                [theme.breakpoints.only('xs')]: {
                                                    top: 'unset', bottom: 0, left: 0, right: 0, borderRadius: 0, transform: 'none', maxWidth: 'unset',
                                                },
                                            })}>
                                            <Typography id="nested-modal-title" level="h2">Acciones masivas</Typography>
                                            <Typography id="nested-modal-description" textColor="text.tertiary">
                                                <Checkbox label="Eliminación masiva" />

                                                <FormControl>
                                                    <FormLabel>Tipo de cliente</FormLabel>
                                                    <Select multiple placeholder="Selecciona cliente" onChange={(event, newValue) => { console.log(newValue); }}>
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
                                            </Typography>

                                            <Box sx={{ mt: 1, display: 'flex', gap: 1, flexDirection: { xs: 'column', sm: 'row-reverse' }, }}>
                                                <Button variant="solid" color="primary" onClick={() => setOpen(false)}>Confirmar</Button>
                                                <Button variant="outlined" color="neutral" onClick={() => setOpen(false)}>Cancelar</Button>
                                            </Box>
                                        </ModalDialog>
                                    </Modal>
                                </>


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