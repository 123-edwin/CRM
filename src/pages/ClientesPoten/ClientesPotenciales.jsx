import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import Card from "@mui/joy/Card";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";

import { useState } from "react";

export function ClientesPotenciales() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Typography level="h2">Clientes potenciales</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Centra los Cards horizontalmente
          gap: 3,
          mt: 4,
          px: 2,
          flexWrap: "wrap", // Permite que se acomoden si no caben en una sola línea
        }}
      >
        {/* Tarjeta 1 - Pendiente */}
        <Card
          sx={{
            width: "750px",
            minWidth: 200,
            height: "600px",
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
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography level="h3" sx={{ color: "#fff" }}>
              Pendiente - 3 activos
            </Typography>

            <>
              <Button
                variant="outlined"
                color="neutral"
                onClick={() => setOpen(true)}
                sx={{ color: "#fff" }}
                startDecorator={<Add />}
                size="sm"
              ></Button>
              <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Sheet
                  variant="outlined"
                  sx={{
                    maxWidth: 1100,
                    borderRadius: "md",
                    p: 3,
                    boxShadow: "lg",
                  }}
                >
                  <ModalClose variant="plain" sx={{ m: 1 }} />
                  <Typography
                    component="h2"
                    id="modal-title"
                    level="h4"
                    textColor="inherit"
                    sx={{ fontWeight: "lg", mb: 1 }}
                  >
                    Añadir cliente potencial
                  </Typography>
                  {/*BOX 1*/}
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: 4,
                      maxWidth: 800,
                    }}
                  >
                    <FormControl required>
                      <FormLabel>Fuente</FormLabel>
                      <Select defaultValue="BNI">
                        <Option value="1">BNI</Option>
                        <Option value="2">Correo electronico</Option>
                        <Option value="3">Email</Option>
                        <Option value="4">Facebook</Option>
                        <Option value="5">Google</Option>
                        <Option value="6">Prospecto</Option>
                        <Option value="7">Recomendación</Option>
                      </Select>
                    </FormControl>

                    <FormControl>
                      <FormLabel>Asignado</FormLabel>
                      <Select defaultValue="Juan Perez">
                        <Option value="1">Juan Perez</Option>
                        <Option value="2">Ernesto Cruz</Option>
                        <Option value="3">Aria Ortiz</Option>
                        <Option value="4">Guadalupe Ureña</Option>
                        <Option value="5">Margarita Rios</Option>
                      </Select>
                    </FormControl>
                  </Box>

                  {/*BOX 2*/}
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: 4,
                      maxWidth: 800,
                    }}
                  >
                    <FormControl required>
                      <FormLabel>Nombre</FormLabel>
                      <Input required type="text"></Input>
                    </FormControl>

                    <FormControl>
                      <FormLabel>Dirección</FormLabel>
                      <Input required type="text"></Input>
                    </FormControl>
                  </Box>
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
                      <FormLabel>Posición</FormLabel>
                      <Input required type="text"></Input>
                    </FormControl>

                    <FormControl>
                      <FormLabel>Localidad</FormLabel>
                      <Input required type="text"></Input>
                    </FormControl>
                  </Box>
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
                      <FormLabel>Dirección de correo</FormLabel>
                      <Input required type="text"></Input>
                    </FormControl>

                    <FormControl>
                      <FormLabel>Departamento</FormLabel>
                      <Input required type="text"></Input>
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
                    <FormControl>
                      <FormLabel>Website</FormLabel>
                      <Input required type="text"></Input>
                    </FormControl>

                    <FormControl>
                      <FormLabel>País</FormLabel>
                      <Input required type="text"></Input>
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
                      <FormLabel>Teléfono</FormLabel>
                      <Input required type="number"></Input>
                    </FormControl>

                    <FormControl>
                      <FormLabel>Código postal</FormLabel>
                      <Input required type="number"></Input>
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
                      <FormLabel>Lead value</FormLabel>
                      <Input
                        required
                        type="number"
                        startDecorator="$"
                        placeholder="0.00"
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel>Empresa</FormLabel>
                      <Input required type="text"></Input>
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
                    <FormLabel>Descripción</FormLabel>
                    <Textarea minRows={2} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Fecha contactado</FormLabel>
                    <Input required type="date"></Input>
                  </FormControl>
                  </Box>
                  <Box sx={{ display: "flex", flexWrap: "wrap", mt: 3 }}>
                    <Button>Guardar</Button>
                  </Box>
                </Sheet>
              </Modal>
            </>
          </Box>

          <Card>
            <Typography>#552 - Adenir Calderas - OXXO</Typography>
            <Typography level="body-sm">
              efren.calderas@oxxo.com - 3121206121
            </Typography>
            <Typography level="body-sm">
              Recomendación - Contacto hace 2 meses
            </Typography>
          </Card>
          <Card>
            <Typography>
              #540 - Sergio Verduzco Villanueva - Fraccionamiento industrial 311
            </Typography>
            <Typography level="body-sm">N/H - N/H</Typography>
            <Typography level="body-sm">
              Prospecto - Contacto hace 3 meses
            </Typography>
          </Card>
          <Card>
            <Typography>
              #548 - Laura Esteban - De Raíz Casa Holistica
            </Typography>
            <Typography level="body-sm">
              lauraesteban.cm@gmail.com - 3310689967
            </Typography>
            <Typography level="body-sm">
              Prospecto - Contacto hace 2 meses
            </Typography>
          </Card>
        </Card>

        {/* Tarjeta 2 - Customer */}
        <Card
          sx={{
            width: "750px",
            minWidth: 200,
            height: "600px",
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
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography level="h3" sx={{ color: "#fff" }}>
              Customer - 3 activos
            </Typography>
             <>
              <Button
                variant="outlined"
                color="neutral"
                onClick={() => setOpen(true)}
                sx={{ color: "#fff" }}
                startDecorator={<Add />}
                size="sm"
              ></Button>
              <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Sheet
                  variant="outlined"
                  sx={{
                    maxWidth: 1100,
                    borderRadius: "md",
                    p: 3,
                    boxShadow: "lg",
                  }}
                >
                  <ModalClose variant="plain" sx={{ m: 1 }} />
                  <Typography
                    component="h2"
                    id="modal-title"
                    level="h4"
                    textColor="inherit"
                    sx={{ fontWeight: "lg", mb: 1 }}
                  >
                    Añadir cliente potencial
                  </Typography>
                  {/*BOX 1*/}
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: 4,
                      maxWidth: 800,
                    }}
                  >
                    <FormControl required>
                      <FormLabel>Fuente</FormLabel>
                      <Select defaultValue="BNI">
                        <Option value="1">BNI</Option>
                        <Option value="2">Correo electronico</Option>
                        <Option value="3">Email</Option>
                        <Option value="4">Facebook</Option>
                        <Option value="5">Google</Option>
                        <Option value="6">Prospecto</Option>
                        <Option value="7">Recomendación</Option>
                      </Select>
                    </FormControl>

                    <FormControl>
                      <FormLabel>Asignado</FormLabel>
                      <Select defaultValue="Juan Perez">
                        <Option value="1">Juan Perez</Option>
                        <Option value="2">Ernesto Cruz</Option>
                        <Option value="3">Aria Ortiz</Option>
                        <Option value="4">Guadalupe Ureña</Option>
                        <Option value="5">Margarita Rios</Option>
                      </Select>
                    </FormControl>
                  </Box>

                  {/*BOX 2*/}
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: 4,
                      maxWidth: 800,
                    }}
                  >
                    <FormControl required>
                      <FormLabel>Nombre</FormLabel>
                      <Input required type="text"></Input>
                    </FormControl>

                    <FormControl>
                      <FormLabel>Dirección</FormLabel>
                      <Input required type="text"></Input>
                    </FormControl>
                  </Box>
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
                      <FormLabel>Posición</FormLabel>
                      <Input required type="text"></Input>
                    </FormControl>

                    <FormControl>
                      <FormLabel>Localidad</FormLabel>
                      <Input required type="text"></Input>
                    </FormControl>
                  </Box>
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
                      <FormLabel>Dirección de correo</FormLabel>
                      <Input required type="text"></Input>
                    </FormControl>

                    <FormControl>
                      <FormLabel>Departamento</FormLabel>
                      <Input required type="text"></Input>
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
                    <FormControl>
                      <FormLabel>Website</FormLabel>
                      <Input required type="text"></Input>
                    </FormControl>

                    <FormControl>
                      <FormLabel>País</FormLabel>
                      <Input required type="text"></Input>
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
                      <FormLabel>Teléfono</FormLabel>
                      <Input required type="number"></Input>
                    </FormControl>

                    <FormControl>
                      <FormLabel>Código postal</FormLabel>
                      <Input required type="number"></Input>
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
                      <FormLabel>Lead value</FormLabel>
                      <Input
                        required
                        type="number"
                        startDecorator="$"
                        placeholder="0.00"
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel>Empresa</FormLabel>
                      <Input required type="text"></Input>
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
                    <FormLabel>Descripción</FormLabel>
                    <Textarea minRows={2} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Fecha contactado</FormLabel>
                    <Input required type="date"></Input>
                  </FormControl>
                  </Box>
                  <Box sx={{ display: "flex", flexWrap: "wrap", mt: 3 }}>
                    <Button>Guardar</Button>
                  </Box>
                </Sheet>
              </Modal>
            </>
          </Box>

          <Card>
            <Typography>#561 - Jose Luis Ortiz - Tostadas Ortiz</Typography>
            <Typography level="body-sm">3121635864</Typography>
            <Typography level="body-sm">
              Recomendación - Contacto hace 1 mese
            </Typography>
          </Card>
          <Card>
            <Typography>#524 - Andrés Maldonado - Mafornu</Typography>
            <Typography level="body-sm">
              marketing@mafornu.com - 3411209020
            </Typography>
            <Typography level="body-sm">
              Prospecto - Contacto hace 6 meses
            </Typography>
          </Card>
          <Card>
            <Typography>
              #530 - Colegio Gandhi Colima - Colegio Gandhi
            </Typography>
            <Typography level="body-sm">N/H - N/H</Typography>
            <Typography level="body-sm">
              Recomendación - Contacto hace 5 meses
            </Typography>
          </Card>
        </Card>
      </Box>
    </>
  );
}
