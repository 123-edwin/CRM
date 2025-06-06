import PropTypes from "prop-types";
import { saveAs } from "file-saver";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import FormControl from "@mui/joy/FormControl";
import Input from "@mui/joy/Input";
import FormLabel from "@mui/joy/FormLabel";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Checkbox from "@mui/joy/Checkbox";
import { getClients } from "@s/clientServices";


import { useState, useEffect } from "react";

function IncomeForm({ tipo }) {
  // Estados para datos generales
  const [emisor, setEmisor] = useState({ rfc: "", nombre: "", regimen: "" });
  const [receptor, setReceptor] = useState({
    rfc: "",
    nombre: "",
    domicilio: "",
    regimen: null,
    usoCFDI: "",
  });
  const [comprobante, setComprobante] = useState({
    formaPago: null,
    metodoPago: "",
    tipoDeComprobante: tipo,
    lugarExpedicion: "",
  });

  // Estado para manejar un arreglo de conceptos
  const [conceptos, setConceptos] = useState([
    {
      claveProdServ: "",
      claveUnidad: "",
      unidad: "",
      descripcion: "",
      cantidad: 1,
      valorUnitario: 0,
      descuento: 0,
    },
  ]);

  //Estados para email
  const [sendEmail, setSendEmail] = useState(false);
  //Direccion de correo electrónico
  const [emailDirection, setEmailDirection] = useState("")

  // Estados para los totales: subtotal, descuento, IVA y total
  const [subTotalGlobal, setSubTotalGlobal] = useState(0);
  const [discountGlobal, setDiscountGlobal] = useState(0);
  const [ivaGlobal, setIvaGlobal] = useState(0);
  const [totalGlobal, setTotalGlobal] = useState(0);

  const [xml, setXml] = useState("");

  // Estado para lista de clientes
  const [clientes, setClientes] = useState([]);

  // Estado para el índice del cliente seleccionado
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);

  // Función para agregar un nuevo concepto al arreglo
  const agregarConcepto = () => {
    setConceptos([
      ...conceptos,
      {
        claveProdServ: "",
        claveUnidad: "",
        unidad: "",
        descripcion: "",
        cantidad: 1,
        valorUnitario: 0,
        descuento: 0,
      },
    ]);
  };

  // useEffect que recalcula subtotal, descuento, IVA y total cada vez que cambien los conceptos
  useEffect(() => {
    let sub = 0;
    let disc = 0;
    let base = 0;

    conceptos.forEach((c) => {
      const cantidad = Number(c.cantidad) || 0;
      const valorUnitario = Number(c.valorUnitario) || 0;
      const descuento = Number(c.descuento) || 0;

      const importeOriginal = cantidad * valorUnitario;
      sub += importeOriginal;
      disc += descuento;
      base += importeOriginal - descuento;
    });

    const iva = base * 0.16;
    const total = base + iva;

    setSubTotalGlobal(sub);
    setDiscountGlobal(disc);
    setIvaGlobal(iva);
    setTotalGlobal(total);
  }, [conceptos]);

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

    // Construir nodos <cfdi:Concepto> reutilizando los valores calculados
    const conceptosXml = conceptos
      .map((c) => {
        const cantidad = Number(c.cantidad) || 0;
        const valorUnitario = Number(c.valorUnitario) || 0;
        const descuento = Number(c.descuento) || 0;
        const importeOriginal = cantidad * valorUnitario;
        const baseConcepto = importeOriginal - descuento;
        const ivaConcepto = baseConcepto * 0.16;

        return `
        <cfdi:Concepto 
            ClaveProdServ="${c.claveProdServ}" 
            Cantidad="${cantidad}" 
            ClaveUnidad="${c.claveUnidad}" 
            Unidad="${c.unidad}"
            Descripcion="${c.descripcion}" 
            ValorUnitario="${valorUnitario.toFixed(2)}" 
            Importe="${importeOriginal.toFixed(2)}"
            ${descuento > 0
            ? `Descuento="${descuento.toFixed(2)}"`
            : ""
          }
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

    const fechaFormateada = formatDate(new Date());

    // Generar el XML completo usando los totales precalculados
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
    TipoCambio="1"  
    Total="${totalGlobal.toFixed(2)}"
    TipoDeComprobante="${comprobante.tipoDeComprobante}"
    Exportacion="01"
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
                Base="${(subTotalGlobal - discountGlobal).toFixed(2)}"
                Impuesto="002"
                TipoFactor="Tasa"
                TasaOCuota="0.160000"
                Importe="${ivaGlobal.toFixed(2)}" />
        </cfdi:Traslados>
    </cfdi:Impuestos>
</cfdi:Comprobante>`;

    setXml(xmlGenerated);

    // Enviar el XML al backend para timbrar y descargar el PDF
    try {
      const resp = await fetch("http://localhost:8080/bill/income", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          xml: xmlGenerated,
          sendEmail: sendEmail,
          emailDirection: emailDirection,
          tipo_documento: tipo,
          total: totalGlobal.toFixed(2),
          restante: comprobante.metodoPago === "PPD" ? totalGlobal.toFixed(2) : "0.00",
          nombre_receptor: receptor.nombre,
          rfc_receptor: receptor.rfc,
          regimen_receptor: receptor.regimen,
          domicilio_receptor: receptor.domicilio,
          fecha: fechaFormateada,}),
      });

      if (!resp.ok) {
        const errorData = await resp.json();
        const { error, details } = errorData;
        console.error("Error del servidor:", error, details);
        alert(
          `Error del servidor:\n${error}\n\nDetalles:\n${JSON.stringify(
            details,
            null,
            2
          )}`
        );
        return;
      }

      const { xml: xmlTimbrado, pdfBase64 } = await resp.json();

      // Descargar el XML timbrado
      const blobXml = new Blob([xmlTimbrado], {
        type: "text/xml;charset=utf-8",
      });
      saveAs(blobXml, "factura_timbrada.xml");

      // Descargar el PDF timbrado
      const binary = atob(pdfBase64);
      const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
      const blobPdf = new Blob([bytes], { type: "application/pdf" });
      saveAs(blobPdf, "factura.pdf");
    } catch (err) {
      console.error("Error al enviar el XML al backend:", err);
      alert("Error al enviar el XML al backend: " + err.message);
    }
  };

  // Traer clientes al montar
  useEffect(() => {
    async function fetchClientes() {
      try {
        const data = await getClients();
        setClientes(data);
      } catch (err) {
        console.error("Error al obtener clientes:", err);
      }
    }
    fetchClientes();
  }, []);

  // Cuando cambia el cliente seleccionado, autocompletar receptor y email
  useEffect(() => {
    if (clienteSeleccionado !== null && clientes[clienteSeleccionado]) {
      const c = clientes[clienteSeleccionado];
      setReceptor({
        rfc: c.rfc || "",
        nombre: c.empresa || "",
        domicilio: "", // No traer domicilio fiscal
        regimen: c.regimen || "",
        usoCFDI: ""
      });
      setEmailDirection(c.email_principal || "");
    }
  }, [clienteSeleccionado, clientes]);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Typography level="h2" sx={{ mt: 2 }}>
          Generar CFDI
        </Typography>
      </Box>

      <Card
        sx={{
          width: "90%",
          mx: "auto",
          p: 10,
          borderRadius: "md",
          boxShadow: "md",
          //overflowX: "auto",

        }}
      >
        <form onSubmit={handleSubmit}>
          {/* Sección Comprobante */}
          <Typography level="h3">Comprobante</Typography>
          <br />
          <Box sx={{ display: "flex", gap: 1 }}>

            <FormControl sx={{ flex: 1 }}>
              <FormLabel>Forma de pago</FormLabel>
              <Select name="formaPago" id="formaPago" color="primary" placeholder="Forma de pago"
                sx={{ width: 300, height: 45 }}
                size="md"
                variant="outlined" value={comprobante.formaPago} onChange={(_, value) => { setComprobante({ ...comprobante, formaPago: value }) }}>
                <Option value="01">Efectivo</Option>
                <Option value="02">Cheque Nominativo</Option>
                <Option value="03">Transferencia Electrónica de Fondos</Option>
                <Option value="04">Tarjeta de Crédito</Option>
                <Option value="28">Tarjeta de Débito</Option>
                <Option value="99">Por definir</Option>
              </Select>
            </FormControl>

            <FormControl sx={{ flex: 1 }}>
              <FormLabel>Método de pago</FormLabel>
              <Select name="metodoPago" id="metodoPago" color="primary" placeholder="Método de pago"
                sx={{ width: 300, height: 45 }}
                size="md"
                variant="outlined" value={comprobante.metodoPago} onChange={(_, value) => { setComprobante({ ...comprobante, metodoPago: value }) }}>
                <Option value="PUE">Pago en una solo exhibición</Option>
                <Option value="PPD">Pago en parcialidades o diferido</Option>
              </Select>
            </FormControl>

          </Box>
          <br />
          <Box sx={{ display: "flex", gap: 2 }}>
            <FormControl sx={{ flex: 1 }}>
              <FormLabel>Lugar de expedición</FormLabel>
              <Input
                type="text"
                placeholder="Lugar de expedición"
                value={comprobante.lugarExpedicion}
                onChange={(e) =>
                  setComprobante({
                    ...comprobante,
                    lugarExpedicion: e.target.value,
                  })
                }
              />
            </FormControl>
          </Box>
          <br />

          {/* Sección Emisor */}
          <Typography level="h3">Emisor</Typography>
          <br />

          <Box sx={{ display: "flex", gap: 2 }}>

            <FormControl sx={{ flex: 1 }}>
              <FormLabel>Nombre emisor</FormLabel>
              <Input
                type="text"
                placeholder="Nombre emisor"
                value={emisor.nombre}
                onChange={(e) =>
                  setEmisor({ ...emisor, nombre: e.target.value })
                }
              />
            </FormControl>

            <FormControl sx={{ flex: 1 }}>
              <FormLabel>RFC Emisor</FormLabel>
              <Input
                type="text"
                placeholder="RFC Emisor"
                value={emisor.rfc}
                onChange={(e) =>
                  setEmisor({ ...emisor, rfc: e.target.value })
                }
              />
            </FormControl>

            <FormControl sx={{ flex: 1 }}>
              <FormLabel>Regimen Fiscal Emisor</FormLabel>
              <Select name="regimenEmisor" id="regimenEmisor" color="primary" placeholder="Regimen Fiscal Emisor"
                sx={{ width: 300, height: 45 }}
                size="md"
                variant="outlined" value={emisor.regimen} onChange={(_, value) => { setEmisor({ ...emisor, regimen: value }) }}>
                <Option value="601">General de Ley Personas Morales</Option>
                <Option value="603">Personas Morales con Fines no Lucrativos</Option>
                <Option value="605">Sueldos y Salarios e Ingresos Asimilados a Salarios</Option>
                <Option value="606">Arrendamiento</Option>
                <Option value="607">Régimen de Enajenación o Adquisición de Bienes</Option>
                <Option value="608">Demás ingresos</Option>
                <Option value="610">Residentes en el Extranjero sin Establecimiento Permanente en México</Option>
                <Option value="611">Ingresos por Dividendos (socios y accionistas)</Option>
                <Option value="612">Personas Físicas con Actividades Empresariales y Profesionales</Option>
                <Option value="614">Ingresos por intereses</Option>
                <Option value="615">Régimen de los ingresos por obtención de premios</Option>
                <Option value="616">Sin obligaciones fiscales</Option>
                <Option value="620">Sociedades Cooperativas de Producción que optan por diferir sus ingresos</Option>
                <Option value="621">Incorporación Fiscal</Option>
                <Option value="622">Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras</Option>
                <Option value="623">Opcional para Grupos de Sociedades</Option>
                <Option value="624">Coordinados</Option>
                <Option value="625">Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas</Option>
                <Option value="626">Régimen Simplificado de Confianza</Option>
              </Select>
            </FormControl>

          </Box>

          <br />

          {/* Sección Receptor */}
          <Typography level="h3">Receptor</Typography>
          <br />
          <Box sx={{ display: "flex", gap: 2 }}>
            <FormControl sx={{ flex: 1 }}>
              <FormLabel>RFC Receptor</FormLabel>
              <Input
                type="text"
                placeholder="RFC Receptor"
                value={receptor.rfc}
                onChange={(e) =>
                  setReceptor({ ...receptor, rfc: e.target.value })
                }
              />
            </FormControl>
            <FormControl sx={{ flex: 1 }}>
              <FormLabel>Nombre receptor</FormLabel>
              <Select
                name="nombreReceptor"
                id="nombreReceptor"
                color="primary"
                placeholder="Selecciona empresa"
                sx={{ width: 300, height: 45 }}
                size="md"
                variant="outlined"
                value={clienteSeleccionado}
                onChange={(_, value) => setClienteSeleccionado(value)}
              >
                {clientes.map((c, idx) => (
                  <Option key={c._id || idx} value={idx}>
                    {c.empresa}
                  </Option>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ flex: 1 }}>
              <FormLabel>Domicilio Fiscal Receptor</FormLabel>
              <Input
                type="text"
                placeholder="Domicilio Fiscal Receptor"
                value={receptor.domicilio}
                onChange={(e) =>
                  setReceptor({ ...receptor, domicilio: e.target.value })
                }
              />
            </FormControl>
          </Box>

          <br />

          <Box sx={{ display: "flex", gap: 2 }}>
            <FormControl sx={{ flex: 1 }}>
              <FormLabel>Regimen Fiscal Receptor</FormLabel>
              <Input
                type="text"
                placeholder="Regimen Fiscal Receptor"
                value={receptor.regimen}
                onChange={(e) =>
                  setReceptor({ ...receptor, regimen: e.target.value })
                }
              />
            </FormControl>
            <FormControl sx={{ flex: 1 }}>
              <FormLabel>Uso CFDI</FormLabel>
              <Select name="usoCFDI" id="usoCFDI" color="primary" placeholder="Uso de CFDI"
                sx={{ width: 300, height: 45 }}
                size="md"
                variant="outlined" value={receptor.usoCFDI} onChange={(_, value) => { setReceptor({ ...receptor, usoCFDI: value }) }}>
                <Option value="G01">Adquisición de mercancías.</Option>
                <Option value="G02">Devoluciones, descuentos o bonificaciones.</Option>
                <Option value="G03">Gastos en general.</Option>
                <Option value="I01">Construcciones.</Option>
                <Option value="I02">Mobiliario y equipo de oficina por inversiones.</Option>
                <Option value="I03">Equipo de transporte.</Option>
                <Option value="I04">Equipo de computo y accesorios.</Option>
                <Option value="I05">Dados, troqueles, moldes, matrices y herramental.</Option>
                <Option value="I06">Comunicaciones telefónicas.</Option>
                <Option value="I07">Comunicaciones satelitales.</Option>
                <Option value="I08">Otra maquinaria y equipo.</Option>
                <Option value="D01">Honorarios médicos, dentales y gastos hospitalarios.</Option>
                <Option value="D02">Gastos médicos por incapacidad o discapacidad.</Option>
                <Option value="D03">Gastos funerales.</Option>
                <Option value="D04">Donativos.</Option>
                <Option value="D05">Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación).</Option>
                <Option value="D06">Aportaciones voluntarias al SAR.</Option>
                <Option value="D07">Primas por seguros de gastos médicos.</Option>
                <Option value="D08">Gastos de transportación escolar obligatoria.</Option>
                <Option value="D09">Depósitos en cuentas para el ahorro, primas que tengan como base planes de pensiones.</Option>
                <Option value="D10">Pagos por servicios educativos (colegiaturas).</Option>
                <Option value="S01">Sin efectos fiscales.</Option>
                <Option value="CP01">Pagos</Option>
                <Option value="CN01">Nómina</Option>
              </Select>
            </FormControl>
          </Box>

          <br />

          {/* Sección Conceptos */}
          <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 2 }}>
            <Typography level="h3">Conceptos</Typography>
            <Button
              startDecorator={<Add />}
              type="button"
              onClick={agregarConcepto}
            >
              Agregar concepto
            </Button>
          </Box>

          {/* Campos para cada concepto */}
          {conceptos.map((c, idx) => (
            <Box
              key={idx}
              sx={{ mb: 3, borderBottom: "1px solid #ddd", pb: 2 }}
            >
              <Typography level="h4">Concepto {idx + 1}</Typography>
              <br />
              <Box sx={{ display: "flex", gap: 2 }}>
                <FormControl sx={{ flex: 1 }}>
                  <FormLabel>Clave Producto/Servicio</FormLabel>
                  <Input
                    type="text"
                    placeholder="Clave Producto/Servicio"
                    value={c.claveProdServ}
                    onChange={(e) => {
                      const nuevos = [...conceptos];
                      nuevos[idx].claveProdServ = e.target.value;
                      setConceptos(nuevos);
                    }}
                  />
                </FormControl>
                <FormControl sx={{ flex: 1 }}>
                  <FormLabel>Clave Unidad</FormLabel>
                  <Input
                    type="text"
                    placeholder="Clave Unidad"
                    value={c.claveUnidad}
                    onChange={(e) => {
                      const nuevos = [...conceptos];
                      nuevos[idx].claveUnidad = e.target.value;
                      setConceptos(nuevos);
                    }}
                  />
                </FormControl>
                <FormControl sx={{ flex: 1 }}>
                  <FormLabel>Unidad</FormLabel>
                  <Input
                    type="text"
                    placeholder="Unidad"
                    value={c.unidad}
                    onChange={(e) => {
                      const nuevos = [...conceptos];
                      nuevos[idx].unidad = e.target.value;
                      setConceptos(nuevos);
                    }}
                  />
                </FormControl>
                <FormControl sx={{ flex: 1 }}>
                  <FormLabel>Descripción</FormLabel>
                  <Input
                    type="text"
                    placeholder="Descripción"
                    value={c.descripcion}
                    onChange={(e) => {
                      const nuevos = [...conceptos];
                      nuevos[idx].descripcion = e.target.value;
                      setConceptos(nuevos);
                    }}
                  />
                </FormControl>
              </Box>
              <br />
              <Box sx={{ display: "flex", gap: 2 }}>
                <FormControl sx={{ flex: 1 }}>
                  <FormLabel>Cantidad</FormLabel>
                  <Input
                    type="number"
                    placeholder="Cantidad"
                    value={c.cantidad}
                    onChange={(e) => {
                      const nuevos = [...conceptos];
                      nuevos[idx].cantidad = e.target.value;
                      setConceptos(nuevos);
                    }}
                  />
                </FormControl>
                <FormControl sx={{ flex: 1 }}>
                  <FormLabel>Valor Unitario</FormLabel>
                  <Input
                    type="number"
                    placeholder="Valor Unitario"
                    value={c.valorUnitario}
                    onChange={(e) => {
                      const nuevos = [...conceptos];
                      nuevos[idx].valorUnitario = e.target.value;
                      setConceptos(nuevos);
                    }}
                  />
                </FormControl>
                <FormControl sx={{ flex: 1 }}>
                  <FormLabel>Descuento (opcional)</FormLabel>
                  <Input
                    type="number"
                    placeholder="Descuento (opcional)"
                    value={c.descuento}
                    onChange={(e) => {
                      const nuevos = [...conceptos];
                      nuevos[idx].descuento = e.target.value;
                      setConceptos(nuevos);
                    }}
                  />
                </FormControl>
              </Box>
            </Box>
          ))}

          {/* Mostrar solo Subtotal, Descuento, IVA y Total en tiempo real */}
          <Box sx={{ mb: 3, outline: "1px solid black", p: 2 }}>
            <Typography>Subtotal: {subTotalGlobal.toFixed(2)}</Typography>
            <Typography>Descuento: {discountGlobal.toFixed(2)}</Typography>
            <Typography>IVA (16%): {ivaGlobal.toFixed(2)}</Typography>
            <Typography>Total: {totalGlobal.toFixed(2)}</Typography>

            <Checkbox
              color="danger"
              label="Enviar al correo"
              variant="soft"
              checked={sendEmail}
              onChange={(e) => setSendEmail(e.target.checked)}
            />
          </Box>

          <Button endDecorator={<KeyboardArrowRight />} color="success" type="submit">
            Generar XML
          </Button>
          <br />

          {xml && (
            <Box sx={{ mt: 3 }}>
              <Typography level="h4">XML Generado</Typography>
              <textarea rows="15" cols="80" value={xml} readOnly />
            </Box>
          )}
        </form>
      </Card>
    </>
  );
}

IncomeForm.propTypes = {
  tipo: PropTypes.oneOf(["I"]).isRequired,
};

export default IncomeForm;
