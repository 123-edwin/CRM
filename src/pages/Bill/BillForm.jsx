import "./BillForm.css";
import { useState } from "react";

function BillForm() {
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
    tipoDeComprobante: "",
    exportacion: "",
    lugarExpedicion: "",
  });
  // Estado para manejar un arreglo de conceptos, ahora con descuento (opcional)
  const [conceptos, setConceptos] = useState([
    { claveProdServ: "", claveUnidad: "", descripcion: "", cantidad: 1, valorUnitario: 0, descuento: 0 },
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

  const handleSubmit = (e) => {
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
            Unidad="Pieza"
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
  };

  return (
    <div>
      <h2>Generar CFDI</h2>
      <form onSubmit={handleSubmit}>
        <h3>Comprobante</h3>
        <input
          type="text"
          placeholder="Forma de Pago"
          value={comprobante.formaPago}
          onChange={(e) =>
            setComprobante({ ...comprobante, formaPago: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Método de Pago"
          value={comprobante.metodoPago}
          onChange={(e) =>
            setComprobante({ ...comprobante, metodoPago: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Tipo de Cambio"
          value={comprobante.tipoCambio}
          onChange={(e) =>
            setComprobante({ ...comprobante, tipoCambio: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Tipo de Comprobante"
          value={comprobante.tipoDeComprobante}
          onChange={(e) =>
            setComprobante({ ...comprobante, tipoDeComprobante: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Exportación"
          value={comprobante.exportacion}
          onChange={(e) =>
            setComprobante({ ...comprobante, exportacion: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Lugar de Expedición"
          value={comprobante.lugarExpedicion}
          onChange={(e) =>
            setComprobante({ ...comprobante, lugarExpedicion: e.target.value })
          }
        />

        <h3>Emisor</h3>
        <input
          type="text"
          placeholder="RFC Emisor"
          value={emisor.rfc}
          onChange={(e) =>
            setEmisor({ ...emisor, rfc: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Nombre Emisor"
          value={emisor.nombre}
          onChange={(e) =>
            setEmisor({ ...emisor, nombre: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Régimen Fiscal Emisor"
          value={emisor.regimen}
          onChange={(e) =>
            setEmisor({ ...emisor, regimen: e.target.value })
          }
        />

        <h3>Receptor</h3>
        <input
          type="text"
          placeholder="RFC Receptor"
          value={receptor.rfc}
          onChange={(e) =>
            setReceptor({ ...receptor, rfc: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Nombre Receptor"
          value={receptor.nombre}
          onChange={(e) =>
            setReceptor({ ...receptor, nombre: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Domicilio Fiscal Receptor"
          value={receptor.domicilio}
          onChange={(e) =>
            setReceptor({ ...receptor, domicilio: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Régimen Fiscal Receptor"
          value={receptor.regimen}
          onChange={(e) =>
            setReceptor({ ...receptor, regimen: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Uso CFDI"
          value={receptor.usoCFDI}
          onChange={(e) =>
            setReceptor({ ...receptor, usoCFDI: e.target.value })
          }
        />

        <h3>Conceptos</h3>
        {conceptos.map((concepto, index) => (
          <div key={index} className="concepto">
            <h4>Concepto {index + 1}</h4>
            <input
              type="text"
              placeholder="Clave Producto/Servicio"
              value={concepto.claveProdServ}
              onChange={(e) => {
                const nuevosConceptos = [...conceptos];
                nuevosConceptos[index].claveProdServ = e.target.value;
                setConceptos(nuevosConceptos);
              }}
            />
            <input
              type="text"
              placeholder="Clave Unidad"
              value={concepto.claveUnidad}
              onChange={(e) => {
                const nuevosConceptos = [...conceptos];
                nuevosConceptos[index].claveUnidad = e.target.value;
                setConceptos(nuevosConceptos);
              }}
            />
            <input
              type="text"
              placeholder="Descripción"
              value={concepto.descripcion}
              onChange={(e) => {
                const nuevosConceptos = [...conceptos];
                nuevosConceptos[index].descripcion = e.target.value;
                setConceptos(nuevosConceptos);
              }}
            />
            <input
              type="number"
              placeholder="Cantidad"
              value={concepto.cantidad}
              onChange={(e) => {
                const nuevosConceptos = [...conceptos];
                nuevosConceptos[index].cantidad = e.target.value;
                setConceptos(nuevosConceptos);
              }}
            />
            <input
              type="number"
              placeholder="Valor Unitario"
              value={concepto.valorUnitario}
              onChange={(e) => {
                const nuevosConceptos = [...conceptos];
                nuevosConceptos[index].valorUnitario = e.target.value;
                setConceptos(nuevosConceptos);
              }}
            />
            <input
              type="number"
              placeholder="Descuento (opcional)"
              value={concepto.descuento || ""}
              onChange={(e) => {
                const nuevosConceptos = [...conceptos];
                nuevosConceptos[index].descuento = e.target.value;
                setConceptos(nuevosConceptos);
              }}
            />
          </div>
        ))}
        <button type="button" onClick={agregarConcepto}>
          Agregar Concepto
        </button>
        <br /><br />
        <button type="submit">Generar XML</button>
      </form>

      {xml && (
        <div>
          <h3>XML Generado</h3>
          <textarea rows="15" cols="80" value={xml} readOnly />
        </div>
      )}
    </div>
  );
}

export default BillForm;
