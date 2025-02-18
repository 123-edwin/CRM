import './Client.css';

export function Client() {
    return (
        <>
            <div className="options">
                <button className="btn-primary">Nuevo Cliente</button>
                <button className="btn-secondary">Importación De Clientes</button>
            </div>
            <div className="table-container">
                <table className="styled-table">
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
                        <tr>
                            <td>1</td>
                            <td>Empresa Ejemplo</td>
                            <td>Contacto Ejemplo</td>
                            <td>email@ejemplo.com</td>
                            <td>123-456-7890</td>
                            <td>Sí</td>
                            <td>Tipo Ejemplo</td>
                            <td>2023-01-01</td>
                            <td>ejemplo.com</td>
                            <td>Regulador Ejemplo</td>
                            <td>Para Ejemplo</td>
                            <td>Pista Ejemplo</td>
                            <td>2023-01-01</td>
                            <td>2024-01-01</td>
                            <td>Ubicación Ejemplo</td>
                            <td>2023-01-01</td>
                            <td>2024-01-01</td>
                            <td>dominio.com</td>
                            <td>2023-01-01</td>
                            <td>2023-01-01</td>
                        </tr>
                        {/* Puedes añadir más filas según sea necesario */}
                    </tbody>
                </table>
            </div>
        </>
    );
}