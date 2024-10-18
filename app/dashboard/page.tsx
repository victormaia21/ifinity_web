
import MiniDrawer from "@/components/Dashboard/Drawer/Drawer";
import Main from "@/components/Dashboard/Main/Main";
import { Box } from "@mui/material";

export default function Dashboard() {
    return (
      <Box sx={{ display: 'flex', background: '#f0f0f0', width: '100vw' }}>
        <MiniDrawer />
        <Main />
      </Box>
    )
}