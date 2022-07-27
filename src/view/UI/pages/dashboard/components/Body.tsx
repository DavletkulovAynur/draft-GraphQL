import Box from "@mui/material/Box";

import { DrawerHeader } from "../../../common/DrawerHeader";
import { Chart } from "./Chart";

import "./styles/Body.scss";

export function Body() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <div className="Body Body__chart-box">
        <h1>СВОДКА</h1>
        <Chart />
      </div>
    </Box>
  );
}
