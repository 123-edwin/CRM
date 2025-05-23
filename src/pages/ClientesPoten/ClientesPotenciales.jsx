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
  const [openCard, setOpenCard] = useState(false);
  const [openCard1, setOpenCard1] = useState(false);
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
                sx={{ width: 48, height: 48, borderRadius: "50%" }}
                size="sm"
              >
                <Add sx={{ color: "#fff" }} />
              </Button>

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
                      <Select>
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
                      <Select>
                        <Option value="1">Juan Perez</Option>
                        <Option value="2">Ernesto Cruz</Option>
                        <Option value="3">Aria Ortiz</Option>
                        <Option value="4">Guadalupe Ureña</Option>
                        <Option value="5">Margarita Rios</Option>
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

          <>
            <Card
              variant="outlined"
              color="neutral"
              onClick={() => setOpenCard1(true)}
            >
              <Typography>#552 - Adenir Calderas - OXXO</Typography>
              <Typography level="body-sm">
                efren.calderas@oxxo.com - 3121206121
              </Typography>
              <Typography level="body-sm">
                Recomendación - Contacto hace 2 meses
              </Typography>
            </Card>

            <Modal
              aria-labelledby="modal-title"
              aria-describedby="modal-desc"
              open={openCard1}
              onClose={() => setOpenCard1(false)}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Sheet
                variant="outlined"
                sx={{
                  maxWidth: 900,
                  borderRadius: "md",
                  p: 3,
                  boxShadow: "lg",
                }}
              >
                <ModalClose
                  onClick={() => setOpenCard1(false)}
                  variant="plain"
                  sx={{ m: 1 }}
                />
                <Typography
                  component="h2"
                  id="modal-title"
                  level="h4"
                  textColor="inherit"
                  sx={{ fontWeight: "lg", mb: 2 }}
                >
                  #552 - Adenir Calderas - OXXO
                </Typography>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 4,
                  }}
                >
                  {/* Columna izquierda */}
                  <div>
                    <Typography level="title-sm" sx={{ mb: 1 }}>
                      Informaciones del contacto
                    </Typography>
                    <p>
                      <strong>Nombre:</strong> Adenir Calderas
                    </p>
                    <p>
                      <strong>Posición:</strong> Director
                    </p>
                    <p>
                      <strong>Dirección de correo:</strong>{" "}
                      <a
                        href="mailto:efren.calderas@oxxo.com"
                        style={{ color: "#3b82f6" }}
                      >
                        efren.calderas@oxxo.com
                      </a>
                    </p>
                    <p>
                      <strong>Website:</strong> -
                    </p>
                    <p>
                      <strong>Teléfono:</strong>{" "}
                      <a href="tel:3121206121" style={{ color: "#3b82f6" }}>
                        3121206121
                      </a>
                    </p>
                    <p>
                      <strong>Lead value:</strong> -
                    </p>
                    <p>
                      <strong>Empresa:</strong> OXXO
                    </p>
                    <p>
                      <strong>Dirección:</strong> Residencial Esmeralda Nte.
                    </p>
                    <p>
                      <strong>Localidad:</strong> Colima
                    </p>
                    <p>
                      <strong>Departamento:</strong> -
                    </p>
                    <p>
                      <strong>País:</strong> Mexico
                    </p>
                    <p>
                      <strong>Código postal:</strong> 28017
                    </p>
                    <p>
                      <strong>Descripción:</strong> -
                    </p>
                  </div>

                  {/* Columna derecha */}
                  <div>
                    <Typography level="title-sm" sx={{ mb: 1 }}>
                      Informaciones generales
                    </Typography>
                    <p>
                      <strong>Estado del contacto:</strong>{" "}
                      <span
                        style={{
                          backgroundColor: "#e0f2ff",
                          color: "#007fff",
                          padding: "2px 8px",
                          borderRadius: "12px",
                          fontSize: "0.875rem",
                          fontWeight: "500",
                        }}
                      >
                        Pendiente
                      </span>
                    </p>
                    <p>
                      <strong>Fuente:</strong> Recomendación
                    </p>
                    <p>
                      <strong>Asignado:</strong> Juan Pablo Liñan Rodriguez
                    </p>
                    <p>
                      <strong>Etiquetas:</strong> -
                    </p>
                    <p>
                      <strong>Creado:</strong> hace 2 meses
                    </p>
                    <p>
                      <strong>Último contacto:</strong> hace 2 meses
                    </p>
                    <p>
                      <strong>Público:</strong> Sí
                    </p>
                  </div>
                </Box>
              </Sheet>
            </Modal>
          </>

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
                sx={{ width: 48, height: 48, borderRadius: "50%" }}
                size="sm"
              >
                <Add sx={{ color: "#fff" }} />
              </Button>
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

          <>
            <Card
              variant="outlined"
              color="neutral"
              onClick={() => setOpenCard(true)}
            >
              <Typography>#561 - Jose Luis Ortiz - Tostadas Ortiz</Typography>
              <Typography level="body-sm">3121635864</Typography>
              <Typography level="body-sm">
                Recomendación - Contacto hace 1 mes
              </Typography>
            </Card>

            <Modal
              aria-labelledby="modal-title"
              aria-describedby="modal-desc"
              open={openCard}
              onClose={() => setOpenCard(false)}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Sheet
                variant="outlined"
                sx={{
                  maxWidth: 900,
                  borderRadius: "md",
                  p: 3,
                  boxShadow: "lg",
                }}
              >
                <ModalClose
                  onClick={() => setOpenCard(false)}
                  variant="plain"
                  sx={{ m: 1 }}
                />
                <Typography
                  component="h2"
                  id="modal-title"
                  level="h4"
                  textColor="inherit"
                  sx={{ fontWeight: "lg", mb: 2 }}
                >
                  #561 - Jose Luis Ortiz - Tostadas Ortiz
                </Typography>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 4,
                  }}
                >
                  {/* Columna izquierda */}
                  <div>
                    <Typography level="title-sm" sx={{ mb: 1 }}>
                      Informaciones del contacto
                    </Typography>
                    <p>
                      <strong>Nombre:</strong> Jose Luis Ortiz
                    </p>
                    <p>
                      <strong>Posición:</strong> Dueño
                    </p>
                    <p>
                      <strong>Dirección de correo:</strong> -
                    </p>
                    <p>
                      <strong>Website:</strong> -
                    </p>
                    <p>
                      <strong>Teléfono:</strong>{" "}
                      <a href="tel:3121635864" style={{ color: "#3b82f6" }}>
                        3121635864
                      </a>
                    </p>
                    <p>
                      <strong>Lead value:</strong> -
                    </p>
                    <p>
                      <strong>Empresa:</strong> Tostadas Ortiz
                    </p>
                    <p>
                      <strong>Dirección:</strong> Av. Carlos Ortiz Mariote 370,
                      La Virgencita
                    </p>
                    <p>
                      <strong>Localidad:</strong> Colima
                    </p>
                    <p>
                      <strong>Departamento:</strong> -
                    </p>
                    <p>
                      <strong>País:</strong> Mexico
                    </p>
                    <p>
                      <strong>Código postal:</strong> -
                    </p>
                    <p>
                      <strong>Descripción:</strong> -
                    </p>
                  </div>

                  {/* Columna derecha */}
                  <div>
                    <Typography level="title-sm" sx={{ mb: 1 }}>
                      Informaciones generales
                    </Typography>
                    <p>
                      <strong>Estado del contacto:</strong>{" "}
                      <span
                        style={{
                          backgroundColor: "#e6f4ea",
                          color: "#2e7d32",
                          padding: "2px 8px",
                          borderRadius: "12px",
                          fontSize: "0.875rem",
                          fontWeight: "500",
                        }}
                      >
                        Customer
                      </span>
                    </p>
                    <p>
                      <strong>Fuente:</strong> Recomendación
                    </p>
                    <p>
                      <strong>Asignado:</strong> Juan Pablo Liñan Rodriguez
                    </p>
                    <p>
                      <strong>Etiquetas:</strong> -
                    </p>
                    <p>
                      <strong>Creado:</strong> hace un mes
                    </p>
                    <p>
                      <strong>Último contacto:</strong> hace un mes
                    </p>
                    <p>
                      <strong>Público:</strong> Sí
                    </p>
                  </div>
                </Box>
              </Sheet>
            </Modal>
          </>

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
