import Box from '@mui/material/Box';

import { DrawerHeader } from '../../../common/DrawerHeader';
import { Chart } from './Chart';

export function Body() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <h1>СВОДКА</h1>
        <Chart/>
      </Box>
  )
}