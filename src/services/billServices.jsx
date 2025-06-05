export const getBills = async () => {
    try {
        const res = await fetch("http://localhost:8080/bill/all");
        if (!res.ok) {
            throw new Error(`Error HTTP: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error al obtener clientes:", error);
        throw error; // lo relanzas para que el componente que lo use también lo pueda manejar
    }
}

export const getBillById = async (id) => {
    try {
        const res = await fetch(`http://localhost:8080/bill/${id}`);
        if (!res.ok) {
            throw new Error(`Error HTTP: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error al obtener factura por ID:", error);
        throw error; // lo relanzas para que el componente que lo use también lo pueda manejar
    }
}

