import { useState } from "react"
import BillForm from "@p/Bill/BillForm";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

export function Bill() {
    const [activeTab, setActiveTab] = useState("I");


    return (
        <>
        <section style={{ display: "flex", justifyContent: "end", alignItems: "center", marginTop: 20, marginRight: 20 }}>
            <Select name="tipo" id="tipo" color="primary"
                sx={{ width: 300 }}
                size="md"
                variant="outlined" value={activeTab} onChange={(_, value) => {setActiveTab(value)}}>
                <Option value="I">Ingreso</Option>
                <Option value="P">Pago</Option>
            </Select>
        </section>

            {activeTab === "I" && (
                <BillForm tipo='I' />
            )}

            {activeTab === "P" && (
                <div>
                    <h1>Tipo 2</h1>
                    {/* Aquí puedes agregar el contenido específico para Tipo 2 */}
                </div>
            )}
        </>
    )
}