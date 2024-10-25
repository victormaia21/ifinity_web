import MiniDrawer from "@/components/Dashboard/Drawer/Drawer";
import MainVendas from "@/components/Vendas/MainVendas";
import { Box } from "@mui/material";

export default function Vendas() {
    return (
        <Box sx={{ display: 'flex', background: '#f0f0f0', width: '100vw' }}>
            <MiniDrawer hasBack={true}/>
            <MainVendas />
        </Box>
    )
}