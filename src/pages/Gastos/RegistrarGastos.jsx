// importaciones
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Textarea from "@mui/joy/Textarea";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import SvgIcon from "@mui/joy/SvgIcon";
import { styled } from "@mui/joy";
import { useState } from "react";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

export function RegistrarGastos() {
  const [repeticion, setRepeticion] = useState("");

  return (
    <>
      {/*TITULO*/}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Typography level="h3">Añadir gastos</Typography>
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
        <Button
          component="label"
          role={undefined}
          tabIndex={-1}
          variant="outlined"
          color="neutral"
          startDecorator={
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
            </SvgIcon>
          }
        >
          Adjuntar recibo de pago
          <VisuallyHiddenInput type="file" />
        </Button>

        <FormControl>
          <FormLabel>Nombre</FormLabel>
          <Input required type="text" />
        </FormControl>

        <FormControl>
          <FormLabel>Nota</FormLabel>
          <Textarea minRows={2} />
        </FormControl>

        <FormControl required>
          <FormLabel>Categoría del gatos</FormLabel>
          <Select defaultValue="Nada seleccionado">
            <Option value="33">Otros</Option>
          </Select>
        </FormControl>

        <FormControl required>
          <FormLabel>Fecha de gastos</FormLabel>
          <Input required type="date" />
        </FormControl>

        <FormControl required>
          <FormLabel>Importe</FormLabel>
          <Input required type="number" />
        </FormControl>

        <FormControl>
          <FormLabel>Cliente</FormLabel>
          <Input required type="text" />
        </FormControl>

        <Box sx={{ display: "flex", flexWrap: "wrap", mt: 3 }}>
          <Button>Guardar</Button>
        </Box>
      </Card>

      {/*OPCIONES AVANZADAS*/}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Typography level="h3">Opciones avanzadas</Typography>
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
        <FormControl disabled>
          <FormLabel>Moneda</FormLabel>
          <Input required type="number" />
        </FormControl>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2,
            maxWidth: 800,
          }}
        >
          <FormControl>
            <FormLabel>Impuesto 1</FormLabel>
            <Select defaultValue="Sin impuestos">
              <Option value="1">Sin impuestos</Option>
              <Option value="2">16.00% IVA</Option>
            </Select>
          </FormControl>

          <FormControl disabled>
            <FormLabel>Impuesto 2</FormLabel>
            <Select defaultValue="Sin impuestos">
              <Option value="1">Sin impuestos</Option>
              <Option value="2">16.00% IVA</Option>
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2,
            maxWidth: 800,
          }}
        >
          <FormControl>
            <FormLabel>Forma de pago</FormLabel>
            <Select defaultValue="">
              <Option value="1">Transferencia bancaria</Option>
              <Option value="2">Deposito bancario</Option>
              <Option value="3">Tarjeta débito/crédito</Option>
              <Option value="4">Efectivo</Option>
              <Option value="5">Cheque</Option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Referencia #</FormLabel>
            <Input required type="text" />
          </FormControl>
        </Box>

        <FormControl>
          <FormLabel>Repetir cada</FormLabel>
          <Select
            value={repeticion}
            onChange={(e, newValue) => setRepeticion(newValue)}
          >
            <Option value="1">Semanal</Option>
            <Option value="2">2 semanas</Option>
            <Option value="3">1 mes</Option>
            <Option value="4">2 meses</Option>
            <Option value="5">3 meses</Option>
            <Option value="6">6 meses</Option>
            <Option value="7">1 año</Option>
            <Option value="8">Personalizado</Option>
          </Select>
        </FormControl>

        {repeticion === "8" && (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 2,
              mt: 2,
            }}
          >
            <FormControl>
              <Input type="number" placeholder="Ej. 3" />
            </FormControl>

            <FormControl>
              <Select defaultValue="Día(s)" placeholder="Ej. Días(s)">
                <Option value="dias">Día(s)</Option>
                <Option value="semanas">Semana(s)</Option>
                <Option value="meses">Mese(s)</Option>
                <Option value="años">Año(s)</Option>
              </Select>
            </FormControl>
          </Box>
        )}

        <Box sx={{ display: "flex", flexWrap: "wrap", mt: 3 }}>
          <Button>Guardar</Button>
        </Box>
      </Card>
    </>
  );
}
