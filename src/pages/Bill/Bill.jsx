import { useState } from "react"
import { useRoute } from "wouter";
import IncomeForm from "@p/Bill/IncomeForm";
import PaymentForm from "@p/Bill/PaymentForm";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

export function Bill() {
    const [, params] = useRoute("/factura/:id");
    const [activeTab, setActiveTab] = useState(params && params.id ? "P" : "I");

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
                <IncomeForm tipo='I' />
            )}

            {activeTab === "P" && (
                <div>
                    <PaymentForm tipo='P' facturaId={params ? params.id : null} />
                </div>
            )}
        </>
    )
}