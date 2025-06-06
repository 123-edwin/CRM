import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import Card from "@mui/joy/Card";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { getBills } from "@s/billServices"; // Importa la función para obtener las facturas
import { saveAs } from "file-saver";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import { FileUploadButton } from "@c/botonesEspeciales/archivosMultiple"

const downloadPdf = (base64, idFactura) => {
  const byteCharacters = atob(base64); // decodificar base64
  const byteNumbers = new Array(byteCharacters.length).fill().map((_, i) => byteCharacters.charCodeAt(i));
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: "application/pdf" });
  saveAs(blob, `factura-${idFactura}.pdf`);
};

const downloadXml = (xmlString, idFactura) => {
  const blob = new Blob([xmlString], { type: "application/xml" });
  saveAs(blob, `factura-${idFactura}.xml`);
};

export function Facturas() {
  const [facturas, setFacturas] = useState([]);

  useEffect(() => {
    const fetchFacturas = async () => {
      try {
        const fetchData = await getBills(); // Llama a la función para obtener las facturas
        setFacturas(fetchData); // Actualiza el estado con las facturas obtenidas
      } catch (error) {
        console.error("Error al obtener las facturas:", error);
      }
    }; fetchFacturas(); // Llama a la función para obtener las facturas
  }, []);


  return (
    <>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center", mt: 2 }}>
        <Typography level="h1" sx={{ ml: 1 }}>Facturas</Typography>
        <Link href="/factura">
          <Button startDecorator={<Add />} type="button" variant="outlined" size="sm">
            Crear factura
          </Button>
        </Link>

        <FileUploadButton/>
      </Box>

      {/*RECUADRO*/}

      {/*TABLA*/}

      <Card
        sx={{
          width: "99%",
          mx: "auto",
          p: 2,
          borderRadius: "md",
          boxShadow: "md",
          overflowX: "auto",
          mt: 3,
        }}
      >
        {/*SELECT, BOTON Y ACTUALIZAR*/}

        <table className="custom-table">
          <thead>
            <tr>
              <th>N° Factura</th>
              <th>Tipo Documento</th>
              <th>Total</th>
              <th>Restante</th>
              <th>Cliente</th>
              <th>Fecha</th>
              <th>PDF</th>
              <th>Xml</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {facturas.map((factura, index) => (
              <tr key={factura.id || index}>
                <td>{factura.id}</td>
                <td>{factura.tipo_documento}</td>
                <td>{factura.total}</td>
                <td>{factura.restante}</td>
                <td>{factura.nombre_receptor}</td>
                <td>{factura.fecha}</td>
                <td>
                  <Button
                    size="sm"
                    onClick={() => downloadPdf(factura.pdf, factura.id)}
                  >
                    Descargar PDF
                  </Button>
                </td>
                <td>
                  <Button
                    size="sm"
                    onClick={() => downloadXml(factura.xml, factura.id)}
                  >
                    Descargar XML
                  </Button>
                </td>
                <td>
                  <Dropdown>
                    <MenuButton variant="outlined" size="sm">
                      Acciones
                    </MenuButton>
                    <Menu>
                      <Link href={`/factura/${factura.id}`}>
                        <MenuItem>Emitir pago</MenuItem>
                      </Link>
                      <Link href={`/deleteFactura/${factura.id}`}>
                        <MenuItem>Eliminar</MenuItem>
                      </Link>
                    </Menu>
                  </Dropdown>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </Card>

    </>
  );
}
