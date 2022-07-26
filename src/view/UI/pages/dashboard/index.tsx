import Box from '@mui/material/Box';
import { Body } from './components/Body';
import { Sidebar } from './components/SideBar';

export function Dashboard() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar/>
      <Body/>
    </Box>
  );
}