import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import Sheet from "@mui/joy/Sheet";
import Card from "@mui/joy/Card";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import ButtonGroup from "@mui/joy/ButtonGroup";
import refreshIcon from "/refresh.svg"; // Import the refresh icon
import { IconButton } from "@mui/joy";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf"; // de @mui/icons-material
import { Link } from "wouter";

export function Facturas() {
  return (
<>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center", mt: 2 }}>
        <Typography level="h1" sx={{ ml: 1 }}>Facturas</Typography>
        <Link href="/factura">
          <Button startDecorator={<Add />} type="button" variant="outlined" size="sm">
            Crear factura
          </Button>
        </Link>
      </Box>

      {/*RECUADRO*/}

      <Sheet
        sx={{
          bgcolor: "background.level1",
          borderRadius: "sm",
          p: 2,
          my: 1.5,
          display: "flex",
          gap: 2,
          "& > div": { flex: 1 },
        }}
      >
       <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
  <Typography sx={{ fontWeight: "lg", fontSize: "0.9rem" }}>
    0 / 0
  </Typography>
  <Typography
    level="body-xs"
    sx={{ fontWeight: "lg", color: "#b40202", fontSize: "0.9rem" }} // Rojo
  >
    Por pagar
  </Typography>
</Box>

<Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
  <Typography sx={{ fontWeight: "lg", fontSize: "0.9rem" }}>
    0 / 0
  </Typography>
  <Typography
    level="body-xs"
    sx={{ fontWeight: "lg", color: "#239d02", fontSize: "0.9rem" }} // Verde
  >
    Pagada
  </Typography>
</Box>

<Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
  <Typography sx={{ fontWeight: "lg", fontSize: "0.9rem" }}>
    0 / 0
  </Typography>
  <Typography
    level="body-xs"
    sx={{ fontWeight: "lg", color: "#e67001", fontSize: "0.9rem" }} // Naranja
  >
    Pagada parcialmente
  </Typography>
</Box>

<Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
  <Typography sx={{ fontWeight: "lg", fontSize: "0.9rem" }}>
    0 / 0
  </Typography>
  <Typography
    level="body-xs"
    sx={{ fontWeight: "lg", color: "#bb8a00", fontSize: "0.9rem" }} // Amarillo
  >
    Retrasada
  </Typography>
</Box>

<Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
  <Typography sx={{ fontWeight: "lg", fontSize: "0.9rem" }}>
    0 / 0
  </Typography>
  <Typography
    level="body-xs"
    sx={{ fontWeight: "lg", fontSize: "0.9rem" }} //sin color, gris
  >
    Borrador
  </Typography>
</Box>
      </Sheet>

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

        <Box
          sx={{ display: "flex", justifyContent: "flex-start", gap: 2, mb: 2 }}
        >
          <Select defaultValue="10" sx={{ width: 110 }}>
            <Option value="10">10</Option>
            <Option value="25">25</Option>
            <Option value="50">50</Option>
            <Option value="100">100</Option>
            <Option value="todo">Todo</Option>
          </Select>

          <ButtonGroup>
            <Button>Exportar</Button>

            <Button>
              <img src={refreshIcon} alt="Refresh" className="refresh-icon" />
            </Button>
          </ButtonGroup>
          <Link href="/exportarr">
          <IconButton
            variant="outlined"
            color="neutral"
            sx={{
              borderRadius: "12px", // para esquinas redondeadas
              width: 48,
              height: 48,
            }}
          >
            <PictureAsPdfIcon sx={{ color: "#0f82fe " }} />{" "}
          </IconButton>
        </Link>
        </Box>

        <table className="custom-table">
          <thead>
            <tr>
              <th>N° Factura</th>
              <th>Importe</th>
              <th>Impuesto total</th>
              <th>Fecha</th>
              <th>Cliente</th>
              <th>Proyecto</th>
              <th>Etiquetas</th>
              <th>Fecha de vencimiento</th>
              <th>Estado</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </Card>

</>
  );
}
