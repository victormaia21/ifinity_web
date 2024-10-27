import MiniDrawer from "@/components/Dashboard/Drawer/Drawer";
import Editar from "@/components/Editar/Editar";
import { Box } from "@mui/material";

export default function Page() {
    return (
        <Box sx={{ display: 'flex', background: '#f0f0f0', width: '100vw' }}>
            <MiniDrawer hasBack={true} nameBack="Editar conta"/>
            <Editar />
        </Box>
    )
}