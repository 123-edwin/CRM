import "./ImportacionClientes.css";

import Card from "@mui/joy/Card";
import SvgIcon from "@mui/joy/SvgIcon";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Select from "@mui/joy/Select";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Input from "@mui/joy/Input";
import Option from "@mui/joy/Option";
import { styled } from "@mui/joy";

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

export function ImportacionCliente() {
  return (
    <>
      {/*Titulo*/}

      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Typography level="h3">Importación de clientes</Typography>
      </Box>

      <Card
        sx={{
          width: "90%",
          mx: "auto",
          p: 2,
          borderRadius: "md",
          boxShadow: "md",
          overflowX: "auto",
          mt: 3,
        }}
      >
        {/*TABLA*/}

        <div className="only-table">
          <table className="table">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Contact phonenumber</th>
                <th>Company</th>
                <th>Vat</th>
                <th>Phonenumber</th>
                <th>Country</th>
                <th>City</th>
                <th>Zip</th>
                <th>State</th>
                <th>Address</th>
                <th>Website</th>
                <th>Billing street</th>
                <th>Billing city</th>
                <th>Billing state</th>
                <th>Billing zip</th>
                <th>Billing country</th>
                <th>Shipping street</th>
                <th>Shipping city</th>
                <th>Shipping state</th>
                <th>Shipping zip</th>
                <th>Shipping country</th>
                <th>Longitude</th>
                <th>Latitude</th>
                <th>Stripe id</th>
                <th>Razón Social</th>
                <th>RFC</th>
                <th>Dominio</th>
                <th>Respaldo y renovación de sitio web</th>
                <th>Plan de diseño web</th>
                <th>Plan de redes sociales</th>
                <th>Diseño gráfico</th>
                <th>Producción</th>
                <th>Tipo de servicio web contratado</th>
                <th>Instagram usuario</th>
                <th>Instagram contraseña</th>
                <th>Tiktok usuario</th>
                <th>Tiktok contraseña</th>
                <th>Youtube usuario</th>
                <th>Youtube contraseña</th>
                <th>Fecha inicio redes sociales</th>
                <th>Fecha renovación de redes sociales</th>
                <th>Servidor ubicación</th>
                <th>Dominio ubicación</th>
                <th>Usuario servidor</th>
                <th>Contraseña Servidor</th>
                <th>Wordpress Usuario</th>
                <th>Wordpress Contraseña</th>
                <th>Fecha inicio dominio</th>
                <th>Fecha termino dominio</th>
                <th>Fecha inicio servidor</th>
                <th>Observaciones</th>
                <th>Correos electrónicos corporativos</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/*Boton para seleccionar archivo*/}

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
          Elija archivo cSV
          <VisuallyHiddenInput type="file" />
        </Button>

        {/*Form para seleccionar tipo de cliente*/}

        <FormControl>
          <FormLabel>Tipo de cliente</FormLabel>
          <Select
            multiple
            placeholder="Selecciona cliente"
            onChange={(event, newValue) => {
              console.log(newValue);
            }}
          >
            <Option value="one">Audiovisual</Option>
            <Option value="two">Correos corporativos</Option>
            <Option value="three">Diseño gráfico</Option>
            <Option value="four">Diseño web</Option>
            <Option value="five">Diseño web-Plan comienza</Option>
            <Option value="six">Diseño web-Plan corporativo</Option>
            <Option value="seven">Diseño web-Plan crece</Option>
            <Option value="eight">Dominio</Option>
            <Option value="nine">eCommerce</Option>
            <Option value="teen">Google Ads</Option>
            <Option value="eleven">Redes sociales</Option>
            <Option value="twelve">Servidor</Option>
            <Option value="thirteen">Sesión de fotos</Option>
            <Option value="fourteen">Shopify</Option>
            <Option value="fifteen">Software</Option>
          </Select>
        </FormControl>

        {/*Poner contraseña*/}

        <FormControl>
          <FormLabel>Contraseña por defecto para todos los clientes</FormLabel>
          <Input required type="text"></Input>
        </FormControl>

        {/*Botones*/}

        <Box
          sx={{
            mt: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          {/* Botón a la izquierda */}
          <Button variant="outlined" color="neutral">
            Download Sample
          </Button>

          {/* Botones a la derecha */}
          <Box sx={{ display: "flex", gap: 1, mt: { xs: 1, sm: 0 } }}>
            <Button variant="solid" color="primary">
              Importar
            </Button>
            <Button variant="outlined" color="neutral">
              Simular importación
            </Button>
          </Box>
        </Box>
      </Card>
    </>
  );
}
