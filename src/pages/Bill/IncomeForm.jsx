import PropTypes from 'prop-types';
import { saveAs } from 'file-saver';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import { useState } from "react";

function IncomeForm({ tipo }) {
  // Estados para datos generales
  const [emisor, setEmisor] = useState({ rfc: "", nombre: "", regimen: "" });
  const [receptor, setReceptor] = useState({
    rfc: "",
    nombre: "",
    domicilio: "",
    regimen: "",
    usoCFDI: "",
  });
  const [comprobante, setComprobante] = useState({
    formaPago: "",
    metodoPago: "",
    tipoCambio: "",
    tipoDeComprobante: tipo,
    exportacion: "",
    lugarExpedicion: "",
  });
  // Estado para manejar un arreglo de conceptos, ahora con descuento (opcional)
  const [conceptos, setConceptos] = useState([
    { claveProdServ: "", claveUnidad: "", unidad: "", descripcion: "", cantidad: 1, valorUnitario: 0, descuento: 0 },
  ]);
  const [xml, setXml] = useState("");

  // Función para agregar un nuevo concepto al arreglo
  const agregarConcepto = () => {
    setConceptos([
      ...conceptos,
      { claveProdServ: "", claveUnidad: "", descripcion: "", cantidad: 1, valorUnitario: 0, descuento: 0 },
    ]);
  };

  // Función para formatear la fecha en el formato requerido (YYYY-MM-DDTHH:mm:ss)
  function formatDate(date) {
    const pad = (n) => (n < 10 ? "0" + n : n);
    return (
      date.getFullYear() +
      "-" +
      pad(date.getMonth() + 1) +
      "-" +
      pad(date.getDate()) +
      "T" +
      pad(date.getHours()) +
      ":" +
      pad(date.getMinutes()) +
      ":" +
      pad(date.getSeconds())
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Variables para calcular totales globales
    let subTotalGlobal = 0; // Suma de los importes originales de cada concepto (sin descuento)
    let discountGlobal = 0; // Suma de los descuentos aplicados en cada concepto
    let taxBaseGlobal = 0;  // Suma de la base para impuestos de cada concepto (importe - descuento)
    let conceptosXml = conceptos
      .map((concepto) => {
        const cantidad = Number(concepto.cantidad);
        const valorUnitario = Number(concepto.valorUnitario);
        // Si no se ingresa descuento, se toma 0
        const descuento = Number(concepto.descuento) || 0;
        const importeOriginal = cantidad * valorUnitario;
        subTotalGlobal += importeOriginal;
        discountGlobal += descuento;
        // La base para calcular impuestos es el importe original menos el descuento
        const baseConcepto = importeOriginal - descuento;
        taxBaseGlobal += baseConcepto;
        const ivaConcepto = baseConcepto * 0.16;
        return `
        <cfdi:Concepto 
            ClaveProdServ="${concepto.claveProdServ}" 
            Cantidad="${cantidad}" 
            ClaveUnidad="${concepto.claveUnidad}" 
            Unidad="${concepto.unidad}"
            Descripcion="${concepto.descripcion}" 
            ValorUnitario="${valorUnitario.toFixed(2)}" 
            Importe="${importeOriginal.toFixed(2)}"
            ${descuento > 0 ? `Descuento="${descuento.toFixed(2)}"` : ""}
            ObjetoImp="02">
            <cfdi:Impuestos>
                <cfdi:Traslados>
                    <cfdi:Traslado 
                        Base="${baseConcepto.toFixed(2)}" 
                        Impuesto="002" 
                        TipoFactor="Tasa" 
                        TasaOCuota="0.160000" 
                        Importe="${ivaConcepto.toFixed(2)}" />
                </cfdi:Traslados>
            </cfdi:Impuestos>
        </cfdi:Concepto>`;
      })
      .join("");

    // Calcular IVA global y total final
    const ivaGlobal = taxBaseGlobal * 0.16;
    const totalGlobal = taxBaseGlobal + ivaGlobal;

    const fechaFormateada = formatDate(new Date());

    // Generar el XML completo usando Template Strings.
    // Solo incluir el atributo Descuento en el comprobante si discountGlobal > 0
    const xmlGenerated = `<?xml version="1.0" encoding="UTF-8"?>
<cfdi:Comprobante 
    Version="4.0"
    Serie="A" 
    Folio="1001"
    Fecha="${fechaFormateada}"
    FormaPago="${comprobante.formaPago}"
    MetodoPago="${comprobante.metodoPago}"
    SubTotal="${subTotalGlobal.toFixed(2)}"
    ${discountGlobal > 0 ? `Descuento="${discountGlobal.toFixed(2)}"` : ""}
    Moneda="MXN"
    TipoCambio="${comprobante.tipoCambio}"  
    Total="${totalGlobal.toFixed(2)}"
    TipoDeComprobante="${comprobante.tipoDeComprobante}"
    Exportacion="${comprobante.exportacion}"
    LugarExpedicion="${comprobante.lugarExpedicion}"
    xmlns:cfdi="http://www.sat.gob.mx/cfd/4"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sat.gob.mx/cfd/4 http://www.sat.gob.mx/sitio_internet/cfd/4/cfdv40.xsd">

    <cfdi:Emisor 
        Rfc="${emisor.rfc}" 
        Nombre="${emisor.nombre}" 
        RegimenFiscal="${emisor.regimen}" />
    <cfdi:Receptor 
        Rfc="${receptor.rfc}" 
        Nombre="${receptor.nombre}"
        DomicilioFiscalReceptor="${receptor.domicilio}" 
        RegimenFiscalReceptor="${receptor.regimen}" 
        UsoCFDI="${receptor.usoCFDI}" />

    <cfdi:Conceptos>
        ${conceptosXml}
    </cfdi:Conceptos>

    <cfdi:Impuestos TotalImpuestosTrasladados="${ivaGlobal.toFixed(2)}">
        <cfdi:Traslados>
            <cfdi:Traslado
                Base="${taxBaseGlobal.toFixed(2)}"
                Impuesto="002"
                TipoFactor="Tasa"
                TasaOCuota="0.160000"
                Importe="${ivaGlobal.toFixed(2)}" />
        </cfdi:Traslados>
    </cfdi:Impuestos>
</cfdi:Comprobante>`;

    setXml(xmlGenerated);

    // Aquí podrías enviar el XML a tu backend para timbrar o guardar
    try {
      // Enviar el XML generado al backend para timbrar
      const resp = await fetch('http://localhost:8080/bill/income', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ xml: xmlGenerated }),
      });

      if (!resp.ok) {
        const errorData = await resp.json();
        const { error, details } = errorData;

        console.error('Error del servidor:', error, details);
        alert(`Error del servidor:\n${error}\n\nDetalles:\n${JSON.stringify(details, null, 2)}`);
        return;
      }
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
        <Typography level="h2" sx={{ mt: 2 }}>Generar CFDI</Typography>{/*TITULO*/}
      </Box>

      <Card sx={{ width: '90%', mx: 'auto', p: 2, borderRadius: 'md', boxShadow: 'md', overflowX: 'auto', mt: 3 }}>

        <div>

          <form onSubmit={handleSubmit}>

            <Typography level="h3">Comprobante</Typography>

            <br />

            <Box sx={{ display: 'flex', gap: 2 }}>

              <FormControl sx={{ flex: 1 }}>
                <FormLabel>Forma de pago</FormLabel>
                <Input type="text" placeholder="Forma de pago" value={comprobante.formaPago}
                  onChange={(e) =>
                    setComprobante({ ...comprobante, formaPago: e.target.value })} />
              </FormControl>

              <FormControl sx={{ flex: 1 }}>
                <FormLabel>Método de pago</FormLabel>
                <Input type="text" placeholder="Método de pago" value={comprobante.metodoPago}
                  onChange={(e) =>
                    setComprobante({ ...comprobante, metodoPago: e.target.value })} />
              </FormControl>

              <FormControl sx={{ flex: 1 }}>
                <FormLabel>Tipo de cambio</FormLabel>
                <Input type="text" placeholder="Tipo de cambio" value={comprobante.tipoCambio}
                  onChange={(e) =>
                    setComprobante({ ...comprobante, tipoCambio: e.target.value })} />
              </FormControl>

            </Box>

            <br />

            <Box sx={{ display: 'flex', gap: 2 }}>

              <FormControl sx={{ flex: 1 }}>
                <FormLabel>Exportación</FormLabel>
                <Input type="text" placeholder="Exportación" value={comprobante.exportacion}
                  onChange={(e) =>
                    setComprobante({ ...comprobante, exportacion: e.target.value })} />
              </FormControl>

              <FormControl sx={{ flex: 1 }}>
                <FormLabel>Lugar de expedición</FormLabel>
                <Input type="text" placeholder="Lugar de expedición" value={comprobante.lugarExpedicion}
                  onChange={(e) =>
                    setComprobante({ ...comprobante, lugarExpedicion: e.target.value })} />
              </FormControl>

            </Box>

            <br />

            <Typography level="h3">Emisor</Typography>

            <br />

            <Box sx={{ display: 'flex', gap: 2 }}>

              <FormControl sx={{ flex: 1 }}>
                <FormLabel>RFC Emisor</FormLabel>
                <Input type="text" placeholder="RFC Emisor" value={emisor.rfc}
                  onChange={(e) =>
                    setEmisor({ ...emisor, rfc: e.target.value })} />
              </FormControl>

              <FormControl sx={{ flex: 1 }}>
                <FormLabel>Nombre emisor</FormLabel>
                <Input type="text" placeholder="Nombre emisor" value={emisor.nombre}
                  onChange={(e) =>
                    setEmisor({ ...emisor, nombre: e.target.value })} />
              </FormControl>

              <FormControl sx={{ flex: 1 }}>
                <FormLabel>Régimen Fiscal Emisor</FormLabel>
                <Input type="text" placeholder="Régimen Fiscal Emisor" value={emisor.regimen}
                  onChange={(e) =>
                    setEmisor({ ...emisor, regimen: e.target.value })} />
              </FormControl>

            </Box>

            <br />

            <Typography level="h3">Receptor</Typography>

            <br />

            <Box sx={{ display: 'flex', gap: 2 }}>

              <FormControl sx={{ flex: 1 }}>
                <FormLabel>RFC Receptor</FormLabel>
                <Input type="text" placeholder="RFC Receptor" value={receptor.rfc}
                  onChange={(e) =>
                    setReceptor({ ...receptor, rfc: e.target.value })} />
              </FormControl>

              <FormControl sx={{ flex: 1 }}>
                <FormLabel>Nombre emisor</FormLabel>
                <Input type="text" placeholder="Nombre receptor" value={receptor.nombre}
                  onChange={(e) =>
                    setReceptor({ ...receptor, nombre: e.target.value })} />
              </FormControl>

              <FormControl sx={{ flex: 1 }}>
                <FormLabel>Domicilio Fiscal Receptor</FormLabel>
                <Input type="text" placeholder="Domicilio Fiscal Receptor" value={receptor.domicilio}
                  onChange={(e) =>
                    setReceptor({ ...receptor, domicilio: e.target.value })} />
              </FormControl>

            </Box>

            <br />

            <Box sx={{ display: 'flex', gap: 2 }}>

              <FormControl sx={{ flex: 1 }}>
                <FormLabel>Régimen Fiscal Receptor</FormLabel>
                <Input type="text" placeholder="Régimen Fiscal Receptor" value={receptor.regimen}
                  onChange={(e) =>
                    setReceptor({ ...receptor, regimen: e.target.value })} />
              </FormControl>

              <FormControl sx={{ flex: 1 }}>
                <FormLabel>Uso CFDI</FormLabel>
                <Input type="text" placeholder="Uso CFDI" value={receptor.usoCFDI}
                  onChange={(e) =>
                    setReceptor({ ...receptor, usoCFDI: e.target.value })} />
              </FormControl>

            </Box>

            <br />
            <Box sx={{ display: 'flex', gap: 2 }}>

              <Typography level="h3">Conceptos</Typography>

              <br />

              <Button startDecorator={<Add />} type="button" onClick={agregarConcepto}>Agregar concepto</Button>

            </Box>

            <br />

            {conceptos.map((concepto, index) => (

              <div key={index} className="concepto">

                <Typography level="h4">Concepto {index + 1}</Typography>

                <br />

                <Box sx={{ display: 'flex', gap: 2 }}>

                  <FormControl sx={{ flex: 1 }}>
                    <FormLabel>Clave Producto/Servicio</FormLabel>
                    <Input type="text" placeholder="Clave Producto/Servicio" value={concepto.claveProdServ}
                      onChange={(e) => {
                        const nuevosConceptos = [...conceptos];
                        nuevosConceptos[index].claveProdServ = e.target.value;
                        setConceptos(nuevosConceptos);
                      }} />
                  </FormControl>

                  <FormControl sx={{ flex: 1 }}>
                    <FormLabel>Clave Unidad</FormLabel>
                    <Input type="text" placeholder="Clave Unidad" value={concepto.claveUnidad}
                      onChange={(e) => {
                        const nuevosConceptos = [...conceptos];
                        nuevosConceptos[index].claveUnidad = e.target.value;
                        setConceptos(nuevosConceptos);
                      }} />
                  </FormControl>

                  <FormControl sx={{ flex: 1 }}>
                    <FormLabel>Unidad</FormLabel>
                    <Input type="text" placeholder="Unidad" value={concepto.unidad}
                      onChange={(e) => {
                        const nuevosConceptos = [...conceptos];
                        nuevosConceptos[index].unidad = e.target.value;
                        setConceptos(nuevosConceptos);
                      }} />
                  </FormControl>

                  <FormControl sx={{ flex: 1 }}>
                    <FormLabel>Descripción</FormLabel>
                    <Input type="text" placeholder="Descripción" value={concepto.descripcion}
                      onChange={(e) => {
                        const nuevosConceptos = [...conceptos];
                        nuevosConceptos[index].descripcion = e.target.value;
                        setConceptos(nuevosConceptos);
                      }} />
                  </FormControl>

                </Box>

                <br />

                <Box sx={{ display: 'flex', gap: 2 }}>

                  <FormControl sx={{ flex: 1 }}>
                    <FormLabel>Cantidad</FormLabel>
                    <Input type="number" placeholder="Cantidad" value={concepto.cantidad}
                      onChange={(e) => {
                        const nuevosConceptos = [...conceptos];
                        nuevosConceptos[index].cantidad = e.target.value;
                        setConceptos(nuevosConceptos);
                      }} />
                  </FormControl>

                  <FormControl sx={{ flex: 1 }}>
                    <FormLabel>Valor Unitario</FormLabel>
                    <Input type="number" placeholder="Valor Unitario" value={concepto.valorUnitario}
                      onChange={(e) => {
                        const nuevosConceptos = [...conceptos];
                        nuevosConceptos[index].valorUnitario = e.target.value;
                        setConceptos(nuevosConceptos);
                      }} />
                  </FormControl>

                  <FormControl sx={{ flex: 1 }}>
                    <FormLabel>Descuento (opcional)</FormLabel>
                    <Input type="number" placeholder="Descuento (opcional)" value={concepto.descuento || ""}
                      onChange={(e) => {
                        const nuevosConceptos = [...conceptos];
                        nuevosConceptos[index].descuento = e.target.value;
                        setConceptos(nuevosConceptos);
                      }} />
                  </FormControl>

                </Box>

              </div>

            ))}

            <br />
            <Button endDecorator={<KeyboardArrowRight />} color="success" type="submit">
              Generar XML
            </Button>
            <br />

          </form>

          {xml && (
            <div>
              <br />
              <Typography level="h4">XML Generado</Typography>
              <br />
              <textarea rows="15" cols="80" value={xml} readOnly />
            </div>
          )}
        </div>


      </Card>

    </>
  );
}

IncomeForm.propTypes = {
  tipo: PropTypes.oneOf(['I']).isRequired,
};
export default IncomeForm;
