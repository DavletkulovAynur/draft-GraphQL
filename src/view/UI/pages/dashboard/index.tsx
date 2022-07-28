import Box from "@mui/material/Box";
import { Body } from "./components/Body";
import { Sidebar } from "./components/SideBar";
import { useQuery } from "@apollo/client";
import { GET_ALL_DASHBOARD_STAT } from "../../../../services/DashboardService";
import { useEffect, useState } from "react";
import { dashboardAdapter } from "../../../../utils/dashboardAdapter";

export function Dashboard() {
  const { loading, error, data } = useQuery(GET_ALL_DASHBOARD_STAT);
  const [charts, setCharts] = useState(null)
  
  useEffect(() => {
    if(data) {
      setCharts(dashboardAdapter(data))
    }
  }, [data])

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Body charts={charts}/>
    </Box>
  );
}
