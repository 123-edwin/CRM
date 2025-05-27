import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";

export function Exportar() {
  return (
    <>
      {/*TITULO*/}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Typography level="h3">Exportador en masa PDF</Typography>
      </Box>

      <Card
        sx={{
          width: "50%",
          mx: "auto",
          p: 2,
          borderRadius: "md",
          boxShadow: "md",
          overflowX: "auto",
          mt: 3,
        }}
      >
        <FormControl required>
          <FormLabel>Seleccionar el tipo de</FormLabel>
          <Select>
            <Option value="1">Facturas</Option>
            <Option value="2">Presupuestos</Option>
            <Option value="3">Pagos</Option>
            <Option value="4">Notas de crédito</Option>
            <Option value="5">Propuestas</Option>
            <Option value="6">Gastos</Option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>De la fecha</FormLabel>
          <Input required type="date" />
        </FormControl>

        <FormControl>
          <FormLabel>Hasta la fecha</FormLabel>
          <Input required type="date" />
        </FormControl>

        <FormControl>
          <FormLabel>Incluir etiqueta</FormLabel>
          <Input required type="text" />
        </FormControl>

        <Box sx={{ display: "flex", flexWrap: "wrap", mt: 3 }}>
          <Button>Exportar</Button>
        </Box>
      </Card>
    </>
  );
}
