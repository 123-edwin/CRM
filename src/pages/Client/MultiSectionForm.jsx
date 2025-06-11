import "./MultiSectionForm.css";

import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Box from "@mui/joy/Box";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import IconButton from "@mui/joy/IconButton";
import { Link } from "wouter";

import { useState } from "react";
import { addClient } from "../../services/clientServices";

export function MultiSectionForm() {
  const [activeTab, setActiveTab] = useState("detalles");
  const [formData, setFormData] = useState({
    empresa: "",
    telefono: "",
    tipo_cliente: "",
    dominio: "",
    respaldo_renovacion_sitio_web: "",
    plan_diseno_web: "",
    plan_redes_sociales: "",
    fecha_inicio_redes: "",
    fecha_renovacion_redes: "",
    servidor_ubicacion: "",
    fecha_inicio_servidor: "",
    fecha_termino_servidor: "",
    dominio_ubicacion: "",
    fecha_inicio_dominio: "",
    fecha_termino_dominio: "",
    contacto_principal: "",
    email_principal: "",
    activo: "",
    website: "",
    moneda: "",
    codigo_postal: "",
    pais: "",
    razon_social: "",
    rfc: "",
    regimen: "",
    diseno_grafico: "",
    produccion: "",
    instagram_usuario: "",
    instagram_contrasena: "",
    youtube_usuario: "",
    youtube_contrasena: "",
    servidor_usuario: "",
    servidor_contrasena: "",
    wordpress_usuario: "",
    wordpress_contrasena: "",
    observaciones: "",
    correo_electronicos_corporativos: "",
    cobro_calle: "",
    cobro_localidad: "",
    cobro_departamento: "",
    cobro_codigo_postal: "",
    cobro_pais: "",
    envio_calle: "",
    envio_localidad: "",
    envio_departamento: "",
    envio_codigo_postal: "",
    envio_pais: "",

    estado: "",
    municipio: "",
    colonia: "",
    calle: "",
    numero_interior: "",
    numero_exterior: ""

  });

  // Este estado controla qué sección se muestra
  const handleSubmit = async (e) => {
    e && e.preventDefault && e.preventDefault();
    try {
      await addClient(formData);
      alert("Cliente agregado correctamente");
      // Opcional: limpiar el formulario o redirigir
    } catch (err) {
      alert("Error al agregar cliente");
      console.error("Error al agregar cliente:", err);
    }
  };

  return (
    <div>
      {/* Barra de pestañas */}

      <nav style={{ display: "flex", gap: "1rem", marginTop: '1rem' }} className="tabs">
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Link href="/">
            <IconButton>
              <ArrowBackRoundedIcon />
            </IconButton>
          </Link>
        </Box>

        <Button
          variant={activeTab === "detalles" ? "soft" : "outlined"}
          onClick={() => setActiveTab("detalles")}
        >
          Detalles del cliente
        </Button>

        <Button
          variant={activeTab === "campos" ? "soft" : "outlined"}
          onClick={() => setActiveTab("campos")}
        >
          Campos personalizados
        </Button>

        <Button
          variant={activeTab === "factura" ? "soft" : "outlined"}
          onClick={() => setActiveTab("factura")}
        >
          Envío de factura
        </Button>
      </nav>

      {/* Secciones del formulario */}

      <section className="form-section">
        <div className="form-container">


          {activeTab === "detalles" && (
            <div className="form-questions">
              <h2>Detalles del cliente</h2>

              <FormControl>
                <FormLabel htmlFor="empresa">Empresa</FormLabel>
                <Input
                  required
                  type="text"
                  id="empresa"
                  value={formData.empresa}
                  onChange={(e) =>
                    setFormData({ ...formData, empresa: e.target.value })
                  }
                ></Input>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="telefono">Teléfono</FormLabel>
                <Input
                  type="tel"
                  id="telefono"
                  value={formData.telefono}
                  onChange={(e) =>
                    setFormData({ ...formData, telefono: e.target.value })
                  }
                ></Input>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="website">Website</FormLabel>
                <Input
                  type="url"
                  id="website"
                  value={formData.website}
                  onChange={(e) =>
                    setFormData({ ...formData, website: e.target.value })
                  }
                ></Input>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="tipo_cliente">Tipo de cliente</FormLabel>
                <Select
                  id="tipo_cliente"
                  value={formData.tipo_cliente}
                  onChange={(event, newValue) => {
                    setFormData({ ...formData, tipo_cliente: newValue });
                  }}
                  placeholder="Selecciona un tipo de cliente"
                >
                  <Option value="one">Edwin</Option>
                  <Option value="two">Ale</Option>
                  <Option value="three">Fercha</Option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Moneda</FormLabel>
                <Select
                  id="moneda"
                  value={formData.moneda}
                  onChange={(event, newValue) => {
                    setFormData({ ...formData, moneda: newValue });
                  }}
                  placeholder="Selecciona un tipo de moneda"
                >
                  <Option value="one">Dólar</Option>
                  <Option value="two">Pesos mexicanos</Option>
                  <Option value="three">Tazos</Option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>País</FormLabel>
                <Input
                  type="text"
                  value={formData.pais}
                  onChange={(e) =>
                    setFormData({ ...formData, pais: e.target.value })
                  }
                ></Input>
              </FormControl>

              <FormControl>
                <FormLabel>Código Postal</FormLabel>
                <Input
                  type="number"
                  value={formData.codigo_postal}
                  onChange={(e) =>
                    setFormData({ ...formData, codigo_postal: e.target.value })
                  }
                ></Input>
              </FormControl>

              <FormControl sx={{ flex: 1 }}>
                <FormLabel>Estado</FormLabel>
                <Select name="estado" id="estado" color="primary" placeholder="Estado"
                  sx={{ width: 300, height: 45 }}
                  size="md"
                  variant="outlined" value={formData.estado} onChange={(_, value) => { setFormData({ ...formData, estado: value }) }}>
                  <Option value="Aguascalientes">Aguascalientes</Option>
                  <Option value="Baja California">Baja California</Option>
                  <Option value="Baja California Sur">Baja California Sur</Option>
                  <Option value="Campeche">Campeche</Option>
                  <Option value="Coahuila de Zaragoza">Coahuila de Zaragoza</Option>
                  <Option value="Colima">Colima</Option>
                  <Option value="Chiapas">Chiapas</Option>
                  <Option value="Chihuahua">Chihuahua</Option>
                  <Option value="Ciudad de México">Ciudad de México</Option>
                  <Option value="Durango">Durango</Option>
                  <Option value="Guanajuato">Guanajuato</Option>
                  <Option value="Guerrero">Guerrero</Option>
                  <Option value="Hidalgo">Hidalgo</Option>
                  <Option value="Jalisco">Jalisco</Option>
                  <Option value="México">México</Option>
                  <Option value="Michoacán de Ocampo">Michoacán de Ocampo</Option>
                  <Option value="Morelos">Morelos</Option>
                  <Option value="Nayarit">Nayarit</Option>
                  <Option value="Nuevo León">Nuevo León</Option>
                  <Option value="Oaxaca">Oaxaca</Option>
                  <Option value="Puebla">Puebla</Option>
                  <Option value="Querétaro">Querétaro</Option>
                  <Option value="Quintana Roo">Quintana Roo</Option>
                  <Option value="San Luis Potosí">San Luis Potosí</Option>
                  <Option value="Sinaloa">Sinaloa</Option>
                  <Option value="Sonora">Sonora</Option>
                  <Option value="Tabasco">Tabasco</Option>
                  <Option value="Tamaulipas">Tamaulipas</Option>
                  <Option value="Tlaxcala">Tlaxcala</Option>
                  <Option value="Veracruz de Ignacio de la Llave">Veracruz de Ignacio de la Llave</Option>
                  <Option value="Yucatán">Yucatán</Option>
                  <Option value="Zacatecas">Zacatecas</Option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Municipio</FormLabel>
                <Input
                  type="text"
                  value={formData.municipio}
                  onChange={(e) =>
                    setFormData({ ...formData, municipio: e.target.value })
                  }
                ></Input>
              </FormControl>

              <FormControl>
                <FormLabel>Colonia</FormLabel>
                <Input
                  type="text"
                  value={formData.colonia}
                  onChange={(e) =>
                    setFormData({ ...formData, colonia: e.target.value })
                  }
                ></Input>
              </FormControl>

              <FormControl>
                <FormLabel>Calle</FormLabel>
                <Input
                  type="text"
                  value={formData.calle}
                  onChange={(e) =>
                    setFormData({ ...formData, calle: e.target.value })
                  }
                ></Input>
              </FormControl> 

              <FormControl>
                <FormLabel>Número interior</FormLabel>
                <Input
                  type="text"
                  value={formData.numero_interior}
                  onChange={(e) =>
                    setFormData({ ...formData, numero_interior: e.target.value })
                  }
                ></Input>
              </FormControl>

              <FormControl>
                <FormLabel>Número exterior</FormLabel>
                <Input
                  type="text"
                  value={formData.numero_exterior}
                  onChange={(e) =>
                    setFormData({ ...formData, numero_exterior: e.target.value })
                  }
                ></Input>
              </FormControl>


              <FormControl>
                <FormLabel>Contacto principal</FormLabel>
                <Input
                  type="text"
                  value={formData.contacto_principal}
                  onChange={(e) =>
                    setFormData({ ...formData, contacto_principal: e.target.value })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Email principal</FormLabel>
                <Input
                  type="email"
                  value={formData.email_principal}
                  onChange={(e) =>
                    setFormData({ ...formData, email_principal: e.target.value })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Activo</FormLabel>
                <Select
                  value={formData.activo ? "si" : "no"}
                  onChange={(event, newValue) =>
                    setFormData({ ...formData, activo: newValue === "si" })
                  }
                  placeholder="Selecciona si está activo"
                >
                  <Option value="si">Sí</Option>
                  <Option value="no">No</Option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="rfc">RFC</FormLabel>
                <Input
                  required
                  type="text"
                  id="rfc"
                  value={formData.rfc}
                  onChange={(e) =>
                    setFormData({ ...formData, rfc: e.target.value })
                  }
                ></Input>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="razon_social">Razón Social</FormLabel>
                <Input
                  required
                  type="text"
                  id="razon_social"
                  value={formData.razon_social}
                  onChange={(e) =>
                    setFormData({ ...formData, razon_social: e.target.value })
                  }
                ></Input>
              </FormControl>

              <FormControl sx={{ flex: 1 }}>
                <FormLabel>Regimen Fiscal Emisor</FormLabel>
                <Select name="regimenEmisor" id="regimenEmisor" color="primary" placeholder="Regimen Fiscal Emisor"
                  sx={{ width: 300, height: 45 }}
                  size="md"
                  variant="outlined" value={formData.regimen} onChange={(_, value) => { setFormData({ ...formData, regimen: value }) }}>
                  <Option value="601">General de Ley Personas Morales</Option>
                  <Option value="603">Personas Morales con Fines no Lucrativos</Option>
                  <Option value="605">Sueldos y Salarios e Ingresos Asimilados a Salarios</Option>
                  <Option value="606">Arrendamiento</Option>
                  <Option value="607">Régimen de Enajenación o Adquisición de Bienes</Option>
                  <Option value="608">Demás ingresos</Option>
                  <Option value="610">Residentes en el Extranjero sin Establecimiento Permanente en México</Option>
                  <Option value="611">Ingresos por Dividendos (socios y accionistas)</Option>
                  <Option value="612">Personas Físicas con Actividades Empresariales y Profesionales</Option>
                  <Option value="614">Ingresos por intereses</Option>
                  <Option value="615">Régimen de los ingresos por obtención de premios</Option>
                  <Option value="616">Sin obligaciones fiscales</Option>
                  <Option value="620">Sociedades Cooperativas de Producción que optan por diferir sus ingresos</Option>
                  <Option value="621">Incorporación Fiscal</Option>
                  <Option value="622">Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras</Option>
                  <Option value="623">Opcional para Grupos de Sociedades</Option>
                  <Option value="624">Coordinados</Option>
                  <Option value="625">Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas</Option>
                  <Option value="626">Régimen Simplificado de Confianza</Option>
                </Select>
              </FormControl>

              <Box sx={{ display: "flex", flexWrap: "wrap", mt: 3 }}>
                <Button>Guardar</Button>
              </Box>
            </div>
          )}

          {activeTab === "campos" && (
            <div className="form-questions">
              <h2>Campos personalizados</h2>

              <FormControl>
                <FormLabel htmlFor="dominio">Dominio</FormLabel>
                <Input
                  required
                  type="text"
                  id="dominio"
                  value={formData.dominio}
                  onChange={(e) =>
                    setFormData({ ...formData, dominio: e.target.value })
                  }
                ></Input>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="respaldo_renovacion">Respaldo y renovación sitio web</FormLabel>
                <Input
                  type="date"
                  id="respaldo_renovacion"
                  value={formData.respaldo_renovacion_sitio_web}
                  onChange={(e) =>
                    setFormData({ ...formData, respaldo_renovacion_sitio_web: e.target.value })
                  }
                ></Input>
              </FormControl>

              <FormControl>
                <FormLabel>Plan diseño web</FormLabel>
                <Select
                  id="plan_diseno_web"
                  value={formData.plan_diseno_web}
                  onChange={(event, newValue) => {
                    setFormData({ ...formData, plan_diseno_web: newValue });
                  }}
                  placeholder="Nada seleccionado"
                >
                  <Option value="one">DW-01 Plan comienza</Option>
                  <Option value="two">DW-02 Plan crece </Option>
                  <Option value="three">DW-03 Plan corporativo</Option>
                  <Option value="four">DW-Shopify</Option>
                  <Option value="five">DW-WooCommerce</Option>
                  <Option value="six">DW-Sistema personalizado</Option>
                  <Option value="seven">DW-Servidor</Option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Plan de redes sociales</FormLabel>
                <Select
                  id="plan_redes_sociales"
                  value={formData.plan_redes_sociales}
                  onChange={(event, newValue) => {
                    setFormData({ ...formData, plan_redes_sociales: newValue });
                  }}
                  placeholder="Nada seleccionado"
                >
                  <Option value="one">RS-01 Plan comienza</Option>
                  <Option value="two">RS-02 Plan crece </Option>
                  <Option value="three">RS-03 Plan corporativo</Option>
                  <Option value="four">RS-04 Plan personalizado</Option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Diseño gráfico</FormLabel>
                <Select
                  id="diseno_grafico"
                  value={formData.diseno_grafico}
                  onChange={(event, newValue) => {
                    setFormData({ ...formData, diseno_grafico: newValue });
                  }}
                  placeholder="Nada seleccionado"
                >
                  <Option value="one">Publicación</Option>
                  <Option value="two">Historia</Option>
                  <Option value="three">Portada</Option>
                  <Option value="four">Perfil</Option>
                  <Option value="five">Logo</Option>
                  <Option value="six">Diseño web</Option>
                  <Option value="seven">Blog</Option>
                  <Option value="seven">Manual de identidad</Option>
                  <Option value="one">Díptico</Option>
                  <Option value="two">Tríptico</Option>
                  <Option value="three">Volante</Option>
                  <Option value="four">Impresión</Option>
                  <Option value="five">Brochure</Option>
                  <Option value="six">Tarjeta de presentación</Option>
                  <Option value="seven">Etiqueta</Option>
                  <Option value="seven">Horario</Option>
                  <Option value="one">Nota</Option>
                  <Option value="two">Proyecto Cofepris</Option>
                  <Option value="three">Calcomanía</Option>
                  <Option value="four">Pantalla</Option>
                  <Option value="five">Lona</Option>
                  <Option value="six">Espectacular</Option>
                  <Option value="seven">Edición y retoque de fotos</Option>
                  <Option value="seven">Camioneta/Carro</Option>
                  <Option value="one">Banner</Option>
                  <Option value="two">Productor promocionales</Option>
                  <Option value="three">Carpeta</Option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Producción</FormLabel>
                <Select
                  id="produccion"
                  value={formData.produccion}
                  onChange={(event, newValue) => {
                    setFormData({ ...formData, produccion: newValue });
                  }}
                  placeholder="Nada seleccionado"
                >
                  <Option value="one">Video</Option>
                  <Option value="two">Fotografía</Option>
                  <Option value="three">Reel</Option>
                  <Option value="four">Gift</Option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Instagram usuario</FormLabel>
                <Input
                  type="text"
                  value={formData.instagram_usuario}
                  onChange={(e) =>
                    setFormData({ ...formData, instagram_usuario: e.target.value })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Instagram contraseña</FormLabel>
                <Input
                  type="text"
                  value={formData.instagram_contrasena}
                  onChange={(e) =>
                    setFormData({ ...formData, instagram_contrasena: e.target.value })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>YouTube usuario</FormLabel>
                <Input
                  type="text"
                  value={formData.youtube_usuario}
                  onChange={(e) =>
                    setFormData({ ...formData, youtube_usuario: e.target.value })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>YouTube contraseña</FormLabel>
                <Input
                  type="text"
                  value={formData.youtube_contrasena}
                  onChange={(e) =>
                    setFormData({ ...formData, youtube_contrasena: e.target.value })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Servidor usuario</FormLabel>
                <Input
                  type="text"
                  value={formData.servidor_usuario}
                  onChange={(e) =>
                    setFormData({ ...formData, servidor_usuario: e.target.value })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Servidor contraseña</FormLabel>
                <Input
                  type="text"
                  value={formData.servidor_contrasena}
                  onChange={(e) =>
                    setFormData({ ...formData, servidor_contrasena: e.target.value })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Wordpress usuario</FormLabel>
                <Input
                  type="text"
                  value={formData.wordpress_usuario}
                  onChange={(e) =>
                    setFormData({ ...formData, wordpress_usuario: e.target.value })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Wordpress contraseña</FormLabel>
                <Input
                  type="text"
                  value={formData.wordpress_contrasena}
                  onChange={(e) =>
                    setFormData({ ...formData, wordpress_contrasena: e.target.value })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Respaldo y renovación sitio web</FormLabel>
                <Input
                  type="date"
                  value={formData.respaldo_renovacion_sitio_web}
                  onChange={(e) =>
                    setFormData({ ...formData, respaldo_renovacion_sitio_web: e.target.value })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Correo electrónicos corporativos</FormLabel>
                <Input
                  type="text"
                  value={formData.correo_electronicos_corporativos}
                  onChange={(e) =>
                    setFormData({ ...formData, correo_electronicos_corporativos: e.target.value })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Dominio ubicación</FormLabel>
                <Select
                  value={formData.dominio_ubicacion}
                  onChange={(event, newValue) => {
                    setFormData({ ...formData, dominio_ubicacion: newValue });
                  }}
                  placeholder="Nada seleccionado"
                >
                  <Option value="su_empresa">Su empresa</Option>
                  <Option value="hostgator">HostGator</Option>
                  <Option value="bluehost">BlueHost</Option>
                  <Option value="externo">Externo</Option>
                  <Option value="shopify">Shopify</Option>
                  <Option value="neubox">Neubox</Option>
                  <Option value="amazon">Amazon</Option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Servidor ubicación</FormLabel>
                <Select
                  value={formData.servidor_ubicacion}
                  onChange={(event, newValue) => {
                    setFormData({ ...formData, servidor_ubicacion: newValue });
                  }}
                  placeholder="Nada seleccionado"
                >
                  <Option value="su_empresa">Su empresa</Option>
                  <Option value="hostgator">HostGator</Option>
                  <Option value="bluehost">BlueHost</Option>
                  <Option value="externo">Externo</Option>
                  <Option value="shopify">Shopify</Option>
                  <Option value="neubox">Neubox</Option>
                  <Option value="amazon">Amazon</Option>
                </Select>
              </FormControl>
              {/*hazte tp*/}
              <FormControl>
                <FormLabel>Dominio fecha de inicio</FormLabel>
                <Input
                  type="date"
                  value={formData.fecha_inicio_dominio}
                  onChange={(e) =>
                    setFormData({ ...formData, fecha_inicio_dominio: e.target.value })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Dominio fecha de termino</FormLabel>
                <Input
                  type="date"
                  value={formData.fecha_termino_dominio}
                  onChange={(e) =>
                    setFormData({ ...formData, fecha_termino_dominio: e.target.value })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Servidor fecha de inicio</FormLabel>
                <Input
                  type="date"
                  value={formData.fecha_inicio_servidor}
                  onChange={(e) =>
                    setFormData({ ...formData, fecha_inicio_servidor: e.target.value })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Servidor fecha de termino</FormLabel>
                <Input
                  type="date"
                  value={formData.fecha_termino_servidor}
                  onChange={(e) =>
                    setFormData({ ...formData, fecha_termino_servidor: e.target.value })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Fecha inicio redes sociales</FormLabel>
                <Input
                  type="date"
                  value={formData.fecha_inicio_redes}
                  onChange={(e) =>
                    setFormData({ ...formData, fecha_inicio_redes: e.target.value })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Fecha renovación redes sociales</FormLabel>
                <Input
                  type="date"
                  value={formData.fecha_renovacion_redes}
                  onChange={(e) =>
                    setFormData({ ...formData, fecha_renovacion_redes: e.target.value })
                  }
                />
              </FormControl>

              <Box sx={{ display: "flex", flexWrap: "wrap", mt: 3 }}>
                <Button>Guardar</Button>
              </Box>
            </div>
          )}

          {activeTab === "factura" && (
            <div>
              <h2>Envío de factura</h2>

              <Box sx={{ display: "flex", gap: 2 }}>
                <FormControl sx={{ flex: 1 }}>
                  <h5>Dirección de cobro</h5>
                  <FormLabel>Calle</FormLabel>
                  <Input
                    type="text"
                    value={formData.cobro_calle}
                    onChange={(e) =>
                      setFormData({ ...formData, cobro_calle: e.target.value })
                    }
                  />
                </FormControl>

                <FormControl sx={{ flex: 1 }}>
                  <h5>Dirección de envío</h5>
                  <FormLabel>Calle</FormLabel>
                  <Input
                    type="text"
                    value={formData.envio_calle}
                    onChange={(e) =>
                      setFormData({ ...formData, envio_calle: e.target.value })
                    }
                  />
                </FormControl>
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <FormControl>
                  <FormLabel>Localidad</FormLabel>
                  <Input
                    type="text"
                    id="localidad1"
                    value={formData.cobro_localidad}
                    onChange={(e) =>
                      setFormData({ ...formData, cobro_localidad: e.target.value })
                    }
                  ></Input>
                </FormControl>

                <FormControl>
                  <FormLabel>Localidad</FormLabel>
                  <Input
                    type="text"
                    id="localidad2"
                    value={formData.envio_localidad}
                    onChange={(e) =>
                      setFormData({ ...formData, envio_localidad: e.target.value })
                    }
                  ></Input>
                </FormControl>
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <FormControl>
                  <FormLabel>Departamento</FormLabel>
                  <Input
                    type="text"
                    id="departamento1"
                    value={formData.cobro_departamento}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        cobro_departamento: e.target.value,
                      })
                    }
                  ></Input>
                </FormControl>

                <FormControl>
                  <FormLabel>Departamento</FormLabel>
                  <Input
                    type="text"
                    id="departamento2"
                    value={formData.envio_departamento}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        envio_departamento: e.target.value,
                      })
                    }
                  ></Input>
                </FormControl>
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <FormControl>
                  <FormLabel>Código postal</FormLabel>
                  <Input
                    type="number"
                    id="codigoPostal1"
                    value={formData.cobro_codigo_postal}
                    onChange={(e) =>
                      setFormData({ ...formData, cobro_codigo_postal: e.target.value })
                    }
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Código postal</FormLabel>
                  <Input
                    type="number"
                    id="codigoPostal2"
                    value={formData.envio_codigo_postal}
                    onChange={(e) =>
                      setFormData({ ...formData, envio_codigo_postal: e.target.value })
                    }
                  />
                </FormControl>
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <FormControl>
                  <FormLabel>País</FormLabel>
                  <Input
                    type="text"
                    id="pais1"
                    value={formData.cobro_pais}
                    onChange={(e) =>
                      setFormData({ ...formData, cobro_pais: e.target.value })
                    }
                  ></Input>
                </FormControl>

                <FormControl>
                  <FormLabel>País</FormLabel>
                  <Input
                    type="text"
                    id="pais2"
                    value={formData.envio_pais}
                    onChange={(e) =>
                      setFormData({ ...formData, envio_pais: e.target.value })
                    }
                  ></Input>
                </FormControl>
              </Box>

              <Box sx={{ display: "flex", flexWrap: "wrap", mt: 3 }}>
                <Button>Guardar</Button>
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap", mt: 3 }}>
                <Button onClick={handleSubmit}>Enviar</Button>
              </Box>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}