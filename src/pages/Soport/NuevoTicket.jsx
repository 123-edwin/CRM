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
import { Divider } from "@mui/joy";

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

export function NuevoTicket() {
  return (
    <>
      {/*TITULO*/}

      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Typography level="h3">Información sobre los tickets</Typography>
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
          <FormLabel>Tema</FormLabel>
          <Input required type="text"></Input>
        </FormControl>

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
            <FormLabel>Para</FormLabel>
            <Input required type="text"></Input>
          </FormControl>

          <FormControl required>
            <FormLabel>Dirección de correo</FormLabel>
            <Input required type="text"></Input>
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
          <FormControl>
            <FormLabel>Departamento</FormLabel>
            <Select>
              <Option value="1">Ticket</Option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>CC</FormLabel>
            <Input required type="text"></Input>
          </FormControl>
        </Box>

        <FormControl>
          <FormLabel>Etiquetas</FormLabel>
          <Select
            multiple
            onChange={(event, newValue) => {
              console.log(newValue);
            }}
          >
            <Option value="one">Diseño de logo</Option>
            <Option value="two">Diseño gráfico</Option>
            <Option value="three">Diseño web</Option>
            <Option value="four">Plan SEM</Option>
            <Option value="five">Redes sociales</Option>
            <Option value="six">Sesión fotográfica</Option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>
            Asignar tickets (por defecto es el usuario actual)
          </FormLabel>
          <Select
            defaultValue="evelyn-fernanda"
            placeholder="Selecciona un usuario"
          >
            <Option value="ninguna">Ningúna</Option>
            <Option value="susana-del-toro">Susana Del Toro Morales</Option>
            <Option value="reyna-yazmin">Reyna Yazmin de Anda Almanzar</Option>
            <Option value="reyna-estrada">Reyna Estrada</Option>
            <Option value="mariana-avila">Mariana Ávila Vázquez</Option>
            <Option value="margarita-rodriguez">Margarita Rodriguez</Option>
            <Option value="leticia-yerania">
              Leticia Yerania Benuto Trujillo
            </Option>
            <Option value="juan-pablo">Juan Pablo Liñan Rodriguez</Option>
            <Option value="jasson-steve">Jasson Steve Góngora Alcalá</Option>
            <Option value="evelyn-fernanda">Evelyn Fernanda</Option>
          </Select>
        </FormControl>

        <Divider />

        {/*BOX 3*/}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 4,
            maxWidth: 800,
          }}
        >
          <FormControl>
            <FormLabel>Prioridad de tickets</FormLabel>
            <Select>
              <Option value="one">Baja</Option>
              <Option value="two">Media</Option>
              <Option value="three">Alta</Option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Servicio</FormLabel>
            <Select>
              <Option value="one">Correo electrónico</Option>
              <Option value="two">Soporte técnico</Option>
            </Select>
          </FormControl>
        </Box>
        <FormControl>
          <FormLabel>Empresa</FormLabel>
          <Input required type="text"></Input>
        </FormControl>

        <FormControl>
          <FormLabel>Cuerpo de tickets</FormLabel>
          <Textarea minRows={5} />
        </FormControl>

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
          Archivos adjuntos
          <VisuallyHiddenInput type="file" />
        </Button>

        <Box sx={{ display: "flex", flexWrap: "wrap", mt: 3 }}>
          <Button>Abrir ticket</Button>
        </Box>
      </Card>
    </>
  );
}
