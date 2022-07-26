import Box from '@mui/material/Box';
import { Chart } from 'chart.js';
import { DrawerHeader } from '../../../common/DrawerHeader';

export function Body() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Chart/>
      </Box>
  )
}