import "./Client.css";
import Typography from "@mui/joy/Typography";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Box from "@mui/joy/Box";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Checkbox from "@mui/joy/Checkbox";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import { Link } from "wouter";
import { getClients } from "@s/clientServices";

import { useState } from "react";
import { useEffect } from "react";

export function Client() {
  const [open, setOpen] = useState(false);

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const fetchData = await getClients();
        setClientes(fetchData);
      } catch (error) {
        console.error("Error al obtener clientes:", error);
      }
    };

    fetchClientes();
  }, []);

  return (
    <>
      {/*TITULO*/}

      <Typography level="h1" sx={{ mt: 2, ml: 1 }}>
        Clientes
      </Typography>

      {/*RECUADRO DEL TIEMPO*/}

      {/*BOTONES*/}

      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 3 }}>
        <Link href="/form">
          <Button onClick={function () { }} variant="outlined">
            + Nuevo Cliente
          </Button>
        </Link>
      </Box>

      {/*TABLA DE CLIENTES*/}

      <section className="table-section">
        <div className="table-container">
          <div className="table-options">
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                gap: 2,
                mb: 2,
              }}
            >

              <ButtonGroup>

                <>

                  <Modal open={open} onClose={() => setOpen(false)}>
                    <ModalDialog
                      aria-labelledby="nested-modal-title"
                      aria-describedby="nested-modal-description"
                      sx={(theme) => ({
                        [theme.breakpoints.only("xs")]: {
                          top: "unset",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          borderRadius: 0,
                          transform: "none",
                          maxWidth: "unset",
                        },
                      })}
                    >
                      <Typography
                        id="nested-modal-description"
                        textColor="text.tertiary"
                      >
                        <Checkbox label="Eliminación masiva" />

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
                            <Option value="five">
                              Diseño web-Plan comienza
                            </Option>
                            <Option value="six">
                              Diseño web-Plan corporativo
                            </Option>
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
                      </Typography>

                      <Box
                        sx={{
                          mt: 1,
                          display: "flex",
                          gap: 1,
                          flexDirection: { xs: "column", sm: "row-reverse" },
                        }}
                      >
                        <Button
                          variant="solid"
                          color="primary"
                          onClick={() => setOpen(false)}
                        >
                          Confirmar
                        </Button>
                        <Button
                          variant="outlined"
                          color="neutral"
                          onClick={() => setOpen(false)}
                        >
                          Cancelar
                        </Button>
                      </Box>
                    </ModalDialog>
                  </Modal>
                </>
              </ButtonGroup>
            </Box>
          </div>

          <div className="only-table">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Empresa</th>
                  <th>Contacto principal</th>
                  <th>Email principal</th>
                  <th>Teléfono</th>
                  <th>Activo</th>
                  <th>Tipo de cliente</th>
                  <th>Fecha de creación</th>
                  <th>Dominio</th>
                  <th>Respaldo y renovación de sitio web</th>
                  <th>Plan de diseño web</th>
                  <th>Plan de redes sociales</th>
                  <th>Fecha inicio de redes sociales</th>
                  <th>Fecha renovación de redes sociales</th>
                  <th>Servidor ubicación</th>
                  <th>Fecha inicio servidor</th>
                  <th>Fecha termino servidor</th>
                  <th>Dominio ubicación</th>
                  <th>Fecha inicio dominio</th>
                  <th>Fecha termino dominio</th>
                </tr>
              </thead>
              <tbody>
                {clientes.map((cliente, index) => (
                  <tr key={cliente.id || index}>
                    <td>{index + 1}</td>
                    <td>{cliente.empresa}</td>
                    <td>{cliente.contacto_principal}</td>
                    <td>{cliente.email_principal}</td>
                    <td>{cliente.telefono}</td>
                    <td>{cliente.activo ? "Sí" : "No"}</td>
                    <td>{cliente.tipo_cliente}</td>
                    <td>{cliente.fecha_creacion}</td>
                    <td>{cliente.dominio}</td>
                    <td>{cliente.respaldo_renovacion_sitio_web}</td>
                    <td>{cliente.plan_diseno_web}</td>
                    <td>{cliente.plan_redes_sociales}</td>
                    <td>{cliente.fecha_inicio_redes}</td>
                    <td>{cliente.fecha_renovacion_redes}</td>
                    <td>{cliente.servidor_ubicacion}</td>
                    <td>{cliente.fecha_inicio_servidor}</td>
                    <td>{cliente.fecha_termino_servidor}</td>
                    <td>{cliente.dominio_ubicacion}</td>
                    <td>{cliente.fecha_inicio_dominio}</td>
                    <td>{cliente.fecha_termino_dominio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
