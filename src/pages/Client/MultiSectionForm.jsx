import { useState } from "react";
import "./MultiSectionForm.css";
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';


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
                <Button variant="outlined" onClick={() => setActiveTab("detalles")}>
                    Detalles del cliente
                </Button>
                <Button variant="outlined" onClick={() => setActiveTab("campos")}>
                    Campos personalizados
                </Button>
                <Button variant="outlined" onClick={() => setActiveTab("factura")}>
                    Envío de factura
                </Button>
            </nav>

            {/* Secciones del formulario */}
            <section className="form-section">
                <FormControl>
                    {activeTab === "detalles" && (
                        <div className="form-questions">
                            <h2>Detalles del cliente</h2>
                            <FormLabel>Empresa</FormLabel>
                            <Input type="text"
                                value={formData.empresa}
                                onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}></Input>
                            <FormLabel>Teléfono</FormLabel>
                            <Input type="number"
                                value={formData.telefono}
                                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}></Input>
                            <FormLabel>Website</FormLabel>
                            <Input
                                value={formData.website}
                                onChange={(e) => setFormData({ ...formData, website: e.target.value })}></Input>
                            <FormLabel>Tipo de cliente</FormLabel>
                            <Input
                                value={formData.tipoCliente}
                                onChange={(e) => setFormData({ ...formData, tipoCliente: e.target.value })}></Input>
                            <FormLabel>Moneda</FormLabel>
                            <Input
                                value={formData.moneda}
                                onChange={(e) => setFormData({ ...formData, moneda: e.target.value })}></Input>
                            <FormLabel>Dirección</FormLabel>
                            <Input
                                value={formData.direccion}
                                onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}></Input>
                            <FormLabel>Localidad</FormLabel>
                            <Input
                                value={formData.localidad}
                                onChange={(e) => setFormData({ ...formData, localidad: e.target.value })}></Input>
                            <FormLabel>Provincia</FormLabel>
                            <Input
                                value={formData.provincia}
                                onChange={(e) => setFormData({ ...formData, provincia: e.target.value })}></Input>
                            <FormLabel>Código Postal</FormLabel>
                            <Input
                                value={formData.codigoPostal}
                                onChange={(e) => setFormData({ ...formData, codigoPostal: e.target.value })}></Input>
                            <FormLabel>País</FormLabel>
                            <Input
                                value={formData.pais}
                                onChange={(e) => setFormData({ ...formData, pais: e.target.value })}></Input>
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
                </FormControl>
            </section>
        </div>
    );
}
