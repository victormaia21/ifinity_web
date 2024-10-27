import MiniDrawer from "@/components/Dashboard/Drawer/Drawer";
import Integra from "@/components/integracoes/Integracoes";
import { Box } from "@mui/material";

export default function Integracoes() {
    return (
        <Box sx={{ display: 'flex', background: '#f0f0f0', width: '100vw' }}>
            <MiniDrawer hasBack={false} nameBack="INTEGRAÇÕES"/>
            <Integra />
        </Box>
    )
}