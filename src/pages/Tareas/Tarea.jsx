import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";


export function Tarea() {
  return (
    <>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center", mt: 2 }}>
        <Typography level="h2">Tareas</Typography>
        <Button startDecorator={<Add />} type="button" variant="outlined" size="sm">
          Nueva tarea
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 3,
          mt: 4,
          px: 2,
          flexWrap: "nowrap",
          overflowX: "auto",
        }}
      >
        {/* Tarjeta 1 */}
        <Card
          sx={{
            width: "350px",
            minWidth: 200,
            height: "480px",
            p: 2,
            borderRadius: "md",
            boxShadow: "md",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#42a5f5",
              p: 1,
              borderRadius: "8px 8px 0 0",
            }}
          >
            <Typography level="h3" sx={{ color: "#fff" }}>
              Por iniciar
            </Typography>
          </Box>
          <Box sx={{ backgroundColor: "#cce7f6", p: 2, height: "100%" }}>
            {/* contenido */}
            <Typography level="body-sm">Aquí van las tareas...</Typography>
          </Box>
        </Card>

        {/* Tarjeta 2 */}
        <Card
          sx={{
            width: "350px",
            minWidth: 200,
            height: "480px",
            p: 2,
            borderRadius: "md",
            boxShadow: "md",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#3f51b5",
              p: 1,
              borderRadius: "8px 8px 0 0",
            }}
          >
            <Typography level="h3" sx={{ color: "#fff" }}>
              En progreso
            </Typography>
          </Box>
          <Box sx={{ backgroundColor: "#d0d7f9", p: 2, height: "100%" }}>
            <Typography level="body-sm">Aquí van las tareas...</Typography>
          </Box>
        </Card>

        {/* Tarjeta 3 */}
        <Card
          sx={{
            width: "350px",
            minWidth: 200,
            height: "480px",
            p: 2,
            borderRadius: "md",
            boxShadow: "md",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#4caf50",
              p: 1,
              borderRadius: "8px 8px 0 0",
            }}
          >
            <Typography level="h3" sx={{ color: "#fff" }}>
              Tester
            </Typography>
          </Box>
          <Box sx={{ backgroundColor: "#d9f7d9", p: 2, height: "100%" }}>
            <Typography level="body-sm">Aquí van las tareas...</Typography>
          </Box>
        </Card>

        {/* Tarjeta 4 */}
        <Card
          sx={{
            width: "350px",
            minWidth: 200,
            height: "480px",
            p: 2,
            borderRadius: "md",
            boxShadow: "md",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#4caf50",
              p: 1,
              borderRadius: "8px 8px 0 0",
            }}
          >
            <Typography level="h3" sx={{ color: "#fff" }}>
              Espera de respuesta
            </Typography>
          </Box>
          <Box sx={{ backgroundColor: "#d9f7d9", p: 2, height: "100%" }}>
            <Typography level="body-sm">Aquí van las tareas...</Typography>
          </Box>
        </Card>

        {/* Tarjeta 5 */}
        <Card
          sx={{
            width: "350px",
            minWidth: 200,
            height: "480px",
            p: 2,
            borderRadius: "md",
            boxShadow: "md",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#4caf50",
              p: 1,
              borderRadius: "8px 8px 0 0",
            }}
          >
            <Typography level="h3" sx={{ color: "#fff" }}>
              Completo
            </Typography>
          </Box>
          <Box sx={{ backgroundColor: "#d9f7d9", p: 2, height: "100%" }}>
            <Typography level="body-sm">Aquí van las tareas...</Typography>
          </Box>
        </Card>
      </Box>
    </>
  );
}
