import { useState } from "react";
import "./MultiSectionForm.css";
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';


export function MultiSectionForm() {
    const [activeTab, setActiveTab] = useState("detalles");
    const [formData, setFormData] = useState({
        empresa: "",
        telefono: "",
        website: "",
        tipoCliente: "",
        moneda: "",
        direccion: "",
        localidad: "",
        provincia: "",
        codigoPostal: "",
        pais: "",
        razonSocial: "",
        rfc: "",
        Regimen: "",
        dominio: "",
        respaldoRenovacion: "",
        planDiseño: "",
        planRedes: "",
        diseñoGrafico: "",
        produccion: "",
        tipoServicio: "",
        calleCobro: "",
        calleEnvio: "",
        localidadCobro: "",
        localidadEnvio: "",
        departamentoCobro: "",
        departamentoEnvio: "",
        cpCobro: "",
        cpEnvio: "",
        paisCobro: "",
        paisEnvio: ""
        // etc
    });
    // Este estado controla qué sección se muestra

    return (
        <div>
            {/* Barra de pestañas */}
            <nav style={{ display: "flex", gap: "1rem" }} className="tabs">
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
                                <Input type="text" id="empresa"
                                    value={formData.empresa}
                                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}></Input>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="telefono">Teléfono</FormLabel>
                                <Input type="phone" id="telefono"
                                    value={formData.telefono}
                                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}></Input>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="website">Website</FormLabel>
                                <Input type="website" id="website"
                                    value={formData.website}
                                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}></Input>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="tipoCliente">Tipo de cliente</FormLabel>
                                <Select
                                    value={formData.tipoCliente}
                                    onChange={(event, newValue) => {
                                        setFormData({ ...formData, tipoCliente: newValue });
                                    }}
                                    placeholder="Selecciona un tipo de cliente"
                                >
                                    <Option value="one">Edwin</Option>
                                    <Option value="two">Ale</Option>
                                    <Option value="three">Fercha</Option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Moneda</FormLabel>
                                <Input
                                    value={formData.moneda}
                                    onChange={(e) => setFormData({ ...formData, moneda: e.target.value })}></Input>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Dirección</FormLabel>
                                <Input
                                    value={formData.direccion}
                                    onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}></Input>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Localidad</FormLabel>
                                <Input
                                    value={formData.localidad}
                                    onChange={(e) => setFormData({ ...formData, localidad: e.target.value })}></Input>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Provincia</FormLabel>
                                <Input
                                    value={formData.provincia}
                                    onChange={(e) => setFormData({ ...formData, provincia: e.target.value })}></Input>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Código Postal</FormLabel>
                                <Input
                                    value={formData.codigoPostal}
                                    onChange={(e) => setFormData({ ...formData, codigoPostal: e.target.value })}></Input>
                            </FormControl>
                            <FormControl>
                                <FormLabel>País</FormLabel>
                                <Input
                                    value={formData.pais}
                                    onChange={(e) => setFormData({ ...formData, pais: e.target.value })}></Input>
                            </FormControl>
                            {/* etc... */}
                        </div>
                    )}

                    {activeTab === "campos" && (
                        <div>
                            <h2>Campos personalizados</h2>
                            {/* Tus inputs personalizados aquí */}
                        </div>
                    )}

                    {activeTab === "factura" && (
                        <div>
                            <h2>Envío de factura</h2>
                            {/* Inputs relacionados con la factura */}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
