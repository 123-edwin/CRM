import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Checkbox from "@mui/joy/Checkbox";
import refreshIcon from "/refresh.svg";
import Card from "@mui/joy/Card";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
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
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography sx={{ fontWeight: "lg", fontSize: "0.9rem" }}>
            $0.00
          </Typography>
          <Typography
            level="body-xs"
            sx={{ fontWeight: "lg", fontSize: "0.9rem", color: "#bb8a00" }}
          >
            Total
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography sx={{ fontWeight: "lg", fontSize: "0.9rem" }}>
            $0.00
          </Typography>
          <Typography
            level="body-xs"
            sx={{ fontWeight: "lg", fontSize: "0.9rem", color: "#239d02" }}
          >
            Facturable
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography sx={{ fontWeight: "lg", fontSize: "0.9rem" }}>
            $0.00
          </Typography>
          <Typography
            level="body-xs"
            sx={{ fontWeight: "lg", fontSize: "0.9rem", color: "#bb8a00" }}
          >
            No facturable
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography sx={{ fontWeight: "lg", fontSize: "0.9rem" }}>
            $0.00
          </Typography>
          <Typography
            level="body-xs"
            sx={{ fontWeight: "lg", fontSize: "0.9rem", color: "#b40202" }}
          >
            Por facturar
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography sx={{ fontWeight: "lg", fontSize: "0.9rem" }}>
            $0.00
          </Typography>
          <Typography
            level="body-xs"
            sx={{ fontWeight: "lg", fontSize: "0.9rem", color: "#239d02" }}
          >
            Facturado
          </Typography>
        </Box>
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
        {/*SELECT, BOTON Y ACTUALIZAR*/}

        <Box
          sx={{ display: "flex", justifyContent: "flex-start", gap: 2, mb: 2 }}
        >
          <Select defaultValue="10" sx={{ width: 110 }}>
            <Option value="10">10</Option>
            <Option value="25">25</Option>
            <Option value="50">50</Option>
            <Option value="100">100</Option>
            <Option value="todo">Todo</Option>
          </Select>

          <ButtonGroup aria-label="outlined primary button group">
            <Button>Exportar</Button>

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
                      <FormLabel>Importe del contrato</FormLabel>
                      <Input
                        required
                        type="number"
                        startDecorator="$"
                        placeholder="0.00"
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel>Categoría del gasto</FormLabel>
                      <Select placeholder="Nada seleccionado">
                        <Option value="1">Alarma</Option>
                        <Option value="2">BNI</Option>
                        <Option value="3">Café</Option>
                        <Option value="4">Casetas</Option>
                        <Option value="5">CFE</Option>
                        <Option value="6">CIAPACOV</Option>
                        <Option value="7">Comisiones</Option>
                        <Option value="8">COPARMEX</Option>
                        <Option value="9">Coprotec</Option>
                        <Option value="10">Divi Elegant Themes, Inc</Option>
                        <Option value="11">Dominios</Option>
                      </Select>
                    </FormControl>

                    <FormControl>
                      <FormLabel>Fecha de gastos</FormLabel>
                      <Input required type="date" />
                    </FormControl>

                    <FormControl>
                      <FormLabel>Froma de pago</FormLabel>
                      <Select placeholder="Nada seleccionado">
                        <Option value="1">Transferencia bancaria</Option>
                        <Option value="2">Deposito bancario</Option>
                        <Option value="3">Tarjeta débito/crédito</Option>
                        <Option value="4">Efectivo</Option>
                        <Option value="5">Cheque</Option>
                        <Option value="6">Stripe iDEAL V2</Option>
                        <Option value="7">Authorize.net Accept.js </Option>
                        <Option value="8">Instamojo</Option>
                        <Option value="9">Mollie</Option>
                        <Option value="10">Braintree</Option>
                        <Option value="11">Paypal Smart Checkout</Option>
                        <Option value="12">Paypal</Option>
                        <Option value="13">PayU Money</Option>
                        <Option value="14">Stripe Checkout</Option>
                        <Option value="15">Stripe iDeal</Option>
                        <Option value="16">2Checkout</Option>
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
              <img src={refreshIcon} alt="Refresh" className="refresh-icon" />
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
