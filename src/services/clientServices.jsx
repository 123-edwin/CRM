export const getClients = async () => {
    try {
        const res = await fetch("http://localhost:8080/clients/get");
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

export const getOnlyClient = async (id) => {
    try {
        const res = await fetch(`http://localhost:8080/clients/get/${id}`);
        if (!res.ok) {
            throw new Error(`Error HTTP: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error al obtener cliente:", error);
        throw error; // lo relanzas para que el componente que lo use también lo pueda manejar
    }
}




