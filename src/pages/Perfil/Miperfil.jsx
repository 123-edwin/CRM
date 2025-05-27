import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Avatar from "@mui/joy/Avatar";
import Divider from "@mui/joy/Divider";

import refreshIcon from "/refresh.svg";

export function Miperfil() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          overflow: { xs: "auto", sm: "initial" },
        }}
      >
        <Card
          orientation="horizontal"
          sx={{
            width: "100%",
            flexWrap: "wrap",
            [`& > *`]: {
              "--stack-point": "500px",
              minWidth:
                "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
            },
            overflow: "auto",
            resize: "horizontal",
          }}
        >
          <AspectRatio ratio="0.5" sx={{ width: 100, height: 100 }}>
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
              srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </AspectRatio>

          <CardContent>
            <Typography sx={{ fontSize: "xl", fontWeight: "lg" }}>
              Alex Morrison
            </Typography>
            <Typography level="body-sm" textColor="text.tertiary">
              Senior Journalist
            </Typography>
            <Typography level="body-sm" textColor="text.tertiary">
              alexmor@gmail.com
            </Typography>

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
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <div key={i}>
                    <Typography level="body-xs" sx={{ fontWeight: "lg" }}>
                      Tiempo registrado
                    </Typography>
                    <Typography sx={{ fontWeight: "lg" }}>00:00</Typography>
                  </div>
                ))}
            </Sheet>
          </CardContent>
        </Card>
      </Box>

      {/* NOTIFICACIONES Y TABLA */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          mt: 4,
          px: 2,
          flexWrap: "nowrap",
          overflowX: "auto",
        }}
      >
        {/* NOTIFICACIONES */}
        <Card
          sx={{
            width: "350px",
            minWidth: 200,
            p: 2,
            borderRadius: "md",
            boxShadow: "md",
          }}
        >
          <Typography level="h3">Notificaciones</Typography>

          <Box sx={{ p: 2 }}>
            <List>
              {[
                {
                  name: "Ralph Edwards",
                  msg: "Factura",
                  time: "35 min ago",
                  avatar: "https://i.pravatar.cc/150?img=1",
                },
                {
                  name: "Jenny Wilson",
                  msg: "Hay una tarea pendiente",
                  time: "1w ago",
                  avatar: "https://i.pravatar.cc/150?img=2",
                },
              ].map((noti, idx) => (
                <Box key={idx}>
                  <ListItem alignItems="flex-start">
                    <Avatar src={noti.avatar} />
                    <Box sx={{ ml: 2 }}>
                      <Typography level="body-md">
                        <strong>{noti.name}</strong>
                      </Typography>
                      <Typography level="body-sm">{noti.msg}</Typography>
                      <Typography level="body-xs" color="neutral">
                        {noti.time}
                      </Typography>
                    </Box>
                  </ListItem>
                  <Divider component="li" />
                </Box>
              ))}
            </List>
          </Box>
        </Card>

        {/* PROYECTOS */}
        <Card
          sx={{
            width: "1300px",
            minWidth: 400,
            p: 2,
            borderRadius: "md",
            boxShadow: "md",
          }}
        >
          <Typography level="h3" sx={{ mt: 1 }}>
            Proyectos
          </Typography>

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
                  sx={{ width: 100, height: 48 }}
                >
                  Exportar
                </MenuButton>
                <Menu
                  variant="outlined"
                  placement="bottom-start"
                  sx={{ minWidth: 100 }}
                >
                  <MenuItem>Excel</MenuItem>
                  <MenuItem>CSV</MenuItem>
                  <MenuItem>PDF</MenuItem>
                  <MenuItem>Imprimir</MenuItem>
                </Menu>
              </Dropdown>

              <Button>
                <img
                  src={refreshIcon}
                  alt="Refresh"
                  style={{ width: 20, height: 20 }}
                />
              </Button>
            </ButtonGroup>
          </Box>

          <table
            className="custom-table"
            style={{ width: "100%", borderCollapse: "collapse" }}
          >
            <thead>
              <tr>
                <th>Nombre del proyecto</th>
                <th>Fecha de inicio</th>
                <th>Fecha de entrega</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2].map((_, i) => (
                <tr key={i}>
                  <td>JL Marketing</td>
                  <td>01/12/2025</td>
                  <td>01/02/2026</td>
                  <td>Pendiente</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </Box>
    </>
  );
}
