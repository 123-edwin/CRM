import PropTypes from 'prop-types';
import { useState } from 'react';
import { saveAs } from 'file-saver';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Button from '@mui/joy/Button';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/joy/FormControl';


function PaymentForm({ tipo }) {
    const [emisor, setEmisor] = useState({ rfc: "", nombre: "", regimen: "" });
    const [receptor, setReceptor] = useState({ rfc: "", nombre: "", domicilio: "", regimen: "", usoCFDI: "" });
    const [complemento, setComplemento] = useState({
        montoTotalPagos: 0,
        formaPago: "",
        moneda: "",
        tipoCambio: 1,
        idDocumento: "",
        equivalenciaDR: 0,
        numParcialidad: 0,
        saldoAnt: 0
    });
    const [xml, setXml] = useState("");

    // Destructurar los valores del complemento
    const {
        montoTotalPagos,
        formaPago,
        moneda,
        tipoCambio,
        idDocumento,
        equivalenciaDR,
        numParcialidad,
        saldoAnt
    } = complemento;

    const TotalTrasladosBaseIVA16 = montoTotalPagos / 1.16;
    const TotalTrasladosImpuestoIVA16 = TotalTrasladosBaseIVA16 * 0.16;
    const restante = saldoAnt - montoTotalPagos;

    // Formatear la fecha al formato requerido
    function formatDate(date) {
        const pad = n => n < 10 ? "0" + n : n;
        return (
            date.getFullYear() + "-" +
            pad(date.getMonth() + 1) + "-" +
            pad(date.getDate()) + "T" +
            pad(date.getHours()) + ":" +
            pad(date.getMinutes()) + ":" +
            pad(date.getSeconds())
        );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fechaFormateada = formatDate(new Date());

        const xmlPago = `<?xml version="1.0" encoding="utf-8"?>
<cfdi:Comprobante
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:pago20="http://www.sat.gob.mx/Pagos20"
    xmlns:cfdi="http://www.sat.gob.mx/cfd/4"
    Moneda="XXX" Total="0"
    xsi:schemaLocation="http://www.sat.gob.mx/cfd/4 http://www.sat.gob.mx/sitio_internet/cfd/4/cfdv40.xsd
                        http://www.sat.gob.mx/Pagos20 http://www.sat.gob.mx/sitio_internet/cfd/Pagos/Pagos20.xsd"
    Exportacion="01"
    TipoDeComprobante="${tipo}"
    SubTotal="0"
    LugarExpedicion="32690"
    Fecha="${fechaFormateada}"
    Folio="PAGO-001"
    Serie="AP"
    Version="4.0">
  <cfdi:Emisor Rfc="${emisor.rfc}" Nombre="${emisor.nombre}" RegimenFiscal="${emisor.regimen}" />
  <cfdi:Receptor
    Rfc="${receptor.rfc}"
    Nombre="${receptor.nombre}"
    DomicilioFiscalReceptor="${receptor.domicilio}"
    RegimenFiscalReceptor="${receptor.regimen}"
    UsoCFDI="${receptor.usoCFDI}" />
  <cfdi:Conceptos>
    <cfdi:Concepto
      ClaveProdServ="84111506"
      Cantidad="1"
      ClaveUnidad="ACT"
      Descripcion="Pago"
      ValorUnitario="0"
      Importe="0"
      ObjetoImp="01" />
  </cfdi:Conceptos>
  <cfdi:Complemento>
    <pago20:Pagos Version="2.0">
      <pago20:Totales
        TotalTrasladosBaseIVA16="${TotalTrasladosBaseIVA16.toFixed(2)}"
        TotalTrasladosImpuestoIVA16="${TotalTrasladosImpuestoIVA16.toFixed(2)}"
        MontoTotalPagos="${montoTotalPagos.toFixed(2)}" />
      <pago20:Pago
        FechaPago="${fechaFormateada}"
        FormaDePagoP="${formaPago}"
        MonedaP="${moneda}"
        TipoCambioP="${tipoCambio}"
        Monto="${montoTotalPagos.toFixed(2)}">
        <pago20:DoctoRelacionado
          IdDocumento="${idDocumento}"
          MonedaDR="${moneda}"
          EquivalenciaDR="${equivalenciaDR}"
          NumParcialidad="${numParcialidad}"
          ImpSaldoAnt="${saldoAnt.toFixed(2)}"
          ImpPagado="${montoTotalPagos.toFixed(2)}"
          ImpSaldoInsoluto="${restante.toFixed(2)}"
          ObjetoImpDR="02">
          <pago20:ImpuestosDR>
            <pago20:TrasladosDR>
              <pago20:TrasladoDR
                BaseDR="${TotalTrasladosBaseIVA16.toFixed(2)}"
                ImpuestoDR="002"
                TipoFactorDR="Tasa"
                TasaOCuotaDR="0.160000"
                ImporteDR="${TotalTrasladosImpuestoIVA16.toFixed(2)}" />
            </pago20:TrasladosDR>
          </pago20:ImpuestosDR>
        </pago20:DoctoRelacionado>
        <pago20:ImpuestosP>
          <pago20:TrasladosP>
            <pago20:TrasladoP
              BaseP="${TotalTrasladosBaseIVA16.toFixed(2)}"
              ImpuestoP="002"
              TipoFactorP="Tasa"
              TasaOCuotaP="0.160000"
              ImporteP="${TotalTrasladosImpuestoIVA16.toFixed(2)}" />
          </pago20:TrasladosP>
        </pago20:ImpuestosP>
      </pago20:Pago>
    </pago20:Pagos>
  </cfdi:Complemento>
</cfdi:Comprobante>`;

        setXml(xmlPago);

        try {
            // Enviar el XML generado al backend para timbrar
            const resp = await fetch('http://localhost:8080/bill/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ xml: xmlPago }),
            });

            if (!resp.ok) { throw new Error(`HTTP ${resp.status}: ${resp.statusText}`) };
            const { xml, pdfBase64 } = await resp.json();

            //descargar el CFDI timbrado
            const blobXml = new Blob([xml], { type: 'text/xml;charset=utf-8' });
            saveAs(blobXml, 'factura_timbrada.xml');
            //descargar el PDF
            const binary = atob(pdfBase64);
            const bytes = Uint8Array.from(binary, c => c.charCodeAt(0));
            const blobPdf = new Blob([bytes], { type: 'application/pdf' });
            saveAs(blobPdf, 'factura.pdf');



        } catch (err) {
            console.error('Error al enviar el XML al backend:', err);
            alert('Error al enviar el XML al backend: ' + err.message);
        };
    };

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Typography level="h2" sx={{ mt: 2 }}>Complemento de Pago</Typography>{/*TITULO*/}
            </Box>

            <Card sx={{ width: '90%', mx: 'auto', p: 2, borderRadius: 'md', boxShadow: 'md', overflowX: 'auto', mt: 3 }}>
                <form onSubmit={handleSubmit}>

                    <Typography level="h3">Datos del Emisor</Typography>
                    <Box sx={{ display: 'flex', gap: 2, margin: 2 }}>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel>Forma de pago</FormLabel>
                            <Input type="text" placeholder="Forma de pago" value={complemento.formaPago}
                                onChange={(e) =>
                                    setComplemento({ ...complemento, formaPago: e.target.value })} />
                        </FormControl>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel>Tipo de cambio</FormLabel>
                            <Input type="text" placeholder="Tipo de cambio" value={complemento.tipoCambio}
                                onChange={(e) =>
                                    setComplemento({ ...complemento, tipoCambio: e.target.value })} />
                        </FormControl>
                    </Box>

                    <Typography level="h3">Datos del Emisor</Typography>
                    <Box sx={{ display: 'flex', gap: 2, margin: 2 }}>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel>RFC Emisor</FormLabel>
                            <Input value={emisor.rfc} onChange={e => setEmisor({ ...emisor, rfc: e.target.value })} />
                        </FormControl>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel>Nombre Emisor</FormLabel>
                            <Input value={emisor.nombre} onChange={e => setEmisor({ ...emisor, nombre: e.target.value })} />
                        </FormControl>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel>Régimen Fiscal Emisor</FormLabel>
                            <Input value={emisor.regimen} onChange={e => setEmisor({ ...emisor, regimen: e.target.value })} />
                        </FormControl>
                    </Box>

                    <Typography level="h3">Datos del Receptor</Typography>
                    <Box sx={{ display: 'flex', gap: 2, margin: 2 }}>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel>RFC Receptor</FormLabel>
                            <Input value={receptor.rfc} onChange={e => setReceptor({ ...receptor, rfc: e.target.value })} />
                        </FormControl>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel>Nombre Receptor</FormLabel>
                            <Input value={receptor.nombre} onChange={e => setReceptor({ ...receptor, nombre: e.target.value })} />
                        </FormControl>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel>Domicilio Receptor</FormLabel>
                            <Input value={receptor.domicilio} onChange={e => setReceptor({ ...receptor, domicilio: e.target.value })} />
                        </FormControl>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel>Régimen Fiscal Receptor</FormLabel>
                            <Input value={receptor.regimen} onChange={e => setReceptor({ ...receptor, regimen: e.target.value })} />
                        </FormControl>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel>Uso CFDI</FormLabel>
                            <Input value={receptor.usoCFDI} onChange={e => setReceptor({ ...receptor, usoCFDI: e.target.value })} />
                        </FormControl>
                    </Box>

                    <Typography level="h3">Datos del Complemento de Pago</Typography>
                    <Box sx={{ display: 'flex', gap: 2, margin: 2, flexWrap: 'wrap' }}>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel>Moneda</FormLabel>
                            <Input value={complemento.moneda} onChange={e => setComplemento({ ...complemento, moneda: e.target.value })} />
                        </FormControl>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel>Monto Total Pagos</FormLabel>
                            <Input type="number" value={complemento.montoTotalPagos}
                                onChange={e => setComplemento({ ...complemento, montoTotalPagos: parseFloat(e.target.value) || 0 })} />
                        </FormControl>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel>ID Documento</FormLabel>
                            <Input value={complemento.idDocumento} onChange={e => setComplemento({ ...complemento, idDocumento: e.target.value })} />
                        </FormControl>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel>Equivalencia DR</FormLabel>
                            <Input type="number" value={complemento.equivalenciaDR}
                                onChange={e => setComplemento({ ...complemento, equivalenciaDR: parseFloat(e.target.value) || 0 })} />
                        </FormControl>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel>Número de Parcialidad</FormLabel>
                            <Input type="number" value={complemento.numParcialidad}
                                onChange={e => setComplemento({ ...complemento, numParcialidad: parseInt(e.target.value) || 0 })} />
                        </FormControl>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel>Saldo Anterior</FormLabel>
                            <Input type="number" value={complemento.saldoAnt}
                                onChange={e => setComplemento({ ...complemento, saldoAnt: parseFloat(e.target.value) || 0 })} />
                        </FormControl>
                    </Box>

                    <br />
                    <Button endDecorator={<KeyboardArrowRight />} color="success" type="submit">Generar XML</Button>
                    <br />
                </form>


                {xml && (
                    <>
                        <Typography level="h4">XML Generado</Typography>
                        <textarea rows="15" cols="80" value={xml} readOnly />
                    </>
                )}
            </Card>


        </>
    );
}

PaymentForm.propTypes = {
    tipo: PropTypes.oneOf(['P']).isRequired,
};

export default PaymentForm;
