import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Checkbox from "@mui/joy/Checkbox";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import refreshIcon from "/refresh.svg";
import Card from "@mui/joy/Card";
import { IconButton } from "@mui/joy";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf"; // de @mui/icons-material
import { Link } from "wouter";

import { useState } from "react";

export function Gasto() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/*TITULO*/}

      <Typography level="h2" sx={{ mt: 2 }}>
        Gastos
      </Typography>

      {/*RECUADRO*/}

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
        <div>
          <Typography
            level="body-xs"
            sx={{ fontWeight: "lg", color: "#bb8a00", fontSize: "0.9rem" }}
          >
            Total
          </Typography>
          <Typography sx={{ fontWeight: "lg" }}>$0.00</Typography>
        </div>

        <div>
          <Typography
            level="body-xs"
            sx={{ fontWeight: "lg", color: "#239d02", fontSize: "0.9rem" }}
          >
            Facturable
          </Typography>
          <Typography sx={{ fontWeight: "lg" }}>$0.00</Typography>
        </div>

        <div>
          <Typography
            level="body-xs"
            sx={{ fontWeight: "lg", color: "#bb8a00", fontSize: "0.9rem" }}
          >
            No facturable
          </Typography>
          <Typography sx={{ fontWeight: "lg" }}>$0.00</Typography>
        </div>

        <div>
          <Typography
            level="body-xs"
            sx={{ fontWeight: "lg", color: "#b40202", fontSize: "0.9rem" }}
          >
            Por facturar
          </Typography>
          <Typography sx={{ fontWeight: "lg" }}>$0.00</Typography>
        </div>

        <div>
          <Typography
            level="body-xs"
            sx={{ fontWeight: "lg", color: "#239d02", fontSize: "0.9rem" }}
          >
            Facturado
          </Typography>
          <Typography sx={{ fontWeight: "lg" }}>$0.00</Typography>
        </div>
      </Sheet>

      {/*BOTONES*/}

      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 3 }}>
        <Link href="/gastosreg">
          <Button onClick={function () {}} variant="outlined">
            + Registrar gastos
          </Button>
        </Link>

        <Link href="/importgastos">
          <Button onClick={function () {}} variant="outlined">
            Import expenses
          </Button>
        </Link>

        <Link href="/exportarr">
          <IconButton
            variant="outlined"
            color="neutral"
            sx={{
              borderRadius: "12px", // para esquinas redondeadas
              width: 48,
              height: 48,
            }}
          >
            <PictureAsPdfIcon sx={{ color: "#0f82fe " }} />{" "}
            {/* rojo tipo PDF */}
          </IconButton>
        </Link>
      </Box>

      {/*TABLA DE CLIENTES*/}
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

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                gap: 2,
                mb: 2,
              }}
            >
              <Select defaultValue="10" sx={{ width: 110 }}>
                <Option value="10">10</Option>
                <Option value="25">25</Option>
                <Option value="50">50</Option>
                <Option value="100">100</Option>
                <Option value="todo">Todo</Option>
              </Select>

              <ButtonGroup>
                <Dropdown>
                  <MenuButton
                    variant="outlined"
                    color="neutral"
                    sx={{ width: 100, height: 48, borderRadius: "sm"  }}
                  >
                    <p>Exportar</p>
                  </MenuButton>

                  <Menu
                    variant="outlined"
                    placement="bottom-start"
                    disablePortalsize="sm"
                    sx={{
                      "--ListItemDecorator-size": "24px",
                      "--ListItem-minHeight": "40px",
                      "--ListDivider-gap": "4px",
                      minWidth: 100,
                    }}
                  >
                    <MenuItem>Excel</MenuItem>
                    <MenuItem>CSV</MenuItem>
                    <MenuItem>PDF</MenuItem>
                    <MenuItem>Imprimir</MenuItem>
                  </Menu>
                </Dropdown>

                <>
                  <Button
                    variant="outlined"
                    color="neutral"
                    onClick={() => setOpen(true)}
                  >
                    {" "}
                    Acciones masivas
                  </Button>

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
                      <Typography id="nested-modal-title" level="h2">
                        Acciones masivas
                      </Typography>
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

                <Button>
                  <img
                    src={refreshIcon}
                    alt="Refresh"
                    className="refresh-icon"
                  />
                </Button>
              </ButtonGroup>
            </Box>
       

          
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Categoría</th>
                  <th>Importe</th>
                  <th>Nombre</th>
                  <th>Receipt</th>
                  <th>Fecha</th>
                  <th>Proyecto</th>
                  <th>Cliente</th>
                  <th>Factura</th>
                  <th>Dominio</th>
                  <th>Referencia #</th>
                  <th>Modo de pago</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </Card>
      
    </>
  );
}
