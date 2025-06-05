import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Button from "@mui/joy/Button";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Input from "@mui/joy/Input";
import FormLabel from "@mui/joy/FormLabel";
import FormControl from "@mui/joy/FormControl";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Checkbox from "@mui/joy/Checkbox";
import { getBillById } from "@s/billServices";
import { Link } from "wouter";
import IconButton from "@mui/joy/IconButton";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useRoute } from "wouter";


function DeleteForm({ facturaId: facturaIdProp }) {
    // Si facturaId no viene por prop, intenta obtenerlo de la URL
    const [, params] = useRoute("/deleteFactura/:id");
    // Prioriza prop, si no, usa el de la URL
    const facturaId = facturaIdProp || (params && params.id ? Number(params.id) : null);

    const [rfc, setRfc] = useState("");
    const [idDocumento, setIdDocumento] = useState("");
    const [motivoCancelacion, setMotivoCancelacion] = useState("");
    const [folioSustiticucion, setFolioSustitucion] = useState("");
    const [sendEmail, setSendEmail] = useState(false);
    const emailDirection = "erios8@ucol.mx";

    useEffect(() => {
        if (facturaId) {
            getBillById(Number(facturaId))
                .then((factura) => {
                    setRfc(factura.rfc_emisor || "");
                    setIdDocumento(factura.iddocumento || "");
                })
                .catch((err) => {
                    console.error("Error al precargar factura:", err);
                });
        }
    }, [facturaId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await fetch(`http://localhost:8080/bill/${facturaId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    rfcEmisor: rfc,
                    folioFiscal: idDocumento,
                    motivoCancelacion: motivoCancelacion,
                    folioFiscalSustitucion: folioSustiticucion,
                    sendEmail: sendEmail,
                    emailDirection: emailDirection,
                }),
            });
            if (!resp.ok) {
                const errorData = await resp.json();
                const { error, details } = errorData;
                console.error("Error del servidor:", error, details);
                alert(
                    `Error del servidor:\n${error}\n\nDetalles:\n${JSON.stringify(details, null, 2)}`
                );
                return;
            }
        } catch (err) {
            console.error("Error al enviar eliminar la factura:", err);
            alert("Error al eliminar la factura " + err.message);
        }
    };

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    flexWrap: "wrap",
                    alignItems: "center",
                }}
            >
                <Link href="/">
                    <IconButton>
                        <ArrowBackRoundedIcon />
                    </IconButton>
                </Link>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Typography level="h2" sx={{ mt: 2 }}>
                    Eliminar factura
                </Typography>
            </Box>

            <Card
                sx={{
                    width: "90%",
                    mx: "auto",
                    p: 2,
                    borderRadius: "md",
                    boxShadow: "md",
                    overflowX: "auto",
                    mt: 3,
                }}
            >
                <form onSubmit={handleSubmit}>
                    {/* Datos del Emisor */}
                    <Typography level="h3">Datos del Emisor</Typography>
                    <Box sx={{ display: "flex", gap: 2, margin: 2 }}>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel>RFC Emisor</FormLabel>
                            <Input
                                value={rfc}
                                onChange={(e) => setRfc(e.target.value)}
                            />
                        </FormControl>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel>Motivo de cancelación</FormLabel>
                            <Select
                                name="motivoCancelacion"
                                id="motivoCancelación"
                                color="primary"
                                placeholder="Motivo de cancelación"
                                sx={{ width: 300, height: 35 }}
                                size="md"
                                variant="outlined"
                                value={motivoCancelacion}
                                onChange={(_, value) => setMotivoCancelacion(value)}
                            >
                                <Option value="01">Comprobantes emitidos con errores con relación</Option>
                                <Option value="02">Comprobantes emitidos con errores sin relación</Option>
                                <Option value="03">No se llevó a cabo la operación</Option>
                                <Option value="04">Operación nominativa relacionada en una factura global.</Option>
                            </Select>
                        </FormControl>
                    </Box>

                    {/* Datos del Receptor */}
                    <Typography level="h3">Datos del Documento</Typography>
                    <Box sx={{ display: "flex", gap: 2, margin: 2 }}>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel>Id del Documento</FormLabel>
                            <Input
                                value={idDocumento}
                                onChange={(e) => setIdDocumento(e.target.value)}
                            />
                        </FormControl>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel>Id sustituto</FormLabel>
                            <Input
                                value={folioSustiticucion}
                                onChange={(e) => setFolioSustitucion(e.target.value)}
                            />
                        </FormControl>

                        <Checkbox
                            color="danger"
                            label="Enviar al correo"
                            variant="soft"
                            checked={sendEmail}
                            onChange={(e) => setSendEmail(e.target.checked)}
                        />
                    </Box>

                    <Button endDecorator={<KeyboardArrowRight />} color="success" type="submit">
                        Eliminar Factura
                    </Button>
                    <br />
                </form>
            </Card>
        </>
    );
}

DeleteForm.propTypes = {
    facturaId: PropTypes.number.isRequired,
};

export default DeleteForm;
