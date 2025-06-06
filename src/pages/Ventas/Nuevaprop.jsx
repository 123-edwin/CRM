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
import { Divider } from "@mui/joy";

export function Nuevaprop() {
  return (
    <>
      {/*TITULO*/}

      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Typography level="h3">Nueva propuesta</Typography>
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
        {/*BOX1*/}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2,
            maxWidth: 800,
          }}
        >
          <FormControl required>
            <FormLabel>Tema</FormLabel>
            <Input required type="text"></Input>
          </FormControl>

          <FormControl required>
            <FormLabel>Relacionado</FormLabel>
            <Select>
              <Option value="1">Cliente</Option>
              <Option value="2">Cliente potencial</Option>
            </Select>
          </FormControl>
        </Box>

        {/*BOX2*/}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2,
            maxWidth: 800,
          }}
        >
          <FormControl required>
            <FormLabel>Fecha</FormLabel>
            <Input required type="date"></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Valida hasta</FormLabel>
            <Input required type="date"></Input>
          </FormControl>
        </Box>

        {/*BOX3*/}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2,
            maxWidth: 800,
          }}
        >
          <FormControl>
            <FormLabel>Moneda</FormLabel>
            <Input
              required
              type="number"
              startDecorator="$"
              placeholder="0.00"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Tipo de descuento</FormLabel>
            <Select>
              <Option value="1">Sin descuento</Option>
              <Option value="2">Antes del impuesto</Option>
              <Option value="3">Después del impuesto</Option>
            </Select>
          </FormControl>
        </Box>

        <FormControl>
          <FormLabel>Etiqueta</FormLabel>
          <Select>
            <Option value="1">Diseño de logo</Option>
            <Option value="2">Diseño gráfico</Option>
            <Option value="3">Diseño web</Option>
            <Option value="4">Paln SEM</Option>
            <Option value="5">Redes sociales</Option>
            <Option value="6">Sesión fotografica</Option>
            <Option value="7">Video</Option>
          </Select>
        </FormControl>

        <Divider />

        {/*BOX 4*/}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 4,
            maxWidth: 800,
          }}
        >
          <FormControl>
            <FormLabel>Estado</FormLabel>
            <Select>
              <Option value="1">Borrador</Option>
              <Option value="2">Enviada</Option>
              <Option value="3">Abierto</Option>
              <Option value="4">En estudio</Option>
              <Option value="5">Rechazada</Option>
              <Option value="6">Aceptada</Option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Asignado</FormLabel>
            <Select>
              <Option value="1">Juan Perez</Option>
              <Option value="2">Ernesto Cruz</Option>
              <Option value="3">Aria Ortiz</Option>
              <Option value="4">Guadalupe Ureña</Option>
              <Option value="5">Margarita Rios</Option>
            </Select>
          </FormControl>
        </Box>

        {/*BOX 5*/}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 4,
            maxWidth: 800,
          }}
        >
          <FormControl required>
            <FormLabel>Para</FormLabel>
            <Input required type="text"></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Dirección</FormLabel>
            <Textarea minRows={2} />
          </FormControl>
        </Box>

        {/*BOX 6*/}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 4,
            maxWidth: 800,
          }}
        >
          <FormControl>
            <FormLabel>Localidad</FormLabel>
            <Input required type="text"></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Departamento</FormLabel>
            <Input required type="text"></Input>
          </FormControl>
        </Box>

        {/*BOX 7*/}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 4,
            maxWidth: 800,
          }}
        >
          <FormControl>
            <FormLabel>País</FormLabel>
            <Input required type="text"></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Código postal</FormLabel>
            <Input required type="number"></Input>
          </FormControl>
        </Box>

        {/*BOX 8*/}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 4,
            maxWidth: 800,
          }}
        >
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input required type="text"></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Teléfono</FormLabel>
            <Input required type="number"></Input>
          </FormControl>
        </Box>
        <br></br>
        <Divider />
        <br></br>
        {/*BOX 9*/}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 4,
            maxWidth: 800,
          }}
        >
          <FormControl>
            <FormLabel>Artículo</FormLabel>
            <Textarea minRows={2} />
          </FormControl>
          <FormControl>
            <FormLabel>Descripción</FormLabel>
            <Textarea minRows={2} />
          </FormControl>
        </Box>

        <FormControl>
          <FormLabel>Vigencia</FormLabel>
          <Select>
            <Option value="1">Mensual</Option>
            <Option value="2">Anual</Option>
            <Option value="3">Horas</Option>
            <Option value="4">Evento</Option>
            <Option value="5">Minutos</Option>
          </Select>
        </FormControl>
{/*10*/}
        <Card
          variant="outlined"
          sx={{
            mt: 2,
            p: 2,
            backgroundColor: "#f9f9f9",
            overflow: "hidden", // previene que algo se "desborde"
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 3,
              alignItems: "center", // para mantener alineación vertical si uno cambia de altura
            }}
          >
            <FormControl sx={{ minWidth: 0 }}>
              <FormLabel>Cantidad</FormLabel>
              <Input required type="number" sx={{ width: "100%" }} />
            </FormControl>
            <FormControl sx={{ minWidth: 0 }}>
              <FormLabel>Precio</FormLabel>
              <Input
                required
                type="number"
                startDecorator="$"
                placeholder="0.00"
                sx={{ width: "100%" }}
              />
            </FormControl>
            <FormControl sx={{ minWidth: 0 }}>
              <FormLabel>IVA</FormLabel>
              <Input type="text" value="16%" disabled sx={{ width: "100%" }} />
            </FormControl>
          </Box>
        </Card>
{/*11*/}
        <Card
          variant="outlined"
          sx={{
            mt: 2,
            p: 2,
            backgroundColor: "#f9f9f9",
            overflow: "hidden", // previene que algo se "desborde"
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 3,
              alignItems: "center", // para mantener alineación vertical si uno cambia de altura
            }}
          >
            <FormControl sx={{ minWidth: 0 }}>
              <FormLabel>Descuento</FormLabel>
              <Input
                required
                type="number"
                startDecorator="$"
                placeholder="0.00"
                sx={{ width: "100%" }}
              />
            </FormControl>
            <FormControl sx={{ minWidth: 0 }}>
              <FormLabel>Ajuste</FormLabel>
              <Input
                required
                type="number"
                startDecorator="$"
                placeholder="0.00"
                sx={{ width: "100%" }}
              />
            </FormControl>
            <FormControl sx={{ minWidth: 0 }}>
              <FormLabel>Moneda</FormLabel>
              <Input
                type="text"
                value="$15,963.00"
                disabled
                sx={{ width: "100%" }}
              />
            </FormControl>
          </Box>
        </Card>

        <Box sx={{ display: "flex", flexWrap: "wrap", mt: 3 }}>
          <Button>Guardar</Button>
        </Box>
      </Card>
    </>
  );
}