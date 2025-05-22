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
import Checkbox from "@mui/joy/Checkbox";
import LinearProgress from "@mui/joy/LinearProgress";

export function NuevoProyecto() {
  return (
    <>
      {/*AÑADIR PROYECTO*/}

      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Typography level="h3">Añadir proyecto</Typography>
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
          <FormLabel>Nombre del proyecto</FormLabel>
          <Input required type="text"></Input>
        </FormControl>

        <FormControl required>
          <FormLabel>Cliente</FormLabel>
          <Input required type="text"></Input>
        </FormControl>

        <FormControl>
          <FormLabel>Progreso</FormLabel>
          <LinearProgress
            determinate
            variant="outlined"
            color="neutral"
            size="sm"
            thickness={24}
            sx={{
              "--LinearProgress-radius": "20px",
              "--LinearProgress-thickness": "24px",
            }}
          >
            <Typography
              level="body-xs"
              textColor="common.white"
              sx={{ fontWeight: "xl", mixBlendMode: "difference" }}
            >
              0% {}
            </Typography>
          </LinearProgress>
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
            <FormLabel>Tipo de facturación</FormLabel>
            <Select defaultValue="precio-fijo">
              <Option value="1">Precio fijo</Option>
              <Option value="2">Horas del proyecto</Option>
              <Option value="3">Horas de las tareas</Option>
              <Option value="4" disabled>
                Base al precio del trabajo por hora
              </Option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Estado</FormLabel>
            <Select defaultValue="No iniciado">
              <Option value="1">No iniciado</Option>
              <Option value="2">En desarrollo</Option>
              <Option value="3">En espera</Option>
              <Option value="4">Cancelado</Option>
              <Option value="5">Finalizado</Option>
            </Select>
          </FormControl>
        </Box>

        <FormControl>
          <FormLabel>Coste total</FormLabel>
          <Input required type="number" startDecorator="$" placeholder="0.00" />
        </FormControl>

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
            <FormLabel>Horas estimadas</FormLabel>
            <Input required type="number"></Input>
          </FormControl>

          <FormControl>
            <FormLabel>Miembros del proyecto</FormLabel>
            <Select defaultValue="">
              <Option value="1">Juan Perez</Option>
              <Option value="2">Jose Lopez</Option>
              <Option value="3">Andrea Hernandez</Option>
              <Option value="4">Esthela Uribe</Option>
              <Option value="5">Violeta Castañeda</Option>
            </Select>
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
          <FormControl required>
            <FormLabel>Fecha de inicio</FormLabel>
            <Input required type="date"></Input>
          </FormControl>

          <FormControl>
            <FormLabel>Fecha de entrega</FormLabel>
            <Input required type="date"></Input>
          </FormControl>
        </Box>

        <FormControl>
          <FormLabel>Etiquetas</FormLabel>
          <Select>
            <Option value="1">Diseño de logo</Option>
            <Option value="2">Diseño gráfico</Option>
            <Option value="3">Diseño web</Option>
            <Option value="4">Plan SEM</Option>
            <Option value="5">Redes sociales</Option>
            <Option value="6">Seseión fotográfica</Option>
            <Option value="7">Video</Option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Descripción del proyecto</FormLabel>
          <Textarea minRows={2} />
        </FormControl>

        <Checkbox
          label="Enviar correo de creación del proyecto"
          size="md"
          variant="outlined"
        />

        <Box sx={{ display: "flex", flexWrap: "wrap", mt: 3 }}>
          <Button>Guardar</Button>
        </Box>
      </Card>

      {/*AJUSTES DEL PROYECTO*/}

      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Typography level="h3">Ajustes del proyecto</Typography>
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
        <FormControl>
          <FormLabel>Send contacts notifications</FormLabel>
          <Select
            onChange={(event, newValue) => {
              ({ newValue });
            }}
            placeholder="Selecciona un tipo de cliente"
          >
            <Option value="one">
              To all contacts with notifications for projects enabled
            </Option>
            <Option value="two">Specific contacts</Option>
            <Option value="three">Do not send notifications</Option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Pestañas visibles</FormLabel>
          <Select
            multiple
            placeholder="Selecciona cliente"
            onChange={(event, newValue) => {
              console.log(newValue);
            }}
          >
            <Option value="one">Tareas</Option>
            <Option value="two">Tiempos</Option>
            <Option value="three">Hitos</Option>
            <Option value="four">Archivos</Option>
            <Option value="five">Discusiones</Option>
            <Option value="six">Diagrama de Gantt</Option>
            <Option value="seven">Tickets</Option>
            <Option value="eight">Contratos</Option>
            <Option value="nine" disabled>
              Ventas
            </Option>
            <Option value="teen">Propuestas</Option>
            <Option value="eleven">Presupuestos</Option>
            <Option value="twelve">Facturas</Option>
            <Option value="thirteen">Gastos</Option>
            <Option value="fourteen">Notas de crédito</Option>
          </Select>
        </FormControl>

        {/*CHECKBOX*/}

        <Box>
          <Checkbox
            label="Permitir al cliente ver tareas"
            size="md"
            variant="outlined"
          />
        </Box>

        <Box>
          <Checkbox
            label="Permitir al cliente Crear tareas"
            size="md"
            variant="outlined"
          />
        </Box>

        <Box>
          <Checkbox
            label="Permitir al cliente Editar tareas (sólo tareas creadas por el contacto)"
            size="md"
            variant="outlined"
          />
        </Box>

        <Box>
          <Checkbox
            label="Permitir al cliente comentarios sobre las tareas del proyecto"
            size="md"
            variant="outlined"
          />
        </Box>

        <Box>
          <Checkbox
            label="Permitir al cliente ver comentarios de las tareas"
            size="md"
            variant="outlined"
          />
        </Box>

        <Box>
          <Checkbox
            label="Permitir al cliente adjuntar archivos a tareas vistas"
            size="md"
            variant="outlined"
          />
        </Box>

        <Box>
          <Checkbox
            label="Permitir al cliente ver listas en las tareas"
            size="md"
            variant="outlined"
          />
        </Box>

        <Box>
          <Checkbox
            label="Permitir al cliente subir archivos adjuntos a las tareas"
            size="md"
            variant="outlined"
          />
        </Box>

        <Box>
          <Checkbox
            label="Permitir al cliente ver el total del tiempo registrado en tareas"
            size="md"
            variant="outlined"
          />
        </Box>

        <Box>
          <Checkbox
            label="Permitir al cliente ver informe financiero"
            size="md"
            variant="outlined"
          />
        </Box>

        <Box>
          <Checkbox
            label="Permitir al cliente subir archivos"
            size="md"
            variant="outlined"
          />
        </Box>

        <Box>
          <Checkbox
            label="Permitir al cliente abrir discusiones"
            size="md"
            variant="outlined"
          />
        </Box>

        <Box>
          <Checkbox
            label="Permitir al cliente ver hitos"
            size="md"
            variant="outlined"
          />
        </Box>

        <Box>
          <Checkbox
            label="Permitir al cliente ver gantt"
            size="md"
            variant="outlined"
          />
        </Box>

        <Box>
          <Checkbox
            label="Permitir al cliente ver hoja de tiempos"
            size="md"
            variant="outlined"
          />
        </Box>

        <Box>
          <Checkbox
            label="Permitir al cliente ver registro de actividad"
            size="md"
            variant="outlined"
          />
        </Box>

        <Box>
          <Checkbox
            label="Permitir al cliente ver los miembros del equipo"
            size="md"
            variant="outlined"
          />
        </Box>

        <Box>
          <Checkbox
            label="Ocultar tareas del proyecto en la tabla de tareas (admin área)"
            size="md"
            variant="outlined"
          />
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", mt: 3 }}>
          <Button>Guardar</Button>
        </Box>
      </Card>
    </>
  );
}
