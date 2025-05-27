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
import { Link } from "wouter";

export function Contrato() {
  return (
    <>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center", mt: 2 }}>
        <Typography level="h1" sx={{ ml: 1 }}>Contratos</Typography>
        <Link href="/nuevocontra">
          <Button startDecorator={<Add />} type="button" variant="outlined" size="sm">
            Nuevo contrato
          </Button>
        </Link>
      </Box>

      {/*RECUADRO DEL TIEMPO*/}

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
            0
          </Typography>
          <Typography
            level="body-xs"
            sx={{ fontWeight: "lg", color: "#0378ac", fontSize: "0.9rem" }}
          >
            Activo
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography sx={{ fontWeight: "lg", fontSize: "0.9rem" }}>
            0
          </Typography>
          <Typography
            level="body-xs"
            sx={{ fontWeight: "lg", color: "#b40202", fontSize: "0.9rem" }}
          >
            Expirado
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography sx={{ fontWeight: "lg", fontSize: "0.9rem" }}>
            0
          </Typography>
          <Typography
            level="body-xs"
            sx={{ fontWeight: "lg", color: "#bb8a00", fontSize: "0.9rem" }}
          >
            A punto de caducar
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography sx={{ fontWeight: "lg", fontSize: "0.9rem" }}>
            0
          </Typography>
          <Typography
            level="body-xs"
            sx={{ fontWeight: "lg", color: "#239d02", fontSize: "0.9rem" }}
          >
            Recientemente añadido
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography sx={{ fontWeight: "lg", fontSize: "0.9rem" }}>
            0
          </Typography>
          <Typography
            level="body-xs"
            sx={{ fontWeight: "lg", fontSize: "0.9rem" }}
          >
            Basura
          </Typography>
        </Box>
      </Sheet>

      {/* G R A F I C A S */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          {/* Primer gráfico */}
          <Box
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: 8,
              padding: 2,
              width: 400,
              height: 250,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: "#fff",
            }}
          >
            <Typography level="h6">Por tipo de contratos</Typography>

            {/* Ejes simulados */}
            <Box
              sx={{
                position: "relative",
                flexGrow: 1,
                borderTop: "1px solid #ccc",
                borderLeft: "1px solid #ccc",
                mt: 2,
              }}
            >
              {/* Línea horizontal */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "0",
                  right: "0",
                  height: 2,
                  backgroundColor: "#2196f3",
                }}
              />

              {/* Puntos */}
              <Box
                sx={{
                  position: "absolute",
                  top: "calc(50% - 4px)",
                  left: "20%",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#2196f3",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "calc(50% - 4px)",
                  left: "70%",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#2196f3",
                }}
              />
            </Box>

            {/* Etiquetas del eje X */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 1,
                px: 1,
              }}
            >
              <Typography level="body-sm">Anual</Typography>
              <Typography level="body-sm">Mensual</Typography>
            </Box>
          </Box>

          {/* Segundo gráfico */}
          <Box
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: 8,
              padding: 2,
              width: 400,
              height: 250,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: "#fff",
            }}
          >
            <Typography level="h6">
              Importes de contratos por tipos ( MX )
            </Typography>

            {/* Ejes simulados */}
            <Box
              sx={{
                position: "relative",
                flexGrow: 1,
                borderTop: "1px solid #ccc",
                borderLeft: "1px solid #ccc",
                mt: 2,
              }}
            >
              {/* Línea horizontal */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "0",
                  right: "0",
                  height: 2,
                  backgroundColor: "#4caf50",
                }}
              />

              {/* Puntos */}
              <Box
                sx={{
                  position: "absolute",
                  top: "calc(50% - 4px)",
                  left: "20%",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#4caf50",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "calc(50% - 4px)",
                  left: "70%",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#4caf50",
                }}
              />
            </Box>

            {/* Etiquetas del eje X */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 1,
                px: 1,
              }}
            >
              <Typography level="body-sm">Anual</Typography>
              <Typography level="body-sm">Mensual</Typography>
            </Box>
          </Box>
        </Box>
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
        </Box>

        <table className="custom-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Tema</th>
              <th>Cliente</th>
              <th>Tipo de contrato</th>
              <th>Importe del contrato</th>
              <th>Fecha de inicio</th>
              <th>Fecha final</th>
              <th>Proyecto</th>
              <th>Firma</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </Card>
    </>
  );
}
