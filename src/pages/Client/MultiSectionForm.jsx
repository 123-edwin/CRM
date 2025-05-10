import { useState } from "react";
import "./MultiSectionForm.css";
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Box from '@mui/joy/Box';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import IconButton from '@mui/joy/IconButton';
import { Link } from "wouter";


export function MultiSectionForm() {
    const [activeTab, setActiveTab] = useState("detalles");
    const [formData, setFormData] = useState({
        empresa: "", telefono: "", website: "", tipoCliente: "", moneda: "", direccion: "", localidad: "", provincia: "", codigoPostal: "", pais: "", razonSocial: "", rfc: "",
        regimen: "", dominio: "", respaldoRenovacion: "", planDiseño: "", planRedes: "", diseñoGrafico: "", produccion: "", tipoServicio: "", calleCobro: "", calleEnvio: "", 
        localidadCobro: "", localidadEnvio: "", departamentoCobro: "", departamentoEnvio: "", cpCobro: "", cpEnvio: "", paisCobro: "", paisEnvio: ""
        // etc
    });

    // Este estado controla qué sección se muestra

    return (
        <div>

            {/* Barra de pestañas */}

            <nav style={{ display: "flex", gap: "1rem" }} className="tabs">

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>

                    <Link href="/">
                        <IconButton>
                            <ArrowBackRoundedIcon />
                        </IconButton>
                    </Link>

                </Box>


                <Button variant={activeTab === "detalles" ? "soft" : "outlined"} onClick={() => setActiveTab("detalles")}>
                    Detalles del cliente
                </Button>

                <Button variant={activeTab === "campos" ? "soft" : "outlined"} onClick={() => setActiveTab("campos")}>
                    Campos personalizados
                </Button>

                <Button variant={activeTab === "factura" ? "soft" : "outlined"} onClick={() => setActiveTab("factura")}>
                    Envío de factura
                </Button>

            </nav>


            {/* Secciones del formulario */}

            <section className="form-section">

                <div className="form-container">

                    {activeTab === "detalles" && (

                        <div className="form-questions">

                            <h2>Detalles del cliente</h2>

                            <FormControl>
                                <FormLabel htmlFor="empresa">Empresa</FormLabel>
                                <Input required type="text" id="empresa"
                                    value={formData.empresa}
                                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}></Input>
                            </FormControl>

                            <FormControl>
                                <FormLabel htmlFor="telefono">Teléfono</FormLabel>
                                <Input type="tel" id="telefono"
                                    value={formData.telefono}
                                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}></Input>
                            </FormControl>
                            
                            <FormControl>
                                <FormLabel htmlFor="website">Website</FormLabel>
                                <Input type="url" id="website"
                                    value={formData.website}
                                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}></Input>
                            </FormControl>

                            <FormControl>
                                <FormLabel htmlFor="tipoCliente">Tipo de cliente</FormLabel>
                                <Select id="tipoCliente"
                                    value={formData.tipoCliente}
                                    onChange={(event, newValue) => {
                                        setFormData({ ...formData, tipoCliente: newValue });
                                    }}
                                    placeholder="Selecciona un tipo de cliente">
                                    <Option value="one">Edwin</Option>
                                    <Option value="two">Ale</Option>
                                    <Option value="three">Fercha</Option>
                                </Select>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Moneda</FormLabel>
                                <Select id="moneda"
                                    value={formData.moneda}
                                    onChange={(event, newValue) => {
                                        setFormData({ ...formData, moneda: newValue });
                                    }}
                                    placeholder="Selecciona un tipo de moneda">
                                    <Option value="one">Dólar</Option>
                                    <Option value="two">Pesos mexicanos</Option>
                                    <Option value="three">Tazos</Option>
                                </Select>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Dirección</FormLabel>
                                <Input type="text"
                                    value={formData.direccion}
                                    onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}></Input>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Localidad</FormLabel>
                                <Input type="text"
                                    value={formData.localidad}
                                    onChange={(e) => setFormData({ ...formData, localidad: e.target.value })}></Input>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Provincia</FormLabel>
                                <Input type="text"
                                    value={formData.provincia}
                                    onChange={(e) => setFormData({ ...formData, provincia: e.target.value })}></Input>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Código Postal</FormLabel>
                                <Input type="number"
                                    value={formData.codigoPostal}
                                    onChange={(e) => setFormData({ ...formData, codigoPostal: e.target.value })}></Input>
                            </FormControl>

                            <FormControl>
                                <FormLabel>País</FormLabel>
                                <Input type="text"
                                    value={formData.pais}
                                    onChange={(e) => setFormData({ ...formData, pais: e.target.value })}></Input>
                            </FormControl>

                            <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 3 }}>
                                <Button>Guardar</Button>
                            </Box>
                        </div>
                    )}



                    {activeTab === "campos" && (

                        <div className="form-questions">

                            <h2>Campos personalizados</h2>

                             <FormControl>
                                <FormLabel htmlFor="razonSocial">Razón Social</FormLabel>
                                <Input required type="text" id="razonSocial"
                                    value={formData.razonSocial}
                                    onChange={(e) => setFormData({ ...formData, razonSocial: e.target.value })}></Input>
                            </FormControl>

                            <FormControl>
                                <FormLabel htmlFor="rfc">RFC</FormLabel>
                                <Input required type="text" id="rfc"
                                    value={formData.rfc}
                                    onChange={(e) => setFormData({ ...formData, rfc: e.target.value })}></Input>
                            </FormControl>

                            <FormControl>
                                <FormLabel htmlFor="regimen">Régimen</FormLabel>
                                <Input required type="text" id="regimen"
                                    value={formData.regimen}
                                    onChange={(e) => setFormData({ ...formData, regimen: e.target.value })}></Input>
                            </FormControl>

                            <FormControl>
                                <FormLabel htmlFor="dominio">Dominio</FormLabel>
                                <Input required type="text" id="dominio"
                                    value={formData.dominio}
                                    onChange={(e) => setFormData({ ...formData, dominio: e.target.value })}></Input>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Respaldo y renovación sitio web</FormLabel>
                                <Input type="date"
                                    value={formData.respaldoRenovacion}
                                    onChange={(e) => setFormData({ ...formData, respaldoRenovacion: e.target.value })}></Input>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Plan diseño web</FormLabel>
                                <Select id="diseñoweb"
                                    value={formData.diseñoweb}
                                    onChange={(event, newValue) => {
                                        setFormData({ ...formData, diseñoweb: newValue });
                                    }}
                                    placeholder="Nada seleccionado">
                                    <Option value="one">DW-01 Plan comienza</Option>
                                    <Option value="two">DW-02 Plan crece </Option>
                                    <Option value="three">DW-03 Plan corporativo</Option>
                                    <Option value="four">DW-Shopify</Option>
                                    <Option value="five">DW-WooCommerce</Option>
                                    <Option value="six">DW-Sistema personalizado</Option>
                                    <Option value="seven">DW-Servidor</Option>
                                </Select>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Plan de redes sociales</FormLabel>
                                <Select id="planRedes"
                                    value={formData.planRedes}
                                    onChange={(event, newValue) => {
                                        setFormData({ ...formData, planRedes: newValue });
                                    }}
                                    placeholder="Nada seleccionado">
                                    <Option value="one">RS-01 Plan comienza</Option>
                                    <Option value="two">RS-02 Plan crece </Option>
                                    <Option value="three">RS-03 Plan corporativo</Option>
                                    <Option value="four">RS-04 Plan personalizado</Option>
                                </Select>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Diseño gráfico</FormLabel>
                                <Select id="planDiseño"
                                    value={formData.planDiseño}
                                    onChange={(event, newValue) => {
                                        setFormData({ ...formData, planDiseño: newValue });
                                    }}
                                    placeholder="Nada seleccionado">
                                    <Option value="one">Publicación</Option>
                                    <Option value="two">Historia</Option>
                                    <Option value="three">Portada</Option>
                                    <Option value="four">Perfil</Option>
                                    <Option value="five">Logo</Option>
                                    <Option value="six">Diseño web</Option>
                                    <Option value="seven">Blog</Option>
                                    <Option value="seven">Manual de identidad</Option>
                                    <Option value="one">Díptico</Option>
                                    <Option value="two">Tríptico</Option>
                                    <Option value="three">Volante</Option>
                                    <Option value="four">Impresión</Option>
                                    <Option value="five">Brochure</Option>
                                    <Option value="six">Tarjeta de presentación</Option>
                                    <Option value="seven">Etiqueta</Option>
                                    <Option value="seven">Horario</Option>
                                    <Option value="one">Nota</Option>
                                    <Option value="two">Proyecto Cofepris</Option>
                                    <Option value="three">Calcomanía</Option>
                                    <Option value="four">Pantalla</Option>
                                    <Option value="five">Lona</Option>
                                    <Option value="six">Espectacular</Option>
                                    <Option value="seven">Edición y retoque de fotos</Option>
                                    <Option value="seven">Camioneta/Carro</Option>
                                    <Option value="one">Banner</Option>
                                    <Option value="two">Productor promocionales</Option>
                                    <Option value="three">Carpeta</Option>
                                </Select>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Producción</FormLabel>
                                <Select id="produccion"
                                    value={formData.produccion}
                                    onChange={(event, newValue) => {
                                        setFormData({ ...formData, produccion: newValue });
                                    }}
                                    placeholder="Nada seleccionado">
                                    <Option value="one">Video</Option>
                                    <Option value="two">Fotografía</Option>
                                    <Option value="three">Reel</Option>
                                    <Option value="four">Gift</Option>
                                </Select>
                            </FormControl>


                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <FormControl sx={{ flex: 1 }}>
                                    <FormLabel>Instagram usuario</FormLabel>
                                     <Input
                                     type="text"
                                     value={formData.instausuario}
                                     onChange={(e) => setFormData({ ...formData, instausuario: e.target.value })}/>
                                </FormControl>
                                     
                                <FormControl sx={{ flex: 1 }}>
                                    <FormLabel>Instagram contraseña</FormLabel>
                                    <Input
                                    type="text"
                                    value={formData.instacontra}
                                    onChange={(e) => setFormData({ ...formData, instacontra: e.target.value })}/>
                                </FormControl>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <FormControl sx={{ flex: 1 }}>
                                    <FormLabel>YouTube usuario</FormLabel>
                                     <Input
                                     type="text"
                                     value={formData.youtubeusuario}
                                     onChange={(e) => setFormData({ ...formData, youtubeusuario: e.target.value })}/>
                                </FormControl>
                                     
                                <FormControl sx={{ flex: 1 }}>
                                    <FormLabel>YouTube contraseña</FormLabel>
                                    <Input
                                    type="text"
                                    value={formData.youtubecontra}
                                    onChange={(e) => setFormData({ ...formData, youtubecontra: e.target.value })}/>
                                </FormControl>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <FormControl sx={{ flex: 1 }}>
                                    <FormLabel>Fecha inicio redes sociales</FormLabel>
                                     <Input
                                     type="date"
                                     value={formData.inicioRedes}
                                     onChange={(e) => setFormData({ ...formData, inicioRedes: e.target.value })}/>
                                </FormControl>
                                     
                                <FormControl sx={{ flex: 1 }}>
                                    <FormLabel>Fecha renovación redes sociales</FormLabel>
                                    <Input
                                    type="date"
                                    value={formData.renovacionRedes}
                                    onChange={(e) => setFormData({ ...formData, renovacionRedes: e.target.value })}/>
                                </FormControl>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <FormControl sx={{ flex: 1 }}>
                                    <FormLabel>Servidor ubicación</FormLabel>
                                    <Select id="servidorUbi"
                                    value={formData.servidorUbi}
                                    onChange={(event, newValue) => {
                                        setFormData({ ...formData, servidorUbi: newValue });}}
                                    placeholder="Nada seleccionado">
                                    <Option value="one">Su empresa</Option>
                                    <Option value="two">HostGator</Option>
                                    <Option value="three">BlueHost</Option>
                                    <Option value="four">Externo</Option>
                                    <Option value="five">Shopify</Option>
                                    <Option value="six">Neubox</Option>
                                    <Option value="seven">Amazon</Option>
                                    </Select>
                                </FormControl>
                                     
                                <FormControl sx={{ flex: 1 }}>
                                    <FormLabel>Dominio ubicación</FormLabel>
                                    <Select id="dominioUBi"
                                    value={formData.dominioUbi}
                                    onChange={(event, newValue) => {
                                        setFormData({ ...formData, dominioUbi: newValue });}}
                                    placeholder="Nada seleccionado">
                                    <Option value="one">Su empresa</Option>
                                    <Option value="two">HostGator</Option>
                                    <Option value="three">BlueHost</Option>
                                    <Option value="four">Externo</Option>
                                    <Option value="five">Shopify</Option>
                                    <Option value="six">Neubox</Option>
                                    <Option value="seven">Amazon</Option>
                                    </Select>
                                </FormControl>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <FormControl sx={{ flex: 1 }}>
                                    <FormLabel>Servidor usuario</FormLabel>
                                     <Input
                                     type="text"
                                     value={formData.servidorUsu}
                                     onChange={(e) => setFormData({ ...formData, servidorUsu: e.target.value })}/>
                                </FormControl>
                                     
                                <FormControl sx={{ flex: 1 }}>
                                    <FormLabel>Servidor contraseña</FormLabel>
                                    <Input
                                    type="text"
                                    value={formData.servidorCont}
                                    onChange={(e) => setFormData({ ...formData, servidorCont: e.target.value })}/>
                                </FormControl>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <FormControl sx={{ flex: 1 }}>
                                    <FormLabel>Wordpress usuario</FormLabel>
                                     <Input
                                     type="text"
                                     value={formData.wordpressUsu}
                                     onChange={(e) => setFormData({ ...formData, wordpressUsu: e.target.value })}/>
                                </FormControl>
                                     
                                <FormControl sx={{ flex: 1 }}>
                                    <FormLabel>Wordpress contraseña</FormLabel>
                                    <Input
                                    type="text"
                                    value={formData.wordpressContra}
                                    onChange={(e) => setFormData({ ...formData, wordpressContra: e.target.value })}/>
                                </FormControl>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <FormControl sx={{ flex: 1 }}>
                                    <FormLabel>Dominio fecha de inicio</FormLabel>
                                     <Input
                                     type="date"
                                     value={formData.domInicio}
                                     onChange={(e) => setFormData({ ...formData, domInicio: e.target.value })}/>
                                </FormControl>
                                     
                                <FormControl sx={{ flex: 1 }}>
                                    <FormLabel>Dominio fehca de termino</FormLabel>
                                    <Input
                                    type="date"
                                    value={formData.domTermino}
                                    onChange={(e) => setFormData({ ...formData, domTermino: e.target.value })}/>
                                </FormControl>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <FormControl sx={{ flex: 1 }}>
                                    <FormLabel>Servidor fecha de inicio</FormLabel>
                                     <Input
                                     type="date"
                                     value={formData.servInicio}
                                     onChange={(e) => setFormData({ ...formData, servInicio: e.target.value })}/>
                                </FormControl>
                                     
                                <FormControl sx={{ flex: 1 }}>
                                    <FormLabel>Servidor fehca de termino</FormLabel>
                                    <Input
                                    type="date"
                                    value={formData.servTermino}
                                    onChange={(e) => setFormData({ ...formData, servTermino: e.target.value })}/>
                                </FormControl>
                            </Box>

                            <FormControl>
                                <FormLabel>Observaciones</FormLabel>
                                <Input required type="text" id="observaciones"
                                    value={formData.observaciones}
                                    onChange={(e) => setFormData({ ...formData, observaciones: e.target.value })}></Input>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Correo electrónicos corporativos</FormLabel>
                                <Input required type="text" id="correoCorporativo"
                                    value={formData.correoCorporativo}
                                    onChange={(e) => setFormData({ ...formData, correoCorporativo: e.target.value })}></Input>
                            </FormControl>

                            <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 3 }}>
                                <Button>Guardar</Button>
                            </Box>

                        </div>
                    )}


                    {activeTab === "factura" && (
                        <div>
                            <h2>Envío de factura</h2>
                            
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <FormControl sx={{ flex: 1 }}>
                                    <h5>Dirección de cobro</h5>
                                    <FormLabel>Calle</FormLabel>
                                     <Input
                                     type="text"
                                     value={formData.calle1}
                                     onChange={(e) => setFormData({ ...formData, calle1: e.target.value })}/>
                                </FormControl>
                                     
                                <FormControl sx={{ flex: 1 }}>
                                <h5>Dirección de envío</h5>
                                    <FormLabel>Calle</FormLabel>
                                    <Input
                                    type="text"
                                    value={formData.calle2}
                                    onChange={(e) => setFormData({ ...formData, calle2: e.target.value })}/>
                                </FormControl>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 2 }}>
                            <FormControl>
                                <FormLabel>Localidad</FormLabel>
                                <Input type="text" id="localidad1"
                                    value={formData.localidad1}
                                    onChange={(e) => setFormData({ ...formData, localidad1: e.target.value })}></Input>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Localidad</FormLabel>
                                <Input type="text" id="localidad2"
                                    value={formData.localidad2}
                                    onChange={(e) => setFormData({ ...formData, localidad2: e.target.value })}></Input>
                            </FormControl>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 2 }}>
                            <FormControl>
                                <FormLabel>Departamento</FormLabel>
                                <Input type="text" id="departamento1"
                                    value={formData.departamento1}
                                    onChange={(e) => setFormData({ ...formData, departamento1: e.target.value })}></Input>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Departamento</FormLabel>
                                <Input type="text" id="departamento2"
                                    value={formData.departamento2}
                                    onChange={(e) => setFormData({ ...formData, departamento2: e.target.value })}></Input>
                            </FormControl>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 2 }}>
                            <FormControl>
                                <FormLabel>Código postal</FormLabel>
                                <Input type="number" id="codigoPostal1"
                                    value={formData.codigoPostal1}
                                    onChange={(e) => setFormData({ ...formData, codigoPostal1: e.target.value })}></Input>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Código postal</FormLabel>
                                <Input type="number" id="codigoPostal2"
                                    value={formData.codigoPostal2}
                                    onChange={(e) => setFormData({ ...formData, codigoPostal12: e.target.value })}></Input>
                            </FormControl>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 2 }}>
                            <FormControl>
                                <FormLabel>País</FormLabel>
                                <Input type="text" id="pais1"
                                    value={formData.pais1}
                                    onChange={(e) => setFormData({ ...formData, pais1: e.target.value })}></Input>
                            </FormControl>

                            <FormControl>
                                <FormLabel>País</FormLabel>
                                <Input type="text" id="pais2"
                                    value={formData.pais2}
                                    onChange={(e) => setFormData({ ...formData, pais2: e.target.value })}></Input>
                            </FormControl>
                            </Box>

                            <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 3 }}>
                                <Button>Guardar</Button>
                            </Box>

                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
