import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import Card from "@mui/joy/Card";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import ButtonGroup from "@mui/joy/ButtonGroup";
import refreshIcon from "/refresh.svg"; // Import the refresh icon
import { IconButton } from "@mui/joy";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf"; // de @mui/icons-material
import { Link } from "wouter";

export function Notascredito() {
  return (
    <>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center", mt: 2 }}>
        <Typography level="h1" sx={{ ml: 1 }}>
          Notas de crédito
        </Typography>
        <Link href="/nuevapropuesta">
          <Button
            startDecorator={<Add />}
            type="button"
            variant="outlined"
            size="sm"
          >
            Nueva nota de crédito
          </Button>
        </Link>
      </Box>

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
              <th>#Nota de crédito</th>
              <th>Fecha de la nota de crédito</th>
              <th>Cliente</th>
              <th>Estado</th>
              <th>Proyecto</th>
              <th>Referencia #</th>
              <th>Importe</th>
              <th>Importe pendiente</th>
              
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
            </tr>
          </tbody>
        </table>
      </Card>
    </>
  );
}